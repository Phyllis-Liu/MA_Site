import { LitElement, html, css } from 'lit';
import './components/header-nav.js';
import './components/footer-section.js';
import './components/blog-post.js';

export class NewsPage extends LitElement {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .news-banner {
      height: 400px;
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('banner-image.jpg');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .banner-title {
      color: #fff;
      font-size: 3rem;
      text-align: center;
    }

    .news-content {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    .breadcrumb {
      margin-bottom: 2rem;
    }

  `;

  render() {
    return html`
      <header-nav></header-nav>

      <section class="news-banner">
        <h1 class="banner-title">NEWS</h1>
      </section>

      <div class="news-content">
        <blog-post></blog-post>
      </div>

      <footer-section></footer-section>
    `;
  }
}

customElements.define('news-page', NewsPage);
