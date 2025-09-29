class University {
    myCourses = new Map()

    saveCourses(course) {
        this.myCourses.set(course.code, course)
    }

    showAll() {
        this.myCourses.forEach((course, code) => {
            console.log(`Код курс ${code}`)
            course.addStudentToCourses()
        })
    }
}

class Course {
    myStudents = new Set()

    addStudentToCourses(student) {
        if (student && student.name) {
            this.myStudents.add(student)
        }
    }
}

class Student {

    constructor(name) {
        if (name != "")
            this.name = name
    }
}