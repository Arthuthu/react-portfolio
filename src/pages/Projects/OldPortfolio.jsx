import React from 'react'

export default function OldPortfolio() {
    return(
        <>
            <div>
        <div class="section-title">
            Antigo Portfolio
        </div>
        
        <div class="info-description">
            <div class="info-paragraph">
                Este projeto marca o início da minha jornada em compartilhar e exibir meus primeiros projetos.
                Criado com entusiasmo, ele serviu como meu ponto de partida para destacar conquistas passadas.
            </div>
            <div class="info-paragraph">
                Diferente dos projetos subsequentes, esta versão inicial não apresenta uma camada backend, concentrando-se principalmente na experiência do usuário.
                As tecnologias empregadas são HTML5, CSS3 e Razor Pages,
                proporcionando uma interface simples, porém eficaz.
            </div>
            <div class="info-paragraph">
                Os projetos apresentados nesse portfólio inaugural refletem meu ponto de partida na área, caracterizando-se por sua simplicidade e escala comparativamente menor. Eles representam um capítulo inicial na minha jornada de desenvolvimento,
                contrastando significativamente com os projetos robustos e abrangentes que compõem meu portfólio atual.
            </div>
            <div class="info-paragraph">
                Embora modestos em comparação, esses primeiros projetos são fundamentais para compreender o progresso que alcancei desde então.
                Cada projeto é uma lembrança das minhas conquistas e do meu crescimento contínuo como desenvolvedor.
            </div>
        </div>
            </div>
    
            <div>
        <div class="carousel" data-carousel>
            <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
            <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
            <ul class="project-images-div" data-slides>
                <li class="slide" data-active>
                    <img src="../imgs//projects//OldPortfolio/1.png" class="project-page-picture" alt="Imagem projeto"/>
                </li>
                <li class="slide">
                    <img src="../imgs//projects//OldPortfolio/2.png" class="project-page-picture" alt="Imagem projeto"/>
                </li>
                <li class="slide">
                    <img src="../imgs//projects//OldPortfolio/3.png" class="project-page-picture" alt="Imagem projeto"/>
                </li>
                <li class="slide">
                    <img src="../imgs//projects//OldPortfolio/4.png" class="project-page-picture" alt="Imagem projeto"/>
                </li>
                <li class="slide">
                    <img src="../imgs//projects//OldPortfolio/5.png" class="project-page-picture" alt="Imagem projeto"/>
                </li>
            </ul>
        </div>
        
        <div class="project-button-div">
            <a href="https://github.com/Arthuthu/PortfolioSite" class="project-github-link">
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