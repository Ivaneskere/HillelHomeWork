
// HomeWork 8.1. Сходи
function first() {
  let ladder = {
    step: 0,
    up: function () {
      this.step++
      return this
    },
    down: function () {
      this.step--
      return this
    },
    showStep: function () {
      console.log(this.step);
      return this;
    }
  };
  ladder.up().up().up().up().down().up().down().showStep();
}

// HomeWork 8.2 Магазин книг'
function second() {
  // Дан массив объектов с книгами:
  // Задание:
  // 1. С помощью filter выбрать только книги жанра "programming".
  // 2. С помощью map получить массив только с названиями этих книг.
  // 3. С помощью reduce посчитать общую стоимость выбранных книг.

  const books = [
    { title: "JS для начинающих", price: 500, genre: "programming" },
    { title: "CSS в деталях", price: 300, genre: "design" },
    { title: "React быстро", price: 800, genre: "programming" },
  ];


  // 1 С помощью filter выбрать только книги жанра "programming".
  const programming = books.filter(books => books.genre == "programming")
  console.log(programming);

  // 2 С помощью map получить массив только с названиями этих книг.
  const nameOfBooks = books.filter(books => { // Зробив по вашим рекомендаціям через filter, бо через map видає undefined
    if (books.genre == "programming") {
      return books.title
    }
  }
  )
  console.log(nameOfBooks)

  // 3 С помощью reduce посчитать общую стоимость выбранных книг.
  const calculate = books.reduce((sum, nextValue) => {
    if (nextValue.genre == "programming") {
      return sum + nextValue.price
    }
    return sum
  }, 0)
  console.log(calculate)
}

// HomeWork 8.3 Список студентов и средний балл
function third() {
  // Задание:

  const students = [
    { name: "Аня", grades: [5, 4, 4, 5] },
    { name: "Петя", grades: [3, 4, 4, 3] },
    { name: "Ира", grades: [5, 5, 5, 5, 5, 5] },
  ];

  // 1. Используя map и стрелочные функции, 
  // получить массив объектов с именем и средним баллом студента.

  let studentsPoint = students.map(student => {
    let sum = 0
    student.grades.forEach(element => {
      sum += element
    });
    let average = sum / student.grades.length
    return { name: student.name, average: average };
  })
  console.log(studentsPoint)

  // 2. Отфильтровать тех, у кого средний балл меньше 4.5.

  let filt = studentsPoint.filter(student => student.average < 4.5);
  console.log(filt)
}

// HomeWork 8.4 Контекст this в объекте
function fourth() {
  // Задание:
  // Реализовать метод increment, который увеличивает value на 1 каждую секунду, 
  // используя стрелочную функцию внутри setInterval(придется погуглить этот метод)
  // для сохранения контекста this.

  const counter = {
    value: 0,
    increment() {
      setInterval(() => {
        this.value++
        console.log(this.value)
      }, 1000)
    }
  };
  counter.increment()
}

// HomeWork 8.5 Преобразование данных о товарах
function fifth() {
  // Задание:
  // 1. С помощью map создать новый массив, 
  // где к каждому товару добавлено поле total = quantity * price.
  // 2. С помощью reduce найти общую стоимость всех товаров.

  const items = [
    { name: "apple", quantity: 2, price: 30 },
    { name: "banana", quantity: 5, price: 10 },
    { name: "orange", quantity: 3, price: 20 },
  ];

  let result = items.map(fruts => {
    let total = fruts.quantity * fruts.price
    return { name: fruts.name, total: total }
  })
  console.log(result)

  let sum = result.reduce((value, nextValue) => {
    return value + nextValue.total
  }, 0)
  console.log(sum)
}






// Сума чисел у масиві
function a() {
  const numbers = [1, 2, 3, 4, 5];

  let sum = numbers.reduce((acc, next) => {
    return acc + next
  })

  console.log(sum)
}

// Добуток чисел у масиві
function b() {
  const number = [1, 2, 3, 4];

  let summ = number.reduce((ac, nextt) => {
    return ac * nextt
  })

  console.log(summ)
}

