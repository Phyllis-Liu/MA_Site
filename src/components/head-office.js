import { LitElement, html, css } from 'lit';

export class HeadOffice extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .head-office-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 40px;
    }

    .office-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .office-image {
      flex: 1;
      max-width: 50%;
    }

    .office-image img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .office-info {
      flex: 1;
      padding: 20px;
    }

    .location-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 15px;
      color: #666;
    }

    .info-item i {
      width: 20px;
      color: #333;
    }

    @media (max-width: 768px) {
      .head-office-container {
        flex-direction: column;
      }

      .office-image {
        max-width: 100%;
      }
    }
  `;

  render() {
    return html`
      <div class="office-title">HEAD OFFICE</div>
      <div class="head-office-container">
        <div class="office-image">
          <img src="/image/company-photo.png" alt="MA Head Office">
        </div>
        <div class="office-info">
          <div class="location-title">Taiwan</div>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>11F, 114, Sec.1, Xintai 5th Rd, Xizhi,<br>22102 New Taipei, Taiwan</span>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <span>+886 2 2655 7997</span>
          </div>
          <div class="info-item">
            <i class="fas fa-fax"></i>
            <span>+886 2 2655 7996</span>
          </div>
          <div class="info-item">
            <i class="fas fa-globe"></i>
            <span>www.automodules.com</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('head-office', HeadOffice);
