var cursorX = 0, cursorY = 0;
var circles = [];

var grid = true;
var gridX = 40, gridY = 40;

var direction = true; //true: anti-clockwise, false: clock-wise
var angle = 0;

var sr = 30;

// var s = 2;

function setup() {
    //createCanvas(800, 800);
    createCanvas(windowWidth, windowHeight-100);

    frameRate(30);

    

    
}

function draw() {
    
    background(255);
    noFill();
    stroke(0);
    strokeWeight(1);

    // console.log(direction);

    //--------------------------------------------------
    //CURSOR POSITION

    var tempX = cursorX, tempY = cursorY;
    // cursorX = round(mouseX/gridX)*gridX * 0.75 + tempX * 0.25;
    // cursorY = round(mouseY/gridY)*gridY * 0.75 + tempY * 0.25;
    cursorX = round(mouseX/gridX)*gridX;
    cursorY = round(mouseY/gridY)*gridY;

    //--------------------------------------------------
    //GRID

    if(grid) {
        push();
        stroke(230);
        for(i = gridX; i < width; i += gridX) {
            line(i, 0 , i, height);
        }
        for(i = gridY; i < height; i += gridY) {
            line(0, i , width, i);
        }
        pop();
    }

    //--------------------------------------------------
    //CIRCLES ARRAY

    stroke(0, 20);
    for (i = 0; i < circles.length; i++) {
        var ix = circles[i].x, iy = circles[i].y, ir = circles[i].r;
        
        circle(ix, iy, ir*2);

        

        if (i < circles.length - 1) {
            var i1x = circles[i].x, i1y = circles[i].y, i1r = circles[i].r, i2x = circles[i+1].x, i2y = circles[i+1].y, i2r = circles[i+1].r;
            // drawCircleOuterTangent(i1x, i1y, i1r, i2x, i2y, i2r);
            // drawCircleInnerTangent(i1x, i1y, i1r, i2x, i2y, i2r);

            push();
            stroke(0);
            strokeWeight(sr);
            if (circles[i].d) {
                if (circles[i+1].d) {
                    drawCircleOuterTangentL(i1x, i1y, i1r, i2x, i2y, i2r);
                } else {
                    drawCircleInnerTangentL(i1x, i1y, i1r, i2x, i2y, i2r);
                }
            } else {
                if(!circles[i+1].d) {
                    drawCircleOuterTangentR(i1x, i1y, i1r, i2x, i2y, i2r);
                } else {
                    drawCircleInnerTangentR(i1x, i1y, i1r, i2x, i2y, i2r);
                }
            }
            pop();
        }

        if (i == circles.length - 1) {
            var i1x = circles[i].x, i1y = circles[i].y, i1r = circles[i].r, i2x = cursorX, i2y = cursorY, i2r = 50;
            // drawCircleOuterTangent(i1x, i1y, i1r, i2x, i2y, i2r);
            // drawCircleInnerTangent(i1x, i1y, i1r, i2x, i2y, i2r);

            push();
            stroke(0);
            strokeWeight(sr);
            if (circles[i].d) {
                if (direction) {
                    drawCircleOuterTangentL(i1x, i1y, i1r, i2x, i2y, i2r);
                    circles[i].a2 = circleOuterTangent(i1x, i1y, i1r, i2x, i2y, i2r).a1;
                    angle = circles[i].a2;
                } else {
                    drawCircleInnerTangentL(i1x, i1y, i1r, i2x, i2y, i2r);
                    circles[i].a2 = circleInnerTangent(i1x, i1y, i1r, i2x, i2y, i2r).a1;
                    angle = circles[i].a2 + Math.PI;
                }
            } else {
                if(!direction) {
                    drawCircleOuterTangentR(i1x, i1y, i1r, i2x, i2y, i2r);
                    circles[i].a2 = circleOuterTangent(i1x, i1y, i1r, i2x, i2y, i2r).a2;
                    angle = circles[i].a2;
                } else {
                    drawCircleInnerTangentR(i1x, i1y, i1r, i2x, i2y, i2r);
                    circles[i].a2 = circleInnerTangent(i1x, i1y, i1r, i2x, i2y, i2r).a2;
                    angle = circles[i].a2 + Math.PI;
                }
            }
            // angle = circles[i].a2;
            pop();
            
        }

        push();
        stroke(0);
        strokeWeight(sr);
        if(!circles[i].d) {
            arc(ix, iy, ir*2, ir*2, circles[i].a1, circles[i].a2);
            beginShape();
            // arcVertex(ix, iy, ir, circles[i].a1, circles[i].a2, 4);
            endShape();
        } else {
            arc(ix, iy, ir*2, ir*2, circles[i].a2, circles[i].a1);
            beginShape();
            // arcVertex(ix, iy, ir, circles[i].a1, circles[i].a2, 4);
            endShape();
        }
        pop();

    }

    //--------------------------------------------------
    //CURSOR DRAW

    push();
    // stroke(0);
    circle(cursorX, cursorY, 100);
    pop();



    //TEST AREA

    push();
    stroke(0);
    beginShape();
    //arcVertex(width/2, height/2, 100, 0, Math.PI, 8);
    endShape();
    pop();

}
//==================================================
//
//  DRAWING FUNCTIONS
//
//==================================================

