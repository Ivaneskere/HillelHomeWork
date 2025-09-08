const showCategories = () => {
  const parent = document.querySelector('.categories');
  if (!parent) {
    return;
  }

  const categoriesList = document.createElement('ul');
  categoriesList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      const categoryId = event.target.getAttribute('data-category');
      const category = categories[categoryId];
      if (!category) {
        return;
      }
      showProductsByCategory(category);
    }
  });

  Object.values(categories).forEach(category => {
    const element = document.createElement('li');
    element.textContent = category.name;
    element.setAttribute('data-category', category.id);
    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
};


const showProductsByCategory = category => {
  const parent = document.querySelector('.products');
  parent.innerHTML = '';

  const productsList = document.createElement('ul');

  category.products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - ${product.price} грн`;

    li.setAttribute('data-product', product.id);
    li.setAttribute('data-category', category.id);

    li.addEventListener('click', () => {
      showProductDetails(product);
    });

    productsList.appendChild(li);
  });

  parent.appendChild(productsList);
};

function showProductDetails(product) {

  const parent = document.querySelector('.details');
  parent.innerHTML = '';

  const title = document.createElement('h3');
  title.textContent = product.name;

  const price = document.createElement('p');
  price.textContent = `Ціна: ${product.price} грн`;

  const buyBtn = document.createElement('button');
  buyBtn.textContent = 'Придбати';

  buyBtn.addEventListener('click', () => {
    showMessage(product);

    msg.style.display = "inline";
  });

  parent.appendChild(title);
  parent.appendChild(price);
  parent.appendChild(buyBtn);
}

const msg = document.querySelector('.message');
msg.style.display = "none";

function showMessage(product) {
  const cities = {
    LV: "Львів",
    KU: "Київ",
    KH: "Харків",
    OD: "Одеса",
    ZT: "Житомир"
  }

  const sposibOplatu = {
    nakPlat: "Накладений платіж",
    narax: "Оплата на рахунок"
  }

  const buyButton = document.querySelector(".BuyButton").addEventListener('click', () => {

    const way = document.forms.infoOfUser
    const userName = way.PIBofUser.value
    const cityOfUser = way.city.value
    const newPost = way.newPostUsers.value
    const pay = way.Pay.value
    const quantitys = way.quantity.value
    const kom = way.info.value

    if ( // Ви ніби казали поки не використовувати регулярні вирази, тому я зробив саму звичайну перевірку
      !userName || !cityOfUser || !newPost || !pay || !quantitys || kom === ""
    ) {
      msg.textContent = "⚠️ Будь ласка заповніть всі поля";
      return;
    }

    const info = {
      "ПІБ користувача": userName,
      "Місто проживання": cities[cityOfUser],
      "Відділення нової пошти": newPost,
      "Спосіб оплати": sposibOplatu[pay],
      "Кількість товарів": quantitys,
      "Коментар до замовлення": kom
    }

    endOfBuying(product, info);
  })
}

function endOfBuying(product, OrderData) {
  const lastMassage = document.querySelector('.order-details');
  lastMassage.innerHTML = '';

  const myH3 = document.createElement('h3');
  myH3.textContent = `Дякую, що придбали ${product.name}!, Деталі замовлення:`;
  lastMassage.appendChild(myH3);

  const infoBlock = document.createElement('div');
  infoBlock.classList.add('order-info');

  for (let key in OrderData) {
    const p = document.createElement('p');
    p.innerHTML = `<strong>${key}:</strong> ${OrderData[key]}`;
    infoBlock.appendChild(p);
  }

  lastMassage.appendChild(infoBlock);
}

showCategories();