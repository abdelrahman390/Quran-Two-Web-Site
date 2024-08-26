
// ############## window.length ###############
const width = window.innerWidth

let header = document.querySelector('header'),
    lis = document.querySelectorAll("header ul li"),
    burger = document.querySelector('header .max-width .right .links_container .burgerIcon'),
    ul = document.querySelector('header .right .links_container ul'),
    settingIcon = document.querySelector('header .max-width .right .links_container .setting span'),
    settingIconBox = document.querySelector('header .right .links_container .setting .box'),
    settingIconBoxColors = document.querySelectorAll('header .right .links_container .setting .box span');

if (width < 1150) {
    burger.onclick = function burgerClick() {

        if (burger.classList.contains("checked")) {
            burger.classList.remove("checked")
            ul.style.cssText = 'max-height: 0; padding: 0; transition: 1s; display: flex; border-top: 1px solid black;'
            header.style.marginBottom = '0'
            header.style.transition = '1s'
            ul.style.display = 'none'

        } else if (!(burger.classList.contains("checked"))) {
            burger.classList.add("checked")

            if (width < 900) {
                header.style.marginBottom = '320px'
            } else {
                header.style.marginBottom = '90px'
            }

            header.style.transition = '0.7s'

            function headerTimeOut() {
                ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s;  border-top: 1px solid black;'
            }
            setTimeout(headerTimeOut, 500);

        }
    }
}