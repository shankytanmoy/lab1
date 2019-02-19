var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/studentdata', function(req, res) {
  res.render('student');
});
router.post('/studentdata', function(req, res) {
  var stdid = req.body.stdid;
  var stdname = req.body.stdname;

  console.log(stdid + " " + stdname);
  res.render('student');
});
router.get('/profile', function(req, res) {
  res.render('author');
});
router.get('/ourschoolprogram', function(req, res) {
  res.render('index');
});
router.get('/facultymember', function(req, res) {
  res.render('time');
});
router.get('/fm', function(req, res) {
  res.render('index');
});
router.get('/about', function(req, res) {
  res.render('a');
});
router.get('/ab', function(req, res) {
  res.render('index');
});
router.get('/admission', function(req, res) {
  res.render('ad');
});
router.get('/adm', function(req, res) {
  res.render('index');
});
router.get('/contact', function(req, res) {
  res.render('c');
});
router.get('/con', function(req, res) {
  res.render('index');
});
router.post
module.exports = router;
