// Lesson 5, Home Work 4

//Дано ціле число (ввести через 'prompt'). 
//З'ясувати, чи просто воно (простим називається число,
//більше 1, що не має інших дільників, крім 1 і себе).

let number = parseInt(prompt("Введіть ціле число:"))
let prost = true

if (number <= 1) {
    prost = false
}

for (let i = 2; i <= Math.sqrt(number);i++) {
    if (number % i === 0) {
        prost = false
        break
    }
}

if (prost) {
    console.log(`${number} - це просте число`)
} else {
    console.log(`${number} - це не просте число`)
}
