let peopleUrl = 'https://swapi.dev/api/people/';
let planetsUrl = 'https://swapi.dev/api/planets/';
let vehiclesUrl = 'https://swapi.dev/api/vehicles/';
const peopleContainer = document.querySelector(".infoBlockPeople")
const planetsContainer = document.querySelector(".infoBlockPlanets")
const vehiclesContainer = document.querySelector(".infoBlockVehicles")
const peopleButt = document.querySelector('.peopleButton')
const planetsButt = document.querySelector('.planetsButton')
const vehiclesButt = document.querySelector('.vehiclesButton')
const loadMorePeople = document.querySelector('.loadMorePeop')
const loadMorePlan = document.querySelector('.loadMorePlan')
const loadMoreVehicles = document.querySelector('.loadMoreVehicles')

function load(type) {
    if (type === "people") {
        fetch(peopleUrl)
            .then(res => res.json())
            .then(result => {
                showPeople(result.results);
            }); 
    } else if (type === "planets") {
        fetch(planetsUrl)
            .then(res => res.json())
            .then(result => {
                showPlanet(result.results);
            });
    } else if (type === "vehicles") {
        fetch(vehiclesUrl)
            .then(res => res.json())
            .then(result => {
                showVehicles(result.results);
            });
    }
}


function showPeople(people) {
    people.forEach(person => {
        const element = document.createElement('li');
        element.textContent = person.name;
        peopleContainer.appendChild(element);
    })
}
peopleButt.addEventListener('click', () => {
    load('people');
});

loadMorePeople.addEventListener('click', () => {
    load('people');
})

function showPlanet(planet) {
    planet.forEach(planett => {
        const element = document.createElement('li');
        element.textContent = planett.name;
        planetsContainer.appendChild(element);
    })
}
planetsButt.addEventListener('click', () => {
    load('planets');
})

loadMorePlan.addEventListener('click', () => {
    load('planets');
})

function showVehicles(vehicles) {
    vehicles.forEach(auto => {
        const element = document.createElement('li')
        element.textContent = auto.name;
        vehiclesContainer.appendChild(element)
    })
}
vehiclesButt.addEventListener('click', () => {
    load('vehicles');
})

loadMoreVehicles.addEventListener('click', () => {
    load('vehicles');
})