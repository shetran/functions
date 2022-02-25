var ele = document.body.querySelector(".dragon");

var dragonHealth = 10;
var userHealth = 5;
var dragonDamage = 0

function attack(damage, attackType){
    if(attackType === "fire"){
        damage -= 1
    }
    else if(attackType ==="ice"){
        damage += 1
    }
    dragonDamage += damage
    if(dragonDamage >= 10){
        document.body.querySelector(".winMsg").innerHTML = "You win!"
        
    }
    ele.innerHTML = dragonDamage
}