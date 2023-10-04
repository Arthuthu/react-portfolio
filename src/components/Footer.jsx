import React from "react"

export default function Footer() {

    let themeColor =  localStorage.getItem("theme")

    return (
        <footer>
            <div className="section-title" id="contact-section">
                Contato
            </div>
            <div className="contato-div">
                <div className="contato-info-div">
                    <div>
                        <img className="contact-icon" alt="whatsapp-icon" 
                        src={themeColor === "dark" ? `/imgs/light-whatsapp-icon.png` : `/imgs/dark-whatsapp-icon.png`}/>
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
                        <img className="contact-icon" alt="github-icon" 
                        src={themeColor === "dark" ? `/imgs/light-github-icon.png` : `/imgs/dark-github-icon.png`}/>
                    </div>
                    <a href="https://github.com/Arthuthu" className="link">
                        Github
                    </a>
                </div>
            </div>
            <div className="contato-div">
                <div className="contato-info-div">
                    <div>
                        <img className="contact-icon" alt="email-icon" 
                        src={themeColor === "dark" ? `/imgs/light-email-icon.png` : `/imgs/dark-email-icon.png`}/>
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
                        <img className="contact-icon" alt="linkedin-icon"   
                        src={themeColor === "dark" ? `/imgs/light-linkedin-icon.png` : `/imgs/dark-linkedin-icon.png`}/>
                    </div>
                    <a href="https://www.linkedin.com/in/arthur-geromello-ab44a8159/" className="link">
                        Linkedin
                    </a>
                </div>
            </div>
        </footer>
    )
}