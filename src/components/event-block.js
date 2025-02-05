import { LitElement, html, css } from 'lit';

export class EventBlock extends LitElement {
  static styles = css`
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 修改為4列 */
      grid-template-rows: repeat(2, auto);
      gap: 20px;
      margin-bottom: 30px;
    }

    @media (max-width: 1024px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .card {
        padding: 10px;
      }

      .card-image {
        height: 150px;
      }
    }

    @media (max-width: 480px) {
      .grid {
        gap: 10px;
      }

      .card-image {
        height: 120px;
      }

      .card-title {
        font-size: 1.1em;
      }

      .more-btn {
        padding: 8px 20px;
        font-size: 0.9em;
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      position: relative;
      aspect-ratio: 1;
    }

    .card:before,
    .card:after {
      pointer-events: none;
      position: absolute;
      content: '';
      left: 0;
      width: 100%;
      box-sizing: border-box;
      background-repeat: no-repeat;
      height: 5px;
      opacity: 0;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: opacity;
      transition-property: opacity;
    }

    .card:before {
      bottom: 100%;
      background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
    }

    .card:after {
      top: 100%;
      background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);
    }

    .card:hover:before,
    .card:hover:after {
      opacity: 1;
    }

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.3s ease;
    }

    .card:hover .card-image {
      transform: scale(1.05);
    }

    .card-header {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }

    .card-title {
      font-size: 1.2em;
      margin: 0;
      position: absolute;
      bottom: 15px;
      left: 15px;
      color: #333;
      z-index: 1;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .expand-button {
      background-color: white;
      border: none;
      font-size: 1.5em;
      cursor: pointer;
      padding: 0;
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .more-btn {
      display: block;
      background: black;
      color: white;
      padding: 8px 20px;
      border-radius: 20px;
      text-align: center;
      margin: 20px auto;
      width: fit-content;
      cursor: pointer;
      border: none;
      transition: background-color 0.3s ease;
    }

    .more-btn:hover {
      background-color: #B32F23;
    }

    .card-more-btn {
      display: inline-block;
      padding: 5px 15px;
      font-size: 0.9em;
      text-decoration: none;
      margin: 10px 0 0 auto;
      transform: translateX(-20px);
      float: right;
      clear: both;
    }

    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.3s;
    }

    .popup-overlay.active {
      visibility: visible;
      opacity: 1;
    }

    .popup-content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      width: 400px;
      max-width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .popup-close {
      position: absolute;
      top: 10px;
      right: 10px;
      background: white;
      border: none;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .popup-image {
      width: 400px;
      max-width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 4px;
      margin: 0 auto 15px;
      display: block;
    }

    .popup-title {
      font-size: 1.2em;
      margin-bottom: 15px;
    }

    .popup-text {
      line-height: 1.6;
      margin-bottom: 20px;
    }
  `;

  static properties = {
    cards: { type: Array },
    displayedCards: { type: Array },
    currentPage: { type: Number },
    cardsPerPage: { type: Number },
    selectedCard: { type: Object }
  };

  constructor() {
    super();
    this.currentPage = 1;
    this.cardsPerPage = 8;
    this.displayedCards = [];
    this.cards = [
      // Event Type
      {
        
        title: 'RETAILTECH JAPAN 2025',
        content: 'As we know, many businesses now use AI for various tasks, even replacing employees with AI in some cases.',
        imageUrl: './image/Event04.png',
      },
      {
        
        title: 'EUROCIS 2025',
        content: 'Digital transformation continues to reshape how businesses operate in the modern world.',
        imageUrl: './image/Event01.png',
      },
      {
        
        title: 'NRF 2025',
        content: 'Latest developments in the technology sector and their impact on global markets.',
        imageUrl: './image/Event03.png',
      },
      {
        
        title: 'BFG SHOW 2023',
        content: 'Exploring the latest technology trends shaping our future.',
        imageUrl: './image/Event02.png',
      },
      {
        
        title: 'Sustainable Tech Solutions',
        content: 'How technology is driving sustainability initiatives worldwide.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: 'Innovation in Healthcare Tech',
        content: 'Technology advancements revolutionizing healthcare delivery.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: 'Cybersecurity Developments',
        content: 'Latest updates in cybersecurity protection and threats.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: 'Remote Work Technologies',
        content: 'New tools and platforms enabling remote work efficiency.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: 'Quantum Computing Progress',
        content: 'Recent breakthroughs in quantum computing research.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: 'Green Tech Innovations',
        content: 'Environmental technology solutions making an impact.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: 'Digital Privacy Updates',
        content: 'New developments in digital privacy and data protection.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: 'Smart City Developments',
        content: 'Updates on smart city initiatives worldwide.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: 'Blockchain Advancements',
        content: 'Latest developments in blockchain technology.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: '5G Network Expansion',
        content: 'Progress in global 5G network implementation.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
      },
      {
        
        title: 'Tech Education Trends',
        content: 'Changes in technology education and training.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3'
      },
     
    ];
  }

  firstUpdated() {
    this.allCards = [...this.cards];
    this.updateDisplayedCards();
  }

  updateDisplayedCards() {
    const startIndex = 0;
    const endIndex = this.currentPage * this.cardsPerPage;
    this.displayedCards = this.cards.slice(startIndex, endIndex);
    this.requestUpdate();
  }

  loadMore() {
    this.currentPage += 1;
    this.updateDisplayedCards();
  }

  filterCards(type) {
    if (!this.allCards) {
      this.allCards = [...this.cards];
    }
    
    if (type === 'All') {
      this.cards = [...this.allCards];
    } else {
      this.cards = this.allCards.filter(card => card.type === type);
    }
    this.currentPage = 1;
    this.updateDisplayedCards();
  }

  toggleExpand(index) {
    const card = this.displayedCards[index];
    const overlay = this.shadowRoot.querySelector('.popup-overlay');
    
    if (overlay) {
      overlay.classList.add('active');
      this.selectedCard = card;
      this.requestUpdate();
    }
  }

  closePopup() {
    const overlay = this.shadowRoot.querySelector('.popup-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      this.selectedCard = null;
      this.requestUpdate();
    }
  }

  render() {
    const showMoreButton = this.displayedCards.length < this.cards.length;

    return html`
      <div class="popup-overlay" @click="${(e) => {
        if (e.target.classList.contains('popup-overlay')) {
          this.closePopup();
        }
      }}">
        ${this.selectedCard ? html`
          <div class="popup-content">
            <button class="popup-close" @click="${this.closePopup}">×</button>
            <img src="${this.selectedCard.imageUrl}" class="popup-image" alt="${this.selectedCard.title}">
            <h2 class="popup-title">${this.selectedCard.title}</h2>
            <p class="popup-text">${this.selectedCard.content}</p>
            ${this.selectedCard.title === 'RETAILTECH JAPAN 2025' ? html`
              <a href="./event/event-subpage.html" class="more-btn">MORE</a>
            ` : ''}
          </div>
        ` : ''}
      </div>
      <div class="grid">
        ${this.displayedCards.map((card, index) => html`
          <div class="card">
            ${card.imageUrl ? html`
              <img src="${card.imageUrl}" class="card-image" alt="Card Image">
            ` : ''}
            <div class="card-header">
              <span class="card-type">${card.type}</span>
              <button class="expand-button" @click="${() => this.toggleExpand(index)}">+</button>
            </div>
            <h2 class="card-title">${card.title}</h2>
          </div>
        `)}
      </div>
      ${showMoreButton ? html`
        <button class="more-btn" @click="${this.loadMore}">MORE</button>
      ` : ''}
    `;
  }
}

customElements.define('event-block', EventBlock);
