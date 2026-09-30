<?php
require_once __DIR__ . '/config.php';

$user = require_login();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = db()->prepare('SELECT progress_json FROM users WHERE id = ?');
    $stmt->execute([$user['id']]);
    $row = $stmt->fetch();
    $progress = json_decode($row['progress_json'] ?? '', true);
    if (!is_array($progress)) {
        $progress = default_progress();
    }
    json_ok(['progress' => $progress]);
}

if ($method === 'POST') {
    if ($user['role'] !== 'student' && $user['role'] !== 'teacher') {
        json_error('Cannot save progress for this account.', 403);
    }
    $body = read_json_body();
    $progress = $body['progress'] ?? null;
    if (!is_array($progress)) {
        json_error('Invalid progress data.');
    }
    $stmt = db()->prepare('UPDATE users SET progress_json = ?, last_seen = NOW() WHERE id = ?');
    $stmt->execute([json_encode($progress), $user['id']]);
    json_ok(['progress' => $progress]);
}

json_error('Unsupported method.', 405);
