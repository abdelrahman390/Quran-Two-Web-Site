const technicalSupportButton = document.querySelector('.technical-support .max-width .container .right form button ');
const form = document.querySelector('.technical-support .max-width .container .right form')

technicalSupportButton.onclick = () => {

    // Check if the form is valid
    if (form.checkValidity() === true) {
        event.preventDefault();
        event.stopPropagation();
        doneMessage('../assets/images/Done.webp', 'تم إرسال رسالتك وسوف يتم التواصل معك في أقرب وقت', "technical-support.html", 'حسناً')
    }
}