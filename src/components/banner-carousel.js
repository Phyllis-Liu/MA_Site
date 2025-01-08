import { LitElement, html, css } from 'lit';

class BannerCarousel extends LitElement {
  static properties = {
    currentSlide: { type: Number },
    slides: { type: Array }
  };

  constructor() {
    super();
    this.currentSlide = 0;
    this.slides = [
      {
        title: 'REVOLUTIONIZING\nFINANCE THROUGH\nTECHNOLOGY',
        subtitle: 'SECURE, EFFICIENT, AND FUTURE-READY',
        image: 'https://placehold.co/1920x800/000000/ffffff',
        link: '/finance-tech'
      },
      {
        title: 'INNOVATIVE\nSOLUTIONS FOR\nTOMORROW',
        subtitle: 'LEADING THE DIGITAL TRANSFORMATION',
        image: 'https://placehold.co/1920x800/111111/ffffff',
        link: '/solutions'
      },
      {
        title: 'EMPOWERING\nGLOBAL\nBUSINESS',
        subtitle: 'CONNECTING WORLDWIDE OPPORTUNITIES',
        image: 'https://placehold.co/1920x800/222222/ffffff',
        link: '/global'
      },
      {
        title: 'ADVANCED\nTECHNOLOGY\nSOLUTIONS',
        subtitle: 'DRIVING INNOVATION FORWARD',
        image: 'https://placehold.co/1920x800/333333/ffffff',
        link: '/tech'
      },
      {
        title: 'SECURE\nENTERPRISE\nSYSTEMS',
        subtitle: 'PROTECTING YOUR DIGITAL ASSETS',
        image: 'https://placehold.co/1920x800/444444/ffffff',
        link: '/security'
      }
    ];
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      height: 800px;
      overflow: hidden;
    }

    .carousel {
      height: 100%;
      position: relative;
    }

    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      display: flex;
      align-items: center;
      padding: 0 10%;
      background-size: cover;
      background-position: center;
      text-decoration: none;
    }

    .slide.active {
      opacity: 1;
    }

    .slide-content {
      color: white;
      z-index: 2;
    }

    .slide-title {
      font-size: 4rem;
      font-weight: bold;
      white-space: pre-line;
      margin-bottom: 1rem;
    }

    .slide-subtitle {
      font-size: 1.2rem;
      opacity: 0.8;
    }

    .dots {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 1rem;
      z-index: 3;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .dot.active {
      background: white;
    }

    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: white;
      padding: 1rem;
      cursor: pointer;
      z-index: 3;
      transition: background 0.3s ease;
    }

    .nav-button:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .prev {
      left: 1rem;
    }

    .next {
      right: 1rem;
    }
  `;

  firstUpdated() {
    this.startAutoPlay();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index) {
    this.currentSlide = index;
  }

  render() {
    return html`
      <div class="carousel">
        ${this.slides.map((slide, index) => html`
          <a href="${slide.link}" 
             class="slide ${index === this.currentSlide ? 'active' : ''}"
             style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})">
            <div class="slide-content">
              <div class="slide-title">${slide.title}</div>
              <div class="slide-subtitle">${slide.subtitle}</div>
            </div>
          </a>
        `)}
        
        <button class="nav-button prev" @click="${this.prevSlide}">❮</button>
        <button class="nav-button next" @click="${this.nextSlide}">❯</button>
        
        <div class="dots">
          ${this.slides.map((_, index) => html`
            <div class="dot ${index === this.currentSlide ? 'active' : ''}"
                 @click="${() => this.goToSlide(index)}">
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('banner-carousel', BannerCarousel);
