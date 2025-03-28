let pg;
let font;

function preload() {
  font = loadFont("https://YOUR_HOST/polySans-Bulky.otf"); // Substitua pelo link correto da fonte
}

function setup() {
  createCanvas(800, 800);
  pg = createGraphics(800, 800);
}

function draw() {
  background(0);
  
  pg.background(0);
  pg.fill(255);
  pg.textFont(font);
  pg.textSize(100);
  pg.textAlign(LEFT, CENTER);
  
  pg.push();
  pg.translate(100, height / 2 - 150);
  pg.text("Designs", 0, -50);
  pg.text("that speak for", 0, 50);
  pg.text("themselves", 0, 150);
  pg.pop();
  
  let tilesX = 20;
  let tilesY = 20;
  
  let tileW = width / tilesX;
  let tileH = height / tilesY;
  
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      let distance = dist(mouseX, mouseY, x * tileW, y * tileH);
      let wave = sin(frameCount * 0.02 + distance * 0.01) * 50;
      
      let sx = x * tileW + int(wave);
      let sy = y * tileH;
      let sw = tileW;
      let sh = tileH;
      
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;
      
      image(pg, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
