function setup() {
    createCanvas(200, 200);
  }
  
  function draw() {
    strokeWeight(0);
    fill("red");
    rect(0, 0, 100, 100);
    fill("blue");
    rect(100, 0, 100, 100);
    fill("purple");
    rect(0, 100, 100, 100);
    fill("orange");
    rect(100, 100, 100, 100);
    strokeWeight(3);
    stroke("white");
    line(0, 0, 100, 200);
    line(100, 0, 200, 200);
    line(200, 0, 0, 100);
    line(200, 100, 0, 200);
  }