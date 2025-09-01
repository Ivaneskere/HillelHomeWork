// Є блок із текстом на сторінці та кнопка. 
// При натисканні на кнопку текст змінює колір. 
// При повторному натисканні – повертається попередній колір

function secondTask() {
const myText = document.querySelector("#text")
const myBtn = document.querySelector(".btn-change")

myBtn.addEventListener('click',() => {
    if(myText.style.color === 'red') {
        myText.style.color = 'black'
    } else {
        myText.style.color = 'red'
    }
}) 
}