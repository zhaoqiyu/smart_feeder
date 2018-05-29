var express = require('express');
var router = express.Router();
var clientStorage = require('node-persist');
var bodyParser = require('body-parser');


/* GET home page. */
router.get('/ok', function(req, res, next) {
	// clientStorage.init({
	// 	dir = "./cache/client_list",
	// 	stringify: JSON.stringify,
 //    parse: JSON.parse,
 //    encoding: 'utf8',
 //    logging: false,  // can also be custom logging function
 //    ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS
 //    expiredInterval: 2 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache
 //    // in some cases, you (or some other service) might add non-valid storage files to your
 //    // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
 //    forgiveParseErrors: false
	// });
	// clientStorage.setItem("username", {ip: "111.222.333.444"});
  res.send('OK');
});

module.exports = router;