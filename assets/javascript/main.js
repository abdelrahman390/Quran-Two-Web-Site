
// ############## window.length ###############
const width = window.innerWidth || document.documentElement.clientWidth;
// ############## current Page Name ###############
const currentPageName = window.location.pathname.split('/').pop();

let toggleBox,
    packegesToggleRight,
    packegesToggleLeft,
    packegesFirstPlansCont,
    packegesSecondPlansCont,
    packagesButtons;

if (currentPageName === 'index.html') {
    toggleBox = document.querySelector(".mainPage .packeges .max-width .toggle-box"),
        packegesToggleRight = document.querySelector(".mainPage .packeges .max-width .toggle-box .right"),
        packegesToggleLeft = document.querySelector(".mainPage .packeges .max-width .toggle-box .left"),
        packegesFirstPlansCont = document.querySelector(".mainPage .packeges .packeges-cont"),
        packegesSecondPlansCont = document.querySelector(".mainPage .packeges .packeges-cont-second");
    packagesButtons = document.querySelectorAll('.mainPage .packeges .max-width .packeges-cont .left-box button, .mainPage .packeges .max-width .packeges-cont .mid-box button, .mainPage .packeges .max-width .packeges-cont .right-box button, .mainPage .packeges .max-width .packeges-cont-second .left-box button, .mainPage .packeges .max-width .packeges-cont-second .mid-box button, .mainPage .packeges .max-width .packeges-cont-second .right-box button');
}
// ###################### packeges Page ######################
if (currentPageName === 'packeges.html') {
    toggleBox = document.querySelector(".packeges .max-width .toggle-box"),
        packegesToggleRight = document.querySelector(".packeges .max-width .toggle-box .right"),
        packegesToggleLeft = document.querySelector(".packeges .max-width .toggle-box .left"),
        packegesFirstPlansCont = document.querySelector(".packeges .packeges-cont"),
        packegesSecondPlansCont = document.querySelector(".packeges .packeges-cont-second");
    packagesButtons = document.querySelectorAll('.packeges .max-width .packeges-cont .left-box button, .packeges .max-width .packeges-cont .mid-box button, .packeges .max-width .packeges-cont .right-box button, .packeges .max-width .packeges-cont-second .left-box button, .packeges .max-width .packeges-cont-second .mid-box button, .packeges .max-width .packeges-cont-second .right-box button');
}

let header = document.querySelector('header'),
    lis = document.querySelectorAll("header ul li"),
    burger = document.querySelector('header .max-width .links_container .burgerIcon'),
    ul = document.querySelector('header .links_container ul'),
    settingIcon = document.querySelector('header .max-width .links_container .setting span'),
    settingIconBox = document.querySelector('header .links_container .setting .box'),
    settingIconBoxColors = document.querySelectorAll('header .links_container .setting .box span');
// #############
let systemsMainTitle = document.querySelector(".systems .max-width > h1"),
    systemsMainBoxes = document.querySelectorAll(".systems .max-width .boxes-container > .box"),
    systemsMainInsideBoxes = document.querySelectorAll(".systems .max-width .boxes-container > .box .main"),
    systemsSecondBoxes = document.querySelectorAll(".systems .max-width .boxes-container > .box .second-page"),
    systemsSecondBoxesPrevious = document.querySelectorAll(".systems .boxes-container > .box .second-page .links-cont h4:last-child a");
// ##############
let FrequentlyAskedQuestionsBoxes = document.querySelectorAll('.Frequently-Asked-Questions .max-width .boxes-cont .box'),
    FrequentlyAskedQuestionsExpandedText = document.querySelectorAll('.Frequently-Asked-Questions .max-width .boxes-cont .box .opened');
// ##############
let logOutButton = document.querySelector(' .max-width .container .right .cont.logoutButton')


