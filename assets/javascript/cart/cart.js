let packageRemoveButton = document.querySelectorAll('.cart .max-width .container > .right .box .exit'),
    deleteButtonOnMessage = document.querySelector('.overLay .container a '),
    overLay = document.querySelector('.overLay '),
    removeBox = '';

packageRemoveButton.forEach(element => {
    element.onclick = () => {
        doneMessage('../../assets/images/alarm.svg', 'هل انت متأكد من حذف الباقة', "", 'حذف', "", "done");
        removeBox = element.parentElement;
    }
});

deleteButtonOnMessage.onclick = () => {
    removeBox.remove();
}