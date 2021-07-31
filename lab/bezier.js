var gridX = 40, gridY = 40;
var cursorX, cursorY;
var lines = [[]], lineI = 0;
var points = []; // deprecated
var a1 = 1; //strength
var a2 = 0; //strength2
var s = 0.25;
var s0 = true, g = true;
var sa = true, fa = true;
var sb = false, fb = false;

//lines.push([]);

function setup() {
    //createCanvas(800, 800);
    createCanvas(windowWidth, windowHeight-100);
    frameRate(30);
    cursorX = round(mouseX/gridX)*gridX;
    cursorY = round(mouseY/gridY)*gridY;
}

function draw() {
    background(255);

    noFill();
    noStroke();

    if(g) stroke(230);
    for(i = gridX; i < width; i += gridX) {
        line(i, 0 , i, height);
    }
    for(i = gridY; i < height; i += gridY) {
        line(0, i , width, i);
    }

    stroke(0);
    noStroke();
    

    //drawing multiple lines
    for(i = 0; i < lines.length; i++) {
        for(j = 0; j < lines[i].length; j++) {
            push();
            stroke(0);
            strokeWeight(0.5);
            point(lines[i][j][0], lines[i][j][1]);
            pop();

            noFill();

            if(j < lines[i].length - 1) {
                push();
                if(s0) stroke(0);
                strokeWeight(s);
                line(lines[i][j][0], lines[i][j][1], lines[i][j+1][0], lines[i][j+1][1]);
                pop();
            }

            if(j < lines[i].length - 2) {
                push();
                if(fa) fill(0);
                beginShape();
                vertex(lines[i][j][0], lines[i][j][1]);
                // bezierVertex(   lines[i][j+1][0] * a + lines[i][j][0] * (1-a), lines[i][j+1][1] * a + lines[i][j][1] * (1-a), 
                //                 lines[i][j+1][0] * a + lines[i][j+2][0] * (1-a), lines[i][j+1][1] * a + lines[i][j+2][1] * (1-a), 
                //                 lines[i][j+2][0], lines[i][j+2][1]);

                bezierVertex(   lines[i][j+1][0] * a1 + lines[i][j][0] * (1-a1) + (lines[i][j+1][0] - lines[i][j+2][0]) * a2, 
                                lines[i][j+1][1] * a1 + lines[i][j][1] * (1-a1) + (lines[i][j+1][1] - lines[i][j+2][1]) * a2, 
                                
                                lines[i][j+1][0] * a1 + lines[i][j+2][0] * (1-a1) + (lines[i][j+1][0] - lines[i][j][0]) * a2, 
                                lines[i][j+1][1] * a1 + lines[i][j+2][1] * (1-a1) + (lines[i][j+1][1] - lines[i][j][1]) * a2, 
                                
                                lines[i][j+2][0], 
                                lines[i][j+2][1]);

                vertex(lines[i][j+1][0], lines[i][j+1][1]);
                endShape(CLOSE);

                if(sa) stroke(0);
                strokeWeight(s);
                noFill();
                bezier(         lines[i][j][0], 
                                lines[i][j][1],

                                lines[i][j+1][0] * a1 + lines[i][j][0] * (1-a1) + (lines[i][j+1][0] - lines[i][j+2][0]) * a2, 
                                lines[i][j+1][1] * a1 + lines[i][j][1] * (1-a1) + (lines[i][j+1][1] - lines[i][j+2][1]) * a2, 
                                
                                lines[i][j+1][0] * a1 + lines[i][j+2][0] * (1-a1) + (lines[i][j+1][0] - lines[i][j][0]) * a2, 
                                lines[i][j+1][1] * a1 + lines[i][j+2][1] * (1-a1) + (lines[i][j+1][1] - lines[i][j][1]) * a2, 
                                
                                lines[i][j+2][0], 
                                lines[i][j+2][1]);

                pop();
            }

            if(j < lines[i].length - 3) {
                push();
                if(fb) fill(0);
                strokeWeight(s);
                beginShape();
                vertex(lines[i][j][0], lines[i][j][1]);
                // bezierVertex(   lines[i][j+1][0] * a + lines[i][j][0] * (1-a), lines[i][j+1][1] * a + lines[i][j][1] * (1-a), 
                //                 lines[i][j+1][0] * a + lines[i][j+2][0] * (1-a), lines[i][j+1][1] * a + lines[i][j+2][1] * (1-a), 
                //                 lines[i][j+2][0], lines[i][j+2][1]);

                bezierVertex(   lines[i][j+1][0], 
                                lines[i][j+1][1], 
                                
                                lines[i][j+2][0], 
                                lines[i][j+2][1], 
                                
                                lines[i][j+3][0], 
                                lines[i][j+3][1]);

                vertex(lines[i][j+2][0], lines[i][j+2][1]);
                vertex(lines[i][j+1][0], lines[i][j+1][1]);
                endShape(CLOSE);

                if(sb) stroke(0);
                strokeWeight(s);
                noFill();
                bezier(         lines[i][j][0], 
                                lines[i][j][1],

                                lines[i][j+1][0], 
                                lines[i][j+1][1], 
                                
                                lines[i][j+2][0], 
                                lines[i][j+2][1], 
                                
                                lines[i][j+3][0], 
                                lines[i][j+3][1]);

                pop();
            }
        }
    }

    //CURSOR
    //stroke(0);
    //fill(255);
    push();
    stroke(0);
    var tempX = cursorX, tempY = cursorY;
    cursorX = round(mouseX/gridX)*gridX * 0.75 + tempX * 0.25;
    cursorY = round(mouseY/gridY)*gridY * 0.75 + tempY * 0.25;
    ellipse(cursorX, cursorY, 10, 10);
    pop();
}

