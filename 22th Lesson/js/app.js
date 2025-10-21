// import { SomeModule } from './index.js';
// import './test.css';

// const t = 26;
// const istaance = new SomeModule();
// istaance.test();

// Домашнє завдання (здавати в урок №19):

// Створити додаток по Зоряним війнам
// Реалізувати навігацію: Персонажі, Планети, Транспорт
// Виводити списки відповідних сутностей по кожному розділу
// Приділити увагу UI/UX (верстка, стилі, можна використовувати bootstrap або tailwind)
// Реалізувати пагінацію (підвантаження контента)
// Завдання з *: При кліці на сутність - відображати деталі по ній (персонаж, планета, транспорт)

import { entities } from './index.js'
import './style.scss'; 

const load = function (type) {
    fetch(entities[type].url)
        .then(res => res.json())
        .then(result => {
            showAll(result.results, entities[type].container)
            entities[type].url = result.next
        })
}

const showAll = function(data, container) {
    data.forEach(item => {
        const element = document.createElement('li');
        element.textContent = item.name;
        container.appendChild(element);
    })
}

Object.keys(entities).forEach(type => {
    entities[type].button.addEventListener('click', () => load(type))
    entities[type].loadmore.addEventListener('click', () => load(type))
})
