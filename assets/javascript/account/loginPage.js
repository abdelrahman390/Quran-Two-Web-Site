

let passwordInputs = document.querySelector('.max-width .container .right form .password'),
    passwordHide = document.querySelector('.max-width .container .right form .password i:nth-child(3)');

passwordHide.onclick = () => {
    if (passwordHide.parentElement.children[1].type === 'text') {
        passwordHide.parentElement.children[1].type = "password"
    } else {
        passwordHide.parentElement.children[1].type = "text"
    }
}