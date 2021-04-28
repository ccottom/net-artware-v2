/* global mouseIsPressed, image, mouseX, mouseY */
window.brushes.fruitStamp = {
  name: 'fruit stamp',
  draw:   draw: function () {
      if (mouseIsPressed){
      image(fruit, mouseX, mouseY, 100, 100)
      }
    }
  }
