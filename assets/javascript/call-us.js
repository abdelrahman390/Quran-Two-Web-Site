
const technicalSupportButton = document.querySelector('.call-us .max-width .mainBox form button');
const form = document.querySelector('.call-us .max-width .mainBox form')
technicalSupportButton.onclick = () => {
    // Check if the form is valid
    if (form.checkValidity() === true) {
        event.preventDefault();
        event.stopPropagation();
        doneMessage('../assets/images/Done.webp', 'تم إرسال رسالتك وسوف يتم التواصل معك في أقرب وقت', "call-us.html", 'حسناً')
    }
}