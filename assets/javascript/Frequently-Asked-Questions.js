let FrequentlyAskedQuestionsBoxes = document.querySelectorAll('.Frequently-Asked-Questions .max-width .boxes-cont .box'),
    FrequentlyAskedQuestionsExpandedText = document.querySelectorAll('.Frequently-Asked-Questions .max-width .boxes-cont .box .opened');

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
