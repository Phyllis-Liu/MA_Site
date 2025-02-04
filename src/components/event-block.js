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
      height: 100%; /* 設置為100%以保持正方形 */
      aspect-ratio: 1; /* 確保圖片為正方形 */
      object-fit: cover;
      margin-bottom: 10px;
      border-radius: 5px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }



    .card-title {
      font-size: 1.2em;
      margin: 0;
    }

    .card-content {
      margin-bottom: 10px;
      display: none;
    }

    .card-content.expanded {
      display: block;
    }

    .expand-button {
      background-color: transparent;
      border: none;
      font-size: 1.5em;
      cursor: pointer;
      padding: 0;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .more-btn {
      display: block;
      background: black;
      color: white;
      padding: 10px 30px;
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
      transform: translateX(-20px); /* 向左移動 */
      float: right;
      clear: both;
    }
  `;

  static properties = {
    cards: { type: Array },
    displayedCards: { type: Array },
    currentPage: { type: Number },
    cardsPerPage: { type: Number }
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
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Future of Digital Transformation',
        content: 'Digital transformation continues to reshape how businesses operate in the modern world.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Tech Industry Updates 2024',
        content: 'Latest developments in the technology sector and their impact on global markets.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Emerging Technology Trends',
        content: 'Exploring the latest technology trends shaping our future.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Sustainable Tech Solutions',
        content: 'How technology is driving sustainability initiatives worldwide.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Innovation in Healthcare Tech',
        content: 'Technology advancements revolutionizing healthcare delivery.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Cybersecurity Developments',
        content: 'Latest updates in cybersecurity protection and threats.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Remote Work Technologies',
        content: 'New tools and platforms enabling remote work efficiency.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Quantum Computing Progress',
        content: 'Recent breakthroughs in quantum computing research.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Green Tech Innovations',
        content: 'Environmental technology solutions making an impact.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Digital Privacy Updates',
        content: 'New developments in digital privacy and data protection.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Smart City Developments',
        content: 'Updates on smart city initiatives worldwide.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Blockchain Advancements',
        content: 'Latest developments in blockchain technology.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: '5G Network Expansion',
        content: 'Progress in global 5G network implementation.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        
        title: 'Tech Education Trends',
        content: 'Changes in technology education and training.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
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
    this.displayedCards = this.displayedCards.map((card, i) => 
      i === index ? {...card, expanded: !card.expanded} : card
    );
  }

  render() {
    const showMoreButton = this.displayedCards.length < this.cards.length;

    return html`
      <div class="grid">
        ${this.displayedCards.map((card, index) => html`
          <div class="card">
            ${card.imageUrl ? html`
              <img src="${card.imageUrl}" class="card-image" alt="Card Image">
            ` : ''}
            <div class="card-header">
              <span class="card-type">${card.type}</span>
              <button class="expand-button" @click="${() => this.toggleExpand(index)}">
                ${card.expanded ? '−' : '+'}
              </button>
            </div>
            <h2 class="card-title">${card.title}</h2>
            <div class="card-content ${card.expanded ? 'expanded' : ''}">
              <p>${card.content}</p>
              ${card.expanded ? html`
                <a href="/event/event-subpage.html" class="more-btn card-more-btn">MORE</a>
              ` : ''}
            </div>
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
