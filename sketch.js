/***********************************************************************************
  Rooms of my 'dream' house 
  by Alex Kowalczuk

  Dream, and take tour around my house with cool and funny animals.
***********************************************************************************/

// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 40;

// Room images
function preload() {
  images[0] = loadImage('assets/house.png');
  images[1] = loadImage('assets/backyard.png');
  images[2] = loadImage('assets/dayroom.png');
  images[3] = loadImage('assets/kitchen.png');
  images[4] = loadImage('assets/dining.png');
  images[5] = loadImage('assets/bedroom.png');
  images[6] = loadImage('assets/balcony.png');
  images[7] = loadImage('assets/rat.png');
  images[8] = loadImage('assets/car.png');
  images[9] = loadImage('assets/giraffe.png');
  images[10] = loadImage('assets/monocycle.png');
  images[11] = loadImage('assets/mouse.png');
  images[12] = loadImage('assets/palm.png');
  images[13] = loadImage('assets/dog.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(1200, 835);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // Splash screen as first screen
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(182, 124, 67);

  // will call your state machine function
  drawFunction();
}


// Function that draw Front of the house
drawHouse = function() {
   image(images[0],width/2, height/2);
   image(images[12], 60, 400);

   fill(255, 0, 127);
   text("Beautiful House Entry in sunny SF", width/2, height - gTextOffset);
}

// Function that draw Backyard
drawBackYard = function() {
   image(images[1],width/2, height/2);
   image(images[8], 820, 660);

   fill(255, 0, 127);
   text("Crazy Backyard", width/2, height - gTextOffset);
}

// Function that draw Family Room
drawDayroom = function() {
   image(images[2],width/2, height/2);
   image(images[13], 750, 550)

   fill(255, 0, 127);
   text("Relaxing Family Room", width/2, 750);
}

// Function that draw Kitchen
drawKitchen = function() {
   image(images[3],width/2, height/2);
   image(images[7], 150, 600);

   fill(255, 0, 127);
   text("Crazy Kitchen", width/2, height - gTextOffset);
}

// Function that draw Dining Room
drawDining = function() {
   image(images[4],width/2, height/2);
   image(images[10], 70, 600);

   fill(255, 0, 127);
   text("Friendly Dining", width/2, 750);
}

// Function that draw Bedroom
drawBedroom = function() {
   image(images[5],width/2, height/2);
   image(images[11], 900, 750);

   fill(255, 0, 127);
   text("Funny Bedroom", width/2, 750);
}

// Function that draw Balcony
drawBalcony = function() {
   image(images[6],width/2, height/2);
   image(images[9], 1050, 285);

   fill(255, 0, 127);
   text("Balcony with view", width/2, 750);
}

// Function that draw Splash Screen
drawSplash = function() {
   background(75, 83, 32);
   fill(255,165,0);
   textSize(70);
   text("Alex Dream House in SF\n (it's on zellow for 25mln\nif someone interested)\n", width/2, height/2);

   textSize(40);
   text("Press 'i' for instructions", width/2, height/2 + 300);
}

// Function that draw Instruction Screen
drawInstructions = function() {
   background(231, 208, 162);
   fill(255);
   textSize(40);
   text("Every room of this house leads to others, just like in regular house", width/2, height/2 - 20);
   
   textSize(35);
   text("Please, follow the instruction on each screen to navigate to different rooms\n PRESS 'e' to ENTER the show", width/2, height/2 + 40);
}

// Keys for navigation between rooms
function keyTyped() {
 
  if( drawFunction === drawHouse ) {
    if(key === 'e') {
      drawFunction = drawDayroom;
    }
    else if(key === 'b') {
      drawFunction = drawBackYard;
  }
}

  if( drawFunction === drawBackYard ) {
    if(key === 'd') {
      drawFunction = drawDining;
    }
    else if(key === 'e') {
      drawFunction = drawHouse;
  }
}

  if( drawFunction === drawDayroom ) {
    if(key === 'k') {
      drawFunction = drawKitchen;
    }
    else if(key === 'a') {
      drawFunction = drawBalcony;
    }
    else if(key === 'h') {
      drawFunction = drawHouse;
    }
  }

  if( drawFunction === drawKitchen ) {
    if(key === 'r') {
      drawFunction = drawDayroom;
    }
    else if(key === 'd'){
      drawFunction = drawDining;
    }
  }

  if( drawFunction === drawBedroom ) {
    if(key === 'd') {
      drawFunction = drawDining;
    }
    else if(key === 'a') {
      drawFunction = drawBalcony;
    }
  }

  if( drawFunction === drawDining ) {
    if(key === 'm') {
      drawFunction = drawBedroom;
    }
    else if(key === 'b') {
      drawFunction = drawBackYard;
    }
    else if(key === 'k') {
      drawFunction = drawKitchen;
    }
  }

  if( drawFunction === drawBalcony ) {
    if(key === 'm') {
      drawFunction = drawBedroom;
    }
    else if(key === 'e') {
      drawFunction = drawDayroom;
    }
  }

  if( drawFunction === drawSplash ) {
    if (key === "i") {
      drawFunction = drawInstructions;
    }
  }

  if( drawFunction === drawInstructions ) {
    if(key === 'e') {
      drawFunction = drawHouse;
    }  
  }
} 
