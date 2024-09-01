let inputs = document.querySelectorAll(".max-width input"),
    emailInput = document.querySelector('.max-width input[type=email]'),
    alarmMessage = document.querySelector('.max-width .alarm'),
    button = document.querySelector('.createAccount .max-width .container .right > a');

inputs.forEach(element => {
    element.addEventListener('input', function (event) {
        function handleClick() {
            const inputsCheckState = [...inputs].every(input => {
                return input.value.length !== 0;
            });

            if (inputsCheckState === true) {
                if (inputs[2].value.length === inputs[3].value.length) {

                    if (inputs[2].value === inputs[3].value) {
                        button.style.cssText = 'opacity: 1; pointer-events: painted;';
                        alarmMessage.style.cssText += 'display: none;';
                        inputs[3].style.cssText = 'border: 1px solid var(--primary-color)';
                    } else if (inputs[2].value !== inputs[3].value) {
                        button.style.cssText = 'opacity: 0.5; pointer-events: none;';
                        alarmMessage.style.cssText += 'display: unset;';
                        inputs[3].style.cssText = 'border: 2px solid red';
                        inputs[3].parentElement.style.cssText += 'margin-bottom: 20px;'
                    }
                } else {
                    button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                }
            } else {
                button.style.cssText = 'opacity: 0.5; pointer-events: none;'
            }
        }
        handleClick()

    });
});