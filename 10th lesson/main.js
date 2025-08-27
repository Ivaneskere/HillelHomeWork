// HomeWork 10.1. Картка користувача
// Створіть об'єкт, що містить інформацію про користувача, 
// таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

function first() {
    let infoOfUser = {
        name: prompt("Введіть ім'я,"),
        age: prompt("Введіть вік"),
        leavePleace: prompt("Введіть місце вашого проживання")
    }

    console.log(infoOfUser)
}

// HomeWork 10.2. Отримання парних чисел з масиву
// Маєте масив чисел. 
// Використовуйте вже існуючі методи масиву для створення нового масиву, 
// в якому лише парні числа з оригінального масиву.

function second() {
    const arr = [2, 62, 12, 8, 3, 84, 13, 6, 5, 85, 324, 8, 2, 4, 236, 4, 1, 7456, 2]

    let myArr = arr.filter(num => num % 2 === 0)
    console.log(myArr)


    // let newArr = [];
    // for(let i = 0;i < arr.length; i++) {
    //     if(arr[i] % 2 === 0) {
    //         newArr.push(arr[i])
    //     }
    // }

    // console.log(newArr)
}

// HomeWork 10.3 Книга контактів
// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі.
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

let obj = {
    property: [
        {
            name: "Іван Петренко",
            numberOfPhone: "+380971234567",
            emain: "ivan.petrenko@example.com"
        }, {
            name: "Оксана Коваль",
            numberOfPhone: "+380931112233",
            emain: "oksana.koval@example.com"
        }, {
            name: "Микола Шевченко",
            numberOfPhone: "+380503456789",
            emain: "mykola.shevchenko@example.com"
        }, {
            name: "Наталя Іванчук",
            numberOfPhone: "+380671234890",
            emain: "nataliya.ivanchuk@example.com"
        }, {
            name: "Андрій Дяченко",
            numberOfPhone: "+380991112244",
            emain: "andriy.dyachenko@example.com"
        }, {
            name: "Олена Сорока",
            numberOfPhone: "+380631234567",
            emain: "olena.soroka@example.com"
        }, {
            name: "Дмитро Гнатюк",
            numberOfPhone: "+380661234321",
            emain: "dmytro.hnatyuk@example.com"
        }, {
            name: "Марія Ткачук",
            numberOfPhone: "+380681112233",
            emain: "mariya.tkachuk@example.com"
        }
    ]
} // дані користувачів попроcив вигадати в чата gpt

function finduser() {
    let userName = prompt("Введіть користувача якого хочете знайти")
    const userInfo = obj.property.find(user => user.name === userName)
    console.log(userInfo)
}

function newUser() {
    let newUserName = prompt("Введіть ім'я нового користувача")
    let newUserEmail = prompt("Введіть email нового користувача")
    let newUserNumberOfPhone = prompt("Введіть номер телефону нового користувача")

    const newUserObj = {
        name: newUserName,
        emain: newUserEmail,
        numberOfPhone: newUserNumberOfPhone
    };

    const newUsers = obj.property.push(newUserObj)
}

newUser()
console.log(obj)