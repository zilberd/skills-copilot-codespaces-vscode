// create web server

// 1. get comment list
// 2. post comment

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);

// 1. get comment list
router.get('/list/:board_id', function(req, res, next) {
    var board_id = req.params.board_id;
    var sql = 'SELECT * FROM comments WHERE board_id = ?';
    connection.query(sql, [board_id], function(err, rows) {
        if (err) console.error("err : " + err);
        console.log("rows : " + JSON.stringify(rows));
        res.json(rows);
    });
});

// 2. post comment
router.post('/insert', function(req, res, next) {
    var board_id = req.body.board_id;
    var writer = req.body.writer;
    var content = req.body.content;
    var sql = 'INSERT INTO comments (board_id, writer, content) VALUES (?, ?, ?)';
    connection.query(sql, [board_id, writer, content], function(err, rows) {
        if (err) console.error("err : " + err);
        console.log("rows : " + JSON.stringify(rows));
        res.json(rows);
    });
});

module.exports = router;
