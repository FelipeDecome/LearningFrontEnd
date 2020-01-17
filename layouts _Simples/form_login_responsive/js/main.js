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

/* function toggleFocusInput(input) {
    let parent = input.parentNode;

    if (input.classList.contains('out') || !input.classList.contains('focus')) {

        resetToggleFocusInput();

        parent.classList.add('focus');

    } else if (input.classList.contains('focus')) {

        resetToggleFocusInput();

        parent.classList.add('out');
    }



}

function resetToggleFocusInput() {

    // const inputs = document.querySelectorAll('.fields input');
    // for (input of inputs) {

    //     let parent = input.parentNode;
    //     if (parent.classList.contains('focus')) {
    //         parent.classList.remove('focus');
    //     } else if (parent.classList.contains('out')) {
    //         parent.classList.remove('out');
    //     }

    // }

    let inputFocus = document.querySelector('.fields.focus input');
    let inputOut = document.querySelector('.fields.out input');

    console.log(inputOut, inputFocus);

    if (inputFocus != null) {

        let parent = inputFocus.parentNode;

        parent.classList.remove('focus');
        parent.classList.add('out');

    } else if (inputOut != null) {

        let parent = inputOut.parentNode;

        parent.classList.remove('out');

    }


}
 */
