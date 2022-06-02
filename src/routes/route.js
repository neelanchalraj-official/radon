const express = require('express');
const lodash = require('lodash')
const externalModule = require('../logger/logger')
const externalModule1 = require('../validator/formatter')
const externalModule2 = require('../util/helper');
const { fromPairs } = require('lodash');


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
    const odd = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(odd))
    const a = [1,2,3,4,5,]
    const b = [5,6,7,8,9]
    const c = [4,5,9,10,11]
    const d = [12,13,14,15]
    const e = [4,5,6,16,17]
    console.log(lodash.union(a,b,c,d,e))
    const pair = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(pair))
});



module.exports = router;
// adding this comment for no reason


