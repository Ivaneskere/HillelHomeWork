// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 
// (але максимум 10 ітерацій циклу) . 
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. 
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, 
// то функція виводить в консоль останній введення користувача і завершує функцію.

function thirdTask() {

    let lastNumber

    for(let i = 0; i <= 10; i++) {
        let numberOfUseer = prompt("Введіть число більше ніж 100")
        lastNumber = numberOfUseer

        if (numberOfUseer < 100) {
            console.log("Введи ще раз будь ласка")
        } else if (numberOfUseer >= 100 || typeof numberOfUseer === "string" || i > 10) {
            break;
        } 
    }
    console.log(lastNumber)
}
thirdTask()
