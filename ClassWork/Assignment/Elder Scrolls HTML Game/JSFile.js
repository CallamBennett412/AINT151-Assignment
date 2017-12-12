function CreatePlayer()
{
  var PCName = document.getElementById("playername").value;
  document.getElementById("name").innerHTML = PCName;

  var playercolour = document.getElementById("playercolour").value;
  document.getElementById("colour").style.backgroundColor = playercolour;

  var PCclass = document.getElementById("playerclass").value;

  if (PCclass == 1){
    document.getElementById("class").innerHTML = "Mage";
  } else if (PCclass == 2){
    document.getElementById("class").innerHTML = "Warrior";
  }else if (PCclass == 3) {
    document.getElementById("class").innerHTML = "Thief";
  }

  var PCRace = document.getElementById("playerrace").value;

  if (PCRace == 1){
    document.getElementById("race").innerHTML = "Imperial";
  } else if (PCRace == 2){
    document.getElementById("race").innerHTML = "Breton";
  }else if (PCRace == 3) {
    document.getElementById("race").innerHTML = "Nord";
  }else if (PCRace == 4){
    document.getElementById("race").innerHTML = "Redguard";
  }else if (PCRace == 5) {
    document.getElementById("race").innerHTML = "High Elf";
  }else if (PCRace == 6){
    document.getElementById("race").innerHTML = "Dark Elf";
  }else if (PCRace == 7) {
    document.getElementById("race").innerHTML = "Wood Elf";
  }else if (PCRace == 8){
    document.getElementById("race").innerHTML = "Orc";
  }

}
