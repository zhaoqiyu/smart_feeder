var express = require('express');
var router = express.Router();
var clientStorage = require('node-persist');
var bodyParser = require('body-parser');
var device = require('../api/device')


/* GET home page. */
router.get('/ok', function(req, res, next) {
    food = req.query.food;
    device.update(food);
    console.log(device.remainingFood);
    console.log(device.isAlive);
    res.send({
        feed: device.needToFeed,
        amount: device.amount
    });
    device.needToFeed = false; //reset feed flag
    device.amount = 0;
});

router.get('/feed', function(req, res, next) {
		amount = req.query.amount;
    if(device.needToFeed ){
        res.send("Previous feeding not finished yet");
    }else{
        device.needToFeed = true;
        device.amount = amount;
        res.send("Feeding in progress");
    }
});

module.exports = router;