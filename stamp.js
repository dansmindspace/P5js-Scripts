let stamp = 'https://github.com/dansmindspace/P5js-Scripts/blob/4c5c0c713c058773e83bf6a8155602fb8eb24255/V1.svg'

function loadStamp() {
  return loadImage(stamp)
}

function recolorStamp(image, oldColor, newColor) {
  image.loadPixels();
  for (let i = 0; i < image.pixels.length; i += 4) {
    if (
      image.pixels[i] == red(oldColor) &&
      image.pixels[i + 1] == blue(oldColor) &&
      image.pixels[i + 2] == green(oldColor)
    ) {
      image.pixels[i] = red(newColor);
      image.pixels[i + 1] = blue(newColor);
      image.pixels[i + 2] = green(newColor);
    }
  }
  image.updatePixels();
}
