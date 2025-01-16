import { LitElement, html, css } from 'lit';
import './components/header-nav.js';
import './components/footer-section.js';

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

      <main class="news-content">
        <div class="breadcrumb">
          <span>News</span> > <span>Type</span>
        </div>
        <article>
          <h2>Title</h2>
          <p>As we know, many businesses now use AI for various tasks, even replacing employees with AI in some cases. Below is a video of the latest fully AI-operated store in Dubai. Thank you Colombo Fasano for sharing this.</p>
        </article>
      </main>

      <footer-section></footer-section>
    `;
  }
}

customElements.define('news-page', NewsPage);
