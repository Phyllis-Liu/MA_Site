import { LitElement, html, css } from 'lit';

export class NewsNav extends LitElement {
  static styles = css`
    .nav-tabs {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 30px;
      background: white;
      padding: 10px;
      border-radius: 30px;
    }

    .nav-tab {
      padding: 10px 30px;
      cursor: pointer;
      border-radius: 20px;
      transition: all 0.3s ease;
    }

    .nav-tab.active {
      background-color: #B32F23;
      color: white;
    }

    .nav-tab:hover:not(.active) {
      background-color: #f7d7d4;
    }
  `;

  static properties = {
    activeTab: { type: String }
  };

  constructor() {
    super();
    this.activeTab = 'All';
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    this.dispatchEvent(new CustomEvent('type-selected', {
      detail: tab,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="nav-tabs">
        <div class="nav-tab ${this.activeTab === 'All' ? 'active' : ''}" 
             @click="${() => this.setActiveTab('All')}">All</div>
        <div class="nav-tab ${this.activeTab === 'News' ? 'active' : ''}"
             @click="${() => this.setActiveTab('News')}">News</div>
        <div class="nav-tab ${this.activeTab === 'Blog' ? 'active' : ''}"
             @click="${() => this.setActiveTab('Blog')}">Blog</div>
        <div class="nav-tab ${this.activeTab === 'Case Study' ? 'active' : ''}"
             @click="${() => this.setActiveTab('Case Study')}">Case Study</div>
      </div>
    `;
  }
}

customElements.define('news-nav', NewsNav);
