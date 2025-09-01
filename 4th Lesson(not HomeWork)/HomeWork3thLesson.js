// HomeWork 3.3

/* Розкласти за цифрами п'ятизначне число
і вивести у вихідному порядку через пробіл. 
Приклад:10369 1 0 3 6 9 */

let digit = 12345;

let a = Math.floor(digit / 10000);
let b = Math.floor((digit % 10000) / 1000);
let c = Math.floor((digit % 1000) / 100);
let d = Math.floor((digit % 100) / 10);
let e = digit % 10;

console.log(a, b, c, d, e);