function mousePressed() {
    circles.push({
        x: round(mouseX/gridX)*gridX, 
        y: round(mouseY/gridY)*gridY, 
        r: 50,
        d: direction,
        a1: angle,
        a2: PI/2
    });
}

function keyPressed() {
    if (key === " ") {
        direction = !direction;
    } else if (keyCode === ENTER)  {
        direction = circles[0].d;
        var i1x = circles[circles.length-1].x, i1y = circles[circles.length-1].y, i1r = circles[circles.length-1].r, 
        i2x = circles[0].x, i2y = circles[0].y, i2r = 50;
        if (circles[circles.length-1].d) {
            if (direction) {
                circles[circles.length-1].a2 = circleOuterTangent(i1x, i1y, i1r, i2x, i2y, i2r).a1;
                angle = circles[circles.length-1].a2;
            } else {
                circles[circles.length-1].a2 = circleInnerTangent(i1x, i1y, i1r, i2x, i2y, i2r).a1;
                angle = circles[circles.length-1].a2 + Math.PI;
            }
        } else {
            if(!direction) {
                circles[circles.length-1].a2 = circleOuterTangent(i1x, i1y, i1r, i2x, i2y, i2r).a2;
                angle = circles[circles.length-1].a2;
            } else {
                circles[circles.length-1].a2 = circleInnerTangent(i1x, i1y, i1r, i2x, i2y, i2r).a2;
                angle = circles[circles.length-1].a2 + Math.PI;
            }
        }

        circles.push({
            x: circles[0].x, 
            y: circles[0].y,
            r: 50,
            d: circles[0].d,
            a1: angle,
            a2: circles[0].a1
        });
        circles[0].a1 = angle;

    } else if (keyCode === BACKSPACE) {
        circles.pop();
    }
}

//==================================================
//
//  GEOMETRIC FUNCTIONS
//
//==================================================

function normalize(dx,dy) {
    var d = dist(dx, dy, 0, 0);

    var obj = {
        x: dx/d,
        y: dy/d
    };

    return obj;
}

function circleIntersection(x1, y1, r1, x2, y2, r2) {
    var dx, dy, d, h, a1, a2, i1x, i1y, i2x, i2y;

    //could be updated with trigonometry
    //completed

    dx = x2 - x1;
    dy = y2 - y1;
    d = dist(x1, y1, x2, y2);

    //check solvability
    if (d > r1 + r2) return false;
    if (d < Math.abs(r1 - r2)) return false;

    h = (r1*r1 - r2*r2 + d*d) / (2*d);
    a1 = Math.atan2(dy, dx);
    a2 = Math.acos(h/r1);

    i1x = x1 + r1 * Math.cos(a1 + a2);
    i1y = y1 + r1 * Math.sin(a1 + a2);
    i2x = x1 + r1 * Math.cos(a1 - a2);
    i2y = y1 + r1 * Math.sin(a1 - a2);

    var obj = { x1: i1x, y1: i1y, x2: i2x, y2: i2y }
    return obj;

}

function circleOuterTangent(x1, y1, r1, x2, y2, r2) {
    var dx, dy, d, a1, a2, i1x, i1y, i2x, i2y, i3x, i3y, i4x, i4y;

    dx = x2 - x1;
    dy = y2 - y1;
    d = dist(x1, y1, x2, y2);

    //check solvability
    if (d < Math.abs(r2 - r1)) return false;

    a1 = Math.atan2(dy, dx);
    a2 = Math.acos((r1-r2)/d);

    i1x = x1 + r1 * Math.cos(a1 + a2);
    i1y = y1 + r1 * Math.sin(a1 + a2);
    i2x = x2 + r2 * Math.cos(a1 + a2);
    i2y = y2 + r2 * Math.sin(a1 + a2);
    i3x = x1 + r1 * Math.cos(a1 - a2);
    i3y = y1 + r1 * Math.sin(a1 - a2);
    i4x = x2 + r2 * Math.cos(a1 - a2);
    i4y = y2 + r2 * Math.sin(a1 - a2);

    var obj = { x1: i1x, y1: i1y, x2: i2x, y2: i2y, x3: i3x, y3: i3y, x4: i4x, y4: i4y, a1: a1+a2, a2: a1-a2 };
    // console.log(i1x);
    return obj;
}

