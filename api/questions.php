<?php
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];
$body = read_json_body();

if ($method === 'GET') {
    $enemyId = trim($_GET['enemy_id'] ?? '');
    $difficulty = trim($_GET['difficulty'] ?? '');
    $count = (int) ($_GET['count'] ?? 0);

    if ($enemyId !== '') {
        $stmt = db()->prepare('SELECT id, enemy_id, difficulty, intro, code, answer, hint FROM questions WHERE enemy_id = ?');
        $stmt->execute([$enemyId]);
        $rows = $stmt->fetchAll();
        if ($count > 0 && count($rows) > 0) {
            shuffle($rows);
            if (count($rows) >= $count) {
                $rows = array_slice($rows, 0, $count);
            } else {
                $picked = [];
                for ($i = 0; $i < $count; $i++) {
                    $picked[] = $rows[array_rand($rows)];
                }
                $rows = $picked;
            }
        }
        json_ok(['questions' => $rows]);
    }

    $sql = 'SELECT id, enemy_id, difficulty, intro, code, answer, hint, created_at FROM questions';
    $params = [];
    if ($difficulty !== '') {
        $sql .= ' WHERE difficulty = ?';
        $params[] = $difficulty;
    }
    $sql .= ' ORDER BY difficulty, enemy_id, id';
    $stmt = db()->prepare($sql);
    $stmt->execute($params);
    json_ok(['questions' => $stmt->fetchAll()]);
}

if ($method === 'PUT' || ($method === 'POST' && (($body['action'] ?? '') === 'update' || (isset($body['id']) && (int) $body['id'] > 0 && ($body['action'] ?? '') !== 'create')))) {
    require_teacher();
    $id = (int) ($body['id'] ?? ($_GET['id'] ?? 0));
    $enemyId = trim($body['enemy_id'] ?? '');
    $difficulty = trim($body['difficulty'] ?? '');
    $intro = trim((string) ($body['intro'] ?? ''));
    $code = (string) ($body['code'] ?? '');
    $answer = trim((string) ($body['answer'] ?? ''));
    $hint = trim((string) ($body['hint'] ?? ''));

    $valid = ['easy', 'normal', 'hard', 'hell'];
    if ($id <= 0 || $enemyId === '' || !in_array($difficulty, $valid, true) || $code === '' || $answer === '') {
        json_error('Question ID, target enemy, valid difficulty, code, and answer are required.');
    }

    $stmt = db()->prepare('UPDATE questions SET enemy_id = ?, difficulty = ?, intro = ?, code = ?, answer = ?, hint = ? WHERE id = ?');
    $stmt->execute([$enemyId, $difficulty, $intro, $code, $answer, $hint, $id]);
    json_ok(['id' => $id, 'updated' => true]);
}

if ($method === 'POST') {
    require_teacher();
    $enemyId = trim($body['enemy_id'] ?? '');
    $difficulty = trim($body['difficulty'] ?? '');
    $intro = trim((string) ($body['intro'] ?? ''));
    $code = (string) ($body['code'] ?? '');
    $answer = trim((string) ($body['answer'] ?? ''));
    $hint = trim((string) ($body['hint'] ?? ''));

    $valid = ['easy', 'normal', 'hard', 'hell'];
    if ($enemyId === '' || !in_array($difficulty, $valid, true) || $code === '' || $answer === '') {
        json_error('Enemy, difficulty, code, and answer are required.');
    }

    $stmt = db()->prepare('INSERT INTO questions (enemy_id, difficulty, intro, code, answer, hint, created_by) VALUES (?,?,?,?,?,?,?)');
    $stmt->execute([$enemyId, $difficulty, $intro, $code, $answer, $hint, $_SESSION['user_id']]);
    json_ok(['id' => (int) db()->lastInsertId()]);
}

if ($method === 'DELETE') {
    require_teacher();
    $id = (int) ($_GET['id'] ?? ($body['id'] ?? 0));
    if ($id <= 0) {
        json_error('Question id required.');
    }
    $stmt = db()->prepare('DELETE FROM questions WHERE id = ?');
    $stmt->execute([$id]);
    json_ok();
}

json_error('Unsupported method.', 405);
