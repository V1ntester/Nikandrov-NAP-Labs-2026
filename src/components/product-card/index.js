export class ProductCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data, isActive = false) {
    return `
      <div class="carousel-item ${isActive ? "active" : ""}">
        <div class="d-flex justify-content-center">
          
          <div class="product-card-wrapper">
            
            <div class="card product-card">
              
              <img class="card-img-top product-card-image" src="${data.src}" alt="картинка">

              <div class="card-body product-card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text product-card-text">${data.text}</p>

                <button 
                  class="btn btn-primary mt-4"
                  id="click-card-${data.id}"
                  data-id="${data.id}">
                  Подробнее
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    `;
  }

  addListeners(data, listener) {
    document
      .getElementById(`click-card-${data.id}`)
      .addEventListener("click", listener);
  }

  render(data, listener, isActive = false) {
    const html = this.getHTML(data, isActive);
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(data, listener);
  }
}