function doneMessage(amgSrc, messageCont, nextPage, buttonText, cancelButton, cancelButtonReDirect) {
    const messageOverLay = document.createElement('div');
    messageOverLay.classList = 'overLay';

    const messageBox = document.createElement('div');
    messageBox.classList = 'container';

    const img = document.createElement("img");
    img.setAttribute("src", `${amgSrc}`);
    messageBox.appendChild(img)

    const H2Text = document.createElement('h2')
    H2Text.innerText = messageCont
    messageBox.appendChild(H2Text)

    const button = document.createElement('a')
    const buttonInnerText = document.createTextNode(buttonText)
    button.appendChild(buttonInnerText)
    button.setAttribute("href", `${nextPage}`);
    messageBox.appendChild(button)

    messageOverLay.appendChild(messageBox)
    document.body.appendChild(messageOverLay)

    if (cancelButton !== undefined && cancelButtonReDirect !== undefined) {
        const cancelButtonDiv = document.createElement('div')
        cancelButtonDiv.classList.add('cancel')
        cancelButtonDiv.innerHTML = `<span class="material-symbols-outlined">
                                        close
                                    </span>`
        messageBox.appendChild(cancelButtonDiv);
        const spanButton = document.querySelector('.overLay .container .cancel span')
        spanButton.onclick = () => {
            window.location.reload()
        }
    }
}

// ############################################# Setting Page Start ###################################################
document.documentElement.style.setProperty(`--primary-color`, localStorage.getItem(`--primary-color`) !== null ? localStorage.getItem(`--primary-color`) : '#07d8a6')
document.documentElement.style.setProperty(`--NavBar-color`, localStorage.getItem(`--NavBar-color`) !== null ? localStorage.getItem(`--NavBar-color`) : '#FFFFFF')
document.documentElement.style.setProperty(`--black-color`, localStorage.getItem(`--black-color`) !== null ? localStorage.getItem(`--black-color`) : '#000000')
document.documentElement.style.setProperty(`--title-color`, localStorage.getItem(`--title-color`) !== null ? localStorage.getItem(`--title-color`) : '#000000')
if (currentPageName === 'account-setting.html') {

    let mainColorFontColor = document.getElementById('mainColorFontColor')
    let navBarFontColor = document.getElementById('navBarFontColor')
    let fontsColor = document.getElementById('fontsColor')
    let MainTitleColor = document.getElementById('MainTitleColor')
    let resetButton = document.getElementById('resetButton')
    let saveButton = document.getElementById('saveButton')

    mainColorFontColor.value = localStorage.getItem(`--primary-color`) !== null ? localStorage.getItem(`--primary-color`) : '#24b151';
    navBarFontColor.value = localStorage.getItem(`--NavBar-color`) !== null ? localStorage.getItem(`--NavBar-color`) : '#FFFFFF';
    fontsColor.value = localStorage.getItem(`--black-color`) !== null ? localStorage.getItem(`--black-color`) : '#000000';
    MainTitleColor.value = localStorage.getItem(`--title-color`) !== null ? localStorage.getItem(`--title-color`) : '#000000';

    mainColorFontColor.addEventListener("input", (event) => {
        document.documentElement.style.setProperty(`--primary-color`, event.target.value)
    },
        false,
    );

    navBarFontColor.addEventListener("input", (event) => {
        document.documentElement.style.setProperty(`--NavBar-color`, event.target.value)
    },
        false,
    );

    fontsColor.addEventListener("input", (event) => {
        document.documentElement.style.setProperty(`--black-color`, event.target.value)
    },
        false,
    );

    MainTitleColor.addEventListener("input", (event) => {
        document.documentElement.style.setProperty(`--title-color`, event.target.value)
    },
        false,
    );

    saveButton.onclick = () => {
        localStorage.setItem(`--title-color`, MainTitleColor.value)
        localStorage.setItem(`--black-color`, fontsColor.value)
        localStorage.setItem(`--NavBar-color`, navBarFontColor.value)
        localStorage.setItem(`--primary-color`, mainColorFontColor.value)
        doneMessage('../../assets/images/Done.png', 'تم الحفظ', "account-setting.html", "تم")
    }

    resetButton.onclick = () => {
        function reset() {
            localStorage.setItem(`--title-color`, '#000000')
            localStorage.setItem(`--black-color`, '#000000')
            localStorage.setItem(`--NavBar-color`, '#FFFFFF')
            localStorage.setItem(`--primary-color`, '#07D8A6')
            window.location.reload()
        }
        doneMessage('../../assets/images/alarm.svg', 'هل انت متأكد من أعاده ضبط الإعدادات', ``, "إعادة ضبط", 'Done', 'Done')
        const messageButton = document.querySelector('.overLay .container a')
        messageButton.onclick = () => {
            reset()
        }
    }

}
settingIconBoxColors.forEach(element => {
    settingIconBoxColors[0].setAttribute('data-color', 'red')
    settingIconBoxColors[1].setAttribute('data-color', 'green')
    settingIconBoxColors[2].setAttribute('data-color', 'aquamarine')
    element.onclick = () => {
        document.documentElement.style.setProperty(`--primary-color`, element.getAttribute('data-color'));
        localStorage.setItem(`--primary-color`, element.getAttribute('data-color'));
    }
});
// ############################################# Setting Page End ###################################################


