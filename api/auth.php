<?php
require_once __DIR__ . '/config.php';

$action = $_GET['action'] ?? (read_json_body()['action'] ?? '');
$body = read_json_body();

if ($action === 'me') {
    $user = current_user();
    if (!$user) {
        json_ok(['user' => null]);
    }
    $stmt = db()->prepare('SELECT progress_json FROM users WHERE id = ?');
    $stmt->execute([$user['id']]);
    $row = $stmt->fetch();
    $progress = json_decode($row['progress_json'] ?? '', true);
    if (!is_array($progress)) {
        $progress = default_progress();
    }
    json_ok(['user' => $user, 'progress' => $progress]);
}

if ($action === 'logout') {
    $_SESSION = [];
    session_destroy();
    json_ok();
}

if ($action === 'register') {
    $username = trim($body['username'] ?? '');
    $password = $body['password'] ?? '';
    $confirm = $body['confirm'] ?? '';
    $fullName = trim($body['full_name'] ?? '');

    if ($username === '' || $password === '' || $confirm === '') {
        json_error('Please fill in all fields.');
    }
    if (!preg_match('/^[A-Za-z0-9_]{3,24}$/', $username)) {
        json_error('Username must be 3-24 letters, numbers, or underscores.');
    }
    if (strlen($password) < 4) {
        json_error('Password must be at least 4 characters.');
    }
    if ($password !== $confirm) {
        json_error('Passwords do not match.');
    }

    $check = db()->prepare('SELECT id FROM users WHERE username = ?');
    $check->execute([$username]);
    if ($check->fetch()) {
        json_error('Username already exists.');
    }

    $stmt = db()->prepare('INSERT INTO users (username, password_hash, full_name, role, progress_json) VALUES (?,?,?,?,?)');
    $stmt->execute([
        $username,
        password_hash($password, PASSWORD_DEFAULT),
        $fullName,
        'student',
        json_encode(default_progress()),
    ]);

    json_ok(['message' => 'Account created. Please log in.']);
}

if ($action === 'login') {
    $username = trim($body['username'] ?? '');
    $password = $body['password'] ?? '';
    if ($username === '' || $password === '') {
        json_error('Please enter your username and password.');
    }

    $stmt = db()->prepare('SELECT * FROM users WHERE username = ?');
    $stmt->execute([$username]);
    $user = $stmt->fetch();
    if (!$user || !password_verify($password, $user['password_hash'])) {
        json_error('Invalid username or password.');
    }

    $_SESSION['user_id'] = (int) $user['id'];
    db()->prepare('UPDATE users SET last_seen = NOW() WHERE id = ?')->execute([$user['id']]);

    $progress = json_decode($user['progress_json'] ?? '', true);
    if (!is_array($progress)) {
        $progress = default_progress();
    }

    json_ok([
        'user' => [
            'id' => (int) $user['id'],
            'username' => $user['username'],
            'full_name' => $user['full_name'],
            'role' => $user['role'],
        ],
        'progress' => $progress,
    ]);
}

json_error('Unknown auth action.', 404);
