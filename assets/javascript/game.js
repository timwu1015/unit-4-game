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
    var character = "";
    var enemy = "";
    var charChosen = false;
    
    $(".pic").on("click", function() {
        console.log($(this).val());
        if(!charChosen) {
            character = $(this).val();
            $(".character").clone().appendTo("#pick");
            charChosen = true;
        }
        else {
            enemy = $(this).val();
            $(".enemy").clone().appendTo("#enemy");
        }
    });

});