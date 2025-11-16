// Створити функцію для розрахунку добутку двох чисел, 
// що викликається так: name(5)(2). 
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function calculation(first) {
    return function(second) {
        return first + second
    }
}
console.log(calculation(2)(7))