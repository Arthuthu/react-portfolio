import React from 'react'
import { Link } from 'react-router-dom'

export default function Clinica() {
    return(
        <>
            <div>
                <div className="section-title">
                    Clinica
                </div>
            
                <div class="info-description">
                    <div class="info-paragraph">
                        Este projeto surgiu com o propósito de suprir as demandas essenciais das clínicas, possibilitando o registro detalhado das mesmas através de uma plataforma web intuitiva. Uma vez cadastrada,
                        a clínica ganha a capacidade de agendar consultas para seus pacientes de maneira eficaz e prática.
                    </div>
                    <div class="info-paragraph">
                        A interface de usuário, FrontEnd,
                        foi meticulosamente desenvolvida empregando as mais modernas tecnologias, como HTML5,
                        CSS3 e Bootstrap5, além da poderosa abordagem do Blazor. No âmbito do BackEnd,
                        o sistema foi construído utilizando uma abrangente Rest API baseada em .NetCore.
                        Dois componentes essenciais estão em uso:
                        bibliotecas dedicadas à implementação da lógica de negócios e à busca de informações no robusto banco de dados SQL Server.
                    </div>
                    <div class="info-paragraph">
                        Essa abordagem híbrida, combinando as funcionalidades do FrontEnd e BackEnd,
                        resulta em um sistema coeso e altamente funcional.
                        Através da plataforma, as clínicas podem gerenciar seu fluxo de atendimento de forma otimizada,
                        proporcionando uma experiência satisfatória tanto para elas quanto para os pacientes atendidos.
                    </div>
                </div>
            </div>
    
            <div aria-label="Imagens do projeto">
                <div class="carousel" data-carousel>
                    <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
                    <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
                    <ul class="project-images-div" data-slides>
                        <li className="slide" data-active>
                            <img src="src\assets\imgs\projects\Clinica\1.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\2.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\3.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\4.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\5.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\6.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\7.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\8.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\9.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\10.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\11.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\12.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\13.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Clinica\14.png" class="project-page-picture" alt="Imagem projeto"/>
                        </li>
                    </ul>
                </div>
                
                <div className="project-button-div">
                    <a href="https://github.com/Arthuthu/ClinicaApp" class="project-github-link">
                        Github
                    </a>
                </div>
                
                <div className="project-button-div">
                    <Link to="/" class="portfolio-button-anchor">Voltar</Link>
                </div>
            </div>
        </>
    )
}