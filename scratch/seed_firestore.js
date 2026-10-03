const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const API_KEY = 'AIzaSyCeXC5hFR6cZVc1ByAsCwfuEs0uKdz1dFk';
const PROJECT_ID = 'bughunt-9df20';
const DOC_PREFIX = `projects/${PROJECT_ID}/databases/(default)/documents`;
const BASE_URL = `https://firestore.googleapis.com/v1/${DOC_PREFIX}`;

function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

const defaultProgress = {
  unlocks: { easy: true, normal: false, hard: false, hell: false },
  truePoints: 0,
  shop: { maxHp: 5, freeHints: 0 },
  easy: { hearts: 5, trophies: [] },
  normal: { hearts: 5, trophies: [] },
  hard: { hearts: 5, trophies: [] },
  hell: { hearts: 5, trophies: [] }
};

function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'string') return { stringValue: val };
  if (typeof val === 'number') {
    if (Number.isInteger(val)) return { integerValue: String(val) };
    return { doubleValue: val };
  }
  if (typeof val === 'boolean') return { booleanValue: val };
  if (Array.isArray(val)) {
    return { arrayValue: { values: val.map(toFirestoreValue) } };
  }
  if (typeof val === 'object') {
    const fields = {};
    for (const k of Object.keys(val)) {
      fields[k] = toFirestoreValue(val[k]);
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

function objectToFields(obj) {
  const fields = {};
  for (const k of Object.keys(obj)) {
    fields[k] = toFirestoreValue(obj[k]);
  }
  return fields;
}

async function commitWrites(writes) {
  const url = `${BASE_URL}:commit?key=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ writes })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Commit failed: ${res.status} ${err}`);
  }
  return await res.json();
}

async function seed() {
  console.log('Seeding default users...');
  const now = new Date().toISOString();
  const users = [
    {
      username: 'teacher',
      password_hash: sha256('bughunt2026'),
      full_name: 'BugHunt Teacher',
      role: 'teacher',
      progress: defaultProgress,
      last_seen: now,
      created_at: now
    },
    {
      username: 'student',
      password_hash: sha256('student123'),
      full_name: 'Demo Student',
      role: 'student',
      progress: defaultProgress,
      last_seen: now,
      created_at: now
    }
  ];

  const userWrites = users.map(u => ({
    update: {
      name: `${DOC_PREFIX}/users/${u.username}`,
      fields: objectToFields(u)
    }
  }));
  await commitWrites(userWrites);
  console.log('Default users created: teacher and student');

  console.log('Seeding question pool...');
  const poolPath = path.join(__dirname, '..', 'data', 'question_pool.json');
  const pool = JSON.parse(fs.readFileSync(poolPath, 'utf8'));
  console.log(`Found ${pool.length} questions.`);

  const batchSize = 100;
  for (let i = 0; i < pool.length; i += batchSize) {
    const slice = pool.slice(i, i + batchSize);
    const writes = slice.map((q, idx) => {
      const qId = i + idx + 1;
      const data = {
        id: qId,
        enemy_id: q.enemy_id || '',
        difficulty: q.difficulty || 'easy',
        intro: q.intro || '',
        code: q.code || '',
        answer: q.answer || '',
        hint: q.hint || '',
        created_by: null,
        created_at: now
      };
      return {
        update: {
          name: `${DOC_PREFIX}/questions/${qId}`,
          fields: objectToFields(data)
        }
      };
    });
    await commitWrites(writes);
    console.log(`Seeded questions ${i + 1} to ${i + slice.length}`);
  }

  console.log('Seeding completed successfully!');
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
