const spacing = 100
const center = spacing * 4

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	noLoop();
}

function draw() {
	//to center the circles
	translate(width / 2, height / 2);
	//randomized the colors either red, blue, orange or green to represent the four fictional 
		 //colors to represent the nations of the fictional show "avatar the last airbender"
let colors = ['lightblue', 'darkred', 'tan', 'darkgreen'];
	//for the columns and rows
	for (let y = 0; y < 8; y++){
   for (let x = 0; x < 8; x++){
		 push();
		 //randomize the circle's colors
fill (random(colors));
		 //fills the borders around the circles
stroke('white');
		 strokeWeight(3);

		
		// randomizes the sizes 
		 circle (x*spacing - center, y*spacing - center, random(200, 100));
  // creates a cool circle inside, somewhat representing the nations symbol? i think it looks cool lol
		 ellipse(x * spacing - center, y * spacing - center, random(60, 150));
		 square(x * spacing - center, y * spacing - center, random(100));


		 pop();

   }
	}
}