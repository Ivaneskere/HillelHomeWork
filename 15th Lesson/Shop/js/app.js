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

    const PIBofUserValid = /^[A-ZА-ЯIЇЄ][a-zа-яіїє]{2,} [A-ZА-ЯIЇЄ][a-zа-яіїє]{2,} [A-ZА-ЯIЇЄ][a-zа-яіїє]{2,}$/
    const userName = way.PIBofUser.value
    const cityOfUser = way.city.value
    const newPost = way.newPostUsers.value

    const pay = way.Pay.value

    const quantitys = way.quantity.value

    const kom = way.info.value

    if (
      !userName || !cityOfUser || !newPost || !pay || !quantitys || kom === ""
    ) {
      alert("Будь ласка заповніть всі поля")
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


    if (!PIBofUserValid.test(userName)) {
      alert("Ви неправильно ввели ім'я користувача")
    } else if (PIBofUserValid.test(userName)) {
      endOfBuying(product, info);
    }
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

  const date = new Date()
  const str = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  const id = product.id

  const infoForOrdersPage = {
    "id": id,
    "Дата покупки": str,
    "Назва товару": product.name,
    "Ціна": product.price

  }

  const orders = JSON.parse(localStorage.getItem('orders') || '[]')
  orders.push({ product: product.name, details: infoForOrdersPage })
  localStorage.setItem('orders', JSON.stringify(orders))



}


const buttonUserOrders = document.querySelector(".my-orders")
const mainButton = document.querySelector(".my-main-page")
const mainBl = document.querySelector(".mainBl")

const createShopPage = () => {
  mainBl.innerHTML = `
    <div class="wrapper">
      <div class="categories"></div>
      <div class="products"></div>
      <div class="details"></div>
    </div>

    <div class="message">
      <form name=infoOfUser>
        <p>Введіть ваше ПІБ</p>
        <input type="text" name="PIBofUser" placeholder="Введіть ПІБ через пробіл">
        <p>Введіть ваше місто</p>
        <select name="city">
          <option value="LV">Львів</option>
          <option value="KU">Київ</option>
          <option value="KH">Харків</option>
          <option value="OD">Одеса</option>
          <option value="ZT">Житомир</option>
        </select>
        <br>
        <p>Введіть ваше відділення нової пошти</p>
        <input type="text" name="newPostUsers" placeholder="Відділення нової пошти">
        <p>Оберіть спосіб оплати</p>
        <p>Накладений платіж<input value="nakPlat" type="radio" name="Pay"></p>
        <p>оплата на рахунок<input value="narax" type="radio" name="Pay"></p>
        <p>Введіть кількість товарів, яку бажаєте придбати</p>
        <input type="number" name="quantity" placeholder="Введіть кількість товарів">
        <p>Коментар до замовлення</p>
        <input type="textarea" name="info" placeholder="Введіть ваші побажання">
        <button type="button" class="BuyButton">Надіслати дані</button>
      </form>

    </div>
    <div class="order-details"></div>
  `
  showCategories();
}

const changeButton = (showMainPage) => {
  if (showMainPage) {
    buttonUserOrders.style.display = "inline";
    mainButton.style.display = "none";
  } else {
    buttonUserOrders.style.display = "none";
    mainButton.style.display = "inline";
  }
};

changeButton(true);
createShopPage();

buttonUserOrders.addEventListener("click", () => {
  changeButton(false);
  mainBl.style.display = "block"
  mainBl.innerHTML = ''

  const orders = JSON.parse(localStorage.getItem('orders') || '[]')
  if (orders.length === 0) {
    mainBl.innerHTML = 'You have not orders yet'
  } else {
    for (let order of orders) {
      const element = document.createElement('div')
      element.classList.add('addBorder')
      element.addEventListener('click', () => {
        const elementIndexToRemove = orders.findIndex(myOrder => order.id === order.id)
        orders.splice(elementIndexToRemove, 1);
        element.remove()
        localStorage.setItem("orders", JSON.stringify(orders))

      })

      let content = `<h4>${order.product}</h4>`
      for (let key in order.details) {
        content += `<p>${key}: ${order.details[key]}</p>`
      }

      element.innerHTML = content
      mainBl.appendChild(element)
    }
  }
})

mainButton.addEventListener('click', () => {
  changeButton(true);
  createShopPage()
})

