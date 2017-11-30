
var fSize = 1;

function MakeTextSmaller()
{
	var str = "Make me smaller!";
	var result = str.fontsize(fSize);

		//for (prompt("MakeTextSmaller") == true)
		//for(var i = 0; i < 5; i++)
		//{
			//document.getElementById("textSize").innerHTML = result;
		//}
		//document.getElementById("textSize").setAttribute("fontSize", "10");
		//var currentSize = document.getElementById("textSize").style.fontSize;

		//currentSize--;
		//console.log(document.getElementById("textSize").style.fontSize);
		//document.getElementById("textSize").style.fontSize = currentSize + "px";

		fSize++;
		document.getElementById("textSize").innerHTML = result;

}


function ReplaceText()
{
	var text
	text = "My New Text"
	document.getElementById("placeholderText").innerHTML = text

}



function TurnLightOn()
{
	document.getElementById("lightBulb").src = "img/bulb-on.png";
}

function TurnLightOff()
{
	document.getElementById("lightBulb").src = "img/bulb-off.png";
}
