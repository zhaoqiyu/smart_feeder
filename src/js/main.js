$(document).ready(
	console.log('test');
	document.getElementById('feedCatBtn').onclick = {feedCatClick()};

	function feedCatClick() {
		var foodamount = document.getElementById('foodAmount').value;
		alert("Feeding" + foodamount);
		// body...
	}
)

