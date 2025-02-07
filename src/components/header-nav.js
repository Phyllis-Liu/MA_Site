import { LitElement, html, css } from 'lit';

class HeaderNav extends LitElement {
  static properties = {
    isDropdownOpen: { type: Boolean },
    selectedLanguage: { type: String },
    isScrolled: { type: Boolean },
    isMobileMenuOpen: { type: Boolean },
    isLightBackground: { type: Boolean }
  };

  constructor() {
    super();
    this.isDropdownOpen = false;
    this.selectedLanguage = 'EN';
    this.languages = ['EN', 'TW', 'JP', 'ES', 'DE', 'FR'];
    this.isScrolled = false;
    this.isMobileMenuOpen = false;
    this.isLightBackground = false;
    this.observer = null;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });

    // Observe banner and about-header background color
    this.observer = new MutationObserver((mutations) => {
      const target = mutations[0].target;
      const bgColor = window.getComputedStyle(target).backgroundColor;
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        // Calculate luminance
        const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
        this.isLightBackground = luminance > 0.5;
      }
    });

    // Observe both banner and about-header
    const banner = document.querySelector('.banner');
    const aboutHeader = document.querySelector('about-header');
    
    if (banner) {
      this.observer.observe(banner, {
        attributes: true,
        attributeFilter: ['style']
      });
    }
    
    if (aboutHeader) {
      this.observer.observe(aboutHeader, {
        attributes: true,
        attributeFilter: ['style']
      });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      transition: background-color 0.3s ease;
    }

    :host([scrolled]) {
      background-color: rgba(0, 0, 0, 0.9);
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
    }

    .logo {
      color: #fff;
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-img {
      height: 40px;
      width: auto;
    }

    .nav-container {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-item {
      color: var(--header-text-color, #fff);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.3s;
      white-space: nowrap;
    }

    .nav-item:hover {
      color: #ff0000;
    }

    .web360-btn {
      background-color: #fff;
      color: #000;
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }

    .web360-btn:hover {
      background-color: #000;
      color: #fff;
      border: 1px solid #fff;
    }

    .language-select {
      position: relative;
      color: #fff;
      cursor: pointer;
    }

    .language-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 4px 8px;
      border: none;
      background: none;
      color: #fff;
      cursor: pointer;
    }

    .dropdown-content {
      position: absolute;
      top: 100%;
      right: 0;
      background-color: rgba(0, 0, 0, 0.9);
      min-width: 100px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      border-radius: 4px;
      display: none;
      z-index: 1000;
    }

    .dropdown-content.show {
      display: block;
    }

    .dropdown-item {
      color: #fff;
      padding: 8px 12px;
      text-decoration: none;
      display: block;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .dropdown-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    /* Mobile Styles */
    @media (max-width: 1024px) {
      .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 24px;
        cursor: pointer;
        z-index: 1001;
      }

      .hamburger-line {
        width: 100%;
        height: 3px;
        background-color: #fff;
        transition: all 0.3s ease;
      }

      .hamburger.open .hamburger-line:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .hamburger.open .hamburger-line:nth-child(2) {
        opacity: 0;
      }

      .hamburger.open .hamburger-line:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }

      .nav-container {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 300px;
        background-color: rgba(0, 0, 0, 0.95);
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 80px;
        transition: right 0.3s ease;
      }

      .nav-container.open {
        right: 0;
      }

      .nav-item {
        padding: 1rem;
        font-size: 16px;
      }

      .web360-btn {
        margin: 1rem;
        width: calc(100% - 2rem);
        text-align: center;
      }

      .language-select {
        margin: 1rem;
      }
    }

    @media (min-width: 1025px) {
      .hamburger {
        display: none;
      }
    }
  `;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(lang) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false;
  }

  render() {
    return html`
      <div class="header-container">
        <a href="/" class="logo">
          <img src="image/MA-logo.png" alt="Logo" class="logo-img" />
        </a>

        <div class="hamburger ${this.isMobileMenuOpen ? 'open' : ''}" 
             @click="${this.toggleMobileMenu}">
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
        </div>

        <div class="nav-container ${this.isMobileMenuOpen ? 'open' : ''}">
          <a href="about_us.html" class="nav-item">ABOUT US</a>
          <a href="/news" class="nav-item">NEWS</a>
          <a href="/event" class="nav-item">EVENT</a>
          <a href="/product" class="nav-item">PRODUCT</a>
          <a href="/solution" class="nav-item">SOLUTION</a>
          <a href="/support" class="nav-item">TECH SUPPORT</a>
          <a href="/contact" class="nav-item">CONTACT US</a>
          <a href="https://masterwork-space.sfo3.cdn.digitaloceanspaces.com/webgl/index.html" class="web360-btn" target="_blank">WEB360</a>
          
          <div class="language-select">
            <button class="language-button" @click="${this.toggleDropdown}">
              <span>🌐</span>
              <span>${this.selectedLanguage}</span>
            </button>
            <div class="dropdown-content ${this.isDropdownOpen ? 'show' : ''}">
              ${this.languages.map(lang => html`
                <div class="dropdown-item" @click="${() => this.selectLanguage(lang)}">
                  ${lang}
                </div>
              `)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('isScrolled')) {
      if (this.isScrolled) {
        this.setAttribute('scrolled', '');
      } else {
        this.removeAttribute('scrolled');
      }
    }

    if (changedProperties.has('isLightBackground')) {
      this.style.setProperty(
        '--header-text-color',
        this.isLightBackground ? '#000' : '#fff'
      );
    }
  }
}

customElements.define('header-nav', HeaderNav);
