import { LitElement, html, css } from 'lit';
import './components/news-banner.js';
import './components/news-selector.js';
import './components/header-nav.js';
import './components/footer-section.js';

export class AppNews extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
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
      <header-nav></header-nav>
      <news-banner></news-banner>
      <news-selector></news-selector>
      <footer-section></footer-section>
    `;
  }
}

customElements.define('app-news', AppNews);
