let inputs = document.querySelectorAll(".max-width input")
let emailInput = document.querySelector('.max-width input[type=email]')
let button = document.querySelector('.createAccount .max-width .container .right > a')

inputs.forEach(element => {
    element.addEventListener('input', function (event) {
        function handleClick() {
            const inputsCheckState = [...inputs].every(input => {
                return input.value.length !== 0;
            });

            if (inputsCheckState === true) {
                if (emailInput.checkValidity()) {
                    if (inputs[2].value === inputs[3].value) {
                        button.style.cssText = 'opacity: 1; pointer-events: painted;'
                    } else {
                        button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                    }
                }
            } else {
                button.style.cssText = 'opacity: 0.5; pointer-events: none;'
            }
        }
        handleClick()

    });
});