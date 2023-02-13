
var images = [];
var image_count = 35;
function preload() {
    let images = 35
    // for each number from 0 to 35, create a path variable and add (push) this to the ims array
    for (let i = 0; i < image_count; i++) {
      path = 'images/' + str(i) + '.jpg' // create a path to the image
      loaded_image = loadImage(path)     // load the image from the path
      images.push(loaded_image)             // add the loaded path to ims
    }
  }
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  image(images[0], 0, 0);
}
