<?php
require_once __DIR__ . '/config.php';

require_teacher();
$action = $_GET['action'] ?? 'students';

if ($action === 'students') {
    $rows = db()->query("
        SELECT id, username, full_name, role, progress_json, last_seen, created_at
        FROM users
        WHERE role = 'student'
        ORDER BY username
    ")->fetchAll();

    $students = [];
    foreach ($rows as $row) {
        $progress = json_decode($row['progress_json'] ?? '', true);
        if (!is_array($progress)) {
            $progress = default_progress();
        }
        $students[] = [
            'id' => (int) $row['id'],
            'username' => $row['username'],
            'full_name' => $row['full_name'],
            'last_seen' => $row['last_seen'],
            'created_at' => $row['created_at'],
            'truePoints' => (int) ($progress['truePoints'] ?? 0),
            'unlocks' => $progress['unlocks'] ?? [],
            'trophies' => [
                'easy' => $progress['easy']['trophies'] ?? [],
                'normal' => $progress['normal']['trophies'] ?? [],
                'hard' => $progress['hard']['trophies'] ?? [],
                'hell' => $progress['hell']['trophies'] ?? [],
            ],
            'shop' => $progress['shop'] ?? [],
        ];
    }

    json_ok(['students' => $students]);
}

json_error('Unknown admin action.', 404);
