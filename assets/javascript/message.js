

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