if (width < 1150) {
    burger.onclick = function burgerClick() {

        if (burger.classList.contains("checked")) {
            burger.classList.remove("checked")
            ul.style.cssText = 'max-height: 0; padding: 0; transition: 1s; display: flex;'
            header.style.marginBottom = '0'
            header.style.transition = '1s'
            ul.style.display = 'none'
            settingIcon.style.display = 'none';

            settingIconBox.classList.remove('open')

        } else if (!(burger.classList.contains("checked"))) {
            burger.classList.add("checked")

            if (width < 900) {
                header.style.marginBottom = '320px';
            } else {
                header.style.marginBottom = '100px'
            }

            header.style.transition = '1s'

            function headerTimeOut() {
                if (width < 900) {
                    ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s; padding-right: 75px;';
                } else {
                    ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s; padding-right: 75px;';
                }
            }
            setTimeout(headerTimeOut, 500);

        }
    }
}


if (currentPageName === 'technical-support.html') {
    const technicalSupportButton = document.querySelector('.technical-support .max-width .container .right form button ');
    const form = document.querySelector('.technical-support .max-width .container .right form')

    technicalSupportButton.onclick = () => {

        // Check if the form is valid
        if (form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();
            doneMessage('../assets/images/Done.png', 'تم إرسال رسالتك وسوف يتم التواصل معك في أقرب وقت', "technical-support.html", 'حسناً')
        }
    }
}

if (currentPageName === 'call-us.html') {
    const technicalSupportButton = document.querySelector('.call-us .max-width .mainBox form button');
    const form = document.querySelector('.call-us .max-width .mainBox form')
    technicalSupportButton.onclick = () => {
        // Check if the form is valid
        if (form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();
            doneMessage('../assets/images/Done.png', 'تم إرسال رسالتك وسوف يتم التواصل معك في أقرب وقت', "call-us.html", 'حسناً')
        }
    }
}

if (currentPageName === 'pay.html') {
    const payButton = document.querySelector('.pay .max-width .container > .right > .box button');
    payButton.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تم الدفع والاشتراك في الخدمات بنجاح', "../../index.html", 'اشتراكاتي')
    }
    const expireDate = document.querySelector('.pay .max-width .container > .right > .box .inputs .cont:nth-child(3) input')
    const regex = /^[\d\/]+$/; // regex to match numbers

    expireDate.onkeyup = function (e) {
        // console.log(regex.test(e.target.value))
        if (regex.test(e.target.value)) {
            if (e.target.value >= 2) {
                if (e.target.value[0] > 1) {
                    expireDate.value = `0${e.target.value[0]}`
                }
                if (e.target.value.length === 2) {
                    expireDate.value = `${e.target.value}/`
                    // console.log(expireDate.value)
                    // console.log(expireDate.value.length)
                }
            } else if (e.target.value.length === 6) {
                expireDate.value = e.target.value.slice(0, -1);
            } else if (e.target.value.length === 3) {
                expireDate.addEventListener('onKeydown', (event) => {
                    if (event.key === "Delete") {
                        expireDate.value = ''
                    }

                });
                console.log(e.target.value)
            }
        } else {
            expireDate.value = e.target.value.slice(0, -1);
        }

        // console.log(e.target.value.length)
    }

}

