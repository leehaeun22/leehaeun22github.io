// src/pages/Contact.tsx
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      {/* Header */}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Feel free to reach out through the contact form.</p>
      </div>

      {/* Card */}
      <div className="contact-card">
        {/* Left */}
        <div className="contact-left">
          <div className="contact-left-content">
            <h3>Contact Information</h3>

            <ul className="contact-info">
              <li>📞 010-0000-0000</li>
              <li>✉️ haeun@email.com</li>
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="field">
              <label>First Name</label>
              <input type="text" placeholder="eg. Haeun" />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input type="text" placeholder="eg. Lee" />
            </div>

            <div className="field full">
              <label>Email</label>
              <input type="email" placeholder="eg. haeun@mail.com" />
            </div>

            <div className="field full">
              <label>Your Message</label>
              <textarea rows={3} />
            </div>

            <button className="send-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
