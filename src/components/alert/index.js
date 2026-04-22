export class AlertComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(message) {
    return `
            <div class="alert alert-primary" role="alert">
            ${message}
            </div>
            `;
  }

  render(message) {
    const html = this.getHTML(message);
    this.parent.insertAdjacentHTML("beforeend", html);
  }
}
