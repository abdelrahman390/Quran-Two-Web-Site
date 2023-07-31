
// ############## window.length ###############
const width = window.innerWidth || document.documentConsclientWidth;
// ############## current Page Name ###############
const currentPageName = window.location.pathname.split('/').pop().split('.')[0]

let toggleBox,
    packegesToggleRight,
    packegesToggleLeft,
    packegesFirstPlansCont,
    packegesSecondPlansCont,
    packagesButtons;

if (currentPageName === 'index') {
    toggleBox = document.querySelector(".mainPage .packeges .max-width .toggle-box"),
        packegesToggleRight = document.querySelector(".mainPage .packeges .max-width .toggle-box .right"),
        packegesToggleLeft = document.querySelector(".mainPage .packeges .max-width .toggle-box .left"),
        packegesFirstPlansCont = document.querySelector(".mainPage .packeges .packeges-cont"),
        packegesSecondPlansCont = document.querySelector(".mainPage .packeges .packeges-cont-second");
    packagesButtons = document.querySelectorAll('.mainPage .packeges .max-width .packeges-cont .left-box button, .mainPage .packeges .max-width .packeges-cont .mid-box button, .mainPage .packeges .max-width .packeges-cont .right-box button, .mainPage .packeges .max-width .packeges-cont-second .left-box button, .mainPage .packeges .max-width .packeges-cont-second .mid-box button, .mainPage .packeges .max-width .packeges-cont-second .right-box button');
}
// ###################### packeges Page ######################
if (currentPageName === 'packeges') {
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
if (currentPageName === 'account-setting') {

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
            ul.style.cssText = 'max-height: 0; padding: 0; transition: 1s; display: flex; border-top: 1px solid black;'
            header.style.marginBottom = '0'
            header.style.transition = '1s'
            ul.style.display = 'none'
            settingIcon.style.display = 'none';

            settingIconBox.classList.remove('open')

        } else if (!(burger.classList.contains("checked"))) {
            burger.classList.add("checked")

            if (width < 900) {
                header.style.marginBottom = '320px'
            } else {
                header.style.marginBottom = '100px'
            }

            header.style.transition = '1s'

            function headerTimeOut() {
                if (width < 900) {
                    ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s; padding-right: 75px; border-top: 1px solid black;'
                } else {
                    ul.style.cssText = 'display: flex; max-height: 150px; padding: 25px; transition: 0.5s; padding-right: 75px; border-top: 1px solid black;'
                }
            }
            setTimeout(headerTimeOut, 500);

        }
    }
}


if (currentPageName === 'technical-support') {
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

if (currentPageName === 'call-us') {
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

if (currentPageName === 'pay') {
    const payButton = document.querySelector('.pay .max-width .container > .right > .box button');
    payButton.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تم الدفع والاشتراك في الخدمات بنجاح', "../../index.html", 'اشتراكاتي')
    }
    const cardExpireDate = document.querySelector('.pay .max-width .container > .right > .box .inputs .cont:nth-child(3) input')
    const CardNumber = document.querySelector('.pay .max-width .container > .right > .box .inputs .cont:nth-child(2) input')
    const regexForExpireDate = /^[\d\/]+$/; // regexForExpireDate to match numbers only
    const regexForCardNumber = /^[\d\-]+$/; // regexForCardNumber to match numbers only

    cardExpireDate.onkeyup = function (e) {
        if (regexForExpireDate.test(e.target.value)) {
            if (e.target.value[0] > 1) {
                cardExpireDate.value = `0${e.target.value[0]}`
            } else if (e.target.value[0] == 1) {
                if (e.target.value[1] > 2) {
                    cardExpireDate.value = e.target.value.slice(0, -1);
                }
                console.log('done from === 1')
            }
            if (e.target.value.length === 2) {
                cardExpireDate.value = `${e.target.value}/`
            }
        } else {
            cardExpireDate.value = e.target.value.slice(0, -1);
        }

        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 8 || event.which === 8) {
                // Add your code to execute when the backspace key is pressed
                if (e.target.value.length === 3) {
                    cardExpireDate.value = e.target.value.slice(0, -1)
                }
            }
        });
    }

    CardNumber.onkeyup = function (x) {
        if (regexForCardNumber.test(x.target.value)) {
            switch (x.target.value.length) {
                case 4:
                    CardNumber.value = `${x.target.value}-`
                    break;
                case 9:
                    CardNumber.value = `${x.target.value}-`
                    break;
                case 14:
                    CardNumber.value = `${x.target.value}-`
                    break;
            }
        } else {
            CardNumber.value = x.target.value.slice(0, -1);
        }

        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 8 || event.which === 8) {
                // // Add your code to execute when the backspace key is pressed
                switch (x.target.value.length) {
                    case 5:
                        CardNumber.value = x.target.value.slice(0, -1)
                        break;
                    case 10:
                        CardNumber.value = x.target.value.slice(0, -1)
                        break;
                    case 15:
                        CardNumber.value = x.target.value.slice(0, -1)
                        break;
                }
            }
        });

    }

}

