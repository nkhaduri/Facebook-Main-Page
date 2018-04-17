
var myButtons = ["friends-logo", "mess-logo", "notif-logo", "help-logo", "down-arrow"];

for (var i=0; i < myButtons.length; i++){	
	
	document.getElementById(myButtons[i]).addEventListener('click',function ()
	{
		this.style.filter = "invert(100%)";
	});

	// Working on DOUBLE-CLICK not on the SECOND-CLICK
	document.getElementById(myButtons[i]).addEventListener('dblclick',function ()
	{
		this.style.filter = "invert(0%)";
	});
}