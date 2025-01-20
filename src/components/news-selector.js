import { LitElement, html, css } from 'lit';
import './news-nav.js';
import './news-block.js';

export class NewsSelector extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
      :host {
        padding: 15px;
      }

      .filter-group {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
      }

      select {
        width: 100%;
        max-width: 200px;
      }
    }

    @media (max-width: 480px) {
      :host {
        padding: 10px;
      }

      select {
        padding: 5px 10px;
        min-width: 100px;
      }
    }

    .filters {
      display: none;
    }

    .filter-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    select {
      padding: 5px 20px;
      border-radius: 15px;
      border: 1px solid #ddd;
      cursor: pointer;
      min-width: 120px;
      background-color: white;
    }

    select:hover {
      border-color: #B32F23;
    }

    select:focus {
      outline: none;
      border-color: #B32F23;
    }
  `;

  static properties = {
    selectedType: { type: String }
  };

  constructor() {
    super();
    this.selectedType = 'All';
  }

  handleTypeSelected(e) {
    const newsBlock = this.shadowRoot.querySelector('news-block');
    if (newsBlock) {
      newsBlock.filterCards(e.detail);
    }
  }

  render() {
    return html`
      <news-nav @type-selected="${this.handleTypeSelected}"></news-nav>
      
      <div class="filters">
        <div class="filter-group">
          <span>Type</span>
          <select>
            <option>Title</option>
          </select>
        </div>
        <div class="filter-group">
          <span>Year</span>
          <select>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>
      </div>

      <news-block></news-block>
    `;
  }
}

customElements.define('news-selector', NewsSelector);
