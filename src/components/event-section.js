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
      transform: translateY(-5px);
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
            <svg class="event-image" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#600;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#900;stop-opacity:1" />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="url(#bgGrad1)"/>
              <circle cx="200" cy="200" r="80" fill="#fff" opacity="0.1"/>
              <path d="M160 160 h80 v80 h-80 z" fill="#fff" opacity="0.2"/>
            </svg>
            <h3 class="event-title">BFG SHOW 2024</h3>
          </a>

          <a href="/events/eurocis" class="event-card">
            <svg class="event-image" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#147;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#36a;stop-opacity:1" />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="url(#bgGrad2)"/>
              <circle cx="200" cy="200" r="100" fill="#fff" opacity="0.1"/>
              <rect x="150" y="150" width="100" height="100" fill="#fff" opacity="0.2"/>
            </svg>
            <h3 class="event-title">EUROCIS 2024</h3>
          </a>

          <a href="/events/hostelco" class="event-card">
            <svg class="event-image" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#b80;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#da0;stop-opacity:1" />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="url(#bgGrad3)"/>
              <polygon points="200,100 300,300 100,300" fill="#fff" opacity="0.1"/>
              <circle cx="200" cy="200" r="60" fill="#fff" opacity="0.2"/>
            </svg>
            <h3 class="event-title">HOSTELCO 2024</h3>
          </a>

          <a href="/events/retailtech-japan" class="event-card">
            <svg class="event-image" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#058;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#27a;stop-opacity:1" />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="url(#bgGrad4)"/>
              <rect x="100" y="100" width="200" height="200" fill="#fff" opacity="0.1"/>
              <circle cx="200" cy="200" r="70" fill="#fff" opacity="0.2"/>
            </svg>
            <h3 class="event-title">RETAILTECH JAPAN 2024</h3>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('event-section', EventSection);