if (currentPageName === 'Add-a-central-test-and-register-for-the-test.html') {
    const centralTest = document.querySelector('.Add-a-central-test-and-register-for-the-test .max-width .bottom-container button');
    centralTest.onclick = () => {
        doneMessage('../../../../assets/images/Done.png', 'تمت حفظ التعديلات بنجاح', "Add-a-central-test-and-register-for-the-test.html", 'حسناً')
    }
}

if (currentPageName === 'systems.html') {
    function systemsCards() {
        systemsMainInsideBoxes.forEach((element, index) => {
            element.onclick = (e) => {
                systemsMainTitle.style.display = 'none'
                systemsMainInsideBoxes.forEach(element => {
                    element.style.display = 'none'
                });
                systemsMainBoxes.forEach(element => {
                    element.style.display = 'none'
                });
                systemsMainBoxes[index].style.display = 'flex'
                e.currentTarget.style.display = 'flex'
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.cssText = 'display: flex !important'
            }
        });
    }
    systemsCards()
    // handle third page nested pages
    systemsSecondBoxesPrevious.forEach((element, index) => {
        element.onclick = (e) => {
            console.log(index)
            systemsSecondBoxes[index].style.removeProperty("display")
            systemsMainTitle.style.display = 'flex'

            systemsMainBoxes.forEach(element => {
                element.style.display = 'flex'
            });
            systemsMainInsideBoxes.forEach(element => {
                element.style.display = 'flex'
            });
        }
    });

}

if (currentPageName === 'Frequently-Asked-Questions.html') {
    FrequentlyAskedQuestionsBoxes.forEach((element, index) => {
        element.onclick = (e) => {
            if (!(e.currentTarget.classList.contains('checked'))) {
                FrequentlyAskedQuestionsExpandedText[index].style.cssText = 'max-height: 160px; padding: 25px;'
                e.currentTarget.classList.add("checked")
            } else if (e.currentTarget.classList.contains('checked')) {
                FrequentlyAskedQuestionsExpandedText[index].style.cssText = ' '
                e.currentTarget.classList.remove("checked")
            }
        }
    });

}

if (currentPageName === 'account.html') {
    const accountButtons = document.querySelector('.account .max-width .container .lift button');
    accountButtons.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تمت العملية بنجاح', "account.html", 'حسناً')
    }
}

if (currentPageName === 'account-new-password.html') {
    const accountNewPasswordButtons = document.querySelector('.account-new-password .max-width .container .lift button');
    accountNewPasswordButtons.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تم تغيير كلمة المرور بنجاح', "account.html", 'حسناً')
    }
}

if (currentPageName === 'newPassword.html') {
    const newPasswordButtons = document.querySelector('.newPassword .container .right .button');
    newPasswordButtons.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تم تغيير كلمة المرور بنجاح', "../account/loginPage.html", 'تسجيل دخول')
    }
}

const currentPageNameForNestedPages = window.location.pathname.split('/');
if (currentPageNameForNestedPages[currentPageNameForNestedPages.length - 2] === 'Nested') {

    const systemsSubmitButtons = document.querySelectorAll('.systemsSubmitButtons');
    systemsSubmitButtons.forEach(element => {
        element.onclick = () => {
            doneMessage('../../../../assets/images/Done.png', 'تمت العملية بنجاح', '', 'حسناً')
        }
    });
}

