var express = require('express');
const { rethrow } = require('jade/lib/runtime');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req)
    res.json({name:" ditya"})
});

module.exports = router;
