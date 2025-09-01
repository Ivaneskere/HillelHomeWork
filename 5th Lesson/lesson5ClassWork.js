// Lesson 5, Class Work


/// 1 Вивести на сторінку в один рядок через кому числа від 10 до 20

function first() {
let a = ''

for(let i = 10; i < 21 ; i++) {
    a += i
    
    if (i < 20) {
        a += ", "
    }
}
console.log(a);
}

/// 2 Вивести на сторінку квадрати чисел від 10 до 20 через кому

function second() {
let a = ''

for(let i = 10; i < 21 ; i++) {
    a += i * i
    if (i < 20) a += ", "
}
console.log(a);
}  

/// 3 Вивести таблицю множення на 7 в форматі (1*7 = 7; 2*7 = 14…)

function third() {
    for(let i = 1;i < 11; i++) {
        console.log(`${i} * 7 = ${i * 7 }`)
    }
}

/// 4 Знайти суму всіх цілих чисел від 1 до 15

function fourth() {
let a = 0;

    for(let i = 1; i < 16; i++) {
        a += i  
    }
    console.log(a)
}

/// 5 Знайти добуток всіх цілих чисел від 15 до 35

function fifth() {
    let a = 1n;

    for(let i = 15n; i <= 35n; i++) {
        a *= i  
    }
    console.log(a.toString())
}

/// 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500

function sixth() {
    let sum = 0

    for(let i = 1; i <= 500 ; i++) {
        sum += i
    }

    let result = sum/500
    console.log(result)
}

/// 7 Вивести суму тільки парних чисел в діапазоні від 30 до 80

function seventh() {
    let sum = 0

    for(let i = 30; i <= 80; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    console.log(sum)
}

/// 8 Вивести всі числа в діапазоні від 100 до 200, які кратні 3

function eighth() {
    for(let i = 100; i <= 200 ; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}

/* 9 Дано натуральне число (>0). Знайти і вивести на сторінку всі його дільники
Визначити кількість його парних дільників
Знайти суму його парних дільників */

function nineth() {
    let number = parseInt(prompt("Введіть натуральне число (>0)"))
    let quantity = 0;
    let sum = 0;

    for(let i = 1;i <= number;i++) {
        if(number % i === 0) {
            console.log(`Число ділиться на ${i}`)
            if(i % 2 === 0) {
                quantity++
                sum += i
            }
        }
    }
    console.log(`Визначити кількість його парних дільників: ${quantity}`)
    console.log(`Сума його парних дільників: ${sum}`)
}

/// 10 Вивести на сторінку повну таблицю множення від 1 до 10 
function tenth() {
    for(let i = 1;i <= 10; i++) {
        for(let j = 1; j <= 10; j++) {
             console.log(`${i} * ${j} = ${i * j}`)
        }
    }
}
