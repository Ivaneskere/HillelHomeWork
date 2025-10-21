const peopleContainer = document.querySelector(".infoBlockPeople")
const planetsContainer = document.querySelector(".infoBlockPlanets")
const vehiclesContainer = document.querySelector(".infoBlockVehicles")

const peopleButt = document.querySelector('.peopleButton')
const planetsButt = document.querySelector('.planetsButton')
const vehiclesButt = document.querySelector('.vehiclesButton')

const loadMorePeople = document.querySelector('.loadMorePeop')
const loadMorePlan = document.querySelector('.loadMorePlan')
const loadMoreVehicles = document.querySelector('.loadMoreVehicles')

export const entities = {
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