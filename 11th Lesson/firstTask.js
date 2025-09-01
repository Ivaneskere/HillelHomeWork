// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

function firstTast() {
const myBlock = document.getElementById('table')

const myTable = document.createElement('table')

for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr')
    for (let j = 1; j <= 10; j++) {
        const td = document.createElement('td')
        td.textContent = i * j
        tr.appendChild(td)
    }
    myTable.appendChild(tr)
}

myBlock.appendChild(myTable)
}




