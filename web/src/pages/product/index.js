import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";
import { ProductComponent } from "../../components/product/index.js";

import {ajax} from "../../modules/ajax.js";
import {stockUrls} from "../../modules/stockUrls.js";

export class ProductPage {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
  }

  getData() {
    ajax.get(stockUrls.getStockById(this.id), (data) => {
        this.renderData(data);
    })
  }

  renderData(item) {
      const stock = new ProductComponent(this.productCardContainer);
      stock.render(item, this.clickBack.bind(this));
  }

  get pageRoot() {
    return document.getElementById("product-page");
  }

  get productCardContainer() {
    return document.getElementById("product-card-container");
  }

  getHTML() {
    return `
                <div id="product-page" class="mt-4">
                    <div class="container">
                        <div id="product-card-container">
                        </div>
                    </div>
                </div>
            `;
  }

  clickBack() {
    const mainPage = new MainPage(this.parent);
    mainPage.render();
  }

  render() {
    this.parent.innerHTML = "";
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);

    this.getData()
  }
}
