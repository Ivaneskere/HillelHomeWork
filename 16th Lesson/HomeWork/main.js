function Student(name, lastName, bDYear, grade = []) {
    this.name = name
    this.lastName = lastName
    this.bDYear = bDYear
    this.grade = grade
    this.getUserAge = function () {
        let age = new Date().getFullYear() - this.bDYear
        return console.log(age)
    }
    this.getUserMdGr = function () {
        let sum = this.grade.reduce((a, b) => a + b, 0)
        let midGrade = sum / grade.length
        console.log(midGrade)
        return midGrade
    }
    this.gradeStudent = new Array(25)
    this.sumOfVid = 0
    this.present = function () {
        for (let i = 0; i < this.gradeStudent.length; i++) {
            if (this.gradeStudent[i] === undefined) {
                this.gradeStudent[i] = true
                this.sumOfVid++
                break
            }

        }
    }
    this.absent = function () {
        for (let i = 0; i < this.gradeStudent.length; i++) {
            if (this.gradeStudent[i] === undefined) {
                this.gradeStudent[i] = false
                break
            }
        }
    }
    this.summary = function() {
        let midGrade = this.getUserMdGr()
        let serVid = this.sumOfVid / this.gradeStudent.length
        console.log(serVid)

        if(midGrade > 4.2 && serVid > 0.9) {
            console.log("Молодець!")
        } else if (midGrade > 4.2 || serVid > 0.9) {
            console.log("Добре, але можна краще!")
        } else {
            console.log("Редиска!")
        }
    }
}

const studentOne = new Student("Ivan", "Lysenko", 2006, [5,5,4,5,5,5,5,4 ,5,5,4])
studentOne.getUserAge()
studentOne.getUserMdGr()
for(let i = 0; i < 23;i++) {
    studentOne.present()
}
for(let i = 0; i < 4;i++) {
    studentOne.absent()
}
studentOne.summary()
console.log("==================")

const studentTwo = new Student("Maksum", "Diduch", 2005, [3,4,5,4,5,2,5,5,4,5,5,4])
studentTwo.getUserAge()
studentTwo.getUserMdGr()
for(let i = 0; i < 5;i++) {
    studentTwo.present()
}
for(let i = 0; i < 20;i++) {
    studentTwo.absent()
}
studentTwo.summary()
console.log("==================")

const studentThree = new Student("Denus", "Yakov", 2000, [2,1,1,2,2,2,2,1,2,2,3,1])
studentThree.getUserAge()
studentThree.getUserMdGr()
for(let i = 0; i < 1;i++) {
    studentThree.present()
}
for(let i = 0; i < 24;i++) {
    studentThree.absent()
}
studentThree.summary()
console.log("==================")