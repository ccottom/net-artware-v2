/* global mouseIsPressed, image, mouseX, mouseY */
window.brushes.fruitStamp = {
  name: 'fruit stamp',
  draw: function () {
      if (mouseIsPressed){
      image(fruit[fruit0], mouseX, mouseY, 0, 0);
      }
    }
  }

  function mouseReleased() {
    fruit0++;
    fruit0 = fruit.length;
  }
