import { LitElement, html, css } from 'lit';

class AboutHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #000000;
    }

    .hero-section {
      padding: 150px 20px;
      text-align: center;
      margin: 0;
    }

    .hero-title {
      font-size: 32px;
      margin: 0 0 20px 0;
      font-weight: bold;
      color: #fff;
    }

    .hero-subtitle {
      font-size: 18px;
      margin: 0;
      color: #fff;
    }

    .nav-container {
      padding-bottom: 20px;
    }

    .nav {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px;
      position: relative;
    }

    .nav-link {
      grid-column: span 1;
      text-decoration: none;
    }

    .nav-link:nth-child(1) {
      grid-column: 2;
    }

    .nav-link:nth-child(2) {
      grid-column: 4;
    }

    .nav-link:nth-child(3) {
      grid-column: 6;
    }

    .nav-item {
      cursor: pointer;
      font-weight: bold;
      padding: 8px 16px;
      transition: all 0.2s ease;
      position: relative;
      color: #ffffff;
      text-align: center;
      display: block;
      font-size: 16px;
      will-change: transform, color;
    }

    .nav-item::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.2s ease;
      will-change: background-color;
    }

    .nav-item:hover {
      color: #B32F23;
    }

    .nav-item:hover::after {
      background-color: #B32F23;
    }

    @keyframes jello {
      from,
      11.1%,
      to {
        transform: translate3d(0, 0, 0);
      }

      22.2% {
        transform: skewX(-12.5deg) skewY(-12.5deg);
      }

      33.3% {
        transform: skewX(6.25deg) skewY(6.25deg);
      }

      44.4% {
        transform: skewX(-3.125deg) skewY(-3.125deg);
      }

      55.5% {
        transform: skewX(1.5625deg) skewY(1.5625deg);
      }

      66.6% {
        transform: skewX(-0.78125deg) skewY(-0.78125deg);
      }

      77.7% {
        transform: skewX(0.390625deg) skewY(0.390625deg);
      }

      88.8% {
        transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
      }
    }
  `;

  handleClick(e) {
    const target = e.currentTarget;
    target.animate(
      [
        { transform: 'translate3d(0, 0, 0)' },
        { transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 },
        { transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 },
        { transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 },
        { transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 },
        { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 },
        { transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 },
        { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 },
        { transform: 'translate3d(0, 0, 0)' }
      ],
      {
        duration: 800,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        fill: 'forwards'
      }
    );
  }

  render() {
    return html`
      <div class="hero-section">
        <h2 class="hero-title">ABOUT US</h2>
        <p class="hero-subtitle">LEADING THE CHANGE IN CASH TECH INNOVATION</p>
      </div>

      <div class="nav-container">
        <div class="nav">
          <a href="#about-ma" class="nav-link">
            <span class="nav-item" @click="${this.handleClick}">ABOUT</span>
          </a>
          <a href="#history-section" class="nav-link">
            <span class="nav-item" @click="${this.handleClick}">HISTORY</span>
          </a>
          <a href="#core-value-section" class="nav-link">
            <span class="nav-item" @click="${this.handleClick}">CORE VALUE</span>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('about-header', AboutHeader);