if (width < 1150) {
    burger.onclick = function burgerClick() {
        // console.log('burger')

        if (burger.classList.contains("checked")) {
            burger.classList.remove("checked")
            ul.style.cssText = 'max-height: 0; padding: 0; transition: 1s; display: flex;'
            header.style.marginBottom = '0'
            header.style.transition = '1s'
            a.style.display = 'none'
            // function headerTimeOut() {
            ul.style.display = 'none'
            // }
            // setTimeout(headerTimeOut, 500);

        } else if (!(burger.classList.contains("checked"))) {
            burger.classList.add("checked")
            // ul.style.display = 'flex'

            if (width < 900) {
                header.style.marginBottom = '320px'
            } else {
                header.style.marginBottom = '90px'
            }

            header.style.transition = '1s'

            function headerTimeOut() {
                ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s;'
                a.style.display = 'unset'
            }
            setTimeout(headerTimeOut, 500);

            function headerTimeOutTWo() {
                a.style.display = 'unset'
                // ul.style.display = 'flex'
                // ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s;'
            }
            setTimeout(headerTimeOutTWo, 300);

        }


    }
}

if (currentPageName === 'index.html' || currentPageName === 'packeges.html') {
    function mainPageToggle() {
        toggleBox.childNodes.forEach(element => {
            element.onclick = (e) => {
                if (e.currentTarget.classList.contains("right")) {
                    packegesToggleLeft.classList.remove("checked")
                    packegesToggleRight.classList.add("checked")
                    packegesSecondPlansCont.style.display = "none"
                    packegesFirstPlansCont.style.display = "flex"
                } else if (e.currentTarget.classList.contains("left")) {
                    packegesToggleRight.classList.remove("checked")
                    packegesToggleLeft.classList.add("checked")
                    packegesFirstPlansCont.style.display = "none"
                    packegesSecondPlansCont.style.cssText = "display: unset !important"
                }
            }
        });
    }
    mainPageToggle()
    packagesButtons.forEach(element => {
        element.onclick = () => {
            doneMessage('../assets/images/Done.png', 'تم إضافة اشتراك الباقة إلى السلة', "../pages/cart/cart.html", 'حسناً')
        }
    });

    if (currentPageName === 'index.html') {
        let ExtraPackeges = document.querySelectorAll('.mainPage .Comprehensive-services-in-the-association-package .text-cont button')
        ExtraPackeges.forEach(element => {
            element.onclick = () => {
                doneMessage('../assets/images/Done.png', 'تم إضافة اشتراك الباقة إلى السلة', "../pages/cart/cart.html", 'حسناً')
            }
        });
    }
}

if (currentPageName === 'systems.html') {
    function systemsCards() {
        systemsMainInsideBoxes.forEach((element, index) => {
            element.onclick = (e) => {
                systemsMainTitle.style.display = 'none'
                systemsMainInsideBoxes.forEach(element => {
                    element.style.display = 'none'
                });
                systemsMainBoxes.forEach(element => {
                    element.style.display = 'none'
                });
                systemsMainBoxes[index].style.display = 'flex'
                e.currentTarget.style.display = 'flex'
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.cssText = 'display: flex !important'
            }
        });
    }
    systemsCards()
    // handle third page nested pages
    systemsSecondBoxesPrevious.forEach((element, index) => {
        element.onclick = (e) => {
            systemsSecondBoxes[index].style.removeProperty("display")
            systemsMainTitle.style.display = 'flex'
            systemsMainBoxes.forEach(element => {
                element.style.display = 'flex'
            });
            systemsMainInsideBoxes.forEach(element => {
                element.style.display = 'flex'
            });
        }
    });

}

if (currentPageName === 'Frequently-Asked-Questions.html') {
    FrequentlyAskedQuestionsBoxes.forEach((element, index) => {
        element.onclick = (e) => {
            if (!(e.currentTarget.classList.contains('checked'))) {
                FrequentlyAskedQuestionsExpandedText[index].style.cssText = 'max-height: 300px; padding: 25px;'
                e.currentTarget.classList.add("checked")
            } else if (e.currentTarget.classList.contains('checked')) {
                FrequentlyAskedQuestionsExpandedText[index].style.cssText = ' '
                e.currentTarget.classList.remove("checked")
            }
        }
    });
}

if (logOutButton !== null) {
    logOutButton.onclick = () => {
        doneMessage('../../assets/images/alarm.svg', 'هل انت متأكد من تسجيل الخروج', `loginPage.html`, "تسجيل الخروج", 'Done', 'Done');
    }
}