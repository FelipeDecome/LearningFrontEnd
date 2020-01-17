const btnSend = document.querySelector('.fields .btn#send');

btnSend.addEventListener('mouseover', function () {

    removeHoverOut();
    btnSend.classList.add('hover');

});

btnSend.addEventListener('mouseout', function () {

    removeHoverOut();
    btnSend.classList.add('out');

});

function removeHoverOut() {

    if (btnSend.classList.contains('hover')) {
        btnSend.classList.remove('hover');
    }

    if (btnSend.classList.contains('out')) {
        btnSend.classList.remove('out');
    }
}

function toggleFocusInput(input) {

    let parent = input.parentNode;

    resetToggleFocusInput(parent);

    parent.classList.add('focus');

}

function resetToggleFocusInput() {

    const inputs = document.querySelectorAll('.fields input');
    for (input of inputs) {

        let parent = input.parentNode;
        if (parent.classList.contains('focus')) {
            parent.classList.remove('focus');
        }else if (parent.classList.contains('out')) {
            parent.classList.remove('out');
        }

    }
}
