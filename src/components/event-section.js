import { LitElement, html, css } from 'lit';

class EventSection extends LitElement {
  static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600&display=swap');

    :host {
      display: block;
      background-color: #000;
      padding: 80px 20px;
      color: white;
      font-family: 'Source Sans 3', sans-serif; /* 設置字體 */
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .title {
      font-size: 2.5rem;
      margin-bottom: 3rem;
      font-family: 'Source Sans 3', sans-serif; /* 確保標題也使用 Source Sans 3 */
    }

    .event-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .event-card {
      background: #1a1a1a;
      border-radius: 15px;
      overflow: hidden;
      text-decoration: none;
      color: white;
      transition: transform 0.3s ease;
      font-family: 'Source Sans 3', sans-serif; /* 確保 event-card 也使用 Source Sans 3 */
    }

    .event-card:hover {
      transform: translateY(-10px);
    }

    .event-image {
      width: 100%;
      aspect-ratio: 1;
      display: block;
    }

    .event-title {
      font-size: 1.2rem;
      margin: 0;
      padding: 15px;
      text-align: center;
      transition: color 0.3s ease;
      font-family: 'Source Sans 3', sans-serif; /* 確保 event-title 也使用 Source Sans 3 */
    }

    .event-card:hover .event-title {
      color: #B32F23;
    }

    @media (max-width: 1024px) {
      .event-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .event-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <h2 class="title">LATEST EVENTS</h2>
        
        <div class="event-grid">
          <a href="event/event-subpage.html" class="event-card">
            <img class="event-image" src="/image/Event04.png" alt="RETAILTECH JAPAN 2025" />
            <h3 class="event-title">RETAILTECH JAPAN 2025</h3>
          </a>

          <a href="event.html" class="event-card">
            <img class="event-image" src="/image/Event01.png" alt="EUROCIS 2024" />
            <h3 class="event-title">EUROCIS 2024</h3>
          </a>

          <a href="event.html" class="event-card">
            <img class="event-image" src="/image/Event03.png" alt="NRF 2025" />
            <h3 class="event-title">NRF 2025</h3>
          </a>

          <a href="event.html" class="event-card">
            <img class="event-image" src="/image/Event02.png" alt="BFG SHOW 2023" />
            <h3 class="event-title">BFG SHOW 2023</h3>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('event-section', EventSection);
