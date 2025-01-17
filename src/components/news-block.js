import { LitElement, html, css } from 'lit';

export class NewsBlock extends LitElement {
  static styles = css`
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 20px;
      margin-bottom: 30px;
    }

    .card {
      display: flex;
      flex-direction: column;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .card-image {
      width: 100%;
      height: 200px;
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

    .card-type {
      background-color: #333;
      color: white;
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 0.8em;
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
    this.cardsPerPage = 6;
    this.displayedCards = [];
    this.cards = [
      // News Type
      {
        type: 'News',
        title: 'AI Revolution in Business',
        content: 'As we know, many businesses now use AI for various tasks, even replacing employees with AI in some cases.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'News',
        title: 'Future of Digital Transformation',
        content: 'Digital transformation continues to reshape how businesses operate in the modern world.',
        expanded: false
      },
      {
        type: 'News',
        title: 'Tech Industry Updates 2024',
        content: 'Latest developments in the technology sector and their impact on global markets.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'News',
        title: 'Emerging Technology Trends',
        content: 'Exploring the latest technology trends shaping our future.',
        expanded: false
      },
      {
        type: 'News',
        title: 'Sustainable Tech Solutions',
        content: 'How technology is driving sustainability initiatives worldwide.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'News',
        title: 'Innovation in Healthcare Tech',
        content: 'Technology advancements revolutionizing healthcare delivery.',
        expanded: false
      },
      {
        type: 'News',
        title: 'Cybersecurity Developments',
        content: 'Latest updates in cybersecurity protection and threats.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'News',
        title: 'Remote Work Technologies',
        content: 'New tools and platforms enabling remote work efficiency.',
        expanded: false
      },
      {
        type: 'News',
        title: 'Quantum Computing Progress',
        content: 'Recent breakthroughs in quantum computing research.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'News',
        title: 'Green Tech Innovations',
        content: 'Environmental technology solutions making an impact.',
        expanded: false
      },
      {
        type: 'News',
        title: 'Digital Privacy Updates',
        content: 'New developments in digital privacy and data protection.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'News',
        title: 'Smart City Developments',
        content: 'Updates on smart city initiatives worldwide.',
        expanded: false
      },
      {
        type: 'News',
        title: 'Blockchain Advancements',
        content: 'Latest developments in blockchain technology.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'News',
        title: '5G Network Expansion',
        content: 'Progress in global 5G network implementation.',
        expanded: false
      },
      {
        type: 'News',
        title: 'Tech Education Trends',
        content: 'Changes in technology education and training.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      // Blog Type
      {
        type: 'Blog',
        title: 'Understanding Cloud Computing',
        content: 'A comprehensive guide to modern cloud computing solutions.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Web Development Best Practices',
        content: 'Essential practices for modern web development.',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Mobile App Development Tips',
        content: 'Key considerations for successful mobile app development.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'DevOps Implementation Guide',
        content: 'Step-by-step guide to implementing DevOps practices.',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'UI/UX Design Principles',
        content: 'Core principles for effective UI/UX design.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Data Science Fundamentals',
        content: 'Introduction to key data science concepts.',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Machine Learning Basics',
        content: 'Getting started with machine learning.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Agile Development Tips',
        content: 'Improving your agile development process.',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Software Testing Strategies',
        content: 'Effective strategies for software testing.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'API Design Guidelines',
        content: 'Best practices for API design and implementation.',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Frontend Development Tools',
        content: 'Essential tools for frontend development.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Backend Architecture Tips',
        content: 'Guidelines for robust backend architecture.',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Database Optimization Guide',
        content: 'Tips for optimizing database performance.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Security Best Practices',
        content: 'Essential security practices for developers.',
        expanded: false
      },
      {
        type: 'Blog',
        title: 'Code Review Guidelines',
        content: 'Effective code review practices and tips.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      // Case Study Type
      {
        type: 'Case Study',
        title: 'Digital Transformation Success',
        content: 'How a traditional business achieved digital transformation.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'Cloud Migration Project',
        content: 'Successful cloud migration for enterprise.',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'AI Implementation Results',
        content: 'Results of AI implementation in retail.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'E-commerce Platform Launch',
        content: 'Launch strategy and results for e-commerce platform.',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'Mobile App Success Story',
        content: 'Development and launch of successful mobile app.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'DevOps Transformation',
        content: 'Implementation of DevOps practices and results.',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'Data Analytics Impact',
        content: 'How data analytics transformed business decisions.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'Security Infrastructure Upgrade',
        content: 'Major security infrastructure improvement project.',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'CRM Implementation',
        content: 'Successful CRM system implementation case.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'Digital Marketing Campaign',
        content: 'Results of integrated digital marketing campaign.',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'Automation Success Story',
        content: 'Process automation implementation and results.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'Website Redesign Impact',
        content: 'Results of major website redesign project.',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'IoT Implementation',
        content: 'IoT solution implementation case study.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'Blockchain Integration',
        content: 'Blockchain technology integration project.',
        expanded: false
      },
      {
        type: 'Case Study',
        title: 'Machine Learning Application',
        content: 'Practical application of machine learning.',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3',
        expanded: false
      }
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

customElements.define('news-block', NewsBlock);
