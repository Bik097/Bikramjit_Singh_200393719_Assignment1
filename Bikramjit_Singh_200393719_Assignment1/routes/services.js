'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('services', { title: 'Services' , portfolio: "Bik's profile"});
});

module.exports = router;
