import { LitElement, html, css } from 'lit';

export class NewsBanner extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .banner-container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #000;
    }

    .banner-text {
      color: white;
      font-size: 48px;
      font-weight: bold;
      z-index: 2;
      text-align: center;
    }

    .background-svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
    }
  `;

  render() {
    return html`
      <div class="banner-container">
        <svg class="background-svg" viewBox="0 0 800 200" preserveAspectRatio="none">
          <path
            d="M 0,50 C 150,0 350,100 500,50 C 650,0 750,100 800,50 L 800,200 L 0,200 Z"
            fill="#444"
          />
          <path
            d="M 0,80 C 200,30 400,130 600,80 C 750,30 800,100 800,80 L 800,200 L 0,200 Z"
            fill="#666"
            opacity="0.5"
          />
        </svg>
        <div class="banner-text">NEWS</div>
      </div>
    `;
  }
}

customElements.define('news-banner', NewsBanner);