function mousePressed() {
    // points.push([round(mouseX/gridX)*gridX, round(mouseY/gridY)*gridY]);
    if (mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height){
        lines[lineI].push([round(mouseX/gridX)*gridX, round(mouseY/gridY)*gridY]);
    }
    // prevent default
    return false;
}

function keyPressed() {
    if (keyCode === ENTER) {
        lineI++;
        lines.push([]);
    } else if (keyCode === BACKSPACE) {
        if (lines[lineI].length > 1) {
            lines[lineI].pop();
        } else if (lines[lineI].length <= 1) {
            lines[lineI].pop();
            if(lineI > 0) {
                lines.pop();
                lineI--;
            }
        }
    } else if (key === " ") {
        lines = [[]];
        lineI = 0;
    }
}

$(function(){

    var $a1Unit = $('#a1'),
        $a1Slider = $a1Unit.find('input'),
        $a1Value = $a1Unit.find('.value');
    
    a1 = $a1Slider.attr('value');

    $a1Slider.rangeslider({
        polyfill: false
    });
    $a1Value.text(a1);
    $a1Slider.val(a1);

    $a1Slider.on('input', function() {
        a1 = $(this).val();
        $a1Value.text(a1);
    })

    //==========

    var $a2Unit = $('#a2'),
        $a2Slider = $a2Unit.find('input'),
        $a2Value = $a2Unit.find('.value');
    
    a2 = $a2Slider.attr('value');

    $a2Slider.rangeslider({
        polyfill: false
    });
    $a2Value.text(a2);
    $a2Slider.val(a2);

    $a2Slider.on('input', function() {
        a2 = $(this).val();
        $a2Value.text(a2);
    })

    //==========

    var $sUnit = $('#s'),
        $sSlider = $sUnit.find('input'),
        $sValue = $sUnit.find('.value');
    
    s = $sSlider.attr('value');

    $sSlider.rangeslider({
        polyfill: false
    });
    $sValue.text(s);
    $sSlider.val(s);

    $sSlider.on('input', function() {
        s = $(this).val();
        $sValue.text(s);
    })

    //==========

    $('#s0 .boolean').on('click', function() {
        $(this).toggleClass('is-active');
        if ( $(this).hasClass('is-active') ) {
            s0 = true;
        } else {
            s0 = false;
        }
    });

    //==========

    $('#g .boolean').on('click', function() {
        $(this).toggleClass('is-active');
        if ( $(this).hasClass('is-active') ) {
            g = true;
        } else {
            g = false;
        }
    });

    //==========

    $('#sa .boolean').on('click', function() {
        $(this).toggleClass('is-active');
        if ( $(this).hasClass('is-active') ) {
            sa = true;
        } else {
            sa = false;
        }
    });

    //==========

    $('#fa .boolean').on('click', function() {
        $(this).toggleClass('is-active');
        if ( $(this).hasClass('is-active') ) {
            fa = true;
        } else {
            fa = false;
        }
    });

    //==========

    $('#sb .boolean').on('click', function() {
        $(this).toggleClass('is-active');
        if ( $(this).hasClass('is-active') ) {
            sb = true;
        } else {
            sb = false;
        }
    });

    //==========

    $('#fb .boolean').on('click', function() {
        $(this).toggleClass('is-active');
        if ( $(this).hasClass('is-active') ) {
            fb = true;
        } else {
            fb = false;
        }
    });

});