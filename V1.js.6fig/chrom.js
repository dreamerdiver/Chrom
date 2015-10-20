	var hexVal;

function changeBackgroundColor() {
	var color;

	
	color = document.getElementById("color").value;
	
	if (color.length != 6) {
		alert("Not a valid hex code");
	} else {
		hexVal = parseInt(color);	
	
		if (hexVal >= 000000 && hexVal <= 999999) {
			document.body.style.background = "#" + hexVal;
		} else {
			alert("Not a valid hex code");
			
			var errorDiv = document.createElement("div"); 
			errorDiv.id = "err";
			var message = document.createElement("h4");
			message.value = "click me";
	
		errorDiv.appendChild(message);
		document.body.appendChild(errorDiv);
		}
	}
}	

function clearField() { 
	document.getElementById("color").value="";
}

function adaptTextbox() {
	var textBoxBack = document.getElementById("color");
    textBoxBack.style.backgroundColor = "#" + hexVal;

}

function init() {

}