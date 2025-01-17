import { LitElement, html, css } from 'lit';

export class BlogPost extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      background: #fff;
      box-sizing: border-box;
    }

    @media (min-width: 1200px) {
      :host {
        padding: 0 calc((100% - 1200px) / 2);
      }
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
      color: #666;
      font-size: 14px;
    }

    .type-tag {
      display: inline-block;
      background: #000;
      color: #fff;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 12px;
      margin-bottom: 12px;
    }

    .title {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 24px;
    }

    .blog-image-container {
      position: relative;
      width: 100%;
      height: 400px;
      margin-bottom: 24px;
      background-color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px dashed #ddd;
    }

    .content {
      color: #333;
      line-height: 1.6;
      margin-bottom: 40px;
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 20px;
    }

    .navigation-controls {
      display: flex;
      gap: 16px;
      margin-left: auto;
    }

    .control-button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #ccc;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .control-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .back-button {
      display: flex;
      align-items: center;
      gap: 8px;
      background: none;
      border: none;
      cursor: pointer;
      color: #333;
      font-size: 16px;
    }

    .back-icon {
      width: 24px;
      height: 24px;
    }

    .close-button {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 24px;
    }
  `;

  static properties = {
    currentPost: { type: Object },
    currentIndex: { type: Number },
    posts: { type: Array }
  };

  constructor() {
    super();
    this.posts = [
      {
        section: 'News',
        type: 'Blog',
        title: 'AI Revolution in Business',
        content: 'As we know, many businesses now use AI for various tasks, even replacing employees with AI in some cases.'
      },
      {
        section: 'News',
        type: 'Blog',
        title: 'Future of Retail Technology',
        content: 'Another interesting article about retail technology...'
      }
    ];
    this.currentIndex = 0;
    this.currentPost = this.posts[0];
  }

  navigatePost(direction) {
    const currentType = this.currentPost.type;
    const postsOfSameType = this.posts.filter(post => post.type === currentType);
    const currentTypeIndex = postsOfSameType.findIndex(post => post.title === this.currentPost.title);
    
    if (direction === 'prev' && currentTypeIndex > 0) {
      this.currentPost = postsOfSameType[currentTypeIndex - 1];
    } else if (direction === 'next' && currentTypeIndex < postsOfSameType.length - 1) {
      this.currentPost = postsOfSameType[currentTypeIndex + 1];
    }
  }

  canNavigate(direction) {
    const currentType = this.currentPost.type;
    const postsOfSameType = this.posts.filter(post => post.type === currentType);
    const currentTypeIndex = postsOfSameType.findIndex(post => post.title === this.currentPost.title);
    
    return direction === 'prev' ? currentTypeIndex > 0 : currentTypeIndex < postsOfSameType.length - 1;
  }

  handleBack() {
    // In practical applications, a "return to previous page" logic can be added.
    console.log('Back button clicked');
  }

  render() {
    return html`
      <button class="close-button">×</button>
      <nav class="breadcrumb">
        <span>${this.currentPost.section}</span>
        <span>›</span>
        <span>${this.currentPost.type}</span>
      </nav>
      <div class="type-tag">${this.currentPost.type}</div>
      <h1 class="title">${this.currentPost.title}</h1>
      <!-- Image placeholder: 800x400 -->
      <div class="blog-image-container"></div>
      <div class="content">${this.currentPost.content}</div>
      <div class="controls">
        <button class="back-button" @click=${this.handleBack}>
          <svg class="back-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back
        </button>
        <div class="navigation-controls">
          <button 
            class="control-button" 
            @click=${() => this.navigatePost('prev')}
            ?disabled=${!this.canNavigate('prev')}
          >⏮</button>
          <button 
            class="control-button" 
            @click=${() => this.navigatePost('next')}
            ?disabled=${!this.canNavigate('next')}
          >⏭</button>
        </div>
      </div>
    `;
  }
}

customElements.define('blog-post', BlogPost);
