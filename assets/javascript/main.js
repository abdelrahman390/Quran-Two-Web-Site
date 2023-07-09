
const currentPageName = window.location.pathname.split('/').pop();

let lis = document.querySelectorAll("header ul li");

if(currentPageName === 'index.html'){
    secondPageToggel = document.querySelector(".firstPage .five .max-width .toggle-box"),
    secondPageTogglRight = document.querySelector(".firstPage .five .max-width .toggle-box .right"),
    secondPageTogglLeft = document.querySelector(".firstPage .five .max-width .toggle-box .left"),
    secondPageFirstPlansCont = document.querySelector(".firstPage .five .packedges-cont"),
    secondPageSecondPlansCont = document.querySelector(".firstPage .five .packedges-cont-second");
}
// #####################
if(currentPageName === 'packeges.html'){
    secondPageToggel = document.querySelector(".secondPage .max-width .toggle-box"),
    secondPageTogglRight = document.querySelector(".secondPage .max-width .toggle-box .right"),
    secondPageTogglLeft = document.querySelector(".secondPage .max-width .toggle-box .left"),
    secondPageFirstPlansCont = document.querySelector(".secondPage .packedges-cont"),
    secondPageSecondPlansCont = document.querySelector(".secondPage .packedges-cont-second");
}
// #####################
let therdPageMainTitle = document.querySelector(".therdPage .max-width > h1"),
therdPageMainBoxes = document.querySelectorAll(".therdPage .max-width .boxes-container > .box"),
therdPageMainInsideBoxes = document.querySelectorAll(".therdPage .max-width .boxes-container > .box .main"),
therdPageSecondboxes = document.querySelectorAll(".therdPage .max-width .boxes-container > .box .second-page"),
therdPageSecondboxesPrevios = document.querySelectorAll(".therdPage .boxes-container > .box .second-page .links-cont h4:last-child a");
// ##############
let fifthPageBoxes = document.querySelectorAll('.fifthPage .max-width .boxes-cont .box'),
fifthPageExpandedText = document.querySelectorAll('.fifthPage .max-width .boxes-cont .box .opened');





const width = window.innerWidth || document.documentElement.clientWidth;
// console.log(`Current window width: ${width}px`);
let header = document.querySelector('header')
let ul = document.querySelector('header ul')
let a = document.querySelector('header ul li.active a:last-child')
let burger = document.querySelector('header .burgerIcon')


// console.log(burger)

if (width < 1150){
    burger.onclick = function burgerClick()  {
        // console.log('burger')

        if(burger.classList.contains("checked")){
            burger.classList.remove("checked")
            ul.style.cssText = 'max-height: 0; padding: 0; transition: 1s; display: flex;'
            header.style.marginBottom = '0'
            header.style.transition = '1s'
            a.style.display = 'none'
            // function headerTimeOut() {
                ul.style.display = 'none'
            // }
            // setTimeout(headerTimeOut, 500);
    
        } else if(!(burger.classList.contains("checked"))){
            burger.classList.add("checked")
            // ul.style.display = 'flex'
            
            if (width < 900){
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





if (currentPageName === 'index.html' || currentPageName === 'packeges.html'){
    function firstPageToggle() {
        // console.log(secondPageToggel.children)
        secondPageToggel.childNodes.forEach(element => {
            element.onclick = (e) => {
                if(e.currentTarget.classList.contains("right")){
                    secondPageTogglLeft.classList.remove("checked")
                    secondPageTogglRight.classList.add("checked")
                    secondPageSecondPlansCont.style.display = "none"
                    secondPageFirstPlansCont.style.display = "flex"
                } else if (e.currentTarget.classList.contains("left")){
                    secondPageTogglRight.classList.remove("checked")
                    secondPageTogglLeft.classList.add("checked")
                    secondPageFirstPlansCont.style.display = "none"
                    secondPageSecondPlansCont.style.cssText  = "display: unset !important"
                }
            }
        });
    }
    firstPageToggle() 
}


if (currentPageName === 'systems.html'){
    function therdPageCards() {

        therdPageMainInsideBoxes.forEach((element, index) => {
            element.onclick = (e) => {
    
                therdPageMainTitle.style.display = 'none'
                therdPageMainInsideBoxes.forEach(element => {
                    element.style.display = 'none'
                });
                therdPageMainBoxes.forEach(element => {
                    element.style.display = 'none'
                });
                therdPageMainBoxes[index].style.display = 'flex'
                e.currentTarget.style.display = 'flex'
                e.currentTarget.style.display = 'none'

                e.currentTarget.nextElementSibling.style.cssText = 'display: flex !important'
        
            }
        });

    
    }
    therdPageCards()

    // handle therd page nested pages
    therdPageSecondboxesPrevios.forEach((element, index) => {
        element.onclick = (e) => {
            console.log(index)
            therdPageSecondboxes[index].style.removeProperty("display")
            therdPageMainTitle.style.display = 'flex'

            therdPageMainBoxes.forEach(element => {
                element.style.display = 'flex'
            });
            therdPageMainInsideBoxes.forEach(element => {
                element.style.display = 'flex'
            });
        }
    });

}

if (currentPageName === 'Frequently-Asked-Questions.html'){

    fifthPageBoxes.forEach((element, index) => {
        
        element.onclick = (e) => {

            if (!(e.currentTarget.classList.contains('checked'))){

                fifthPageExpandedText[index].style.cssText = 'max-height: 300px; padding: 25px;'
                // console.log(fifthPageExpandedText[0])
                e.currentTarget.classList.add("checked")

            } else if (e.currentTarget.classList.contains('checked')){

                fifthPageExpandedText[index].style.cssText = ' '
                e.currentTarget.classList.remove("checked")

            }



        }
    });

}