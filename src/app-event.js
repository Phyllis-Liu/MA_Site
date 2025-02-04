import { LitElement, html, css } from 'lit';
import './components/event-banner.js';
import './components/event-block.js';
import './components/header-nav.js';
import './components/footer-section.js';

export class AppEvent extends LitElement {
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
<event-banner></event-banner>
<div style="height: 20px;"></div>
<div style="padding: 0 10px;">
  <event-block></event-block>
</div>
      <footer-section></footer-section>
    `;
  }
}

customElements.define('app-event', AppEvent);
