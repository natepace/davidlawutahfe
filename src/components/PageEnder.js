import React from "react";
import { ContactForm } from "./ContactForm.js";
export const PageEnder = () => {
  return (
    <div>
      <ContactForm />
      <div className="contact-info-map">
        <div className="address-box">
          <div className="address">
            <h3>The Pace Law Firm</h3>
            <p>2469 E. Ft. Union Blvd., Suite 112</p>
            <p>Cottonwood Heights, UT 84121</p>
            <p>Phone: 801-355-9700</p>
            <p>Fax: 801-355-9705</p>
          </div>
        </div>
      </div>
      <div className="call-today">
        <h3>Call Today for Your Complimentary Consultation</h3>
        <h2>801-355-9700</h2>
      </div>
      <div className="footer-section">
        <footer>
          <p className="copyright">
            © 2023 by The Pace Law Firm. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};
