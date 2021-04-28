/* global image */
window.brushes.fruitStamp = {
  name: 'fruit stamp',
  draw: function () {
      image(fruit[fruit0], window.input.x, window.input.y, 0, 0);
      }
    }

  function mouseReleased() {
    fruit0++;
    fruit0 = fruit.length;
  }
