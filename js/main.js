/* global createCanvas, resizeCanvas, loadImage */
let fruit = [];
let idx = 0;

function preload () {
  window.setupMenuLogic()
  for (let i = 0; i < 5; i++) {
    fruit[i] = loadImage("../images/fruit/fruit" + i + ".png");
  }
}

function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  const selected = window.settings.selectedBrush
  if (selected) {
    const brush = window.brushes[selected]
    brush.draw()
  }
}

function windowResized () {
  resizeCanvas(window.innerWidth, window.innerHeight)
}
