let toggleBox = document.querySelector(".packages .max-width .toggle-box"),
    packagesToggleRight = document.querySelector(".packages .max-width .toggle-box .right"),
    packagesToggleLeft = document.querySelector(".packages .max-width .toggle-box .left"),
    packagesFirstPlansCont = document.querySelector(".packages .packages-cont"),
    packagesSecondPlansCont = document.querySelector(".packages .packages-cont-second"),
    packagesButtons = document.querySelectorAll('.packages .max-width .packages-cont button, .packages .max-width .packages-cont-second button');


function package() {
    toggleBox.childNodes.forEach(element => {
        element.onclick = (e) => {
            if (e.currentTarget.classList.contains("right")) {
                packagesToggleLeft.classList.remove("checked")
                packagesToggleRight.classList.add("checked")
                packagesSecondPlansCont.style.display = "none"
                packagesFirstPlansCont.style.display = "flex"
            } else if (e.currentTarget.classList.contains("left")) {
                packagesToggleRight.classList.remove("checked")
                packagesToggleLeft.classList.add("checked")
                packagesFirstPlansCont.style.display = "none"
                packagesSecondPlansCont.style.cssText = "display: unset !important"
            }
        }
    });
}
package()
packagesButtons.forEach(element => {
    element.onclick = () => {
        doneMessage('../assets/images/Done.webp', 'تم إضافة اشتراك الباقة إلى السلة', "../pages/cart/cart.html", 'حسناً')
    }
});