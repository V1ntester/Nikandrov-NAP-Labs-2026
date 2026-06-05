import { AlertComponent } from "../../components/alert/index.js";
import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";

import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";


export class MainPage {
  constructor(parent) {
    this.parent = parent;
    this.stocksData = null;
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
      ajax.get(stockUrls.getStocks(), (data) => {
          this.stocksData = data;
          this.renderData(data);
      })
  }

  renderData(items) {
    items.forEach((item, index) => {
      const productCard = new ProductCardComponent(this.cardsRowContainer);
      productCard.render(
        item,
        this.clickCard.bind(this),
        index === 0
      );
    })
}

  clickCard(e) {
    const id = parseInt(e.target.dataset.id);

    const productPage = new ProductPage(this.parent, id);
    productPage.render();
  }

  render() {
    this.parent.innerHTML = this.getHTML();

    const alert = new AlertComponent(this.alertContainer);
    alert.render("Данная страница находится в разработке");

    this.getData()
  }
}
