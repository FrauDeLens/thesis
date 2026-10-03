const fs = require('fs');
const path = require('path');

const pool = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'question_pool.json'), 'utf8'));

const files = [
  { file: 'easy.js', diff: 'easy' },
  { file: 'normal.js', diff: 'normal' },
  { file: 'hard.js', diff: 'hard' },
  { file: 'hell.js', diff: 'hell' }
];

files.forEach(({ file, diff }) => {
  const filePath = path.join(__dirname, '..', 'data', file);
  let content = fs.readFileSync(filePath, 'utf8');

  const enemyQuestions = {};
  pool.filter(q => q.difficulty === diff).forEach(q => {
    if (!enemyQuestions[q.enemy_id]) enemyQuestions[q.enemy_id] = [];
    enemyQuestions[q.enemy_id].push({
      intro: q.intro,
      code: q.code,
      answer: q.answer,
      hint: q.hint
    });
  });

  for (const [enemyId, bugs] of Object.entries(enemyQuestions)) {
    // Regex to match the enemy object with that id and replace bugs: []
    const pattern = new RegExp(`(id:\\s*"${enemyId}",[\\s\\S]*?bugs:\\s*)\\[\\]`, 'g');
    content = content.replace(pattern, (match, prefix) => {
      const bugsFormatted = JSON.stringify(bugs, null, 8)
        .replace(/^/gm, '    ')
        .trim();
      return prefix + bugsFormatted;
    });
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file} with fallback bugs.`);
});
