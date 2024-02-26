function setup() {
    createCanvas(600, 600);
    background("purple");
  }
  
  function draw() {
    
    fill("pink");
    stroke("blue");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 25);
    }
  }
  