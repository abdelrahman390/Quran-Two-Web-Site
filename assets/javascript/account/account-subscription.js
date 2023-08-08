let packegesDeleteButton = document.querySelectorAll(".account-subscription .max-width .container .lift .box button")

packegesDeleteButton.forEach(element => {
    element.onclick = () => {
        doneMessage('../../assets/images/alarm.svg', 'هل انت متأكد من مسح الباقة', "", 'موافق', '', 'done')
    }
});

function FixWhiteSpace() {
    let errorFixFile = document.createElement('script')
    errorFixFile.src = `../../assets/javascript/whiteSpaceErrorFix.js`
    setTimeout(function () {
        document.head.appendChild(errorFixFile)
    }, 1000);
}
FixWhiteSpace()