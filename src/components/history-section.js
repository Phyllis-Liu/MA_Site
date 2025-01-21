import { LitElement, html, css } from 'lit';

class HistorySection extends LitElement {
  static properties = {
    currentIndex: { type: Number },
    timelineData: { type: Array }
  };

  constructor() {
    super();
    this.currentIndex = 0;
    this.isAutoPlay = true;
    this.autoPlayInterval = null;
    this.autoPlayDuration = 5000; // 5 seconds
    this.timelineData = [
      {
        year: 2006,
        category: 'COMPACT & PORTABLE',
        products: [
          { name: 'NC1100', image: 'nc1100' },
          { name: 'NC1300', image: 'nc1300' },
          { name: 'NC1200', image: 'nc1200' },
          { name: 'PD100', image: 'pd100' }
        ],
        description: 'Our journey began, evolving from modest beginnings to a diverse array of solutions. In 2006, we introduced a compact and portable banknote validator, marking our entry into the industry.'
      },
      {
        year: 2010,
        category: 'CASH RECYCLING',
        products: [
          { name: 'CR100', image: 'cr100' },
          { name: 'CR200', image: 'cr200' },
          { name: 'CR300', image: 'cr300' }
        ],
        description: 'In 2010, we expanded our portfolio with cash recycling solutions, revolutionizing how businesses handle cash transactions.'
      },
      {
        year: 2015,
        category: 'SMART SOLUTIONS',
        products: [
          { name: 'SM100', image: 'sm100' },
          { name: 'SM200', image: 'sm200' },
          { name: 'SM300', image: 'sm300' }
        ],
        description: 'By 2015, we introduced smart solutions that integrated advanced technology with our cash handling expertise.'
      }
    ];
  }

  static styles = css`
    :host {
      display: block;
      padding: 80px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    .title {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
    }

    .controls {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    .control-btn {
      cursor: pointer;
      padding: 12px;
      background: none;
      border: none;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.3s;
    }

    .control-btn:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .control-btn:active {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .control-btn svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    .control-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .pause-btn {
      font-size: 20px;
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: #ddd;
      margin: 40px 0;
    }

    .category {
      font-size: 24px;
      color: #666;
      margin: 0 0 30px 0;
      transition: opacity 0.3s;
    }

    .products {
      display: flex;
      justify-content: flex-end;
      gap: 40px;
      margin-bottom: 60px;
      transition: opacity 0.3s;
    }

    .product {
      text-align: center;
    }

    .product-image {
      width: 150px;
      height: 100px;
      margin-bottom: 10px;
    }

    .product-name {
      color: #666;
      font-size: 14px;
    }

    .timeline {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .year {
      font-size: 64px;
      color: #333;
      opacity: 0.8;
      transition: all 0.3s;
    }

    .description {
      font-size: 18px;
      line-height: 1.6;
      color: #666;
      max-width: 600px;
      transition: opacity 0.3s;
    }

    .timeline-line {
      width: 100%;
      height: 1px;
      background-color: #ddd;
      position: relative;
      margin-top: 40px;
      cursor: pointer;
    }

    .timeline-line::before,
    .timeline-line::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 50%;
      transition: background-color 0.3s;
    }

    .timeline-line::before {
      left: 0;
    }

    .timeline-line::after {
      right: 0;
    }

    .timeline-line:hover::before {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .timeline-line:hover::after {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .timeline-dot {
      width: 12px;
      height: 12px;
      background-color: #333;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: left 0.3s ease;
      pointer-events: none;
    }

    .content-section {
      opacity: 1;
      transition: opacity 0.3s;
    }

    .content-section.transitioning {
      opacity: 0;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.startAutoPlay();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAutoPlay();
  }

  nextTimeline() {
    if (this.currentIndex < this.timelineData.length - 1) {
      this.startTransition(() => {
        this.currentIndex++;
      });
    } else if (this.isAutoPlay) {
      // Loop back to first item
      this.startTransition(() => {
        this.currentIndex = 0;
      });
    }
  }

  startAutoPlay() {
    if (!this.autoPlayInterval) {
      this.autoPlayInterval = setInterval(() => {
        if (this.isAutoPlay) {
          this.nextTimeline();
        }
      }, this.autoPlayDuration);
    }
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  toggleAutoPlay() {
    this.isAutoPlay = !this.isAutoPlay;
    if (this.isAutoPlay) {
      this.startAutoPlay();
    }
    this.requestUpdate();
  }

  previousTimeline() {
    if (this.currentIndex > 0) {
      this.startTransition(() => {
        this.currentIndex--;
      });
    }
  }

  handleTimelineClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    
    if (clickX < width / 2) {
      this.previousTimeline();
    } else {
      this.nextTimeline();
    }
  }

  startTransition(callback) {
    const content = this.shadowRoot.querySelector('.content-section');
    content.classList.add('transitioning');
    
    setTimeout(() => {
      callback();
      requestAnimationFrame(() => {
        content.classList.remove('transitioning');
      });
    }, 300);
  }

  getDotPosition() {
    const totalPositions = this.timelineData.length - 1;
    const position = (this.currentIndex / totalPositions) * 80 + 10;
    return `${position}%`;
  }

  render() {
    const currentData = this.timelineData[this.currentIndex];

    return html`
      <div id="history-section" class="header">
        <h2 class="title">HISTORY</h2>
        <div class="controls">
          <button 
            class="control-btn" 
            @click="${this.previousTimeline}"
            ?disabled="${this.currentIndex === 0}"
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
            </svg>
          </button>
          <button 
            class="control-btn" 
            @click="${this.nextTimeline}"
            ?disabled="${this.currentIndex === this.timelineData.length - 1}"
          >
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>
          <button 
            class="control-btn pause-btn" 
            @click="${this.toggleAutoPlay}"
            aria-label="${this.isAutoPlay ? 'Pause' : 'Play'}"
          >
            <svg viewBox="0 0 24 24">
              ${this.isAutoPlay ? html`
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              ` : html`
                <path d="M8 5v14l11-7z"/>
              `}
            </svg>
          </button>
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-section">
        <h3 class="category">${currentData.category}</h3>

        <div class="products">
          ${currentData.products.map(product => html`
            <div class="product">
              <svg class="product-image" viewBox="0 0 150 100">
                <rect width="100%" height="100%" fill="#f5f5f5"/>
              </svg>
              <div class="product-name">${product.name}</div>
            </div>
          `)}
        </div>

        <div class="timeline">
          <div class="year">${currentData.year}</div>
          <div class="description">${currentData.description}</div>
        </div>
      </div>

      <div 
        class="timeline-line"
        @click="${this.handleTimelineClick}"
      >
        <div class="timeline-dot" style="left: ${this.getDotPosition()}"></div>
      </div>
    `;
  }
}

customElements.define('history-section', HistorySection);
