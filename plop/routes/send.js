var express = require('express');
var fs = require('fs');
var router = express.Router();

/* Get send page */
router.get('/', function(req, res, next) {
  var config = JSON.parse(fs.readFileSync(__dirname + '/../public/jsons/config.json'));
  // show the send--jade
  res.render('send', {title: 'Sender', sizes: config.sizes, modes: config.modes, colors: config.colors, inits: config.inits});
});

module.exports = router;
