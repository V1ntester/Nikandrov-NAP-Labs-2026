export class ProductCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data) {
    return `
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-4">
              <div class="card" style="min-height: 450px; display: flex; flex-direction: column;">
                  <img class="card-img-top" src="${data.src}" alt="картинка" style="flex-shrink: 0;">
                  <div class="card-body" style="flex: 1; display: flex; flex-direction: column;">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text" style="flex: 1;">${data.text}</p>
                      <button class="btn btn-primary mt-4" id="click-card-${data.id}" data-id="${data.id}">Подробнее</button>
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

  render(data, listener) {
    const html = this.getHTML(data);
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(data, listener);
  }
}
