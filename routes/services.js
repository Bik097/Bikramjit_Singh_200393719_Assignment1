/*File Name: services.js
Author: Bikramjit Singh
Website Name: Portfolio
Description: This file handles HTTP requests and routes page requests to the right controller
*/
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('services', { title: 'Services' , portfolio: "Bik's profile"});
});

module.exports = router;
