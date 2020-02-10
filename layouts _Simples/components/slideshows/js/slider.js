const slideWrapper = document.querySelector('.image-list');
const sliderItems = slideWrapper.children;

const sliderControls = document.querySelector('.control-list');

const slideDelay = 1000;

for (let i = 0; i < sliderItems.length; i++) {

  let li = document.createElement('li');
  li.classList.add('control');
  li.id = 'control' + (i + 1);
  sliderControls.append(li);

}
