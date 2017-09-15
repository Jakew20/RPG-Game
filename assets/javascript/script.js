



//Global variables
var myCharacter;
var enemy;


	
//$("#battlebtn").prop("disabled", true);
$(".show").hide();

//Character attributes list
var andrelion = {
	character: characterAttributes = {
	name: "Andrelion",
	image: "./assets/images/andrelion.gif",
	damage: 32,
	attackwait: 15,
	HP:  125,
	AP:  5,
	}
};
var balagarn = {
	character: characterAttributes = {
	name: "Balagran",
	image: "./assets/images/balagarn.gif",
	damage: 10,
	attackwait: 15,
	HP:  280,
	AP:  5,
	}
}

var brand = {
	character: characterAttributes = {
	name: "Brand",
	image: "./assets/images/brand.gif",
	damage: 23,
	attackwait: 15,
	HP:  164,
	Ap:  5,
	}
};
var faellorn = {
	character: characterAttributes = {
	name: "Faellorn",
	image: "./assets/images/faellorn.gif",
	damage: 32,
	attackwait: 15,
	HP:  113,
	AP:  5,
	}
};
var ghazal = {
	character: characterAttributes = {
	name: "Ghazal",
	image: "./assets/images/ghazal.gif",
	damage: 16,
	attackwait: 15,
	HP:  205,
	AP:  5,
	}
};
var golith = {
	character: characterAttributes = {
	name: "Golith",
	image: "./assets/images/golith.gif",
	damage: 24,
	attackwait: 15,
	HP:  146,
	AP:  5,
	}
};
var magandar = {
	character: characterAttributes = {
	name: "Magandar",
	image: "./assets/images/magandar.gif",
	damage: 14,
	attackwait: 15,
	HP: 243,
	AP:  5,
	}
};
var naulagak = {
	character: characterAttributes = {
	name: "Naulagak",
	image: "./assets/images/naulagak.gif",
	damage: 12,
	attackwait: 15,
	HP:  245,
	AP:  5,
	}
};
var scorn = {
	character: characterAttributes = {
	name: "Scorn",
	image: "./assets/images/scorn.gif",
	damage: 17,
	attackwait: 15,
	HP:  201,
	AP:  5,
	}
};
var urthan = {
	character: characterAttributes = {
	name: "Urthan",
	image: "./assets/images/urthan.gif",
	damage: 16,
	attackwait: 15,
	HP:  211,
	AP:  5,
	}
};


// Selects your Character
	$('.characterbtn').on('click', function() {
	switch ($(this).data('character')) {
	case 'andrelion':
				selectPlayer(andrelion);
				break;
	case 'brand':
				selectPlayer(brand);
				break;
	case 'scorn':
				selectPlayer(scorn);
				break;
	case 'urthan':
				selectPlayer(urthan);
				break;
	case 'golith':
				selectPlayer(golith);
				break;
	case 'ghazal':
				selectPlayer(ghazal);
				break;



	}
});


// Selects Enemy
	$('.enemybtn').on('click', function() {
	switch ($(this).data('character')) {
	case 'naulagak':
				selectEnemy(naulagak);
				break;
	case 'magandar':
				selectEnemy(magandar);
				break;
	case 'faellorn':
				selectEnemy(faellorn);
				break;
	case 'balagarn':
				selectEnemy(balagarn);
				break;






	}
});


//flips the enemy image so the hero and enemy face each other
$('#enemy-image').addClass('mirror');



//Select "my character" function
function selectPlayer(player) {
	myCharacter = player;
	console.log(myCharacter.character.name);
	myCharacter.character.imageElement = $("hero");
	myCharacter.character.imageElement.attr("src", myCharacter.character.image);
	$("#hero-image").attr("src", myCharacter.character.image);
};


//Select enemy function
function selectEnemy(enemyCharacter) {
	enemy = enemyCharacter;
	console.log(enemy.character.name);
	enemy.character.imageElement = $("enemy-villian");
	enemy.character.imageElement.css("opacity", 1);
	$("#enemy-image").attr("src", enemy.character.image);
	
};


//enables the battle screen to show and assigns both the hero and enemy thri respective attributes
$("#battlebtn").on("click", function(){
	updateStats();
	console.log(myCharacter);
	$(".hide").hide();
	$(".show").show();

});

//updates the hero and enemy HP points
function updateStats() {
    $("#playerstats").html("<h4>PLAYER</h4><h4>HP: " + myCharacter.character.HP + "</h4>");
    $("#enemystats").html("<h4>Enemy</h4><h4>HP: " + enemy.character.HP + "</h4>");
   
     
};



//triggers the hero and enemy attack while logging and interacting with the resulting health status of both
$("#attack").on("click", function(){
	$("#attack").prop("disabled", true);
	//player attack animation
	$( "#hero-image" ).animate({ "left": "+455px" }, "2s", function(){
	$( "#hero-image" ).animate({"left": "-0px" }, "2s", );
});

//random number generator which adds to character damage stat
var randnum = Math.floor(Math.random()*6)+1;
enemy.HP = enemy.character.HP -= (randnum + myCharacter.character.damage); 	
updateStats();
console.log(randnum + myCharacter.character.damage);
if (enemy.HP <= 0) {
	alert("You Won");
	$(".hide").show();
	$(".show").hide();
	document.location.reload();
};

//times out enemy attack so there is a delay between hero and enemy animations
setTimeout(enemyAttack, 1200);





//enemy attack animation
function enemyAttack() {
	$( "#enemy-image" ).animate({ "right": "+455px" }, "2s", function(){
	$( "#enemy-image" ).animate({"right": "-0px" }, "2s", );
});

//random number generator which adds to enemy damage stat
var randnum = Math.floor(Math.random()*10)+1;
myCharacter.HP = myCharacter.character.HP -= (randnum + enemy.character.damage); 	
updateStats();
console.log(randnum + enemy.character.damage);
//attack button dealy so you cant attack before the enemy has
setTimeout(attackButtonEnable, 1000);
function attackButtonEnable() {
	$("#attack").prop("disabled", false);
};

if (myCharacter.HP <= 0) {
	alert("Defeat");
	$(".hide").show();
	$(".show").hide();
	document.location.reload();

}
};

});


	
	






/*

//Determine if the page is ready to move on and if so a click event
$("#battlebtn").prop("disabled", true);


$(".enemyCharacter").on('click', function() {
if (myCharacter == "andrelion", "brand", "urthan", "ghazal", "golith", "scorn" || enemy == "balagarn", "naulagak", "faellorn", "magandar") {
$("#battlebtn").prop("disabled", false);	
}

});
*/








