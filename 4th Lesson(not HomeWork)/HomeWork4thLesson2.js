// HomeWork 4.2 

/*
Дано тризначне число, яке надае користувач, потрибно визначити:
Чи правда, що всі цифри однакові?
Чи є серед цифр цифри однакові?
*/

function Tasks(){

    let a = prompt("Enter a three-digit number")

    if (a.length !== 3) {
        alert("Its a not three-digit number")
        return;
    }

    let first = (a[0]);
    let second = (a[1]);
    let third = (a[2]); 

    if ((first === second) && (second === third)) {
        console.log("Yes, all numbers are the same.")
    } else {
        console.log("No, all numbers are not the same.")
    } 
    
    if ((first === second) || (second === third) || (first === third)) {
        console.log("Yes, some numbers are similar.")
    } else {
        console.log("No, there are no similar numbers.")
    } 
}
Tasks()