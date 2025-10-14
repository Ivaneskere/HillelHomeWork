// // 1) Bootstrap:

// // Вивести на сторінку кнопку (застосувати стилі бутстрапа), 
// // при натисканні на яку, відкривається дефолтне модальне вікно із деякими даними
// // Повісити на цю кнопку Tooltip із довільним текстом
// // Створити поруч ще одну кнопку, при натисканні на яку, відображається бутстрапівський алерт. 
// // При повторному натисканні - він зникає

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const wrapper = document.createElement('div')
const appendAlert = (message, type) => {
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

let isVisible = false;
const alertTrigger = document.getElementById('liveAlertBtn')
    alertTrigger.addEventListener('click', () => {
        
        if (!isVisible) {
            appendAlert('Nice, you triggered this alert message!', 'success')
        } else {
            wrapper.innerHTML = ""
        }
        isVisible = !isVisible
    })