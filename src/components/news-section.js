import { LitElement, html, css } from 'lit';

class NewsSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #000;
      padding: 80px 20px;
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .title {
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .news-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .news-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      min-height: 250px;
      text-decoration: none;
      color: black;
      position: relative;
    }

    .news-image-container {
      width: 40%;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .news-image-svg {
      width: 100%;
      height: 100%;
    }

    .news-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;
    }

    .news-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 300;
      transition: font-weight 0.3s ease;
    }

    .news-card:hover .news-title {
      font-weight: 700;
    }

    .more-link {
      align-self: flex-end;
      text-decoration: none;
      z-index: 1;
    }

    .more-button {
      background: #000;
      color: white;
      padding: 8px 20px;
      border-radius: 20px;
      font-size: 0.9rem;
      transition: background-color 0.3s ease;
      display: inline-block;
    }

    .more-link:hover .more-button {
      background: #B32F23;
    }

    @media (max-width: 768px) {
      .news-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <h2 class="title">LATEST NEWS</h2>
        
        <div class="news-grid">
          <div class="news-card">
            <div class="news-image-container">
              <img class="news-image-svg" src="image/NewsSection02.png" alt="News Section Image" />
            </div>
            <div class="news-content">
              <h3 class="news-title">AI Revolution in Business</h3>
              <a href="/news/news-subpage.html" class="more-link">
                <span class="more-button">MORE</span>
              </a>
            </div>
          </div>

          <div class="news-card">
            <div class="news-image-container">
              <img class="news-image-svg" src="image/NewsSection03.png" alt="News Section Image" />
            </div>
            <div class="news-content">
              <h3 class="news-title">MA META APP</h3>
              <a href="/news/meta-app/details" class="more-link">
                <span class="more-button">MORE</span>
              </a>
            </div>
          </div>

          <div class="news-card">
            <div class="news-image-container">
              <img class="news-image-svg" src="image/NewsSection01.png" alt="News Section Image" />
            </div>
            <div class="news-content">
              <h3 class="news-title">MA-MONETECH CONTINUES TO EXPAND ITS MARKET LEADERSHIP IN ......</h3>
              <a href="/news/market-leadership/details" class="more-link">
                <span class="more-button">MORE</span>
              </a>
            </div>
          </div>

          <div class="news-card">
            <div class="news-image-container">
              <img class="news-image-svg" src="image/NewsSection04.png" alt="News Section Image" />
            </div>
            <div class="news-content">
              <h3 class="news-title">KUAN INSTALLATION PROCESS IN SAUDI ARABIA</h3>
              <a href="/news/kuan-installation/details" class="more-link">
                <span class="more-button">MORE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('news-section', NewsSection);
