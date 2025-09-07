const cities = {
    LV: "Львів",
    KU: "Київ",
    KH: "Харків",
    OD: "Одеса",
    ZT: "Житомир"
}

const gender = {
    famale: "Жіноча",
    male: "Чоловіча"
}


const buttonSave = document.querySelector("#myButton").addEventListener('click', () => {
    const form = document.forms.myForm

    const name = form.nameOfUser.value
    const lastName = form.lastnameOfUser.value
    const BD = form.dateOfBirthdayOfUser.value
    const gendr = form.gender.value
    const city = form.city.value
    const adres = form.adress.value

    const languages = []

    for (let i = 0; i < form.languages.length; i++) {
        if (form.languages[i].checked) {
            languages.push(form.languages[i].value)
        }
    }

    const userData = {
        "Ім'я": name,
        "Прізвище": lastName,
        "Дата народження": BD,
        "Стать": gender[gendr],
        "місто проживання": cities[city],
        "Адреса": adres,
        "Мови": languages
    }

    table(userData)
})

function table(data) {
    const table = document.createElement("table")
    table.border = 1
    table.style.color = 'white'

    for (let key in data) {
        const tr = document.createElement("tr")

        const td1 = document.createElement("td")
        td1.textContent = key

        const td2 = document.createElement("td")
        td2.textContent = data[key]

        tr.appendChild(td1)
        tr.appendChild(td2)
        table.appendChild(tr)
    }

    document.body.appendChild(table)
}