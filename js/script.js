//audio from https://psykoticrefuge.bandcamp.com/track/canadian-love-tap with permission to use if linked back to them

var vidcapture, ctracker, drawcanvas;

function setup() {
	var	cnv	=	createCanvas(windowWidth, windowHeight/2);
	cnv.parent('p5canvas');
	// background(255,0,0);

	vidcapture = createCapture(VIDEO);
	vidcapture.size(vidcapture.width*2, vidcapture.height*3);
	vidcapture.hide();
	ctracker = new clm.tracker();
	ctracker.init();
	ctracker.start(vidcapture.elt);

	drawcanvas = document.getElementById('defaultCanvas0');


}

function draw() {
	// audio.play();
	// audio.volume = .5;
	// background(255, 30);
	translate(vidcapture.width, 0)
	scale(-1, 1)

	var	position = ctracker.getCurrentPosition();

	if	(position) {
	 	 // ctracker.draw(drawcanvas);
 	 	 //colorchange

 	 	 // print("x:" + position[62][0]);
 	 	 // print("y:" + position[62][0]);

	 	 var r = map(position[2][0], 250, 300, 0, 255, true);
	 	 var b = map(position[12][1], 150, 200, 0, 225, true);
	 	 var g = map(position[37][0], 220, height, 0, 225, true);
	 	 var g2 = map(position[37][0], height, 220, 0, 225, true);


	 	 // background(r, 255, b);
	 	 // tint(255, 126);
	 	 // image(vidcapture, 0, 0);
	 	 background(r, g2, g, 10);

	 	 //cheeks
	 	 stroke(0);
	 	 fill(r,g,b, 10);
	 	 
	 	 ellipse(position[0][0], position[0][1], position[6][0], position[6][1]);
	 	 ellipse(position[14][0], position[14][1], position[8][0], position[8][1]);
	 	 //mouth
	 	 strokeWeight(5);
	 	 stroke(b,g,r);
	 	 line(position[44][0], position[44][1], position[60][0], position[60][1],);
	 	 line(position[60][0], position[60][1], position[50][0], position[50][1],);

	 	 line(position[44][0], position[44][1], position[57][0], position[57][1],);
	 	 line(position[57][0], position[57][1], position[50][0], position[50][1],);
		 //eyes
 		 fill(255, 0, 0);
	 	 noStroke();
	 	 ellipse(position[27][0], position[27][1], 15);
	 	 ellipse(position[32][0], position[32][1], 15);	 

	 	 //couldnt get audio to work with face movement but i kept it in anyways because it adds to the overall effect
	 	  // var volume = map(position[62][0], 0, width, 0, 1);
	 	  // volume = constrain(volume, 0, 1);

	 	}


}

// var audio = new Audio('music.mp3'); 

//code from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
let play = function(){

	document.getElementById("audio").play();
		audio.volume = .5;



}
