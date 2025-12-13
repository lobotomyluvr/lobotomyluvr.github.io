
// MINI BIO:
// This is my Animal Crossing-inspired cookie clicker/mini game.
// For reference: https://www.youtube.com/watch?v=EOSS5GO2pOM

// RULES:
// You have a certain amount of time (1 minute) to collect as many fruit as possible.
// To collect fruit, you must click on the tree. There are three pieces of fruit on each tree, you must shake it once to collect ONE piece of fruit.
// The tree will reset every 3 clicks, similar to how you have to keep shaking it in the game. You receive points based on how many times you click on the tree-- not just the fruit, since you are aura farming.
// Chance of you receiving a wasp nest! 5 points will be deducted from your score.

//SOURCES:
// I had to edit assets from numerous images. I used the assets provided from Nookepedia, the fanmade Wikipedia for the Animal Crossing franchise.
// I collected assets from https://nookipedia.com/wiki/Tree/Gallery and https://nookipedia.com/wiki/Item:Pear_(City_Folk)
// I try to use assets from my most played version, which is Animal Crossing: City Folk. However, I used the villager and tree assets from New Horizons.
// I used a lot of references from our past assignments and the reference website (https://p5js.org/reference/#Image)

//BACKGROUND MUSIC FROM: https://www.youtube.com/watch?v=q6zsUrNfVEA&list=RDq6zsUrNfVEA&start_radio=1
let bgMusic;

//random pop up of bees (really its a wasp's nest but whatever), kind of similar to the game, except the bees don't typically live inside fruit trees!
let popUpImage;
let showPopUp = false;
let popUpTimer = 0;
let popUpDuration = 3500;

//image/tree asset variables
//array to keep track of tree stages
let treeStages = [null, null, null, null];
//decides which image to display
let currentTree = 2;

//extra game variables, so it resets properly
let score = 0;
let timeLimit = 60;
let startTime;
let gameOver = false;
let clicksOnTree = 0; 


//shaking variables, so it shakes when you click on it like how it is in the game
let currentShake = false;
let shakeStart = 0;
//in milliseconds
let shakeDuration = 100; 


//loads in the animal crossing fruit tree assets, I decided on a Pear Tree in reference to 12 Days of Christmas.
function preload () {
treeStages[0] = loadImage("tree1.png");
	treeStages[1] = loadImage("tree2.png");
	treeStages[2] = loadImage("tree3.png");
	treeStages[3] = loadImage("tree0.png");

	//villagers to cheer you on at the end!
endVillager1 = loadImage("endgamefruits.png");
	endVillager2 = loadImage("mint.png");
	
//wasp nest pop up
		popUpImage = loadImage("waspnest.png");

	//for the background music!
	bgMusic = loadSound("accf.mp3");



}
function setup() {
	createCanvas(700, 700);
	
	startTime = millis();

	bgMusic.loop();
	bgMusic.setVolume(0.5);
}

function draw() {
	background (176, 247, 191);

	//timer
	let elapsed = floor((millis() - startTime) / 1000);
	let timeLeft = timeLimit - elapsed;

	if (timeLeft <= 0 && !gameOver) {
		gameOver = true;
	}


	//game over screen
	if (gameOver) {
	background (50, 120, 70);
	fill(255);
	textSize(40);
	textAlign(CENTER);
	text("All done for today!", width/2, height/2 - 20);
	textSize(30);
	text("Total Aura Collected: " + score, width/2, height/2 + 30);
		textSize(30);

		//end screen
	imageMode(CENTER);
		image(endVillager1, width / 2 - 80, height / 2 + 120, 120, 120);
		image(endVillager2, width / 2 + 80, height / 2 + 120, 120, 120);
	return;
}

//the shake effect, when you click it

let offsetX = 0;
let offsetY = 0;

if (currentShake) {
	let t = millis() - shakeStart;
	if (t < shakeDuration) {
		offsetX = random (-8, 8);
		offsetY = random (-8, 8);
	} else {
		currentShake = false;
	}
}

// saves the position of tree while it shakes
push(); 
translate(width/2 + offsetX, height/2 + offsetY);
imageMode(CENTER);
image(treeStages[currentTree], 0, 0, 350, 350);
pop();

// the score and timer
fill(0);
textSize(24);
text("Your Score: " + score, 20, 40);
text("Timer: " + timeLeft, width - 120, 40);

	// if the pop-up is up/wasp nest appears
	if (showPopUp) {
		imageMode(CENTER);
		image(popUpImage, width / 2, height / 2 - 180, 180, 180);

		if (millis() > popUpTimer + popUpDuration) {
			showPopUp = false;
		}
	}

}

function mousePressed(){
	if (gameOver) return;

	if (showPopUp) {
		return;
	}

	//clicking perimeter
	let d = dist(mouseX, mouseY, width/2, height/2);
	if (d < 180) {
		score++;
		clicksOnTree++;

		// shake trigger
		currentShake = true;
		shakeStart = millis();

// rng/chance of wasp popping up, will deduct 5 points if you get one
		if (random() < 0.025) {
			showPopUp = true;
			popUpTimer = millis();
			score -= 3;
		}

		
		if (clicksOnTree >= 3) {
			currentTree--;
			clicksOnTree = 0;

			//resets to original tree
			if (currentTree < 0) {
				currentTree = treeStages.length -1;
			}
		}
	}

}
