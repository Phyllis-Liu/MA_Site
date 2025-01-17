import { LitElement, html, css } from 'lit';
import './components/header-nav.js';
import './components/about-header.js';
import './components/about-ma.js';
import './components/banner-section.js';
import './components/management-words.js';
import './components/history-section.js';
import './components/core-value-section.js';
import './components/footer-section.js';

class CompanyPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .section {
      scroll-margin-top: 80px;
    }
  `;

  
}

customElements.define('company-page', CompanyPage);
