const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse aplication/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '',
    database: 'form_fb'
});

//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
});

//tampilkan semua data product
app.get('/api/daftar',(req, res) => {
    let sql = "SELECT * FROM daftar";
    let query = conn.query(sql, (err,results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// tampilkan data product berdasarkan id
app.get('/api/daftar/:id',(req, res) => {
    let sql = "SELECT * FROM daftar WHERE id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//Tambahkan data product baru
app.post('/api/daftar',(req, res) => {
    let data = {No_telepon: req.body.No_telepon, password: req.body.password};
    let sql = "INSERT INTO daftar SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//Edit data product baru berdasarkan id
app.put('/api/daftar/:id',(req, res) => {
    let sql = "UPDATE daftar SET No_telepon='"+req.body.No_telepon+"', password='"+req.body.password+"' WHERE id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//Delete data product berdasarkan id
app.delete('/api/daftar/:id',(req, res) => {
    let sql = "DELETE FROM daftar WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": results, "response": results}));
    });
});

//tampilkan semua data product
app.get('/api/login',(req, res) => {
    let sql = "SELECT * FROM login";
    let query = conn.query(sql, (err,results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// tampilkan data product berdasarkan id
app.get('/api/login/:id',(req, res) => {
    let sql = "SELECT * FROM login WHERE id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//Tambahkan data product baru
app.post('/api/login',(req, res) => {
    let data = {nama_depan: req.body.nama_depan, nama_belakang: req.body.nama_belakang, no_hp: req.body.no_hp, password: req.body.password, tanggal_lahir: req.body.tanggal_lahir, bulan_lahir: req.body.bulan_lahir, tahun_lahir: req.body.tahun_lahir, jenis_kel: req.body.jenis_kel};
    let sql = "INSERT INTO login SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//Edit data product baru berdasarkan id
app.put('/api/login/:id',(req, res) => {
    let sql = "UPDATE login SET nama_depan='"+req.body.nama_depan+"', nama_belakang='"+req.body.nama_belakang+"', no_hp='"+req.body.no_hp+"', password='"+req.body.password+"', tanggal_lahir='"+req.body.tanggal_lahir+"', bulan_lahir='"+req.body.bulan_lahir+"', tahun_lahir='"+req.body.tahun_lahir+"', jenis_kel='"+req.body.jenis_kel+"' WHERE id="+req.params.id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//Delete data product berdasarkan id
app.delete('/api/login/:id',(req, res) => {
    let sql = "DELETE FROM login WHERE id="+req.params.id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": results, "response": results}));
    });
});

//server listening
app.listen(3000, () =>{
    console.log('server started on port 3000...');
});