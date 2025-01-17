import { LitElement, html, css } from 'lit';

class DividerLine extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #000;
      padding: 0 20px;
    }

    .divider {
      max-width: 1200px;
      margin: 0 auto;
      height: 1px;
      background-color: #333;
    }
  `;

  render() {
    return html`
      <div class="divider"></div>
    `;
  }
}

customElements.define('divider-line', DividerLine);
