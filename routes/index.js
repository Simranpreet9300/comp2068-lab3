var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab-3' });
});

/* GET familyMembers page. */
router.get('/familyMembers', (req, res, next) => {
    res.render('familyMembers')
});

/* GET grandFather page. */
router.get('/grandFather', (req, res, next) => {
    res.render('grandFather')
});

/* GET father page. */
router.get('/father', (req, res, next) => {
    res.render('father')
});

/* GET mother page. */
router.get('/mother', (req, res, next) => {
    res.render('mother')
});

/* GET sister page. */
router.get('/sister', (req, res, next) => {
    res.render('sister')
});

/* GET brother page. */
router.get('/brother', (req, res, next) => {
    res.render('brother')
});

/* GET About myself page. */
router.get('/myself', (req, res, next) => {
    res.render('myself')
});

module.exports = router;