if (currentPageName === 'Add-a-central-test-and-register-for-the-test') {
    const centralTest = document.querySelector('.Add-a-central-test-and-register-for-the-test .max-width .bottom-container button');
    centralTest.onclick = () => {
        doneMessage('../../../../assets/images/Done.png', 'تمت حفظ التعديلات بنجاح', "Add-a-central-test-and-register-for-the-test.html", 'حسناً')
    }
}

if (currentPageName === 'systems') {
    const lastPageUrl = window.history.previous || document.referrer;
    let overLay = document.querySelector('.systems .overlay')
    console.log(lastPageUrl)
    console.log(lastPageUrl.split('/')[lastPageUrl.split('/').length - 1].split('.')[0])

    if (lastPageUrl.split('/')[lastPageUrl.split('/').length - 1].split('.')[0] === 'account-admin') {
        overLay.style.display = 'none'
    }

}

if (currentPageName === 'Frequently-Asked-Questions') {
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

if (currentPageName === 'account') {
    const accountButtons = document.querySelector('.account .max-width .container .lift button');
    accountButtons.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تمت العملية بنجاح', "account.html", 'حسناً')
    }
}

if (currentPageName === 'account-admin') {
    const accountButtons = document.querySelector('.account .max-width .container .lift button');
    accountButtons.onclick = () => {
        doneMessage('../../../assets/images/Done.png', 'تمت العملية بنجاح', "account-admin.html", 'حسناً')
    }
}

if (currentPageName === 'account-new-password') {

    let inputs = document.querySelectorAll('.max-width input')
    let button = document.querySelector('.account-new-password .max-width .container .lift button')

    inputs.forEach(element => {
        element.addEventListener('input', function (event) {
            function handleClick() {
                const inputsCheckState = [...inputs].every(input => {
                    return input.value.length !== 0;
                });

                if (inputsCheckState === true) {
                    if (inputs[1].value === inputs[2].value) {
                        button.style.cssText = 'opacity: 1; pointer-events: painted;'
                    } else if (inputs[1].value !== inputs[2].value) {
                        button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                    }
                } else {
                    if (inputs[1].value !== inputs[2].value) {
                        button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                    }
                }
            }
            handleClick()

        });
    });
    const accountNewPasswordButtons = document.querySelector(' .max-width .container .lift button');
    accountNewPasswordButtons.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تم تغيير كلمة المرور بنجاح', "account.html", 'حسناً')
    }
}

if (currentPageName === 'account-new-password-admin') {
    let inputs = document.querySelectorAll('.max-width input')
    let button = document.querySelector('.max-width .container .lift button')
    const accountNewPasswordButtons = document.querySelector(' .max-width .container .lift button');

    inputs.forEach(element => {
        element.addEventListener('input', function (event) {
            function handleClick() {
                const inputsCheckState = [...inputs].every(input => {
                    return input.value.length !== 0;
                });

                if (inputsCheckState === true) {
                    if (inputs[1].value === inputs[2].value) {
                        button.style.cssText = 'opacity: 1; pointer-events: painted;'
                    } else if (inputs[1].value !== inputs[2].value) {
                        button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                    }
                } else {
                    if (inputs[1].value !== inputs[2].value) {
                        button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                    }
                }
            }
            handleClick()

        });
    });

    accountNewPasswordButtons.onclick = () => {
        doneMessage('../../../assets/images/Done.png', 'تم تغيير كلمة المرور بنجاح', "account-admin.html", 'حسناً')
    }
}

