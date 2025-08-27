// Lesson 5, Home Work 1

//Один долар коштує 26 гривень. 
//Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

function second() {
    
    let cost = 10
    let dollar = 26
    let dCost

    for (let i = 10;i <= 100;i += cost) {
        dCost = i * dollar 
        console.log(`${i} доларів = ${dCost} гривень`)
    }
}
