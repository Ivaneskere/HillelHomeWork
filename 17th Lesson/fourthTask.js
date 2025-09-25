class House {
    apartments = new Map();

    addAppartment(obj) {
        if (obj.id) {
            this.apartments.set(obj.id, obj)
        }
    }

    showAll() {
        this.apartments.forEach((apartment, id) => {
            console.log(`Квартира номер ${id}`)
            apartment.showAllResidents()
        });
    }
}

class Apartment {
    residents = new Set();

    addResident(resident) {
        if (resident && resident.name) {
            this.residents.add(resident)
        }
    }

    showAllResidents() {
        this.residents.forEach(people => {
            console.log(`Мешканці: ${people.name}`)
        });
    }
}


class Resident {

    constructor(name) {
        this.name = name
    }
}

const house1 = new House()
const apartment1 = new Apartment()
apartment1.id = 1
const resident1 = new Resident("Максим")
apartment1.addResident(resident1)
house1.addAppartment(apartment1)

const apartment2 = new Apartment()
apartment2.id = 2
const resident2 = new Resident("Іван")
const resident3 = new Resident("Денис")
apartment2.addResident(resident2)
apartment2.addResident(resident3)
house1.addAppartment(apartment2)
house1.showAll()