if (currentPageName === 'verification') {
    const inputs = document.querySelectorAll('.verification .max-width .container .right .cont input');
    const button = document.querySelector('.verification .max-width .container .right .button');

    inputs.forEach(element => {
        element.onkeyup = () => {
            if (inputs[0].value.length !== 0 && inputs[1].value.length !== 0 && inputs[2].value.length !== 0 && inputs[3].value.length !== 0) {
                button.style.pointerEvents = 'unset'
            }
            if (inputs[3].value.length !== 0) {
                inputs[2].focus();
            }
            if (inputs[2].value.length !== 0) {
                inputs[1].focus();
            }
            if (inputs[1].value.length !== 0) {
                inputs[0].focus();
            }

            if (inputs[3].value.length === 0 && document.activeElement.dataset.number === '1') {
                inputs[3].value = document.activeElement.value
                document.activeElement.value = ''
                inputs[2].focus()
            }
        }

    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 8 || event.which === 8) {
            // // Add your code to execute when the backspace key is pressed
            if (document.activeElement.dataset.number === '4') {
                inputs[3].focus();
                return
            }
            if (document.activeElement.dataset.number === '3') {
                inputs[3].focus();
                return
            }
            if (document.activeElement.dataset.number === '2') {
                inputs[2].focus();
                return
            }
            if (document.activeElement.dataset.number === '1') {
                inputs[1].value = ''
                inputs[0].focus();
                return
            }
        }
    });

}

if (currentPageName === 'newPassword') {
    const newPasswordButtons = document.querySelector('.newPassword .container .right .button');
    newPasswordButtons.onclick = () => {
        doneMessage('../../assets/images/Done.png', 'تم تغيير كلمة المرور بنجاح', "../account/loginPage.html", 'تسجيل دخول')
    }
}

