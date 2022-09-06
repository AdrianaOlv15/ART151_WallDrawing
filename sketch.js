
// using variables
let x = 10;

// creates our canvas
function setup() {
    createCanvas(windowWidth, windowHeight); 
}

// print stuff on our console
console.log("Hinata's number is:");
console.log(x);
console.log("Hello Aoba Johsai");


  
// colors the canvas
function draw() {
    frameRate(1)
    background(0,0,0);
    

    let half_horizontal = windowWidth/2;
    let half_vertical= windowHeight/2;

    let hor_space = half_horizontal/50;
    let ver_space = half_vertical/50;


    for (let i = 0; i < 50; i++) {
        
        let a = color(0,255,255);
        stroke(a);

        // top left
        let x1 = half_horizontal;
        let y1 = i * ver_space;
        let x2 = half_horizontal - i * hor_space;
        let y2 = half_vertical;
        line(x1,y1,x2,y2)
        
        // top right 
        x1 = half_horizontal;
        y1 = i * ver_space;
        x2 = half_horizontal + i * hor_space;
        y2 = half_vertical;
        line(x1,y1,x2,y2)

        // bottom left
        x1 = half_horizontal;
        y1 = half_vertical*2 - (i * ver_space);
        x2 = half_horizontal - i * hor_space;
        y2 = half_vertical;
        line(x1,y1,x2,y2)

        // bottom right
        x1 = half_horizontal;
        y1 = half_vertical*2 - (i * ver_space);
        x2 = half_horizontal + i * hor_space;
        y2 = half_vertical;
        line(x1,y1,x2,y2)
    }
        // extra line
        line(0, half_vertical, half_horizontal*2, half_vertical)




    /*
    for (let i = 0; i < 5; i++) {
        // top
        line(random(0,windowWidth), 0,  windowWidth, random(0,windowHeight));
        // left
        line(0, random(0, windowHeight),  windowWidth, random(0,windowHeight));
        // right 
        line(windowWidth, random(0, windowHeight),  windowWidth, random(0,windowHeight));
        // bottom
        line(random(0,windowWidth), windowHeight,  windowWidth, random(0,windowHeight));
    }
    /* Draw a circle at location (30, 30) with a diameter of 50.
    let a = color(255, 0, 0);
    fill(a);
    circle(50, 50, 50);
    
    // Drawm a triangle 
    let b = color(0, 255, 0);
    fill(b);
    triangle(400, 400, 400, 450, 350, 450);
    
    // Draw a square at location (30, 20) with a side size of 55.
    let c = color(0, 0, 255);
    fill(c);
    square(100, 100, 50); 

    // draws a diagonal line
    line(200, 300, 300, 200);

    let d = color(255, 255, 255);
    fill(d);
    // Draw a rectangle at location (30, 20) with width 80  and height 30.
    rect(175, 175, 80, 30);
    */

    /*
    let d = color(0, 0, 0);
    fill(d);
    // Draw a rectangle at location (30, 20) with width 80  and height 30.
    rect(0, 0, windowWidth/20, windowHeight);
    rect((windowWidth/20)*2, 0, windowWidth/20, windowHeight);
    rect((windowWidth/20)*4, 0, windowWidth/20, windowHeight);
    rect((windowWidth/20)*6, 0, windowWidth/20, windowHeight);
    rect((windowWidth/20)*8, 0, windowWidth/20, windowHeight);

   
    rect(windowWidth/2, 0, windowWidth/2, windowHeight/20);
    rect(windowWidth/2, (windowHeight/20)*2 , windowWidth/2, windowHeight/20);
    rect(windowWidth/2, (windowHeight/20)*4, windowWidth/2, windowHeight/20);
    rect(windowWidth/2, (windowHeight/20)*6, windowWidth/2, windowHeight/20);
    rect(windowWidth/2, (windowHeight/20)*8, windowWidth/2, windowHeight/20);
    rect(windowWidth/2, (windowHeight/20)*10 , windowWidth/2, windowHeight/20);
    rect(windowWidth/2, (windowHeight/20)*12, windowWidth/2, windowHeight/20);
    rect(windowWidth/2, (windowHeight/20)*14, windowWidth/2, windowHeight/20);
    rect(windowWidth/2, (windowHeight/20)*16, windowWidth/2, windowHeight/20);
    noStroke();
    rect(windowWidth/2, (windowHeight/20)*18, windowWidth/2, windowHeight/20);

    for (let i = 0; i < 5; i++) {
        d = color(255, 255, 255);
        fill(d);
        rect((windowWidth/20)+(windowWidth/20)*2*i, 0 , windowWidth/20, windowHeight);        
    }

    for (let i = 0; i < 10; i++) {
        d = color(255, 255, 255);
        fill(d);
        rect(windowWidth/2, windowHeight/20+(windowHeight/20)*i*2, windowWidth/2, windowHeight/20);
    }
    */

    







}
