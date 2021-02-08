var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Respond with a resource ... Users!');
});

router.unlink('/', function(req, res, next) {
  res.send('Got a UNLINK ... Request!');
});

router.purge('/', function(req, res, next) {
  res.send('Got a PURGE ... Request!');
});

router.lock('/', function(req, res, next) {
  res.send('Got a LOCK ... Request!');
});

router.unlock('/', function(req, res, next) {
  res.send('Got a UNLOCK ... Request!');
});

router.propfind('/', function(req, res, next) {
  res.send('Got a PROPFIND ... Request!');
});

// router.view('/', function(req, res, next) {
//   res.send('Got a VIEW ... Request!');
// });

module.exports = router;
