/* global createCanvas, resizeCanvas */
let fruit = [];
let idx = 0;

function preload () {
  window.setupMenuLogic()
  for (let i = 0; i < 5; i++) {
    fruit[i] = loadImage("./images/fruit/fruit" + i + ".png");
  }
}

function setup () {
  window.canvas = createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  const currentInput = window.settings.selectedInput
  const inputObj = window.inputs[currentInput]
  inputObj.update()
  if (inputObj.condition() && !window.dragging) {
    const currentBrush = window.settings.selectedBrush
    const brushObj = window.brushes[currentBrush]
    brushObj.draw()
  }
}

function windowResized () {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
