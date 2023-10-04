import React from 'react'

export default function NetCoreApp() {
    return(
        <>
             <div>
                <div class="section-title">
                    NetCoreApp
                </div>
                
                <div class="info-description">
                    <div class="info-paragraph">
                        O Projeto NetCoreApp nasceu como um espaço de experimentação,
                        permitindo-me testar ideias novas, bibliotecas populares e tecnologias emergentes no mundo do .NetCore.
                        Ao longo desse processo, trabalhei em vários projetos menores que visavam aprofundar meu entendimento,
                        praticar diferentes abordagens de codificação e refinar a forma como estruturo meu código.
                        Embora nem todos esses projetos estejam compartilhados publicamente no GitHub,
                        acredito na importância de manter templates disponíveis para referência futura e para fornecer soluções práticas.
                    </div>
                        <div class="info-paragraph">
                        Um desses templates é o .NetCoreApp, que engloba uma ampla gama de conhecimentos no desenvolvimento backend em C# que acumulei ao longo do tempo.
                        Essa é uma forma de organizar e compartilhar soluções que abordam aspectos diversos do desenvolvimento,
                        desde conceitos fundamentais até abordagens mais avançadas.
                        Disponibilizar esses templates no GitHub não só me ajuda a manter um registro do meu progresso,
                        mas também me ajudar a ter futuras referências e permite que outros desenvolvedores aproveitem e aprendam com o meu trabalho.
                    </div>
                    <div class="info-paragraph">
                        O Projeto NetCoreApp reflete meu desejo contínuo de crescimento profissional e contribuição para a comunidade de desenvolvedores.
                        Compartilhar esses recursos é uma maneira de retribuir à comunidade que me ajudou a evoluir como programador,
                        enquanto também construo uma base de conhecimento para mim mesmo,
                        facilitando consultas futuras e a aplicação de soluções bem-sucedidas em projetos subsequentes.
                    </div>
                </div>
            </div>
            
            <div aria-label="Imagens do projeto">
                <div class="carousel" data-carousel>
                    <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
                    <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
                    <ul class="project-images-div" data-slides>
                        <li class="slide" data-active>
                            <img src="../imgs//projects//NetCoreApp/1.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//NetCoreApp/2.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//NetCoreApp/3.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//NetCoreApp/4.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//NetCoreApp/5.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                    </ul>
                </div>
                
                <div class="project-button-div">
                    <a href="https://github.com/Arthuthu/NetCoreApp" class="project-github-link">
                        Github
                    </a>
                </div>
                
                <div class="project-button-div">
                    <a href="../index.html" class="portfolio-button-anchor">Voltar</a>
                </div>
            </div>

            <div>
                <div class="section-title" id="contact-section">
                    Contato
                </div>
                <div class="contato-div">
                    <div>
                        <div class="contato-info-div">
                            <div>
                                <img class="contact-icon" alt="whatsapp-icon" src="../imgs/whatsicon.png" />
                            </div>
                            <div class="display-flex-justify-evenly">
                                <div class="contact-section-title">
                                    Whatsapp:
                                </div>
                                <div>
                                    (17) 99782-4891
                                </div>
                            </div>
                        </div>
                        <div class="contato-info-div">
                            <div>
                                <img class="contact-icon" alt="github-icon" src="../imgs/githubicon.png" />
                            </div>
                            <a href="https://github.com/Arthuthu" class="link">
                                Github
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="contato-info-div">
                            <div>
                                <img class="contact-icon" alt="email-icon" src="../imgs/emailicon.png" id="email-icon"/>
                            </div>
                            <div class="display-flex-justify-evenly" id="email-div">
                                <div class="contact-section-title" id="email-section-title">
                                    Email:
                                </div>
                                <div>
                                    arthurgeromello@hotmail.com
                                </div>
                            </div>
                        </div>
                        <div class="contato-info-div">
                            <div>
                                <img class="contact-icon" alt="linkedin-icon" src="../imgs/linkedinicon.png" />
                            </div>
                            <a href="https://www.linkedin.com/in/arthur-geromello-ab44a8159/" class="link">
                                Linkedin
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}