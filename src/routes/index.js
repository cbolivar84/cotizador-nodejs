var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Acceso' });
});

/* Contacto. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

/* Token. */
router.get('/token', function(req, res, next) {
  res.render('token', { title: 'Token' });
});

/* Token. */
router.get('/payment', function(req, res, next) {
  res.render('payment', { title: 'payment' });
});
module.exports = router;
