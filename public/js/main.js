var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/api/feed",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache"
  }
}



$(document).ready(function() {
	console.log('test');
	document.getElementById('feedCatBtn').onclick = feedCatClick;


	function feedCatClick() {
		var foodamount = document.getElementById('foodAmount').value;
		$.ajax(settings).done(function (response) {
	  	console.log(response);
		});// body...
	}
});

