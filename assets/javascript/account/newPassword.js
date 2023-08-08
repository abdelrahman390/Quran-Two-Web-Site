

let inputs = document.querySelectorAll('.max-width input')
let button = document.querySelector('.max-width .container .right a')

inputs.forEach(element => {
    element.addEventListener('input', function (event) {

        if (inputs[0].value === inputs[1].value) {
            button.style.cssText = 'opacity: 1; pointer-events: painted'
            console.log('done')
        } else if (inputs[0].value !== inputs[1].value) {
            button.style.cssText = 'opacity: 0.5; pointer-events: none'
        }

    });
});
const accountNewPasswordButtons = document.querySelector('.max-width .container .right a');
accountNewPasswordButtons.onclick = () => {
    doneMessage('../../assets/images/Done.png', 'تم تغيير كلمة المرور بنجاح', "account.html", 'حسناً')
}
