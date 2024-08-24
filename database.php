<?php
session_start();
require 'database.php'; // Pastikan Anda memiliki koneksi database

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Ambil data pengguna dari database
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch();

    // Verifikasi password
    if ($user && password_verify($password, $user['password'])) {
        // Set session dan arahkan ke index.html
        $_SESSION['user_id'] = $user['id'];
        header("Location: index.html"); // Arahkan ke index.html
        exit();
    } else {
        echo "Email atau password salah.";
    }
}
?>