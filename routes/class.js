
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.131.198",
  user: "abcd",
  password: "1234",
  database: "something"
});


router.get('/', function(req, res, next) {
    console.log("Nitya");
    con.connect(function(err) {
        console.log("Yojana")
        if (err) console.log("err");
        console.log("Connected!");
      });
console.log("srishti")
console.log("ayushi")
    res.render('class')
});

router.get('/getClass', function(req, res, next) {
    console.log(req.query)
res.json({"Name":req})
});
router.post('/getClass', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `class` (`email`, `pass`) \
    VALUES ('"+req.body.email+"', '"+req.body.pass+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

      });
      var sql1 = "select * from `class`"
      con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log(result);

      });
res.json({"Name":req.body})
});

router.all('/getPost', function(req, res, next) {
    console.log(req.body)
    if(req.body){
        //do something
    }else{
        //do something else
    }
    console.log(req.body.pass)
res.json({"Name":req.body})
});

module.exports = router;