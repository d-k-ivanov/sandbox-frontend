import { LitElement, html } from 'lit-element';

class PwaApp extends LitElement {

  render() {
    return html`
      <h1>Hello world!</h1>
    `;
  }
}

customElements.define('pwa-app', PwaApp);