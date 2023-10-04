import React from 'react'

export default function Roadmap() {
    return(
        <>
            <div>
        <div class="section-title">
            Roadmaps
        </div>
        
        <div class="info-description">
            <div class="info-paragraph">
                Roadmaps é um site desenvolvido em Blazor que se integra de forma eficiente com uma API,
                permitindo a obtenção de informações cruciais a partir de um banco de dados robusto.
                O coração do sistema é o backend construído em C#,
                que emprega uma REST API e duas bibliotecas especializadas para gerir a lógica de negócios,
                enquanto realiza buscas otimizadas utilizando o ORM Dapper.
                O armazenamento confiável é garantido por meio do SQL Server,
                onde tabelas bem definidas e stored procedures foram implementadas para executar comandos e consultas de maneira eficaz.
            </div>
            <div class="info-paragraph">
                Durante o desenvolvimento,
                também foi adotada uma abordagem defensiva com o uso de bibliotecas como FluentValidation,
                assegurando que todos os dados sejam válidos antes de serem processados.
                Além disso, a implementação de logs foi incorporada ao sistema,
                permitindo o registro de informações relevantes para uma análise mais aprofundada em caso de ocorrência de erros inesperados.
            </div>
            <div class="info-paragraph">
                Para garantir a integridade do código, foi elaborado um projeto de testes abrangente,
                apoiado pela biblioteca XUnit.
                A combinação de FluentAssertions, AutoFixture e NSubstitute contribui para a validação contínua do funcionamento esperado do código,
                reforçando a confiabilidade do sistema como um todo.
            </div>
        </div>
            </div>
   
            <div>
                <div class="carousel" data-carousel>
                    <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
                    <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
                    <ul class="project-images-div" data-slides>
                        <li class="slide" data-active>
                            <img src="../imgs//projects//Roadmap/1.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/2.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/3.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/4.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/5.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/6.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/7.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/8.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/9.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/10.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/11.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li class="slide">
                            <img src="../imgs//projects//Roadmap/12.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                    </ul>
                </div>
                
                <div class="project-button-div">
                    <a href="https://github.com/Arthuthu/Roadmap" class="project-github-link">
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