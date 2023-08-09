

let inputs = document.querySelectorAll('.max-width input'),
    alarmMessage = document.querySelector('.max-width .alarm'),
    button = document.querySelector('.max-width .container .right a');

inputs.forEach(element => {
    element.addEventListener('input', function (event) {

        if (inputs[0].value.length === inputs[1].value.length) {

            if (inputs[0].value === inputs[1].value) {
                button.style.cssText = 'opacity: 1; pointer-events: painted;';
                alarmMessage.style.cssText += 'display: none;';
                inputs[1].style.cssText = 'border: 1px solid var(--primary-color)';
            } else if (inputs[0].value !== inputs[1].value) {
                button.style.cssText = 'opacity: 0.5; pointer-events: none;';
                alarmMessage.style.cssText += 'display: unset;';
                inputs[1].style.cssText = 'border: 2px solid red';
            }
        } else {
            button.style.cssText = 'opacity: 0.5; pointer-events: none;'
        }

    });
});
const accountNewPasswordButtons = document.querySelector('.max-width .container .right a');
accountNewPasswordButtons.onclick = () => {
    doneMessage('../../assets/images/Done.png', 'تم تغيير كلمة المرور بنجاح', "account.html", 'حسناً')
}
