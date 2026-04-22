import { AlertComponent } from "../../components/alert/index.js";
import { ProductCardComponent } from "../../components/product-card/index.js";

import { ProductPage } from "../product/index.js";

export class MainPage {
  constructor(parent) {
    this.parent = parent;
  }

  get pageRoot() {
    return document.getElementById("main-page");
  }

  get alertContainer() {
    return document.getElementById("alert-container");
  }

  get cardsRowContainer() {
    return document.getElementById("cards-row-container");
  }

  getHTML() {
    return `
            <div id="main-page" class="mt-4">
              <div class="container">
                <div id="alert-container"></div>
                <div id="cards-row-container" class="row g-4">
                </div>
              </div>
            </div>
            `;
  }

  getData() {
    return [
      {
        id: 4,
        src: "images/card-4.jpeg",
        title: "Расчет пошлины онлайн",
        text: "Мгновенный расчет НДС и таможенного сбора по коду ТН ВЭД. Калькулятор с актуальными ставками 2026.",
      },
      {
        id: 5,
        src: "images/card-5.jpeg",
        title: "Предварительное декларирование",
        text: "Подача ДТ до прибытия товара. Сокращение простоя фуры на границе до 1 часа. Электронная подпись.",
      },
      {
        id: 6,
        src: "images/card-6.jpeg",
        title: "Выпуск для физических лиц",
        text: "Услуга «Таможня за 5 минут»: загрузите чек и паспорт, мы заполним пассажирскую декларацию онлайн.",
      },
      {
        id: 7,
        src: "images/card-7.jpeg",
        title: "Услуги таможенного брокера",
        text: "Профессиональное таможенное оформление импорта и экспорта. Представление интересов на таможне.",
      },
    ];
  }

  clickCard(e) {
    const id = parseInt(e.target.dataset.id);
    const cardData = this.getData().find(item => item.id === id);
    const productPage = new ProductPage(this.parent, cardData);
    productPage.render();
  }

  render() {
    this.parent.innerHTML = "";
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);

    const alert = new AlertComponent(this.alertContainer);
    alert.render("Данная страница находится в разработке");

    const data = this.getData();
    data.forEach((item) => {
      const productCard = new ProductCardComponent(this.cardsRowContainer);
      productCard.render(item, this.clickCard.bind(this));
    });
  }
}
