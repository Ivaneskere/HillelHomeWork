document.querySelector('#buttonToDo').addEventListener('click', () => {
    const myInput = document.querySelector('#inputToDo')
    const value = myInput.value.trim()
    if (!value) {
        return
    }

    const myUl = document.querySelector('#myUl')

    const myLi = document.createElement('li')
    myLi.textContent = value

    const doneButton = document.createElement('button')
    doneButton.textContent = 'Видалити'
    doneButton.classList.add('borderMargin')
    doneButton.addEventListener('click', () => {
        myLi.remove()
    })
    myLi.appendChild(doneButton)

    myUl.appendChild(myLi)
    myInput.value = ''

})