// Покласти в папку будь-які зображення 
// 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 
// 7.jpg, 8.jpg, 9.jpg. Вивести зображення, 
// отримане випадковим чином (Math.random)

function r() {
    const myImg = document.querySelector("#image")
    const myButton = document.querySelector('#changeImg')
    const myImages = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg", "/img/6.jpg", "/img/7.jpg", "/img/8.jpg", "/img/9.jpg"]

    myButton.addEventListener('click', () => {
        const result = myImages[Math.floor(Math.random() * myImages.length)]
        myImg.src = result
    })
}
r()