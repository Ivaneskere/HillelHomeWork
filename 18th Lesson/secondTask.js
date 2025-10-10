// Пишемо свій слайдер зображень, який повинен:
// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами


function slider() {
    let value = 3
    const myImg = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg"]
    const Img = document.querySelector('#scrolImg')
    const pBtn = document.querySelector('#prevBtn')
    const nBtn = document.querySelector('#nextBtn')
    let interval

    function restartInterval() {
        clearInterval(interval)
        interval = setInterval(() => {
            value++
            if (value >= myImg.length) {
                value = 0
            }
            Img.src = myImg[value]
            updateSlider()
        }, 3000)
    }

    function prev() {
        pBtn.addEventListener('click', () => {
            value--
            if (value < 0) {
                value = myImg.length - 1
            }
            Img.src = myImg[value]
            updateSlider()
            restartInterval()
        })
    }

    function next() {

        nBtn.addEventListener('click', () => {
            value++
            if (value >= myImg.length) {
                value = 0
            }
            Img.src = myImg[value]
            updateSlider()
            restartInterval()
        })
    }

    function nav() {
        const mainDiv = document.querySelector("#navigation")

        myImg.forEach((ImgSrc, i) => {
            const div = document.createElement('div')
            div.classList.add('nav-krapka')
            div.dataset.index = i
            mainDiv.appendChild(div)
        })

        mainDiv.addEventListener("click", (el) => {
            if (el.target.classList.contains("nav-krapka")) {
                const index = Number(el.target.dataset.index)
                value = index 
                Img.src = myImg[value]
                updateSlider()
                restartInterval() 
            }
        })

    }

    function updateSlider() {
        document.querySelectorAll(".nav-krapka").forEach(krapka => krapka.classList.remove("active"))
        document.querySelector(`.nav-krapka[data-index='${value}']`).classList.add('active')

        if (value === 0) {
            pBtn.style.display = 'none'
        } else {
            pBtn.style.display = 'inline-block'
        }

        if (value === myImg.length - 1) {
            nBtn.style.display = 'none'
        } else {
            nBtn.style.display = 'inline-block'
        }
    }



    restartInterval()
    prev()
    next()
    nav()
    updateSlider()
}
slider()