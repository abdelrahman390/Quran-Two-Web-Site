const currentPageNameForMainPageNested = window.location.pathname.split('/');
// const currentPageName = window.location.pathname.split('/').pop().split('.')[0]
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

// put latitude and longitude in input field [الموقع على الخريطة]
locationInput.value = sessionStorage.getItem(`${locationInput.dataset.name}-location`)

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

    // it return a stored value from inputs that have value and remove label from fields that have value
    if (sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-inputs`]) !== null) {
        if (JSON.parse(sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-inputs`]))[element.dataset.name] !== undefined) {
            element.value = JSON.parse(sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-inputs`]))[element.dataset.name]
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
    // it return a stored value from select that have value and remove label from fields that have value
    if (sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-selected`]) !== null) {
        if (JSON.parse(sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-selected`]))[element.dataset.name] !== undefined) {
            element.value = JSON.parse(sessionStorage.getItem([`${currentPageNameForMainPageNested[3]}-selected`]))[element.dataset.name]
        }
    }
});

function scrollTO() {
    const lastPageUrl = window.history.previous || document.referrer;
    // return boolean value Based on inputs
    let inputsBooleanCondition = (input[0].value.length !== 0 && input[1].value.length !== 0 && input[2].value.length !== 0 && input[3].value.length !== 0 && select[0].value !== '')
    let registrationStartButton = document.querySelector('.max-width .container .textCont button')

    registrationStartButton.onclick = () => {
        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });
    }

    if (lastPageUrl.split('/')[lastPageUrl.split('/').length - 1].split('.')[0] === 'map') {
        window.scrollTo({
            top: 630,
            behavior: "smooth",
        });
        if (inputsBooleanCondition) {
            window.scrollTo({
                top: 1050,
                behavior: "smooth",
            });
        }
    }
}
scrollTO()