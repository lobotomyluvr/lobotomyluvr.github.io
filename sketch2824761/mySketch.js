// Wanted to make my book themed after Legend of Zelda, since I have been dying to get back into Tears of the Kingdom after this semester.
// Added more random sentence structures for my iteration.

function preload(){

}

function setup() {

	noLoop();
	noCanvas();
	
	// set the book's title using createElement(), https://p5js.org/reference/p5/createElement/
	// could not think of a better title but did not want to copy a game title
	createElement("h1","Zelda, the Legend");
	
	// to make a chapter title, create an H2 element
//	createElement("h2","Awaken, Link");

	// to add text, create paragraph tags (<p>). You can use createElement() or just createP()
	createP("The light must save Hyrule, and must go on a journey to do so.");

	// of course, you can use string variables in a loop to make lots of text
	//for (let c = 0; c < 4; c++){
	//	createElement("h2", "The light must save Hyrule, and must go on a journey to do so.");
	//	for (let p = 0; p < 10; p++){
	//		createP("The light must save Hyrule, and must go on a journey to do so.")
	//	}
//	}

	// or use any of Rita.js's methods to get some string data
   // https://rednoise.org/rita/#reference 
	
//	createElement("h2","All something and no something makes jack a something something");
//	for (let r = 0; r < 10; r++){
	//	createP("All " + RiTa.randomWord({pos:"vb"}) + 
             // " and no " + RiTa.randomWord({pos:"vb"}) + 
				//  " make Jack a " + RiTa.randomWord({pos:"jj"}) + 
				//  " " + RiTa.randomWord({pos:"nn"}) + ".")
	//}
	const LOCATIONS = [
		"Hyrule", "The Depths", "Hebra", "Eldin", "Hateno Village", "Gerudo", "Necluda", "Lanayru", 
		"Sky Archipelage", "Zora's Domain", "Rito Cliffs", "Korok Forest" ];

	const CHARACTERS = [
		"Link", "Zelda", "Ganondorf", "a Hinox", "a Keese", "a Korok", "a Bokoblin", "a Lynel",
	"Impa", "Rauru", "Paya", "Master Kohga", "Sidon", "Tulin", "Beedle" ];

	const OBJECTS = ["Master Sword", "Royal Sword", "stone", "korok seed", "sapphire", "ruby", "salty rock", "coal", "wood", "shield", "omlette", "key", "amber", "topaz", "shard", "bug", "apple", "mushroom"];
	const ADJECTIVES = ["mysterious", "gloomy", "stinky", "fruitful", "dirty", "clean", "warm", "chilly", "regal", "ancient", "abandoned", "sparkling", "shimmering", "dirty", "old", "ugly", "beautiful"];
	const ACTIONS = ["deflect", "attack", "shield", "protect", "collect", "offend", "shiver", "dispose", "help", "gather", "assist", "cover", "uncover", "unlock", "restore"];

	const CHAPTERS = 50;
	const PARAGRAPHS_CHAPTER =10;

	//generating chapters
	for (let c = 1; c <= CHAPTERS; c++) {
	//chapter titles
	//	createElement("h2", 'Awaken Young Link');
let chapterTitle = `${RiTa.random(CHARACTERS)} in the ${RiTa.random(ADJECTIVES)} ${RiTa.random(LOCATIONS)}`;
createElement("h2", chapterTitle);

		//generate the paragraphs
		for (let p = 1; p <= PARAGRAPHS_CHAPTER; p++) {
	let paragraph = "";
			const sentencesParagraph = 10;
for (let s = 0; s < sentencesParagraph; s++) {
	const char = RiTa.random(CHARACTERS);
		const loc = RiTa.random(LOCATIONS);
		const objc = RiTa.random(OBJECTS);
		const adj = RiTa.random(ADJECTIVES);
		const act = RiTa.random(ACTIONS);
//	const chapterTitle = `${char} in the ${adj} ${loc}`;
//	createElement("h2", chapterTitle);

	const sentenceStructure = [
		`A ${act} ${objc} is nearby, but so is ${char}.`,
		`${char} loves ${adj} ${objc}.`,
		`In ${loc} there is a ${objc}, in ${loc} might be ${adj}.`,
		`The people of Hyrule chose ${objc} as a symbol of faith.`,
		`${char} must ${act} the ${adj} ${objc} in ${loc}.`,
		`In the ${adj} quietness of ${loc}, ${char} begins to ${act}.`,
		`History says the ${objc} in ${loc} can ${act} anyone who wields it.`,
		`No one dares to ${act} the ${adj} ${objc}, not even ${char}.`,
		`You can't ${act} in ${loc}.`,
		`${char} traveled through ${loc}, seeking the ${adj} ${objc}.`
	];
	paragraph += RiTa.random(sentenceStructure) + " ";
	
}
			createP(paragraph.trim());
			
		}
	}
	
	
	
	
	// this will trigger Paged.js to parse the HTML and render it the book-like layout
	window.PagedPolyfill.preview();
}

