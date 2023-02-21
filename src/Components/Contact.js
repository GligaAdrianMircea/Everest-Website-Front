import React from "react";
import "../Styles/contact.css";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title">Contactează-ne</div>
      <div className="contact-forms">
        <form
          className="contact-forms-name"
          action="https://formsubmit.co/everestofficialcompany@gmail.com"
          method="POST"
        >
          <div className="contact-name">
            <div className="contact-firstname">
              <div className="contact-test">
                <input
                  type="text"
                  className="contact-input"
                  required
                  name="Nume"
                  placeholder="Nume"
                ></input>
              </div>
            </div>
            <div className="contact-lastname">
              <div className="contact-test">
                <input
                  type="text"
                  className="contact-input"
                  required
                  name="Nume de familie"
                  placeholder="Nume de familie"
                ></input>
              </div>
            </div>
          </div>
          <div className="contact-email">
            <div className="contact-test">
              <input
                type="text"
                className="contact-input"
                required
                name="Email"
                placeholder="Email"
              ></input>
            </div>
          </div>
          <div className="contact-subject">
            <div className="contact-test">
              <input
                type="text"
                className="contact-input"
                required
                name="Subject"
                placeholder="Subject"
              ></input>
            </div>
          </div>
          <div className="contact-textarea">
            <div>
              <div>Description</div>
              <textarea
                className="contact-text-area"
                required
                name="Descriere"
              ></textarea>
            </div>
          </div>
          <input className="contact-button" type="submit" value="Trimite" />
        </form>
      </div>
    </div>
  );
}
export default Contact;
