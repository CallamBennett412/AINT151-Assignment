var isLightOn = false;
var param
function ToggleLight()
{
	if (isLightOn == false) {
	document.getElementById('lightBulb').src = "img/bulb-on.png";
	isLightOn = true
} else if (isLightOn == true) {
	document.getElementById('lightBulb').src = "img/bulb-off.png";
	isLightOn = false
}

}


function AddNumbers(x , y)
{
	param = 0
	param = (x +y)

document.getElementById("numbers").innerHTML = param
}
