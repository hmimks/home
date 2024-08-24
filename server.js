const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path'); // Tambahkan ini di bagian atas file

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi koneksi MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Ganti dengan username MySQL Anda
    password: '', // Ganti dengan password MySQL Anda
    database: 'hmi_makassar' // Ganti dengan nama database Anda
});

// Koneksi ke database
db.connect(err => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
        return;
    }
    console.log('Koneksi ke database berhasil!');
});

// Rute dasar
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Mengarahkan ke index.html
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Query untuk memeriksa kredensial
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server.' });
        }
        if (results.length > 0) {
            return res.json({ success: true, message: 'Login berhasil!' });
        } else {
            return res.status(401).json({ success: false, message: 'Email atau password salah.' });
        }
    });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});