const currentPageNameForNestedPages = window.location.pathname.split('/');
if (currentPageNameForNestedPages[currentPageNameForNestedPages.length - 1].split('-').splice(0, 2).join('-') === 'systems-nested') {

    let nameForSessionStorage = currentPageNameForNestedPages[currentPageNameForNestedPages.length - 1].split('-').splice(2, currentPageNameForNestedPages.length - 1).join('-').split('.')[0]
    const systemsSubmitButtons = document.querySelector('.systemsSubmitButtons');
    let requiredInputs = document.querySelectorAll('.max-width input[required]')
    let inputs = document.querySelectorAll('.max-width input:not([type="checkbox"]')
    let selects = document.querySelectorAll('.max-width select')

    systemsSubmitButtons.onclick = (event) => {
        let userInputsData = {}
        let userSelectedData = {}
        let inputs = document.querySelectorAll('.max-width input:not([type="checkbox"]')
        let inputsCheckState = false
        let selects = document.querySelectorAll('.max-width select')
        let selectsCheckState = false

        selects.forEach(e => {
            if (e.required && e.value.length === 0) {
                selectsCheckState = false;
            } else if (e.required && e.value.length !== 0) {
                selectsCheckState = true
            }
        });


        function handleClick() {
            const inputsCheckStateFunc = [...requiredInputs].every(input => {
                return input.value.length !== 0;
            });

            if (inputsCheckStateFunc === false) {
                inputsCheckState = false
            } else {
                inputsCheckState = true
            }
        }
        handleClick()


        if (selectsCheckState === true && inputsCheckState === true) {
            doneMessage('../../../../assets/images/Done.png', 'تمت العملية بنجاح', '', 'حسناً')
        } else if (selectsCheckState === false || inputsCheckState === false) {
            doneMessage('../../../../assets/images/alarm.svg', 'برجاء ملئ جميع الحقول المطلوبه', '', 'حسناً')
        }


        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.length !== 0) {
                userInputsData[inputs[i].parentElement.querySelector('h3').innerText] = inputs[i].value;
                sessionStorage.setItem([`${nameForSessionStorage}-inputs`], JSON.stringify(userInputsData))
            }
        }

        for (let i = 0; i < selects.length; i++) {
            if (selects[i].value !== '') {
                let selectedIndex = selects[i].selectedIndex;
                userSelectedData[selects[i].parentElement.querySelector('h3').innerText] = selects[i].value;
                sessionStorage.setItem([`${nameForSessionStorage}-selected`], JSON.stringify(userSelectedData))
            }
        }

    }

    // remove label if field is not empty && get stored data from session storage
    inputs.forEach(element => {
        element.addEventListener('input', event => {
            // Hide the label if the input value is not 0
            if (event.target.value.length !== 0) {
                event.target.parentElement.querySelector('label').classList.add('hidden');
            } else {
                event.target.parentElement.querySelector('label').classList = ''
            }
        });

        // it return a stored value from inputs that have value and remove label from fields that have value
        if (sessionStorage.getItem([`${nameForSessionStorage}-inputs`]) !== null) {
            if (JSON.parse(sessionStorage.getItem([`${nameForSessionStorage}-inputs`]))[element.parentElement.querySelector('h3').innerText] !== undefined) {
                element.value = JSON.parse(sessionStorage.getItem([`${nameForSessionStorage}-inputs`]))[element.parentElement.querySelector('h3').innerText]
                element.parentElement.querySelector('label').classList.add('hidden');
            }
        }

    });

    // remove label if field is not empty && get stored data from session storage
    selects.forEach(element => {
        element.addEventListener("change", function () {
            if (element.value !== '') {
                element.parentElement.querySelector('label').classList.add('hidden');
            }
        });

        if (sessionStorage.getItem([`${nameForSessionStorage}-selected`]) !== null) {
            if (JSON.parse(sessionStorage.getItem([`${nameForSessionStorage}-selected`]))[element.parentElement.querySelector('h3').innerText] !== undefined) {
                element.value = JSON.parse(sessionStorage.getItem([`${nameForSessionStorage}-selected`]))[element.parentElement.querySelector('h3').innerText]
                element.parentElement.querySelector('label').classList.add('hidden');
            }
        }

    });

}

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

if (currentPageName === 'index') {
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
            doneMessage('assets/images/Done.png', 'تم إضافة اشتراك الباقة إلى السلة', "pages/cart/cart.html", 'حسناً')
        }
    });

    let ExtraPackeges = document.querySelectorAll('.mainPage .Comprehensive-services-in-the-association-package .text-cont button')
    ExtraPackeges.forEach(element => {
        element.onclick = () => {
            doneMessage('assets/images/Done.png', 'تم إضافة اشتراك الباقة إلى السلة', "pages/cart/cart.html", 'حسناً')
        }
    });

}

