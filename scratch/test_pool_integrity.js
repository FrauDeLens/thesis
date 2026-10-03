const fs = require('fs');
const path = require('path');

console.log("=== BUGHUNT QUESTION POOL INTEGRITY TEST ===");

// 1. Verify question_pool.json
const pool = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'question_pool.json'), 'utf8'));
console.log(`Total questions in pool: ${pool.length}`);
if (pool.length !== 240) {
  throw new Error(`Expected 240 questions, got ${pool.length}`);
}

const enemyCounts = {};
pool.forEach((q, idx) => {
  if (!q.enemy_id) throw new Error(`Question #${idx} missing enemy_id`);
  if (!q.difficulty) throw new Error(`Question #${idx} missing difficulty`);
  if (!q.intro || q.intro.trim() === '') throw new Error(`Question #${idx} missing intro`);
  if (!q.code || q.code.trim() === '') throw new Error(`Question #${idx} missing code`);
  if (!q.answer || q.answer.trim() === '') throw new Error(`Question #${idx} missing answer`);
  if (!q.hint || q.hint.trim() === '') throw new Error(`Question #${idx} missing hint`);

  enemyCounts[q.enemy_id] = (enemyCounts[q.enemy_id] || 0) + 1;
});

const enemyKeys = Object.keys(enemyCounts);
console.log(`Unique enemies represented: ${enemyKeys.length}`);
if (enemyKeys.length !== 24) {
  throw new Error(`Expected 24 enemies, found ${enemyKeys.length}`);
}

for (const [enemy, count] of Object.entries(enemyCounts)) {
  if (count !== 10) {
    throw new Error(`Enemy ${enemy} has ${count} questions instead of 10!`);
  }
}
console.log("✓ All 24 enemies have exactly 10 questions.");

// 2. Verify fallback arrays in data/*.js
['easy.js', 'normal.js', 'hard.js', 'hell.js'].forEach(file => {
  const content = fs.readFileSync(path.join(__dirname, '..', 'data', file), 'utf8');
  // Simple check that "intro": "Goal: is present
  const matches = content.match(/"intro":/g);
  console.log(`✓ ${file} contains ${matches ? matches.length : 0} embedded question intros.`);
  if (!matches || matches.length < 60) {
    throw new Error(`Expected at least 60 questions in ${file}`);
  }
});

// 3. Syntax check on JS files
const jsFiles = [
  'js/game.js',
  'js/admin.js',
  'js/firebase-db.js',
  'js/i18n.js'
];

jsFiles.forEach(file => {
  const code = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  new Function(code);
  console.log(`✓ ${file} passed JS syntax validation.`);
});

console.log("=== ALL INTEGRITY TESTS PASSED SUCCESSFULLY! ===");
