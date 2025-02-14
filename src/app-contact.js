import { LitElement, html, css } from 'lit';
import './components/header-nav.js';
import './components/contact-banner.js';
import './components/contact-form.js';
import './components/footer-section.js';
import './components/head-office.js';

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

  firstUpdated() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(node => {
            if (node.tagName === 'CONTACT-FORM') {
              const headerNav = this.shadowRoot.querySelector('header-nav');
              if (headerNav) {
                headerNav.style.backgroundColor = '#000000';
              }
            }
          });
        }
      });
    });

    observer.observe(this.shadowRoot, {
      childList: true,
      subtree: true
    });

    this._observer = observer;
  }

  disconnectedCallback() {
    if (this._observer) {
      this._observer.disconnect();
    }
  }

  render() {
    return html`
      <header-nav></header-nav>
      <contact-banner></contact-banner>
      <head-office></head-office>
      <contact-form></contact-form>
      <footer-section></footer-section>
    `;
  }
}

customElements.define('contact-page', ContactPage);
