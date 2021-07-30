function setup() {
    //createCanvas(800, 800);
    createCanvas(windowWidth, windowHeight);
}

var gridX = 80, gridY = 80;
var points = [];
var a = 1; //strength

function draw() {
    background(255);

    stroke(240);
    for(i = gridX; i < width; i += gridX) {
        line(i, 0 , i, height);
    }
    for(i = gridY; i < height; i += gridY) {
        line(0, i , width, i);
    }

    stroke(0);
    for(i = 0; i < points.length; i++)  {
        push();
        strokeWeight(1);
        point(points[i][0], points[i][1]);
        pop();

        noFill();
        for(j = i; j < points.length; j++) {
            //line(points[i][0], points[i][1], points[j][0], points[j][1]);
        }
        if(i < points.length - 1) {
            //line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
        }
        if(i < points.length - 2) {
            //line(points[i][0], points[i][1], points[i+2][0], points[i+2][1]);
            //bezier(points[i][0], points[i][1], points[i+1][0], points[i+1][1], points[i+1][0], points[i+1][1], points[i+2][0], points[i+2][1]);
            push();
            fill(0);
            strokeWeight(0);
            beginShape();
            vertex(points[i][0], points[i][1]);
            //bezierVertex(points[i+1][0], points[i+1][1], points[i+1][0], points[i+1][1], points[i+2][0], points[i+2][1]);
            bezierVertex(   points[i+1][0] * a + points[i][0] * (1-a), points[i+1][1] * a + points[i][1] * (1-a), 
                            points[i+1][0] * a + points[i+2][0] * (1-a), points[i+1][1] * a + points[i+2][1] * (1-a), 
                            points[i+2][0], points[i+2][1]);
            vertex(points[i+1][0], points[i+1][1]);
            endShape(CLOSE);
            pop();
        }
    }

    //stroke(0);
    fill(255);
    ellipse(round(mouseX/gridX)*gridX,round(mouseY/gridY)*gridY,10,10);
}

function mousePressed() {
    points.push([round(mouseX/gridX)*gridX, round(mouseY/gridY)*gridY]);
    // prevent default
    return false;
  }