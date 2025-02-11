import { html, css, LitElement } from 'lit';

class ContactForm extends LitElement {
  static styles = css`
    /* 在這裡添加您的 CSS 樣式 */
    .form-container {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
    }
    .form-field {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `;

  render() {
    return html`
      <div class="form-container">
        <h2>We'd love to hear your thoughts!</h2>
        <div class="form-field">
          <label for="first-name">First name</label>
          <input type="text" id="first-name" name="first-name" placeholder="Value" />
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
        <button type="submit">Submit</button>
      </div>
    `;
  }
}

customElements.define('contact-form', ContactForm);
