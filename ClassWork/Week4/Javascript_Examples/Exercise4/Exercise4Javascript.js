function CreatePlayer()
{
  var PCName = document.getElementById("playername").value;
  document.getElementById("name").innerHTML = PCName;

  var playercolour = document.getElementById("playercolour").value;
  document.getElementById("colour").innerHTML = playercolour;

  var PCHealth = document.getElementById("playerhealth").value;
  document.getElementById("health").innerHTML = PCHealth;

  var PCWeapon = document.getElementById("playerweapon").value;

  if (PCWeapon == 1){
    document.getElementById("weapon").innerHTML = "Crossbow of much hurting";
  } else if (PCWeapon == 2){
    document.getElementById("weapon").innerHTML = "Broadsword of so slicing";
  }else if (PCWeapon == 3) {
    document.getElementById("weapon").innerHTML = "Wand of amaze magics";
  }


}
