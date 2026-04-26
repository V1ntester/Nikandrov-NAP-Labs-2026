import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";
import { ProductComponent } from "../../components/product/index.js";
import { ModelComponent } from "../../components/model/index.js";

export class ProductPage {
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;

    this.modelInstance = null;
  }

  getData() {
    return this.data;
  }

  get pageRoot() {
    return document.getElementById("product-page");
  }

  get productCardContainer() {
    return document.getElementById("product-card-container");
  }

  get modelContainer() {
    return document.getElementById("model-container");
  }

  getHTML() {
    return `
                <div id="product-page" class="mt-4">
                    <div class="container">
                        <div id="product-card-container">
                        </div>
                        <div id="model-container">
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

    const data = this.getData();
    const stock = new ProductComponent(this.productCardContainer);
    stock.render(data, this.clickBack.bind(this));

    if (this.modelInstance) {
      this.modelInstance.destroy?.();
    }

    this.modelInstance = new ModelComponent(this.modelContainer);
    this.modelInstance.render("/assets/models/red-car.glb");
  }
}
