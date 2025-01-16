import { LitElement, html, css } from 'lit';
import './components/news-banner.js';
import './components/news-selector.js';

export class AppLayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    .header {
      background-color: #f8f8f8;
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    .footer {
      background-color: #f8f8f8;
      padding: 20px;
      text-align: center;
      border-top: 1px solid #ddd;
    }
  `;

  render() {
    return html`
      <div class="header">Header</div>
      <news-banner></news-banner>
      <news-selector></news-selector>
      <div class="footer">Footer</div>
    `;
  }
}

customElements.define('app-layout', AppLayout);
