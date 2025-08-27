// Lesson 5, Home Work 1

// Вивести в консоль числа від 20 до 30 
// через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)

function firstHomeWork() {

let list = '';
let step = 0.5;

for (let i = 20; i <= 30; i += step) {
    list += i + ' ';
}
console.log(list);
}