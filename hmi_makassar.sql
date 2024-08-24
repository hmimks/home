CREATE DATABASE hmi_makassar;

USE hmi_makassar;

-- Tabel untuk persuratan
CREATE TABLE persuratan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    tanggal DATE NOT NULL,
    isi TEXT NOT NULL
);

-- Tabel untuk keuangan
CREATE TABLE keuangan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jenis_transaksi VARCHAR(100) NOT NULL,
    jumlah DECIMAL(10, 2) NOT NULL,
    tanggal DATE NOT NULL,
    keterangan TEXT
);

-- Tabel untuk data kader
CREATE TABLE kader (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    alamat VARCHAR(255),
    telepon VARCHAR(15),
    tanggal_masuk DATE NOT NULL
);

-- Tabel untuk users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);