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
                        src={themeColor === "dark" ? `/imgs/footer-icons/light-whatsapp-icon.png` 
                        : `/imgs/footer-icons/dark-whatsapp-icon.png`}/>
                    </div>
                    <div>
                        <a href="https://wa.me/+5517997824891/" className="link">
                            Whatsapp: (17) 99782-4891
                        </a>
                    </div>
                </div>
                <div className="contato-info-div">
                    <div>
                        <img className="contact-icon" alt="github-icon" 
                        src={themeColor === "dark" ? `/imgs/footer-icons/light-github-icon.png` 
                        : `/imgs/footer-icons/dark-github-icon.png`}/>
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
                        src={themeColor === "dark" ? `/imgs/footer-icons/light-email-icon.png` 
                        : `/imgs/footer-icons/dark-email-icon.png`}/>
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
                        src={themeColor === "dark" ? `/imgs/footer-icons/light-linkedin-icon.png` 
                        : `/imgs/footer-icons/dark-linkedin-icon.png`}/>
                    </div>
                    <a href="https://www.linkedin.com/in/arthur-geromello-ab44a8159/" className="link">
                        Linkedin
                    </a>
                </div>
            </div>
        </footer>
    )
}