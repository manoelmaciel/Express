var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.send('Got a POST ... Request!')
});

router.put('/', function(req, res, next) {
  res.send('Got a PUT ... Request!')
});

router.patch('/', function(req, res, next) {
  res.send('Got a PATH ... Request!')
});

router.delete('/', function(req, res, next) {
  res.send('Got a DELETE ... Request!')
});

router.copy('/', function(req, res, next) {
  res.send('Got a COPY ... Request!')
});

router.head('/', function(req, res, next) {
  res.send('Got a HEAD ... Request!')
});

router.options('/', function(req, res, next) {
  res.send('Got a OPTIONS ... Request!')
});

router.link('/', function(req, res, next) {
  res.send('Got a LINK ... Request!')
});

module.exports = router;
