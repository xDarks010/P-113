function preload(){   
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    background(200);
    circle(50, 50, 25);
    square(150, 80, 50);
    rect(300, 100, 55, 50, 20);
    rect(400, 200, 80, 45, 20);
}