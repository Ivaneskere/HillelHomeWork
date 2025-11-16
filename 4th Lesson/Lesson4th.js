// Це завдання 4того заняття на уроці


function firstTask() { // Дано 2 числа. Визначити, яке з них більше, а яке - менше. Перевірити, чи вони однакові
    
    let a = parseInt(prompt("Enter first number:"));
    let b = parseInt(prompt("Enter second number:"));

    if (a > b) {
        console.log("a is greater than b");
    } else if (a < b) {
        console.log("a is less than b");
    } else if (a === b) {
        console.log("a is equal to b");
    } else {
        console.log("Invalid input");
    }
}
function secondTask() { // Відомі 2 відстані. Одна - в кілометрах, інша - в футах (1 фут = 0,305м, 1км = 1000м). Яка відстань менша?
    
    let km = parseInt(prompt("Enter distance in kilometers:"));
    km = km * 1000; 
    let foot = parseInt(prompt("Enter distance in foot:"));
    foot = foot * 0.305; 

    if  (km < foot) {
        console.log("Distance in kilometers is less than distance in feet");
    } else if (km > foot) {
        console.log("Distance in kilometers is greater than distance in feet");
    } else {
        console.log("Distances are equal");
    }
}
function thirdTask() { // Визначити, чи є число а дільником числа b. І навпаки, якщо число а більше за b.
    
    let a = parseInt(prompt("Enter first number:"));
    let b = parseInt(prompt("Enter second number:"));

    if (a > b && a % b === 0) {
        console.log("b is a divisor of a");
    } else if (b > a && b % a === 0) {
        console.log("a is a divisor of b");
    } else {
        console.log("Neither is a divisor of the other");
    }
}
function fourthTask() { // Дано число. Визначити, чи закінчується воно парною чи непарною цифрою. Вивести останню цифру в консоль
    
    let a = prompt("enter your number")
    let b = parseInt(a[a.length - 1]); 

    if (a % 2 === 0) {
        console.log("number is Even, Your last number is : ", b)
    } else if (a % 2 != 0) {
        console.log("number is a not Even, Your last number is : ", b)
    }
}
function fifthTasks() { // Дано двозначне число. Визначити, яка з його цифр більша - перша чи друга?
    
    let a = prompt("enter a two-digit number")
    let first = parseInt(a[0]);
    let second = parseInt(a[1]);
    
    if (a < 10 || a > 99) {
        console.log("it is not an two-digitnumber")
    } else if ( first > second ) {
        console.log("the first number is greater than the second")
    } else if ( first < second ) {
        console.log("second number is greaater than the first")
    } else if ( first === second ) {
        console.log("equal numbers")
    }
}
function sixthTask() { 
    /* 
    Дано тризначне число.
    1.Визначити, чи є сума його цифр парною
    2.Визначити, чи кратна сума його цифр п’яти
    3.Визначити, чи є добуток його цифр більшим за 100
    4.Чи вірно, що всі його цифри однакові?
    5.Чи є серед його цифр однакові?
    */

    // 1
    let a = prompt("Enter a three-digit number")
    let first = parseInt(a[0]);
    let second = parseInt(a[1]);
    let third = parseInt(a[2]);
    let sum = first + second + third;
    let mult = first * second * third;

    if (a.length != 3 ) {
        alert("Please, write a three-digit number");
        return;
    }
    
    // 1
    if ( sum % 2 === 0) {
        console.log("even number")
    } else {
        console.log("number is not even")
    } 
    
    // 2
    if ( sum % 5 === 0) {
        console.log("number divisible by 5")
    } else {
        console.log("number is a not divisible by 5")
    }

    // 3
    if ( mult > 100) {
        console.log("greater than 100")
    } else {
        console.log("less than 100")
    }

    // 4
    if ((first === second) && (second === third)) {
        console.log("the numbers are the same")
    } else {
        console.log("the numbers are not the same")
    }

    // 5 
    if ((first === second) || (second === third) || (first === third)) {
        console.log("Yes, the figures are the same.")
    } else {
        console.log("No, there are no identical digits.")
    }


    /*
    or this option

    1)console.log(sum % 2 === 0 ? "even number" : "number is not even");
    2)console.log(sum % 5 === 0 ? "number divisible by 5" : "number is not divisible by 5");
    3)console.log(mult > 100 ? "greater than 100" : "less than 100");
    4)console.log((first === second && second === third) ? "the numbers are the same" : "the numbers are not the same");
    5)console.log((first === second || second === third || first === third) ? "Yes, the figures are the same." : "No, there are no identical digits.");
    
    */

}
function seventhTask() { // Визначити, чи є дане шестизначне число - дзеркальним? (напр., 123321, 147741)
    
    let a = prompt("Enter a six-digit number")
    let first = parseInt(a[0]);
    let second = parseInt(a[1]);
    let third = parseInt(a[2]);
    let fourth = parseInt(a[3]);
    let fifth = parseInt(a[4]);
    let sixth = parseInt(a[5]);

    if (a.length !== 6) {
        alert("Please, enter a valid six-digit number");
        return;
    }

    if ((first === sixth) && (second === fifth) && (third === fourth)) {
        console.log("yes, this number is mirrored")
    } else {
        console.log("No, this number is not mirrored")
    }
}