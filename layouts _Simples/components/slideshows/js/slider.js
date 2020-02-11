const slideWrapper = document.querySelector(".image-list");
const sliderItems = slideWrapper.children;

const sliderControls = document.querySelector(".control-list");

const slideDelay = 1000;
const slideSplits = 5;
const imageWidth = 960;
const imageHeight = 540;

for (let i = 0; i < sliderItems.length; i++) {
  let li = document.createElement("li");
  li.classList.add("control");
  li.id = "control" + (i + 1);
  sliderControls.append(li);
}

var image = {
  element: document.querySelector("#image4"),
  width: imageWidth,
  height: imageHeight,
  swidth: imageWidth / slideSplits,
  sheight: imageHeight / slideSplits,
};

const div = document.querySelector('.teste');


for (let row = slideSplits; row > 0; row--) {

  for (let column = slideSplits; column > 0; column--) {

    let span = document.createElement('span');
    span.setAttribute('name', `${row}-${column}`);
    span.style.background = `url(${image.element.src}) ${image.swidth * column}px ${image.sheight * row}px `;
    span.style.height = `${image.sheight}px`;
    span.style.width = `${image.swidth}px`;

    div.append(span);

    // console.log(image.id);
  }
}

for (let row = 0; row < slideSplits; row++) {
  for (let column = 0; column < slideSplits; column++) {

    let span = document.createElement('span');
    span.setAttribute('name', `${row}-${column}`);
    span.style.background = `url(${image.element.src}) -${image.swidth * column}px -${image.sheight * row}px `;
    span.style.height = `${image.sheight}px`;
    span.style.width = `${image.swidth}px`;

    div.append(span);

    // console.log(image.id);
  }
}
