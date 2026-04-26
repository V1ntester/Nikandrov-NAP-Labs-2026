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
          <div 
            id="cards-carousel" 
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
            data-bs-pause="hover"
          >
            <div class="carousel-inner" id="cards-row-container"></div>

            <button class="carousel-control-prev" type="button" data-bs-target="#cards-carousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#cards-carousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>

        </div>
      </div>
    `;
  }

  getData() {
    return [
      {
        id: 4,
        src: "assets/images/card-4.jpeg",
        title: "Расчет пошлины онлайн",
        text: "Мгновенный расчет НДС и таможенного сбора по коду ТН ВЭД. Калькулятор с актуальными ставками 2026.",
      },
      {
        id: 5,
        src: "assets/images/card-5.jpeg",
        title: "Предварительное декларирование",
        text: "Подача ДТ до прибытия товара. Сокращение простоя фуры на границе до 1 часа. Электронная подпись.",
      },
      {
        id: 6,
        src: "assets/images/card-6.jpeg",
        title: "Выпуск для физических лиц",
        text: "Услуга «Таможня за 5 минут»: загрузите чек и паспорт, мы заполним пассажирскую декларацию онлайн.",
      },
      {
        id: 7,
        src: "assets/images/card-7.jpeg",
        title: "Услуги таможенного брокера",
        text: "Профессиональное таможенное оформление импорта и экспорта. Представление интересов на таможне.",
      },
    ];
  }

  clickCard(e) {
    const id = parseInt(e.target.dataset.id);
    const cardData = this.getData().find((item) => item.id === id);
    const productPage = new ProductPage(this.parent, cardData);
    productPage.render();
  }

  render() {
    this.parent.innerHTML = this.getHTML();

    const alert = new AlertComponent(this.alertContainer);
    alert.render("Данная страница находится в разработке");

    const data = this.getData();

    data.forEach((item, index) => {
      const productCard = new ProductCardComponent(this.cardsRowContainer);
      productCard.render(
        item,
        this.clickCard.bind(this),
        index === 0
      );
    });
  }
}
