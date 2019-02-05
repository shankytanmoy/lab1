var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/profile', function(req, res) {
  res.render('author');
});
router.get('/timeline', function(req, res) {
  var data = [
    { id: 1, name: "bob" },
    { id: 2, name: "john" },
    { id: 3, name: "jake" },
  ];

  res.render('time',{info:data});
});
module.exports = router;
