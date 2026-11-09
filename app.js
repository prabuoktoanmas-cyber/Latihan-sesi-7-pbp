const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello express! server berjalan dengan cepat!');
});

app.get('/data', (req, res) => {
    res.json({ nama: 'mahasiswa', kampus: 'universitas contoh', matkul: 'pbp'});
});

app.listen(8000, () => console.log('server exress berjalan di http://localhost:8000'));