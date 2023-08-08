const accountButtons = document.querySelector('.account .max-width .container .lift button');
let logOutButton = document.querySelector(' .max-width .container .right .cont.logoutButton')


accountButtons.onclick = () => {
    doneMessage('../../assets/images/Done.png', 'تمت الحفظ بنجاح', "account.html", 'حسناً')
}
