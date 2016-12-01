var express = require('express');
var router = express.Router();

/* Get index page */
router.get('/', function(req, res, next) {
  // show the main page --- index.jade
  res.render('index', {title:"plop"});
});

module.exports = router;
