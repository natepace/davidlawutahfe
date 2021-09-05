import React from 'react'
import { ContactForm } from './ContactForm.js'
export const PageEnder = () => {
    return (
        <div>
            <ContactForm />
            <div className="contact-info-map">

            </div>
            <div className="call-today">
                <h3>Call Today for Your Complimentary Consultation</h3>
                <h2>801-355-9700</h2>
            </div>
            <div className="footer-section">
                <footer>
                    <p className="copyright">
                        © 2020 by The Pace Law Firm. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    )
}
