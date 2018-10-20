$(document).ready(function() {

    var kratos = {
        health: 180,
        attack: 7,
        enemyAttackBack: 25,  
    };

    var atreus = {
        health: 120,
        attack: 8,
        enemyAttackBack: 15,  
    };

    var baldur = {
        health: 150,
        attack: 8,
        enemyAttackBack: 20,  
    };

    var thor = {
        health: 100,
        attack: 14,
        enemyAttackBack: 5,  
    };

    var increment = 6;
    var character;
    var enemy;
    var charChosen = false;
    
    $(".block1").on("click", function() {
        if(!charChosen) {
            $(this).clone().appendTo("#pick");
            charChosen = true;
            character = eval($(this).attr("id"));
            console.log(character);
            $(this).empty();
            $("#choice").text("Choose your enemy");
        }
        else {
            $(this).clone().appendTo("#enemy");
            enemy = eval($(this).attr("id"));
            console.log(enemy);
            $(this).empty();
        }
    });

    $("#attack").on("click", function() {
        enemy.health -= character.attack;
        character.health -= enemy.enemyAttackBack;
        $("#offense").text("you attacked enemy for " + character.attack + " damage");
        $("#defense").text("the enemy attacked you for " + enemy.enemyAttackBack + " damage");
        character.attack += 6;
        console.log(character.attack);
    });

});