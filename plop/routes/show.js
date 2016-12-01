var express = require('express');
var router = express.Router();

/* Get index page */
router.get('/', function(req, res, next) {
  res.render('index', {title:"plop"});
});

module.exports = router;
