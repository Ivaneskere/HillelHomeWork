// Написати функцію, яка приймає 1 параметр. 
// Та скадае значення з тим, що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

function zamuk() {
    let sum = 0
    return function (first) {
        sum += first;
        return sum
    } 
}

const MyFunc = zamuk()

console.log(MyFunc(4)) // 4
console.log(MyFunc(7)) // 11
console.log(MyFunc(7)) // 18