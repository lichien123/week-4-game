window.onload = function() {







var crystal = {red: {value: 0},
				blue: {value: 0},
				yellow: {value: 0},
				green: {value: 0}
				}


var totalScore = 0;
var winCounter = 0;
var lossCounter = 0;


//random number for the user to add numbers to
var randNumBig = Math.floor(Math.random() * (120 - 19)) + 19;
//first make a variable that calculates the computerChoice for each crystal with math.random and math.floor
var randNumSmallRed = Math.floor(Math.random() * (12 - 1)) + 1;
var randNumSmallBlue = Math.floor(Math.random() * (12 - 1)) + 1;
var randNumSmallYellow = Math.floor(Math.random() * (12 - 1)) + 1;
var randNumSmallGreen = Math.floor(Math.random() * (12 - 1)) + 1;
var randNumSmall = Math.floor(Math.random() * (12 - 1)) + 1;

//the function should write that number on its corresponding html id






function updateRandNumBig() {
	randNumBig = Math.floor(Math.random() * (120 - 19)) + 19;
	console.log(randNumBig);
	$('#targetScore').html(randNumBig);
	// var contents = $('#contents'); 
};


function updateTotalScore() {
	totalScore = 0;
	$('#totalScore').html(totalScore);
};


//assign random numbers to each crystal
//put it all in one function
function updateCrystal() {

function updateRedCrystal() {
	randNumSmallRed = Math.floor(Math.random() * (12 - 1)) + 1;
	crystal.red.value = randNumSmallRed;
	console.log("red crystal has value of " + crystal.red.value);
}

function updateBlueCrystal() {
	randNumSmallBlue = Math.floor(Math.random() * (12 - 1)) + 1;
	crystal.blue.value = randNumSmallBlue;
	console.log("blue crystal has value of " + crystal.blue.value);
}

function updateYellowCrystal() {
	randNumSmallYellow = Math.floor(Math.random() * (12 - 1)) + 1;
	crystal.yellow.value = randNumSmallYellow;
	console.log("yellow crystal has value of " + crystal.yellow.value);
}

function updateGreenCrystal() {
	randNumSmallGreen = Math.floor(Math.random() * (12 - 1)) + 1;
	crystal.green.value = randNumSmallGreen;
	console.log("green crystal has value of " + crystal.green.value);
}
//assign values to all crystals
updateRedCrystal();
updateBlueCrystal();
updateYellowCrystal();
updateGreenCrystal();
};





//start game

updateRandNumBig();
updateCrystal();

//onclick for crystals
var addValues = function(clickedCrystal) {
	totalScore += clickedCrystal.value;
	$("#totalScore").text(totalScore);
	console.log(totalScore);
	applyGameRules();
};

$("#redCrystal").click(function(){
	addValues(crystal.red);
});

$("#blueCrystal").click(function(){
	addValues(crystal.blue);
});

$("#yellowCrystal").click(function(){
	addValues(crystal.yellow);
});

$("#greenCrystal").click(function(){
	addValues(crystal.green);
});


function applyGameRules() { 
//if/then statement:
if (totalScore == randNumBig) {
	//add 1 to winCounter
	winCounter = winCounter + 1;
	$('#wins').html(winCounter);
	//randomize target score and crystals again
	updateRandNumBig();
	updateCrystal();
	updateTotalScore();

} else if (totalScore > randNumBig) {
	//add 1 to lossCounter
	lossCounter = lossCounter + 1 
	$('#html').html(lossCounter);
	//randomize target score and crystals again
	updateRandNumBig();
	updateCrystal();
	updateTotalScore();

} else {
	console.log('hi');
}
};
};

