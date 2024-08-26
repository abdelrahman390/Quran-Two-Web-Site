let toggleBox = document.querySelector(
    ".packeges .max-width .toggle-box"
),
    packegesToggleRight = document.querySelector(
        ".packeges .max-width .toggle-box .right"
    ),
    packegesToggleLeft = document.querySelector(
        ".packeges .max-width .toggle-box .left"
    ),
    packegesFirstPlansCont = document.querySelector(
        ".packeges .packeges-cont"
    ),
    packegesSecondPlansCont = document.querySelector(
        ".packeges .packeges-cont-second"
    ),
    packagesButtons = document.querySelectorAll(
        ".packeges .max-width .packeges-cont button, .packeges .max-width .packeges-cont-second button"
    );

function mainPageToggle() {
    toggleBox.childNodes.forEach((element) => {
        element.onclick = (e) => {
            if (e.currentTarget.classList.contains("right")) {
                packegesToggleLeft.classList.remove("checked");
                packegesToggleRight.classList.add("checked");
                packegesSecondPlansCont.style.display = "none";
                packegesFirstPlansCont.style.display = "flex";
            } else if (e.currentTarget.classList.contains("left")) {
                packegesToggleRight.classList.remove("checked");
                packegesToggleLeft.classList.add("checked");
                packegesFirstPlansCont.style.display = "none";
                packegesSecondPlansCont.style.cssText =
                    "display: unset !important";
            }
        };
    });
}
mainPageToggle();


packagesButtons.forEach((element) => {
    element.onclick = () => {
        doneMessage(
            "assets/images/Done.png",
            "تم إضافة اشتراك الباقة إلى السلة",
            "pages/cart/cart.html",
            "حسناً"
        );
    };
});

let ExtraPackeges = document.querySelectorAll(
    ".mainPage .Comprehensive-services-in-the-association-package .text-cont button"
);

ExtraPackeges.forEach((element) => {
    element.onclick = () => {
        doneMessage(
            "assets/images/Done.png",
            "تم إضافة اشتراك الباقة إلى السلة",
            "pages/cart/cart.html",
            "حسناً"
        );
    };
});

// let loadingLayout = document.createElement("div")
// loadingLayout.classList = 'loadingLayout'

// let loadingImg = document.createElement("img")
// loadingImg.src = 'assets/images/loading.webp'

// loadingLayout.appendChild(loadingImg)

// document.body.prepend(loadingLayout)

// window.addEventListener('load', function() {
//     loadingLayout.remove()
// });

