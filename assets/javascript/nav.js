
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
            ul.style.cssText = 'left: 100%'
            burger.style.cssText = ""

        } else if (!(burger.classList.contains("checked"))) {
            burger.classList.add("checked")

            if (width < 900 && width > 600) {
                ul.style.cssText = 'display: flex; flex-direction: row; padding: 15px; border-top: 1px solid white;'
            } else if (width < 600){
                burger.style.cssText = "z-index: 2; position: fixed; right: 10px; top: 20px;"
                function headerTimeOut() {
                    ul.style.cssText = ' left: 0%;'
                }
                headerTimeOut()
            }

        }
    }
}