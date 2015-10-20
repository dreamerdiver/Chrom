/**
 * Chrom: Color Viewer
 *
 * Mitch Gundrum
 *
 * 2015
 */
function init() {
    var chromateButton = document.getElementById("button");
    chromateButton.onclick = changeBackgroundColor;
}

function changeBackgroundColor() {
	var fullVal = document.getElementById("color").value;

	if (fullVal.length != 9 ) {
		alert("Not a valid hex code");
	} else {
        var rVal = fullVal.substr(0,3);
            var rDig = parseInt(rVal);
        var gVal = fullVal.substr(3,3);
            var gDig = parseInt(gVal);
        var bVal = fullVal.substr(6,3);
            var bDig = parseInt(bVal);

		if (rDig>= 0 && rDig <= 255 &&
                gDig >= 0 && gDig <= 255 &&
                    bDig >= 0 && bDig <= 255) {
            var textBoxBack = document.getElementById("color");
            var buttonBack = document.getElementById("button");
                textBoxBack.style.backgroundColor = "rgb(" + rDig + ", " + gDig + ", " + bDig + ")";
                buttonBack.style.backgroundColor = "rgb(" + rDig + ", " + gDig + ", " + bDig + ")";
                document.body.style.background = "rgb(" + rDig + ", " + gDig + ", " + bDig + ")";
            //parseImageByPoint();
            //clearField();
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

/*
function parseImageByPoint() {

    var pixel = document.elementFromPoint(466,466);
    var colorProfile = document.createElement("h3");
    alert(pixel.colorProfile);
    colorProfile.appendChild(pixel.colorProfile);
    document.body.appendChild(colorProfile);
}
*/