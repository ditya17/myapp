var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req)
    res.json({name:" ditya"})
});

router.get('/data', function(req, res, next) {
    res.json({name:req.query.fname,lname:req.query.lname})
});

router.post('/abc', function(req, res, next) {
    res.json({name:req.body.fname,lname:req.body.lname})
});

router.get('/:da-:ta', function(req, res, next) {
        console.log(req.params)
        res.json({name:req.params.da+","+req.params.ta+"="+req.params.da+req.params.ta})
});

module.exports = router;
