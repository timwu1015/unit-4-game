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
    var char;
    var ene;
    var charChosen = false;
    var enemyChosen = false;
    var hit = 0;
    
    $(".block1").on("click", function() {
        if(!charChosen) {
            $(this).clone().appendTo("#pick");
            charChosen = true;
            character = eval($(this).attr("id"));
            char = $(this).attr("id");
            console.log(char);
            console.log(character);
            $(this).empty();
            $("#choice").text("Choose your enemy");
        }
        else {
            $(this).clone().appendTo("#enemy");
            enemyChosen = true;
            enemy = eval($(this).attr("id"));
            ene = $(this).attr("id");
            console.log(enemy);
            $(this).empty();
            $("#result").empty();
            $("#offense").empty();
            $("#defense").empty();
        }
    });

    $("#attack").on("click", function() {
        if(!enemyChosen) {
            return false;
        }
        enemy.health -= character.attack;
        character.health -= enemy.enemyAttackBack;
        $("#offense").text("you attacked enemy for " + character.attack + " damage");
        $("#defense").text("the enemy attacked you for " + enemy.enemyAttackBack + " damage");
        $("#health" + char).text(character.health);
        $("#health" + ene).text(enemy.health);
        character.attack += 8;
        console.log(character.attack); 

        if(enemy.health <= 0) {
            $("#enemy").empty();
            $("#result").text("You have defeated your enemy, choose another God to fight");
            hit++;
            enemyChosen = false;
        }

        if(character.health <= 0) {
            $("#pick").empty();
            $("#result").text("You have been defeated, refresh to start again");
        }

        if(hit === 3) {
            $("#result").text("You have defeated all enemies, a true God of War!");
        }
    });

});