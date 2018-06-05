var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://192.241.249.116:3000/api/feed?amount=",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache"
  }
}



$(document).ready(function() {
	console.log('test');

	function feedCatClick() {
		var foodamount = document.getElementById('foodAmount').value;
		nUrl = "http://191.241.249.116:3000/api/feed?amount=" + foodamount
		settings.url = nUrl;
		$.ajax(settings).done(function (response) {
	  	console.log(response);
		});// body...
	}
});

