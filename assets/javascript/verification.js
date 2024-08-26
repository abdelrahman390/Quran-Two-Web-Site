const inputs = document.querySelectorAll('.verification .max-width .container .right .cont input');
const button = document.querySelector('.verification .max-width .container .right .button');

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 8 || event.which === 8 || event.keyCode === 46 || event.which === 46) {
        // // Add your code to execute when the backspace key is pressed
        if (document.activeElement.dataset.number === '4') {
            inputs[3].focus();
            return
        }
        if (document.activeElement.dataset.number === '3') {
            inputs[3].focus();
            return
        }
        if (document.activeElement.dataset.number === '2') {
            inputs[2].focus();
            return
        }
        if (document.activeElement.dataset.number === '1') {
            inputs[1].value = ''
            inputs[0].value = ''
            inputs[1].focus();
            return
        }
    }

});

inputs.forEach((element) => {
    element.onkeyup = () => {
        if (inputs[0].value.length !== 0 && inputs[1].value.length !== 0 && inputs[2].value.length !== 0 && inputs[3].value.length !== 0) {
            button.style.cssText = 'pointer-events: auto; opacity: 1;'
        } else {
            button.style.cssText = 'pointer-events: none; opacity: 0.5'
        }
        if (inputs[3].value.length !== 0) {
            inputs[2].focus();
        }
        if (inputs[2].value.length !== 0) {
            inputs[1].focus();
        }
        if (inputs[1].value.length !== 0) {
            inputs[0].focus();
        }
        if (inputs[0].value.length === 2) {
            inputs[0].value = inputs[0].value.slice(0, -1)
        }

        // first case Example => If input 3 from the left is blank and user put a number in input 4
        if (element.dataset.number === '1' && inputs[1].value.length === 0 && inputs[2].value.length !== 0 && inputs[3].value.length !== 0) {
            console.log('doneThree')
            inputs[1].value = element.value
            element.value = ''
            inputs[0].focus()
        }

        // second case Example => If input 2 from the left is blank and input 1 not empty and user put a number in input 3 or 4
        if (element.dataset.number !== '4' && element.dataset.number !== '3' && inputs[3].value.length !== 0 && inputs[2].value.length === 0) {
            console.log('doneTwo')
            inputs[2].value = element.value
            element.value = ''
            inputs[1].focus()
        }

        // first case Example => If input 1 from the left is blank and user put a number in any input but not input 1
        if (element.dataset.number !== '4' && inputs[3].value.length === 0) {
            console.log('done')
            inputs[3].value = element.value
            element.value = ''
            inputs[2].focus()
        }

    }

});