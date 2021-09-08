import React from 'react'

export const ContactForm = () => {
    return (
        <div className="form-wrapper">
            <div className="form-peel">
                <h4 className="form-title">Request A Consultation</h4>
                <div className="input-container">
                    <p>
                        <strong>Bold</strong> labels are required.
                    </p>
                    <form className="req-form"
                        action="https://formsubmit.co/4d09fc3b317c64a2130699b1bc76a0fb" method="POST"
                    >
                        <div className="req-form-half-one">
                            <div className="inputs-req">


                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Name"
                                >
                                </input>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                >
                                </input>
                                <input
                                    type="text"
                                    name="Phone"
                                    placeholder="Phone"
                                >
                                </input>
                            </div>
                            <textarea
                                rows="4"
                                cols="15"
                                type="text"
                                name="Legal Issue"
                                placeholder="Brief description of your legal issue"

                            >
                            </textarea>
                        </div>

                        <div className="req-form-half-two">
                            {/* <input type="checkbox">
                        
                            <p>I have read the disclaimer</p> */}

                            <button><strong>Submit</strong></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
