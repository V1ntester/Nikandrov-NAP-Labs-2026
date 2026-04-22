import { BackButtonComponent } from "../back-button/index.js";

export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    get productBody() {
        return this.parent.querySelector("#product-body")
    }

    getHTML(data) {
        return (
            `   
            <div class="col-xl-10 mx-auto">
                <div class="card" style="height: 100%;">
                    <div class="row g-0" style="height: 100%;">
                        <div class="col-xl-6 col-md-6">
                            <img src="${data.src}" class="img-fluid" alt="картинка" style="min-height: 450px;height: 100%; object-fit: cover;">
                        </div>
                        <div class="col-xl-6 col-md-6 d-flex flex-column">
                            <div id="product-body" class="card-body flex-grow-1">
                                <h4 class="card-title">${data.title}</h4>
                                <p class="card-text">${data.text}</p>
                            </div>
                            <div class="p-3 pt-0">
                                <div id="back-button-container" class="d-flex justify-content-end"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        )
    }

    render(data, clickBack) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);

        const buttonContainer = this.parent.querySelector("#back-button-container");
        if (buttonContainer) {
            const backButton = new BackButtonComponent(buttonContainer);
            backButton.render(clickBack);
        }
    }
}
