
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
