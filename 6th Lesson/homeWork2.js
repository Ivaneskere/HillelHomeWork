// Home work 2

// Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// 1 Знайти суму і кількість додатних (положительных) елементів.
// 2 Знайти мінімальний (найменший) елемент масива і його індекс.
// 3 Знайти максимальний (найбільший) елемент масива та його індекс
// 4 Визначити кількість від’ємних (отрицательных) елементів масива
// 5 Знайти кількість непарних додатних  елементів
// 6 Знайти кількість парних додатних елементів
// 7 Знайти суму парних додатних елементів
// 8 Знайти суму непарних додатних елементів
// 9 Знайти добуток всіх додатних елементів
// 10 Змінити на 0 всі елементи масива окрім найбільшого


function second(){


/// 1 Знайти суму і кількість додатних (положительных) елементів
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]; // 14 +
let quantity = 0;
let sum = 0;

for(let i = 0 ;i < arr.length;i++) {
if(arr[i] > 0) {
quantity++
sum += arr[i]
}

}
console.log(`Сума додатних елементів: ${sum}, Кількість додатних елементів: ${quantity}`)

/// 2 Знайти мінімальний (найменший) елемент масива і його індекс

let min = arr[0];
let minIndex = 0

for(let i = 0 ;i < arr.length;i++) {
if(arr[i] < min) {
min = arr[i]
minIndex = i
}
}
console.log(`Мінімальний (найменший) елемент масива: ${min}, Його індекс: ${minIndex}`)

/// 3 Знайти максимальний (найбільший) елемент масива та його індекс

let max = arr[0];
let maxIndex = 0

for(let i = 0 ;i < arr.length;i++) {
if(arr[i] > max) {
max = arr[i]
maxIndex = i
}
}
console.log(`Максимальний (найбільший) елемент масива: ${max}, Його індекс: ${maxIndex}`)


/// 4 Визначити кількість від’ємних (отрицательных) елементів масива

let quantitys = 0

for(i = 0;i < arr.length; i++ ) {
if (arr[i] < 0) {
quantitys++
}
}
console.log(`Кількість від’ємних елементів масива ${quantitys}`)

// 5 Знайти кількість непарних додатних елементів

let numOfUnpairPosElem = 0

for(let i = 0; i < arr.length; i++) {
if(arr[i] % 2 != 0 && arr[i] > 0) {
numOfUnpairPosElem++
}
}
console.log(`Кількість непарних додатних  елементів ${numOfUnpairPosElem}`)

// 6 Знайти кількість парних додатних елементів

let numOfPairPosElems = 0

for(let i = 0; i < arr.length; i++) {
if(arr[i] % 2 === 0 && arr[i] > 0) {
numOfPairPosElems++
}
}
console.log(`Кількість парних додатних  елементів ${numOfPairPosElems}`)

// 7 Знайти суму парних додатних елементів

let sumOfCoupleElements = 0;

for(let i = 0; i < arr.length; i++) {
if(arr[i] % 2 === 0 && arr[i] > 0) {
sumOfCoupleElements += arr[i]
}
}

console.log(`Cума парних додатних елементів ${sumOfCoupleElements}`)

// 8 Знайти суму непарних додатних елементів

let sumOfNotCoupElements = 0;

for(let i = 0; i < arr.length; i++) {
if(arr[i] % 2 != 0 && arr[i] > 0) {
sumOfNotCoupElements += arr[i]
}
}

console.log(`Cума непарних додатних елементів ${sumOfNotCoupElements}`)

// 9 Знайти добуток всіх додатних елементів

let product = 1;

for(let i = 0; i < arr.length; i++) {
if(arr[i] > 0) {
product *= arr[i]
}
}
console.log(`Добуток всіх додатних елементів: ${product}`)

// 10 Змінити на 0 всі елементи масива окрім найбільшого

let maxElement = arr[1]

for (let i = 1; i < arr.length; i++) {
if (arr[i] > maxElement) {
maxElement = arr[i];
}
}

for (let i = 0; i < arr.length; i++) {
if (arr[i] < maxElement) {
arr[i] = 0;
}
}
console.log(arr); 
}