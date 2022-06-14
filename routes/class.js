var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});


router.get('/', function(req, res, next) {
    console.log("Nitya");
    con.connect(function(err) {
        // console.log("Yojana")
        if (err) console.log("err");
        console.log("Connected!");
      });
console.log("ayushi")
    res.render('class')
});

// router.get('/getClass', function(req, res, next) {
//     console.log(req.query)
// res.json({"Name":req})
// });
router.post('/getClass', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `ditya` (`email`, `pass`) \
    VALUES ('"+req.body.email+"', '"+req.body.pass+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) console.log(err);
        console.log(result);
     //   res.json({"Name":result})

      });
      // var sql1 = "select * from `ditya`"
      // con.query(sql1, function (err, result) {
      //   if (err) throw err;
      //   console.log(result);
      // res.json({"Name":result})
      // });


// router.all('/getPost', function(req, res, next) {
//     console.log(req.body)
//     if(req.body){
//         //do something
//     }else{
//         //do something else
//     }
//     console.log(req.body.pass)
res.json({"Name":req.body})
});

var pool        = mysql.createPool({
  connectionLimit : 10, // default = 10
  host            : 'easylearning.guru',
  user            : 'kcc_student',
  password        : 'Kccitm.edu.in1',
  database        : 'kccStudent'
});

router.get('/read', function (req, res) {
  pool.getConnection(function (err, connection) {
      connection.query("SELECT * FROM ditya", function (err, rows) {
          connection.release();
          if (err) throw err;

          console.log(rows.length);
          res.send(JSON.stringify(rows));
      });
  });
});

module.exports = router;