if (currentPageName === 'packeges') {
    function package() {
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
    package()
    packagesButtons.forEach(element => {
        element.onclick = () => {
            doneMessage('../assets/images/Done.png', 'تم إضافة اشتراك الباقة إلى السلة', "../pages/cart/cart.html", 'حسناً')
        }
    });
}

if (currentPageName === 'Frequently-Asked-Questions') {
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

if (currentPageName === 'account-subscription') {
    let buttons = document.querySelectorAll('.account-subscription .max-width .container .lift .box button ')

    buttons.forEach(element => {
        element.onclick = () => {
            doneMessage('../../assets/images/alarm.svg', 'هل انت متأكد من حزف الخدمه', "account-subscription.html", 'إلغاء', 'done', "account-subscription.html")
        }
    });
}

if (currentPageName === 'newPassword') {

    let inputs = document.querySelectorAll('.max-width input')
    let button = document.querySelector('.newPassword .container .right .button')

    inputs.forEach(element => {
        element.addEventListener('input', function (event) {
            function handleClick() {
                const inputsCheckState = [...inputs].every(input => {
                    return input.value.length !== 0;
                });

                if (inputsCheckState === true) {
                    if (inputs[0].value === inputs[1].value) {
                        button.style.cssText = 'opacity: 1; pointer-events: painted;'
                    } else if (inputs[0].value !== inputs[1].value) {
                        button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                    }
                } else {
                    button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                }
            }
            handleClick()

        });
    });

}

if (currentPageName === 'loginPage' || 'Login-as-admin') {
    let inputs = document.querySelectorAll('.max-width input')
    let button = document.querySelector('.max-width .container .right form .button')

    inputs.forEach(element => {
        element.addEventListener('input', function (event) {
            function handleClick() {
                const inputsCheckState = [...inputs].every(input => {
                    return input.value.length !== 0;
                });

                if (inputsCheckState === true) {
                    button.style.cssText = 'opacity: 1; pointer-events: painted;'
                } else {
                    button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                }
            }
            handleClick()

        });
    });


}

if (currentPageName === 'CreateAccount') {
    let inputs = document.querySelectorAll(".max-width input")
    let emailInput = document.querySelector('.max-width input[type=email]')
    let button = document.querySelector('.createAccount .max-width .container .right > a')

    inputs.forEach(element => {
        element.addEventListener('input', function (event) {
            function handleClick() {
                const inputsCheckState = [...inputs].every(input => {
                    return input.value.length !== 0;
                });

                if (inputsCheckState === true) {
                    if (emailInput.checkValidity()) {
                        button.style.cssText = 'opacity: 1; pointer-events: painted;'
                    }
                } else {
                    button.style.cssText = 'opacity: 0.5; pointer-events: none;'
                }
            }
            handleClick()

        });
    });
}


const currentPageNameForMainPageNested = window.location.pathname.split('/')
// this functions work only with pages starts with [Register-a-new] in its first 3 words
if (currentPageNameForMainPageNested[currentPageNameForMainPageNested.length - 1].split('-').splice(0, 3).join('-') === 'Register-a-new') {
    const currentPageName = currentPageNameForMainPageNested[3].split('/').pop().split('.')[0]
    // Define an input field that when the user clicks on it redirects them to the map page
    const locationInput = document.querySelector('.max-width .bottom-container .bottom .cont.location input');
    // Select the field where the user puts his government
    const selectElement = document.getElementById("government");
    // all inputs in current page except checkbox
    const input = document.querySelectorAll('input:not(:nth-child(1))')
    // all inputs in current page except checkbox
    const inputNumber = document.querySelectorAll('input[type=number]')
    // all select in current page
    const select = document.querySelectorAll('select')
    const userInputsData = {};
    const userSelectedData = {};

    // get current page name and set it in session storage to direct user to the same page that he out from it
    // restore all values that user write it in input fields to session storage to use it when user return back to same page
    locationInput.onclick = () => {
        currentNewRegistrationPageName = window.location.pathname;
        sessionStorage.setItem('currentNewRegistrationPageName', window.location.pathname)

        for (let i = 0; i < input.length; i++) {
            if (input[i].value.length !== 0) {
                userInputsData[input[i].dataset.name] = input[i].value;
                sessionStorage.setItem([`${currentPageNameForMainPageNested[3]}-inputs`], JSON.stringify(userInputsData))
            }
        }

        for (let i = 0; i < select.length; i++) {
            if (select[i].value !== '') {

                let selectedIndex = select[i].selectedIndex;
                userSelectedData[select[i].dataset.name] = select[i].value;

                sessionStorage.setItem([`${currentPageNameForMainPageNested[3]}-selected`], JSON.stringify(userSelectedData))
            }
        }

    }

    // put latitude and longitude in input field [الموقع على الخريطةً]
    locationInput.value = sessionStorage.getItem(`${locationInput.dataset.name}-location`)
    console.log((`${locationInput.dataset.name}-location`))

    // put name of government in input field [الحي] if user choose government
    if (sessionStorage.getItem([`${currentPageName}-government-data`]) !== null) {
        selectElement.options[0].value = JSON.parse(sessionStorage.getItem([`${currentPageName}-government-data`]))['government']
        selectElement.options[0].innerHTML = JSON.parse(sessionStorage.getItem([`${currentPageName}-government-data`]))['government']
    }

    // put government name && longitude && latitude in sessionStorage and send it to map to zoom in selected government
    selectElement.addEventListener("change", function () {
        let government = { government: `${selectElement.value}`, longitude: `${selectElement.options[selectElement.selectedIndex].dataset.longitude}`, latitude: `${selectElement.options[selectElement.selectedIndex].dataset.latitude}` }
        sessionStorage.setItem(['location'], JSON.stringify(government))
    });

    // Add an event listener to each input element and disappear label if user write any thing 
    // in side it >>> // it return a stored value from inputs that have value and remove label from fields that have value
    // in side it >>> // function that remove label when uses write any text and return back label when input field in empty
    input.forEach(element => {

        // function that remove label when uses write any text and return back label when input field in empty
        element.addEventListener('input', event => {
            // Hide the label if the input value is not 0
            if (event.target.value.length !== 0) {
                event.target.parentElement.querySelector('label').classList.add('hidden');
            } else {
                event.target.parentElement.querySelector('label').classList = ''
            }
        });

        // it return a stored value from inputs that have value and remove label from fields that have value
        if (sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-inputs`]) !== null) {
            if (JSON.parse(sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-inputs`]))[element.dataset.name] !== undefined) {
                element.value = JSON.parse(sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-inputs`]))[element.dataset.name]
                element.parentElement.querySelector('label').classList.add('hidden');
            }
        }

    });

    // Add an event listener to each input[type=number] element to prevent user from Writing more that 9 numbers
    inputNumber.forEach(element => {
        element.addEventListener('input', event => {
            if (element.value.length === 9) {
                element.value = element.value.slice(0, -1)
            }
        });
    });

    // all select elements in page and disappear label if user select choice 
    select.forEach(element => {
        element.addEventListener("change", function () {
            if (element.value !== '') {
                element.parentElement.querySelector('label').classList.add('hidden');
            }
        });

        // it return a stored value from select that have value and remove label from fields that have value
        if (sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-selected`]) !== null) {
            if (JSON.parse(sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-selected`]))[element.dataset.name] !== undefined) {
                element.value = JSON.parse(sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-selected`]))[element.dataset.name]
                element.parentElement.querySelector('label').classList.add('hidden');
            }
        }
    });

}

