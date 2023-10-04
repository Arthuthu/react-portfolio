import React from "react"

export default function Footer() {
    return (
    <footer>
        <div className="section-title" id="contact-section">
            Contato
        </div>
        <div className="contato-div">
            <div className="contato-info-div">
                <div>
                    <img className="contact-icon" alt="whatsapp-icon" src="/imgs\whatsicon.png" />
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
                    <img className="contact-icon" alt="github-icon" src="/imgs\githubicon.png" />
                </div>
                <a href="https://github.com/Arthuthu" className="link">
                    Github
                </a>
            </div>
        </div>
        <div className="contato-div">
            <div className="contato-info-div">
                <div>
                    <img className="contact-icon" alt="email-icon" src="/imgs\emailicon.png" />
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
                    <img className="contact-icon" alt="linkedin-icon" src="/imgs\linkedinicon.png" />
                </div>
                <a href="https://www.linkedin.com/in/arthur-geromello-ab44a8159/" className="link">
                    Linkedin
                </a>
            </div>
        </div>
    </footer>
    )
}