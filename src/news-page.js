import { LitElement, html, css } from 'lit';

export class NewsPage extends LitElement {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .header-nav {
      position: fixed;
      width: 100%;
      background-color: #fff;
      padding: 1rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      z-index: 100;
    }

    .nav-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
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

    .footer {
      background-color: #333;
      color: #fff;
      padding: 2rem 0;
      text-align: center;
    }
  `;

  render() {
    return html`
      <header class="header-nav">
        <nav class="nav-list">
          <div class="logo">Logo</div>
          <ul class="menu">
            <li>ABOUT US</li>
            <li>NEWS</li>
            <li>PRODUCT</li>
            <li>SOLUTION</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      </header>

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

      <footer class="footer">
        <div class="footer-content">
          <!-- Add footer information here -->
        </div>
      </footer>
    `;
  }
}

customElements.define('news-page', NewsPage);