if (currentPageName === 'map') {
    const SaveLocationButton = document.querySelector('#SaveLocationButton');

    // save selected location on map and put it in sessionStorage
    SaveLocationButton.onclick = () => {
        window.location.href = `${sessionStorage.getItem('currentNewRegistrationPageName')}`
    }

    // send longitude && latitude to map to zoom in selected government but if user didn`t select government it will zoom in all country
    if (sessionStorage.getItem('location') !== null) {
        map(JSON.parse(sessionStorage.getItem('location'))['longitude'], JSON.parse(sessionStorage.getItem('location'))['latitude'])
    } else {
        map()
    }

    function map(Latitude = 24.16009, Longitude = 45.06283) {
        let map = ''
        if (Latitude === 24.16009 && Longitude === 45.06283) {
            map = L.map("map").setView([Latitude, Longitude], 5);
        } else {
            map = L.map("map").setView([Latitude, Longitude], 12);
        }


        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap",
        }).addTo(map);

        var marker = new L.marker([Latitude, Longitude], {
            draggable: true,
            autoPan: true,
        }).addTo(map);

        marker.on("dragend", function (e) {
            var coord = String(marker.getLatLng()).split(",");

            var lat = coord[0].split("(");
            var long = coord[1].split(")");

            let location = lat[1] + long[0];
            // console.log(location)
            sessionStorage.setItem([`${(sessionStorage.getItem('currentNewRegistrationPageName').split('/').pop().split('.')[0]).split('-')[3]}-location`], location)
        });
    }

}
