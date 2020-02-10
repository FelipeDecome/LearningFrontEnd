const slideWrapper = document.querySelector(".image-list");
const sliderItems = slideWrapper.children;

const sliderControls = document.querySelector(".control-list");

const slideDelay = 1000;
const slideSplits = 12;
const imageWidth = 1024;
const imageHeight = 720;

for (let i = 0; i < sliderItems.length; i++) {
  let li = document.createElement("li");
  li.classList.add("control");
  li.id = "control" + (i + 1);
  sliderControls.append(li);
}

var image = {
  id: 0,
  element: document.querySelector("#image1"),
  width: imageWidth,
  height: imageHeight,
  swidth: imageWidth / 12,
  sheight: imageHeight / 12,
  get sx() {
    return this.swidth * this.id;
  },
  get sy() {
    return this.sheight * this.id;
  }
};
