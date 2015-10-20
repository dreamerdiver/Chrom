/**
 * Project: Chrom
 * Class: main.js
 * Created by Meesh
 * 9/5/15
 */

function init() {
    var button = document.getElementById("runChromate");
    button.onclick = changeBackgroundColor;
}

function changeBackgroundColor(e) {
    e.preventDefault();
    var form = document.getElementById("chromInputForm");
    var textBoxBack = document.getElementById("userString");
    var userString = document.getElementById("userString").value;

    if (userString.length != 6) {
		alert("Not a valid hex code");
	} else {
		var hexVal = parseInt(userString);

		if (hexVal >= 000000 && hexVal <= 999999) {
            //button.style.backgroundColor = "#" + hexVal;
            textBoxBack.style.backgroundColor = "#" + hexVal;
            document.body.style.backgroundColor = "#" + hexVal;

		} else {
			alert("Not a valid hex code");
		}
	}
    form.reset();
    return false;
}