let packagesDeleteButton = document.querySelectorAll(".account-subscription .max-width .container .lift .box button")

packagesDeleteButton.forEach(element => {
    element.onclick = () => {
        doneMessage('../../assets/images/alarm.svg', 'هل انت متأكد من مسح الباقة', "", 'موافق', '', 'done')
    }
});
