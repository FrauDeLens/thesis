<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

$DB_HOST = 'localhost';
$DB_USER = 'root';
$DB_PASS = '';
$DB_NAME = 'bughunt';

function json_ok($data = []) {
    echo json_encode(array_merge(['ok' => true], $data));
    exit;
}

function json_error($message, $code = 400) {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $message]);
    exit;
}

function db_root() {
    global $DB_HOST, $DB_USER, $DB_PASS;
    $pdo = new PDO(
        "mysql:host={$DB_HOST};charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );
    return $pdo;
}

function db() {
    global $DB_HOST, $DB_USER, $DB_PASS, $DB_NAME;
    static $pdo = null;
    if ($pdo) {
        return $pdo;
    }
    $pdo = new PDO(
        "mysql:host={$DB_HOST};dbname={$DB_NAME};charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );
    return $pdo;
}

function current_user() {
    if (empty($_SESSION['user_id'])) {
        return null;
    }
    $stmt = db()->prepare('SELECT id, username, full_name, role, created_at FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    return $stmt->fetch() ?: null;
}

function require_login() {
    $user = current_user();
    if (!$user) {
        json_error('Please log in first.', 401);
    }
    return $user;
}

function require_teacher() {
    $user = require_login();
    if ($user['role'] !== 'teacher') {
        json_error('Teacher account required.', 403);
    }
    return $user;
}

function default_progress() {
    return [
        'unlocks' => [
            'easy' => true,
            'normal' => false,
            'hard' => false,
            'hell' => false,
        ],
        'truePoints' => 0,
        'shop' => [
            'maxHp' => 5,
            'freeHints' => 0,
        ],
        'easy' => ['hearts' => 5, 'trophies' => []],
        'normal' => ['hearts' => 5, 'trophies' => []],
        'hard' => ['hearts' => 5, 'trophies' => []],
        'hell' => ['hearts' => 5, 'trophies' => []],
    ];
}

function ensure_schema() {
    global $DB_NAME;
    $root = db_root();
    $root->exec("CREATE DATABASE IF NOT EXISTS `{$DB_NAME}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo = db();

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(64) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            full_name VARCHAR(120) DEFAULT '',
            role ENUM('student','teacher') NOT NULL DEFAULT 'student',
            progress_json LONGTEXT NULL,
            last_seen DATETIME NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS questions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            enemy_id VARCHAR(64) NOT NULL,
            difficulty ENUM('easy','normal','hard','hell') NOT NULL,
            code TEXT NOT NULL,
            answer TEXT NOT NULL,
            hint TEXT NOT NULL,
            created_by INT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            INDEX (enemy_id),
            INDEX (difficulty)
        ) ENGINE=InnoDB
    ");

    $count = (int) $pdo->query('SELECT COUNT(*) FROM users')->fetchColumn();
    if ($count === 0) {
        $stmt = $pdo->prepare('INSERT INTO users (username, password_hash, full_name, role, progress_json) VALUES (?,?,?,?,?)');
        $stmt->execute([
            'teacher',
            password_hash('bughunt2026', PASSWORD_DEFAULT),
            'BugHunt Teacher',
            'teacher',
            json_encode(default_progress()),
        ]);
        $stmt->execute([
            'student',
            password_hash('student123', PASSWORD_DEFAULT),
            'Demo Student',
            'student',
            json_encode(default_progress()),
        ]);
    }

    $qCount = (int) $pdo->query('SELECT COUNT(*) FROM questions')->fetchColumn();
    if ($qCount === 0) {
        seed_questions($pdo);
    }
}

function seed_questions($pdo) {
    $file = dirname(__DIR__) . '/data/question_pool.json';
    if (!is_file($file)) {
        return;
    }
    $rows = json_decode(file_get_contents($file), true);
    if (!is_array($rows)) {
        return;
    }
    $stmt = $pdo->prepare('INSERT INTO questions (enemy_id, difficulty, code, answer, hint, created_by) VALUES (?,?,?,?,?,NULL)');
    foreach ($rows as $row) {
        if (empty($row['enemy_id']) || empty($row['code']) || empty($row['answer'])) {
            continue;
        }
        $stmt->execute([
            $row['enemy_id'],
            $row['difficulty'] ?? 'easy',
            $row['code'],
            $row['answer'],
            $row['hint'] ?? '',
        ]);
    }
}

try {
    ensure_schema();
} catch (Throwable $e) {
    json_error('Database setup failed: ' . $e->getMessage(), 500);
}

function read_json_body() {
    $raw = file_get_contents('php://input');
    if (!$raw) {
        return $_POST;
    }
    $data = json_decode($raw, true);
    return is_array($data) ? $data : $_POST;
}
