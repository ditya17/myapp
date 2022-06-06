var express = require('express');
//const { rethrow } = require('jade/lib/runtime');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req)
    res.json({name:" ditya"})
});

router.get('/abc', function(req, res, next) {
    console.log(req)
    res.json({name:" ditya dwivedi"})
});

module.exports = router;
