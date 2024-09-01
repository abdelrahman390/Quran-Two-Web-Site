const payButton = document.querySelector('.pay .max-width .container > .right > .box button');

const cardExpireDate = document.querySelector('.pay .max-width .container > .right > .box .inputs .cont:nth-child(3) input')
const CardNumber = document.querySelector('.pay .max-width .container > .right > .box .inputs .cont:nth-child(2) input')
const form = document.querySelector('.pay .max-width .container > .right > .box form')
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
        }
        if (e.target.value.length === 2) {
            cardExpireDate.value = `${e.target.value}/`
        }
    } else {
        cardExpireDate.value = e.target.value.slice(0, -1);
    }

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 8 || event.which === 8 || event.keyCode === 46 || event.which === 46) {
            // Add your code to execute when the backspace key is pressed
            if (e.target.value.length === 3) {
                cardExpireDate.value = e.target.value.slice(0, -1)
            }
        }
    });
    console.log(e.target.value.length)
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
        if (event.keyCode === 8 || event.which === 8 || event.keyCode === 46 || event.which === 46) {
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
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from being submitted
});

payButton.onclick = () => {
    if (form.checkValidity()) {
        doneMessage('../../assets/images/Done.webp', 'تم الدفع والاشتراك في الخدمات بنجاح', "../../index.html", 'تم')
    }
}