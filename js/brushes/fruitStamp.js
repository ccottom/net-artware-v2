/* global image, mouseReleased */
window.brushes.fruitStamp = {
  name: 'fruit stamp',
  draw: function () {
    background (0);
    image(fruit[fruit0], window.input.x, window.input.y, 50, 50);
      }
}

  function mouseReleased() {
    fruit0++;
    fruit0 %= fruit.length;
  }
