function AlertMessage()
{
    alert("This is an Alert Message");
  }




function ConsoleMessage()
{

}





function WhatsMyName()
{
  var text;
    var person = prompt("Please enter your name:", "Name");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Your name is: " + person + ", Welcome to the game!";
    }
    document.getElementById("name").innerHTML = text;
}