// Підрахунок кількості парних чисел
function c() {
  const numberss = [1, 2, 3, 4, 5, 6];

  const countEven = numberss.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc++;
    }
    return acc;
  }, 0);

  console.log(countEven);
}

// Злиття масивів у один
function d() {
  const arrays = [[1, 2], [3, 4], [5]];

  const sho = arrays.reduce((acc, current) => {
    let res = acc.concat(current)
    return res
  }, [])
  console.log(sho)
}

// Сума довжин рядків
function e() {
  const fir = ["apple", "banana", "kiwi"]

  const firTas = fir.reduce((acc, word) => {
    return acc + word.length
  }, 0)

  console.log(firTas)
}

// Сума чисел, більших за 10 
function f() {
  const arr = [5, 12, 8, 20, 3]

  const result = arr.reduce((acc, number) => {
    if (number > 10) {
      acc += number
    }
    return acc
  }, 0)
  console.log(result)
}

// Підрахунок true/false
function g() {
  const arr = [true, false, true, true, false]

  const result = arr.reduce((acc, orr) => {
    if (orr === true) {
      acc.true++
    } else {
      acc.false++
    }
    return acc
  }, { true: 0, false: 0 })

  console.log(result)
}

// Підрахунок голосних у словах
function j() {
  const arr = ["apple", "banana", "pear"]

  const result = arr.reduce((acc, letters) => {
    for (const char of letters) {
      if (char === "a") {
        acc.a++
      } else if (char === "e") {
        acc.e++
      } else if (char === "i") {
        acc.i++
      } else if (char === "o") {
        acc.o++
      } else if (char === "u") {
        acc.u++
      }
    }
    return acc
  }, { a: 0, e: 0, i: 0, o: 0, u: 0, })
  console.log(result)
}

// Групування чисел на парні та непарні
function q() {
  const arr = [1, 2, 3, 4, 5, 6]

  const result = arr.reduce((acc, numbers) => {
    if (numbers % 2 === 0) {
      acc.even.push(numbers)
    } else {
      acc.odd.push(numbers)
    }
    return acc
  }, { even: [], odd: [] })

  console.log(result)
}

// Об’єднати масив об’єктів в один
function w() {
  const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];

  const result = arr.reduce((acc, number) => {
    return { ...acc, ...number }
  }, {})
  console.log(result)
}

// Загальна ціна покупок
function e() {
  const items = [
    { name: "apple", price: 10, qty: 2 },
    { name: "banana", price: 5, qty: 5 }
  ];

  const result = items.reduce((acc, item) => acc + item.price * item.qty, 0)
  console.log(result)
}

// Групування людей за віком
function r() {
  const people = [
    { name: "Ivan", age: 20 },
    { name: "Oksana", age: 20 },
    { name: "Petro", age: 30 }
  ];

  const result = people.reduce((acc, person) => {
    // якщо ще немає масиву для цього віку, створюємо його
    if (!acc[person.age]) {
      acc[person.age] = [];
    }

    // додаємо ім’я людини у відповідний масив
    acc[person.age].push(person.name);
    return acc
  }, {})
  console.log(result)
}

// Підрахунок кількості слів за першою літерою
function t() {
  const words = ["apple", "banana", "avocado", "blueberry", "apricot"];
  const result = words.reduce((acc, word) => {
    if (!acc[word[0]]) {
      acc[word[0]] = 1
    } else {
    acc[word[0]]++
    }
    return acc
  }, {})
  console.log(result)
}

// Видалення дублікатів
function y() {
  const numbers = [1, 2, 2, 3, 4, 3, 5];

  const result = numbers.reduce((acc, number) => {
    if(!acc.includes[number]) {
      acc.push(number)
    }
    return acc
  }, [])
  console.log(result)
}

// Підрахунок певного символу з this
function u() {
const words = ["apple", "banana", "avocado", "blueberry"];

const counter = {
  letter: "a",
  count() {
    return words.reduce(function(acc, word) {
      for (const char of word) {
        if (char === this.letter) acc++;
      }
      return acc;
    }, 0, this); 
  }
};
}