function circleInnerTangent(x1, y1, r1, x2, y2, r2) {
    var dx, dy, d, a1, a2, i1x, i1y, i2x, i2y, i3x, i3y, i4x, i4y;

    dx = x2 - x1;
    dy = y2 - y1;
    d = dist(x1, y1, x2, y2);

    // console.log(d + ", " + Math.abs(r2 - r1));

    //check solvability
    if (d < Math.abs(r2 + r1)) return false;

    a1 = Math.atan2(dy, dx);
    a2 = Math.acos((r1+r2)/d);

    i1x = x1 + r1 * Math.cos(a1 + a2);
    i1y = y1 + r1 * Math.sin(a1 + a2);
    i2x = x2 + r2 * Math.cos(a1 + a2 + Math.PI);
    i2y = y2 + r2 * Math.sin(a1 + a2 + Math.PI);
    i3x = x1 + r1 * Math.cos(a1 - a2);
    i3y = y1 + r1 * Math.sin(a1 - a2);
    i4x = x2 + r2 * Math.cos(a1 - a2 + Math.PI);
    i4y = y2 + r2 * Math.sin(a1 - a2 + Math.PI);

    var obj = { x1: i1x, y1: i1y, x2: i2x, y2: i2y, x3: i3x, y3: i3y, x4: i4x, y4: i4y, a1: a1+a2, a2: a1-a2 };
    // console.log(i1x);
    return obj;
}

function pointCircleTangent(x1, y1, x2, y2, r2) {
    var dx, dy, d, a1, a2, i2x, i2y, i3x, i3y;

    dx = x2 - x1;
    dy = y2 - y1;
    d = dist(x1, y1, x2, y2);

    //check solvability
    if (d < r2) return false;

    a1 = Math.atan2(dy, dx);
    a2 = Math.asin(r2/d);

    i2x = x2 + r2 * Math.cos(a1 + a2 + Math.PI/2);
    i2y = y2 + r2 * Math.sin(a1 + a2 + Math.PI/2);
    i3x = x2 + r2 * Math.cos(a1 - a2 - Math.PI/2);
    i3y = y2 + r2 * Math.sin(a1 - a2 - Math.PI/2);

    var obj = { x1: x1, y1: y1, x2: i2x, y2: i2y, x3: i3x, y3: i3y };
    return obj;
}

function drawCircleOuterTangent(x1, y1, r1, x2, y2, r2) {
    var temp = circleOuterTangent(x1, y1, r1, x2, y2, r2);
    line(temp.x1, temp.y1, temp.x2, temp.y2);
    line(temp.x3, temp.y3, temp.x4, temp.y4);
}

function drawCircleOuterTangentL(x1, y1, r1, x2, y2, r2) {
    var temp = circleOuterTangent(x1, y1, r1, x2, y2, r2);
    line(temp.x1, temp.y1, temp.x2, temp.y2);
    // line(temp.x3, temp.y3, temp.x4, temp.y4);
}

function drawCircleOuterTangentR(x1, y1, r1, x2, y2, r2) {
    var temp = circleOuterTangent(x1, y1, r1, x2, y2, r2);
    // line(temp.x1, temp.y1, temp.x2, temp.y2);
    line(temp.x3, temp.y3, temp.x4, temp.y4);
}

function drawCircleInnerTangent(x1, y1, r1, x2, y2, r2) {
    var temp = circleInnerTangent(x1, y1, r1, x2, y2, r2);
    line(temp.x1, temp.y1, temp.x2, temp.y2);
    line(temp.x3, temp.y3, temp.x4, temp.y4);
}

function drawCircleInnerTangentL(x1, y1, r1, x2, y2, r2) {
    var temp = circleInnerTangent(x1, y1, r1, x2, y2, r2);
    line(temp.x1, temp.y1, temp.x2, temp.y2);
    // line(temp.x3, temp.y3, temp.x4, temp.y4);
}

function drawCircleInnerTangentR(x1, y1, r1, x2, y2, r2) {
    var temp = circleInnerTangent(x1, y1, r1, x2, y2, r2);
    // line(temp.x1, temp.y1, temp.x2, temp.y2);
    line(temp.x3, temp.y3, temp.x4, temp.y4);
}

function drawPointCircleTangent(x1, y1, x2, y2, r2) {
    var temp = pointCircleTangent(x1, y1, x2, y2, r2);
    line(temp.x1, temp.y1, temp.x2, temp.y2);
    line(temp.x1, temp.y1, temp.x3, temp.y3);
}

function arcVertex(x, y, r, a1, a2, seg) {
    
    if (a1 < 0) a1 += Math.PI*2;
    if (a2 < 0) a2 += Math.PI*2;
    if (a2 < a1) {
        var temp = a2;
        a2 = a1;
        a1 = temp;
    }

    da = (a2 - a1)/seg;
    
    for(i = 0; i <= seg; i++) {
        vertex(x + r * cos(a1 + da * i), y + r * sin(a1 + da * i));
    }

    return ;
    
}