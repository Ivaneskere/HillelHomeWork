// Створіть HTML-сторінку з декількома кнопками. 
// Ваше завдання - створити обробник подій для батьківського елементу, 
// який відслідковуватиме кліки на всіх кнопках.

function secondTask() {
    const container = document.querySelector("#btn")
    container.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            alert(`Натиснуто кнопку ${event.target.dataset.id}`)
        }
    })
}