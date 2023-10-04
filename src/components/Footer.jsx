import React from "react"

export default function Footer() {
    return (
    <div>
        <div className="section-title" id="contact-section">
            Contato
        </div>
        <div className="contato-div">
            <div className="contato-info-div">
                <div>
                    <img className="contact-icon" alt="whatsapp-icon" src="src\assets\imgs\whatsicon.png" />
                </div>
                <div className="display-flex-justify-evenly">
                    <div className="contact-section-title">
                        Whatsapp:
                    </div>
                    <div>
                        (17) 99782-4891
                    </div>
                </div>
            </div>
            <div className="contato-info-div">
                <div>
                    <img className="contact-icon" alt="github-icon" src="src\assets\imgs\githubicon.png" />
                </div>
                <a href="https://github.com/Arthuthu" className="link">
                    Github
                </a>
            </div>
        </div>
        <div className="contato-div">
            <div className="contato-info-div">
                <div>
                    <img className="contact-icon" alt="email-icon" src="src\assets\imgs\emailicon.png" />
                </div>
                <div className="display-flex-justify-evenly">
                    <div className="contact-section-title">
                        Email:
                    </div>
                    <div>
                        arthurgeromello@hotmail.com
                    </div>
                </div>
            </div>
            <div className="contato-info-div">
                <div>
                    <img className="contact-icon" alt="linkedin-icon" src="src\assets\imgs\linkedinicon.png" />
                </div>
                <a href="https://www.linkedin.com/in/arthur-geromello-ab44a8159/" className="link">
                    Linkedin
                </a>
            </div>
        </div>
    </div>
    )
}