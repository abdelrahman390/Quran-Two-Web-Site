let logOutButton = document.querySelector(' .max-width .container .right .cont.logoutButton')

logOutButton.onclick = () => {
    doneMessage('../../../assets/images/alarm.svg', 'هل انت متأكد من تسجيل الخروج', `../../../../pages/account/admin-account/Login-as-admin.html`, "تسجيل الخروج", 'Done', 'Done');
}