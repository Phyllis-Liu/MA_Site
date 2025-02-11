import { html, css, LitElement } from 'lit';

class ContactForm extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-top: 60px;
    }
    
    .form-container {
      display: flex;
      background-color: #f5f5f5;
      padding: 40px;
      gap: 40px;
      min-height: 600px;
    }
    
    .title-section {
      flex: 1;
      padding-top: 20px;
    }
    
    .form-section {
      flex: 2;
    }

    h2 {
      font-size: 2.5em;
      font-weight: normal;
      margin: 0;
      line-height: 1.2;
    }

    .form-row {
      display: flex;
      gap: 60px;
      margin-bottom: 20px;
    }

    @media (max-width: 480px) {
      .form-row {
        flex-direction: column;
        gap: 20px;
      }
    }

    .form-field {
      flex: 1;
      margin-bottom: 20px;
    }

    .form-field.full-width {
      width: 100%;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #333;
      font-size: 0.9em;
    }

    input, textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: white;
      font-size: 0.9em;
      font-family: inherit;
    }

    textarea {
      min-height: 120px;
      resize: vertical;
      font-size: 0.9em;
      font-family: inherit;
    }

    input::placeholder,
    textarea::placeholder {
      color: #999;
      font-size: 0.9em;
      font-family: inherit;
    }

    /* RWD 樣式 */
    @media (max-width: 768px) {
      :host {
        margin-top: 50px;
      }

      .form-container {
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        min-height: auto;
      }

      .title-section {
        padding-top: 0;
        text-align: center;
      }

      h2 {
        font-size: 2em;
      }

      .form-section {
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .form-container {
        padding: 15px;
      }
    }

    @media (max-width: 480px) {
      .form-row {
        flex-direction: column;
        gap: 20px;
      }

      .form-container {
        padding: 15px;
      }

      h2 {
        font-size: 1.8em;
      }

      input, textarea {
        padding: 10px;
      }

      .form-field {
        margin-bottom: 15px;
      }
    }
  `;

  render() {
    return html`
      <div class="form-container">
        <div class="title-section">
          <h2>We'd love to hear your thoughts!</h2>
        </div>
        <div class="form-section">
          <div class="form-row">
            <div class="form-field">
              <label for="first-name">First name</label>
              <input type="text" id="first-name" name="first-name" placeholder="Value" />
            </div>
            <div class="form-field">
              <label for="last-name">Last name</label>
              <input type="text" id="last-name" name="last-name" placeholder="Value" />
            </div>
          </div>
          <div class="form-field">
            <label for="company-name">Company name</label>
            <input type="text" id="company-name" name="company-name" placeholder="Value" />
          </div>
          <div class="form-field">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" placeholder="Value" />
          </div>
          <div class="form-field">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Value" />
          </div>
          <div class="form-field">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Value" />
          </div>
          <div class="form-field">
            <label for="country">Country</label>
            <input type="text" id="country" name="country" placeholder="Value" />
          </div>
          <div class="form-field">
            <label for="message">MESSAGE</label>
            <textarea id="message" name="message" placeholder="Value"></textarea>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('contact-form', ContactForm);
