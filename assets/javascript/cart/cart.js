var packageRemoveButton = document.querySelectorAll('.cart .max-width .container > .right .box .exit'),
    deleteButtonOnMessage = document.querySelector('.overLay .container a'),
    overLay = document.querySelector('.overLay '),
    removeBox = '',
    packages = document.querySelectorAll('.cart .max-width .container > .right .box'),
    packagesNumber = document.querySelector('.cart .max-width .container > .right > h2 span');

packageRemoveButton.forEach(element => {
    element.onclick = () => {
        doneMessage('../../assets/images/alarm.svg', 'هل انت متأكد من حذف الباقة', "#", 'حذف', "", "done");
        removeBox = element.parentElement;
        removePackage();
    }
});

function removePackage() {
    deleteButtonOnMessage = document.querySelector('.overLay .container a'),
        overLay = document.querySelector('.overLay ');
    deleteButtonOnMessage.addEventListener('click', function () {
        removeBox.remove();
        overLay.remove();
        countpackages();
    })
}

function countpackages() {
    packages = document.querySelectorAll('.cart .max-width .container > .right .box');
    packagesNumber.innerHTML = packages.length
}
countpackages()
