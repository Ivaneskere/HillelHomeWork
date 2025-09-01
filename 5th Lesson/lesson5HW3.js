// Lesson 5, Home Work 3

//Дано ціле число N (ввести через prompt). 
//Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

function third() {
    let number = parseInt(prompt("Введіть ціле число"))
    let list = '';

    for(let i = 1;i <= 100;i++) {
        if(i*i <= number) {
            list += i + ' ';
        }

    }

    console.log(list)
}