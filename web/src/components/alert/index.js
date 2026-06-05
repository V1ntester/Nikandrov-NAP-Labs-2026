export class AlertComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(message) {
    return `
      <div class="alert alert-primary alert-marquee" role="alert">
        <div class="scrolling-text">
          ${message}
        </div>
      </div>
    `;
  }

  render(message) {
    const html = this.getHTML(message);
    this.parent.insertAdjacentHTML("beforeend", html);
  }
}
