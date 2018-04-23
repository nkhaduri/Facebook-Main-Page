
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

function activate(element_id){
	var menu_items = document.getElementsByClassName("left-part-item");
	for (var i = 0; i < menu_items.length; i++) {
    	menu_items[i].classList.remove('active');
	}
	document.getElementById(element_id).classList.add('active');
}

function activate_language(element_id){
	var menu_items = document.getElementsByClassName("language");
	for (var i = 0; i < menu_items.length; i++) {
    	menu_items[i].classList.remove('active-language');
	}

	document.getElementById(element_id).classList.add('active-language');
}