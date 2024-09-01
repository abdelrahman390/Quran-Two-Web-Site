let inputs = document.querySelectorAll('.max-width input'),
    alarmMessage = document.querySelector('.max-width .alarm'),
    button = document.querySelector('.max-width .container .lift button'),
    accountNewPasswordButtons = document.querySelector(' .max-width .container .lift button');

inputs.forEach(element => {
    element.addEventListener('input', function (event) {
        function handleClick() {
            const inputsCheckState = [...inputs].every(input => {
                return input.value.length !== 0;
            });

            if (inputsCheckState === true) {
                if (inputs[1].value.length === inputs[2].value.length) {

                    if (inputs[1].value === inputs[2].value) {
                        button.style.cssText = 'opacity: 1; pointer-events: painted;';
                        alarmMessage.style.cssText += 'display: none; padding: 0; background-color: unset;';
                        inputs[2].style.cssText = 'border: 1px solid var(--primary-color); margin-bottom: 0;';
                    } else if (inputs[1].value !== inputs[2].value) {
                        button.style.cssText = 'opacity: 0.5; pointer-events: none;';
                        alarmMessage.style.cssText += 'display: unset;background-color: unset;';
                        inputs[2].style.cssText = 'border: 2px solid red; margin-bottom: 30px;';
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

accountNewPasswordButtons.onclick = () => {
    doneMessage('../../../../assets/images/Done.webp', 'تم تغيير كلمة المرور بنجاح', "../../../../pages/account/admin-account/account-admin.html", 'حسناً')
}


