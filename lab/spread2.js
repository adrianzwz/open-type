var grid, next;
var strokeW = 10;
var calcRange = 5; //int

function setup() {
    
    createCanvas(200, 200);
    pixelDensity(1);
    frameRate(12);

    grid = [];
    next = [];
    for (let i = 0; i < width; i++) {
        grid[i] = [];
        next[i] = [];
        for (let j = 0; j < height; j++) {
            grid[i][j] = 0;
            next[i][j] = 0;
        }
    }

}

function draw() {

    background(0);

    // console.log(frameRate());

    // calc next from grid
    for (let i = calcRange; i < width - calcRange; i++) {
        for (let j = calcRange; j < height - calcRange; j++) {
            var val =   grid[i-1][j] * 0.2 +
                        grid[i+1][j] * 0.2 +
                        grid[i][j-1] * 0.2 +
                        grid[i][j+1] * 0.2 +
                        grid[i-1][j-1] * 0.05 +
                        grid[i-1][j+1] * 0.05 +
                        grid[i+1][j-1] * 0.05 +
                        grid[i+1][j+1] * 0.05;
            // var delta = polynomialFunction(8, 1, val);
            // var delta = 4 * (1 - val) ** 3 * val
            // next[i][j] =  constrain(grid[i][j] + delta*2, 0, 1);
            // next[i][j] =  grid[i][j] + delta*2 - 0.1;

            // if (val > 0.1 && val < 0.4) next[i][j] = 1;
            // if (val > 0.1 && val < 0.6) next[i][j] += 0.1;
            next[i][j] = grid[i][j];
            if (val > 0.2 && val < 0.3) next[i][j] += 0.6;
            if (val < 0.2) next[i][j] -= 0.6;
            if (val > 0.4) next[i][j] -= 0.9;
            // if (val > 0.1 && val < 0.5) next[i][j] += 0.1;
            // if (val > 0.05 && val < 0.6) next[i][j] += 0.05;
            
            next[i][j] = constrain(next[i][j], 0, 1);
        }
    }

    loadPixels();
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            var pix = (i + j * width) * 4;
            var val = next[i][j] * 255;

            pixels[pix + 0] = val;
            pixels[pix + 1] = val;
            pixels[pix + 2] = val;
            pixels[pix + 3] = 255;

            grid[i][j] = next[i][j];
        }
    }
    updatePixels();

    // grid = next;
    // next = grid;

}

function drawStroke() {
    if (mouseX > strokeW && mouseX < (width - strokeW) && mouseY > strokeW && mouseY < (height - strokeW)) {
        var tempX = int( round( mouseX - (strokeW / 2) ) );
        var tempY = int( round( mouseY - (strokeW / 2) ) );
        
        for (let i = tempX; i < tempX + strokeW; i++) {
            for (let j = tempY; j < tempY + strokeW; j++) {
                grid[i][j] = 1;
                next[i][j] = 1;
            }
        }
        
    }

    loadPixels();
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            var pix = (i + j * width) * 4;
            var val = next[i][j] * 255;

            pixels[pix + 0] = val;
            pixels[pix + 1] = val;
            pixels[pix + 2] = val;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}

function mousePressed() {
    drawStroke();
}

function mouseDragged() {
    drawStroke();
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function polynomialFunction(n, k, x) {
    return ( factorial(n) / ( factorial(k) * factorial(n - k) ) ) * (1 - x) ** (n - k) * x ** k;
}