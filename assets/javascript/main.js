
// function test() {
    
//     let maxWidth = document.querySelector("section .max-width");
//     let container = document.querySelector(".container");
//     let bottomContainer = document.querySelector(".bottom-container");
//     let buttons = document.querySelector(".buttons");

//     let formTest = document.querySelector("form")
//     let form = document.createElement("form")

//     if(formTest == null){
//         form.appendChild(container)
//         if(bottomContainer !== null) {
//             form.appendChild(bottomContainer)
//         }
//         form.appendChild(buttons)
//         maxWidth.appendChild(form)
//     }


//     // ####################################################################

//     let cont = document.querySelectorAll('.cont')

//     cont.forEach(element => {
//         // console.log(element.querySelector("label"))
//         if(element.querySelector("label")){
//             element.querySelector("label").remove()
//         }

//         if(element.querySelector(".text") !== null){
//             let parent = element.querySelector(".text").parentElement.parentElement
//             let text =  element.querySelector(".text")
//             let buildCont = document.createElement("div")
//             buildCont.classList = "cont"

//             buildCont.appendChild(text)
//             parent.prepend(buildCont)
//         }

//         //  add icon to date input
//         if(element.querySelector("input") !== null){
//             if(element.querySelector("input").type == "date"){
//                 let contElemint = element.querySelector("input").parentElement
//                 let icon = `<i>
//                                 <span class="material-symbols-outlined date">
//                                         date_range
//                                 </span>
//                             </i>`
//                 contElemint.innerHTML += icon
//             }
//         }

//         // add * for required fields
//         if(element.querySelector("input") !== null){
//             // console.log(element.querySelector("h3").querySelector("span"))
//             if(element.querySelector("input").required === true){
//                 if(element.querySelector("h3").querySelector("span") === null){
//                     let text = element.querySelector("h3").innerText
//                     element.querySelector("h3").innerHTML = `${text} <span>*</span>`
//                 }
//             }
//         } 

//         if(element.querySelector("select") !== null){
//             if(element.querySelector("select").hasAttribute('required') === true){
//                 if(element.querySelector("h3").querySelector("span") === null){
//                     let text = element.querySelector("h3").innerText
//                     element.querySelector("h3").innerHTML = `${text} <span>*</span>`
//                 }
//             }
//         }
//     });

//     // ########################### add main title #########################################

//     let titleClass = "calendar-nested-pages"

//     let section = document.querySelector("section")
//     section.classList = titleClass
//     // console.log(document.querySelector("section"))


// }
// test()

let loadingLayout = document.createElement("div")
loadingLayout.classList = 'loadingLayout'

let loadingImg = document.createElement("img")
loadingImg.src = 'assets/images/loading.webp'

loadingLayout.appendChild(loadingImg)

document.body.prepend(loadingLayout)

window.addEventListener('load', function() {
    loadingLayout.remove()
});

window.addEventListener('DOMContentLoaded', function() {
    // Show the element immediately after the DOM is loaded
    document.querySelector('.loadingLayout').style.display = 'block';
});