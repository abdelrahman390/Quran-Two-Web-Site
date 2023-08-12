let saveButton = document.querySelector('.max-width .buttons button'),
    form = document.querySelector('.max-width form');

saveButton.onclick = () => {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        if (form.checkValidity()) {
            // If Form is valid
            doneMessage('../../../../assets/images/Done.png', 'تم ', "", 'إغلاق')
        }

    });
}
