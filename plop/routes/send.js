var express = require('express');
var router = express.Router();

/* Get send page */
router.get('/', function(req, res, next) {
  res.render('send');
});

module.exports = router;
