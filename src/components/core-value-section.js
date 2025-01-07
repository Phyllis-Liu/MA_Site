import { LitElement, html, css } from 'lit';

class CoreValueSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .core-value-container {
      padding-top: 40px;
    }

    .title {
      font-size: 32px;
      font-weight: bold;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section {
      position: relative;
      color: white;
      padding: 60px 0;
      background-size: cover;
      background-position: center;
      overflow: hidden;
    }

    /* 其他樣式保持不變 */
  `;

  render() {
    return html`
      <div id="core-value-section" class="core-value-container">
        <h2 class="title">CORE VALUE</h2>

        <div class="section mission-section">
          <svg class="background-svg" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="stars" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stop-color="#FFF" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#000" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="#000"/>
            <circle cx="80%" cy="30%" r="1" fill="#FFF" opacity="0.5">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25%" cy="60%" r="1" fill="#FFF" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50%" cy="20%" r="1" fill="#FFF" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5s" repeatCount="indefinite"/>
            </circle>
            <rect width="100%" height="100%" fill="url(#stars)"/>
          </svg>
          <div class="section-content">
            <h3 class="section-title">MISSION</h3>
            <p class="section-description">
              As a visionary company committed to enhancing experiences and driving success, 
              our mission is to... Innovate technology, increase profitability and ease everyone's life.
            </p>
          </div>
        </div>

        <!-- 其他部分保持不變 -->
      </div>
    `;
  }
}

customElements.define('core-value-section', CoreValueSection);
