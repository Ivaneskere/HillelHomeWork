const text = "Минулого тижня, а саме 01.09.2025, я поїхав у Львів. https://youtube.com Там ми відвідали кілька кав’ярень, де замовляли #кава та #сирник. Особливо сподобалося місце, яке відкрили ще 15.08.2020 року."

const resultFirst = text.match(/#/g);
console.log(resultFirst)

const resultSecond = text.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g)
console.log(resultSecond)

const resultThird = text.match(/https:\/\/[a-zA-Z0-9-]+\.com/g)
console.log(resultThird)

const namea = " Ivan "
const nameOfUser = /\w{3,15}/g

console.log(namea.match(nameOfUser))

const password = 'MyPass2023!'

const lightPassword = /^[A-Za-z]+$/
const middlePassword = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[A-Za-z0-9]+$)/
const hardPassword = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[\W_]).+$/

if(password.match(lightPassword)) {
    console.log("Password is light")
} else if(password.match(middlePassword)) {
    console.log("Password is middle")
} else if(password.match(hardPassword)) {
    console.log("Password is hard")
}