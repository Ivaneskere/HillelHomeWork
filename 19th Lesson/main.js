// Домашнє завдання (здавати в урок №19):

// Створити додаток по Зоряним війнам
// Реалізувати навігацію: Персонажі, Планети, Транспорт
// Виводити списки відповідних сутностей по кожному розділу
// Приділити увагу UI/UX (верстка, стилі, можна використовувати bootstrap або tailwind)
// Реалізувати пагінацію (підвантаження контента)
// Завдання з *: При кліці на сутність - відображати деталі по ній (персонаж, планета, транспорт)


const peopleContainer = document.querySelector(".infoBlockPeople")
const planetsContainer = document.querySelector(".infoBlockPlanets")
const vehiclesContainer = document.querySelector(".infoBlockVehicles")

const peopleButt = document.querySelector('.peopleButton')
const planetsButt = document.querySelector('.planetsButton')
const vehiclesButt = document.querySelector('.vehiclesButton')

const loadMorePeople = document.querySelector('.loadMorePeop')
const loadMorePlan = document.querySelector('.loadMorePlan')
const loadMoreVehicles = document.querySelector('.loadMoreVehicles')

const entities = {
    people: {
        url: 'https://swapi.dev/api/people/',
        container: peopleContainer,
        button: peopleButt,
        loadmore: loadMorePeople
    },
    planets: {
        url: 'https://swapi.dev/api/planets/',
        container: planetsContainer,
        button: planetsButt,
        loadmore: loadMorePlan
    },
    vehicles: {
        url: 'https://swapi.dev/api/vehicles/',
        container: vehiclesContainer,
        button: vehiclesButt,
        loadmore: loadMoreVehicles
    }
}

const load = function (type) {
    fetch(entities[type].url)
        .then(res => res.json())
        .then(result => {
            showAll(result.results, entities[type].container)
            entities[type].url = result.next
        })
}

const showAll = function(data, container) {
    data.forEach(item => {
        const element = document.createElement('li');
        element.textContent = item.name;
        container.appendChild(element);
    })
}

Object.keys(entities).forEach(type => {
    entities[type].button.addEventListener('click', () => load(type))
    entities[type].loadmore.addEventListener('click', () => load(type))
})
