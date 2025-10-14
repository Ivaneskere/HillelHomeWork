// 2) Moment.js
// Вивести дату вашого народження в довільному форматі із використанням бібліотеки moment.js
// Отримати від користувача дату його народження у форматі ДД/ММ/РРРР та через moment.js перетворити її в інший формат (напр., РРРР-ММ-ДД)
// реалізувати перевірку за допомогою регулярних виразів на коректність користувацького вводу
// якщо формат невірний - вивести помилку на сторінку (використати bootstrap стилі)

moment.locale('uk');

const myBDDay = moment("2006-10-01").format("MMMM Do YYYY")
console.log(myBDDay)


// const dateOfBDUser = document.querySelector(".date")
// dateOfBDUser.addEventListener('click', () => {
//     const dateOfUserBirthDay = document.forms.myForm.BDDate.value
//     console.log(moment(dateOfUserBirthDay).format("MMMM Do YYYY"))
// })  

const dateOfBDUser = document.querySelector(".date")
const regEx = /^\d{2}\/\d{2}\/\d{4}$/
const err = document.querySelector(".errors")
const block = document.createElement('div')
err.appendChild(block);

dateOfBDUser.addEventListener('click', () => {
    const dateOfUserBirthDay = document.forms.myForm.BDDate.value

    if (regEx.test(dateOfUserBirthDay)) {
        const formettted = moment(dateOfUserBirthDay, "DD/MM/YYYY", true).format("MMMM Do YYYY")
        console.log(formettted)
        err.innerHTML = ""
    } else {
        err.innerHTML = `
        <h6 data-bs-toggle="tooltip" data-bs-target="#exampleModal" data-toggle="tooltip">
            Ви ввели не правильний формат
        </h6>`

        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }

})

