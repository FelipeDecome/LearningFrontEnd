window.onload = function () {
    const videos = document.querySelectorAll("video");
    const wrappers = document.querySelectorAll(".main-wrapper");

    setTimeout(() => {
        executeVideoOnScrollOver(wrappers, videos);
    }, 500);

    window.addEventListener('scroll', function () {
        executeVideoOnScrollOver(wrappers, videos);
    });
};

function executeVideoOnScrollOver(elementsWrapper, elementsVideo) {
    for (let i = 0; i < elementsWrapper.length; i++) {
        let wrapperPos = elementsWrapper[i].getBoundingClientRect();

        if (wrapperPos.y < wrapperPos.height / 2 && wrapperPos.y > wrapperPos.height / -2) {
            if (elementsVideo[i].getAttribute('play-state') !== 'done') {
                elementsVideo[i].play();
                elementsVideo[i].setAttribute('play-state', 'done');
            }
        }

    }
}

function executeOnPlay(element) {
    let infoWrappers = document.querySelectorAll('.info-wrapper');
    for (let i = 0; i < infoWrappers.length; i++) {
        infoWrappers[i].classList.add('animate');
    }
}
