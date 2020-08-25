var express = require('express');
var router = express.Router();

/* 404. */
router.get('/404', function(req, res, next) {
    res.render('404', { title: '404' });
  });
  
  /* 500. */
  router.get('/500', function(req, res, next) {
    res.render('500', { title: '500' });
  });

  module.exports = router;