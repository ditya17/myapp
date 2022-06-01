var express = require('express');
const { rethrow } = require('jade/lib/runtime');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  res.json({name:" dwivedi"})
});

router.get('/:da-:ta', function(req, res, next) {
    console.log(req.params.ta)
    res.json({name:req.params.da+" and" + req.params.ta+" are fine"})
  });

router.get('/:da',function(req,res,next) {
    console.log(req.params.da)
    res.json({name:req.params.da+ " and are fine"})
   });

//res.render


module.exports = router;
