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
                    <form className="req-form">
                        <div className="req-form-half-one">
                            <div className="inputs-req">


                                <input
                                    type="text"
                                    placeholder="Name"
                                >
                                </input>
                                <input
                                    type="text"
                                    placeholder="E-mail"
                                >
                                </input>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                >
                                </input>
                            </div>
                            <textarea
                                rows="4"
                                cols="15"
                                type="text"
                                placeholder="Brief description of your legal issue"

                            >
                            </textarea>
                        </div>

                        <div className="req-form-half-two">
                            {/* <input type="checkbox">
                            </input>
                            <p>I have read the disclaimer</p> */}

                            <button><strong>Submit</strong></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
