import { LitElement, html, css } from 'lit';
import './components/header-nav.js';
import './components/contact-form.js';
import './components/footer-section.js';

class ContactPage extends LitElement {
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

customElements.define('contact-page', ContactPage);
