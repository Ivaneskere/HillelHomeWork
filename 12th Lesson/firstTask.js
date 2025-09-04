// На сторінці є дві кнопки. 
// При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
// при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

function firstTask() {
    let myLink;
    const myprompt = document.querySelector("#prompt").addEventListener("click", () => {
        myLink = prompt("Введіть посилання")
    })

    const pereadres = document.querySelector("#nextS").addEventListener("click", () => {
        if (myLink !== '' || myLink !== undefined)
            window.location.href = myLink
    })
}
