import { LitElement, html, css } from 'lit';

class SolutionSection extends LitElement {
  static properties = {
    isDropdownOpen: { type: Boolean },
    selectedOption: { type: String }
  };

  constructor() {
    super();
    this.isDropdownOpen = false;
    this.selectedOption = 'I WANT';
    this.options = [
      'FOOD & BEVERAGE',
      'TRANSPORTATION',
      'SOFTWARE',
      'MEDICAL CLINIC',
      'PAYMENT KIOSK',
      'CANNABIS DISPENSARY'
    ];
  }

  static styles = css`
    :host {
      display: block;
      background-color: #000;
      padding: 100px 20px;
      text-align: center;
      color: white;
    }

    .title {
      font-size: 3rem;
      margin-bottom: 2rem;
      line-height: 1.2;
    }

    .dropdown-container {
      position: relative;
      max-width: 400px;
      margin: 0 auto 2rem;
    }

    .dropdown-button {
      width: 100%;
      padding: 15px 20px;
      background: white;
      border: none;
      border-radius: 4px;
      text-align: left;
      font-size: 1rem;
      color: #808080;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dropdown-button:after {
      content: '▼';
      font-size: 0.8em;
    }

    .dropdown-content {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border-radius: 4px;
      margin-top: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      display: none;
      z-index: 1000;
    }

    .dropdown-content.show {
      display: block;
    }

    .dropdown-item {
      padding: 12px 20px;
      color: #333;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .dropdown-item:hover {
      background-color: #f5f5f5;
    }

    .start-button {
      display: inline-block;
      padding: 10px 0;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      border: none;
      background: none;
      transition: color 0.3s ease;
    }

    .start-button::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: white;
      transition: background-color 0.3s ease;
    }

    .start-button:hover {
      color: #B32F23;
    }

    .start-button:hover::after {
      background-color: #B32F23;
    }
  `;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  getLink() {
    if (this.selectedOption === 'I WANT') return '#';
    return '/' + this.selectedOption.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
  }

  render() {
    return html`
      <div class="solution-container">
        <h2 class="title">LET US FIND THE RIGHT<br>SOLUTION FOR YOU</h2>
        
        <div class="dropdown-container">
          <button class="dropdown-button" @click="${this.toggleDropdown}">
            ${this.selectedOption}
          </button>
          
          <div class="dropdown-content ${this.isDropdownOpen ? 'show' : ''}">
            ${this.options.map(option => html`
              <div class="dropdown-item" @click="${() => this.selectOption(option)}">
                ${option}
              </div>
            `)}
          </div>
        </div>

        <a href="${this.getLink()}" class="start-button">
          START NOW
        </a>
      </div>
    `;
  }
}

customElements.define('solution-section', SolutionSection);
