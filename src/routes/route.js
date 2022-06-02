const express = require('express');
const lodash = require('lodash')
const externalModule = require('../logger/logger')
const externalModule1 = require('../validator/formatter')
const externalModule2 = require('../util/helper')


const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.demo()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    externalModule1.output()
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    externalModule2.output()
    res.send('My third ever api!')
});

router.get('/hello', function (req, res){
    const month = ['January', 'February', 'March', 'April','May','June','July','August','September','October','November','December']
    console.log(lodash.chunk(month, 3))
    res.send('First of Today')
});


module.exports = router;
// adding this comment for no reason


