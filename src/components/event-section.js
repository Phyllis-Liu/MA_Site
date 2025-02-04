import { LitElement, html, css } from 'lit';

class EventSection extends LitElement {
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
          <a href="/events/bfg-show" class="event-card">
            <img class="event-image" src="image/Event02.png" alt="BFG SHOW 2023" />
            <h3 class="event-title">BFG SHOW 2023</h3>
          </a>

          <a href="/events/eurocis" class="event-card">
            <img class="event-image" src="image/Event01.png" alt="EUROCIS 2024" />
            <h3 class="event-title">EUROCIS 2024</h3>
          </a>

          <a href="/events/hostelco" class="event-card">
            <img class="event-image" src="image/Event03.png" alt="NRF 2025" />
            <h3 class="event-title">NRF 2025</h3>
          </a>

          <a href="/events/retailtech-japan" class="event-card">
            <img class="event-image" src="image/Event04.png" alt="RETAILTECH JAPAN 2025" />
            <h3 class="event-title">RETAILTECH JAPAN 2025</h3>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('event-section', EventSection);
