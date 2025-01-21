import { LitElement, html, css } from 'lit';

class CoreValueSection extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .title {
      font-size: 32px;
      font-weight: bold;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section {
      position: relative;
      color: white;
      padding: 60px 0;
      background-size: cover;
      background-position: center;
      overflow: hidden;
    }

    .background-svg, .background-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .background-image {
      object-fit: cover;
    }

    .section-content {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      align-items: center;
    }

    .section-title {
      font-size: 36px;
      font-weight: bold;
      margin: 0;
      width: 200px;
    }

    .section-description {
      margin-left: 40px;
      font-size: 18px;
      line-height: 1.6;
      max-width: 800px;
    }

    .mission-section {
      background-color: #000;
    }

    .vision-section {
      background-color: #1a1a1a;
    }

    .value-section {
      background-color: #000;
    }

    .pillars {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
    }

    .pillar {
      background: white;
      padding: 30px;
    }

    .pillar-title {
      font-size: 20px;
      font-weight: bold;
      margin: 0 0 20px 0;
      color: #333;
      position: relative;
    }

    .pillar-title::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 40px;
      height: 2px;
      background-color: #b;
    }

    .pillar-description {
      color: #666;
      line-height: 1.6;
    }

    .capabilities {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
    }

    .capability {
      background: white;
      padding: 30px;
    }

    .capability-title {
      font-size: 18px;
      font-weight: bold;
      margin: 0 0 15px 0;f
      color: #333;
      position: relative;
    }

    .capability-title::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 30px;
      height: 2px;
      background-color: #ffffff;
    }

    .capability-description {
      color: #666;
      line-height: 1.6;
      font-size: 14px;
    }
  `;

  render() {
    return html`
      <h2 class="title">CORE VALUE</h2>

      <div class="section mission-section">
        <img src="image/mission.png" class="background-image" alt="Mission background">
        <div class="section-content">
          <h3 class="section-title">MISSION</h3>
          <p class="section-description">
            As a visionary company committed to enhancing experiences and driving success, 
            our mission is to... Innovate technology, increase profitability and ease everyone's life.
          </p>
        </div>
      </div>

      <div class="section vision-section">
        <img src="image/vision.png" class="background-image" alt="Vision background">
        <div class="section-content">
          <h3 class="section-title">VISION</h3>
          <p class="section-description">Our company is built on three defined pillars:</p>
        </div>
      </div>

      <div class="pillars">
        ${this.renderPillars()}
      </div>

      <div class="section value-section">
        <img src="image/value2.png" class="background-image" alt="Value background">
        <div class="section-content">
          <h3 class="section-title">VALUE</h3>
          <p class="section-description">
            At the core of our company are six foundations that drive our success and define 
            our commitment to excellence in technology and innovations.
          </p>
        </div>
      </div>

      <div class="capabilities">
        ${this.renderCapabilities()}
      </div>
    `;
  }

  renderPillars() {
    return html`
      <div class="pillar">
        <h4 class="pillar-title">Continuous Innovation in Technology</h4>
        <p class="pillar-description">
          We are committed to pushing the boundaries of innovation in technology, 
          ensuring that our solutions remain at the forefront of the industry, constantly 
          evolving to meet the needs of our customers.
        </p>
      </div>
      <div class="pillar">
        <h4 class="pillar-title">Superior Advantage of Products</h4>
        <p class="pillar-description">
          Our products offer a distinct advantage over competitors, providing 
          unparalleled quality, functionality, and performance. We prioritize excellence in 
          every aspect, delivering superior value to our clients.
        </p>
      </div>
      <div class="pillar">
        <h4 class="pillar-title">Superior Advantage of Products</h4>
        <p class="pillar-description">
          Our products offer a distinct advantage over competitors, providing 
          unparalleled quality, functionality, and performance. We prioritize excellence in 
          every aspect, delivering superior value to our clients.
        </p>
      </div>
    `;
  }

  renderCapabilities() {
    return html`
      <div class="capability">
        <h4 class="capability-title">Database application</h4>
        <p class="capability-description">
          We specialize in developing robust and scalable database applications that 
          optimize data management and streamline business processes.
        </p>
      </div>
      <div class="capability">
        <h4 class="capability-title">Software & Firmware Engineering</h4>
        <p class="capability-description">
          Our software and firmware engineers are experts in creating cutting-edge 
          solutions that power devices and systems, ensuring optimal performance 
          and functionality.
        </p>
      </div>
      <div class="capability">
        <h4 class="capability-title">Integration & Production</h4>
        <p class="capability-description">
          We excel in seamlessly integrating components and systems, from design 
          to production, to deliver high-quality, reliable products that meet our clients' 
          specifications.
        </p>
      </div>
      <div class="capability">
        <h4 class="capability-title">Image Processing</h4>
        <p class="capability-description">
          Leveraging advanced image processing technologies, we enhance visual data 
          interpretation, analysis, and manipulation for various applications, from healthcare 
          to security.
        </p>
      </div>
      <div class="capability">
        <h4 class="capability-title">Mechanical Engineering</h4>
        <p class="capability-description">
          Our mechanical engineering team designs innovative and efficient 
          mechanical systems, from concept to production, ensuring optimal 
          performance and durability.
        </p>
      </div>
      <div class="capability">
        <h4 class="capability-title">Hardware Engineering</h4>
        <p class="capability-description">
          We specialize in developing and optimizing hardware solutions to meet 
          the demands of modern technology.
        </p>
      </div>
    `;
  }
}

customElements.define('core-value-section', CoreValueSection);
