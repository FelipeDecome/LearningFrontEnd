const wrapBoxes = document.querySelector('ul.wrap-boxes');

const boxesQuantity = 15;
const colors = ['#B21CB5', '#05C6BD'];
const minSize = 120;
const maxSize = 10;
const minDelay = 0;
const maxDelay = 5000;
const minDuration = 5000;
const maxDuration = 15000;


function randomColor () {
    let rdmNum = Math.floor(Math.random() * 16);

    if ((rdmNum % 2) == 0) {
        return colors[0];
    } else {
        return colors[1]
    }
}

function randomReverse() {
    let rdmNum = Math.floor(Math.random() * 16);

    if ((rdmNum % 2) == 0) {
        return 'reverse';
    } else {
        return 'normal';
    }
}

function randomSize() {
    let rdmNum = Math.floor(Math.random() * (maxSize - minSize) + minSize);
    return rdmNum;
  }

function randomOpacity() {
    let rdmNum = (Math.floor(Math.random() * (10 - 1) + 1)) / 10;
    return rdmNum;
}

function randomPosition() {
    let rdmNum = Math.floor(Math.random() * (99 - 1) + 1);
    return rdmNum;
}

function randomDuration() {
    let rdmNum = Math.floor(Math.random() * (maxDuration - minDuration) + minDuration);
    return rdmNum;
}

function randomDelay() {
    let rdmNum = Math.floor(Math.random() * (maxDelay - minDelay) + minDelay);
    return rdmNum;
}

for (let i = 1;i < boxesQuantity; i++) {

    const li = document.createElement('li');

    let color = randomColor();
    let size = randomSize();
    let opacity = randomOpacity();
    let position = randomPosition();
    let duration = randomDuration();
    let delay = randomDelay();
    let reverse = randomReverse();


    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left = `${position}%`;

    li.style.opacity = opacity;
    li.style.background = color;

    li.style.animationDuration = `${duration}ms`;
    li.style.animationDelay = `${delay}ms`;
    li.style.animationDirection = reverse;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    li.style.transition = `all ease ${duration}`;

    wrapBoxes.appendChild(li);

    console.log(randomColor(), randomSize(), randomOpacity());
}
