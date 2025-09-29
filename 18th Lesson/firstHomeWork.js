
let timer = parseInt(prompt("Введіть кількість часу в секундах"))
const blockForTimer = document.querySelector('#timer')
const body = document.querySelector('#body')

const interval = setInterval(() => {
    let minute = Math.floor(timer / 60)
    let second = timer % 60

    let minutes
    if (minute < 10) {
        minutes = "0" + minute
    } else {
        minutes = minute
    }

    let seconds
    if (second < 10) {
        seconds = "0" + second
    } else {
        seconds = second
    }

    let format = minutes + ":" + seconds

    blockForTimer.textContent = "<h1>Таймер відліку</h1>"
    blockForTimer.textContent = format

    timer--

    if (timer === -1) {
        clearInterval(interval)
        body.innerHTML = ""
        body.innerHTML = "<h1>Час вийшов😢</h1>"
    }
}, 1000)

