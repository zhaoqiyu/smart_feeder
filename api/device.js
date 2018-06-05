var fs = require('fs');
var path = require('path');

var jsonPath = path.join(__dirname, '..', 'public', 'data.json');
var updateJson = function (time, food) {
	fs.readFile(jsonPath, 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    obj.table.push({x: time, y: food}); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile(jsonPath, json, 'utf8', function(){}); // w
  }
})
};

var device = {
	name: 'Smart Feeder Prototype',
	needToFeed: false,
	lastSeen: 0,
	amount: 0,
	remainingFood: {},
	update: function(food) {
		//Update last_seen when receive signal from device
		this.lastSeen = Date.now();
		this.remainingFood[this.lastSeen.toString()] = food;
		updateJson(this.lastSeen, food);
	},

	get isAlive() {
		if((Date.now() - this.lastSeen) < 10000){
			return true;
		}
		else{
			return false;
		}
	}
}

module.exports = device;
