import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Clinica() {
    const maxNumberOfSlides = 14;
    const [slidePosition, setSlidePosition] = useState(1);

    function incrementSlidePosition() {
        if(slidePosition === maxNumberOfSlides){
            setSlidePosition(1)
        } else {
            setSlidePosition(slidePosition => slidePosition + 1)
        }
    }

    function decrementSlidePosition() {
        if(slidePosition === 1){
            setSlidePosition(maxNumberOfSlides)
        } else {
            setSlidePosition(slidePosition => slidePosition - 1)
        }
    }

    return(
        <>
            <div className="section-title">
                Clinica
            </div>

            <div>
                <div className="info-description">
                    <div className="info-paragraph">
                        Este projeto surgiu com o propósito de suprir as demandas essenciais das clínicas, possibilitando o registro detalhado das mesmas através de uma plataforma web intuitiva. Uma vez cadastrada,
                        a clínica ganha a capacidade de agendar consultas para seus pacientes de maneira eficaz e prática.
                    </div>
                    <div className="info-paragraph">
                        A interface de usuário, FrontEnd,
                        foi meticulosamente desenvolvida empregando as mais modernas tecnologias, como HTML5,
                        CSS3 e Bootstrap5, além da poderosa abordagem do Blazor. No âmbito do BackEnd,
                        o sistema foi construído utilizando uma abrangente Rest API baseada em .NetCore.
                        Dois componentes essenciais estão em uso:
                        bibliotecas dedicadas à implementação da lógica de negócios e à busca de informações no robusto banco de dados SQL Server.
                    </div>
                    <div className="info-paragraph">
                        Essa abordagem híbrida, combinando as funcionalidades do FrontEnd e BackEnd,
                        resulta em um sistema coeso e altamente funcional.
                        Através da plataforma, as clínicas podem gerenciar seu fluxo de atendimento de forma otimizada,
                        proporcionando uma experiência satisfatória tanto para elas quanto para os pacientes atendidos.
                    </div>
                </div>
            </div>
    
            <div aria-label="Imagens do projeto">
                <div className="carousel" data-carousel>
                <button onClick={decrementSlidePosition} className="carousel-button prev">&#8656;</button>
                <button onClick={incrementSlidePosition} className="carousel-button next">&#8658;</button>
                    <ul className="project-images-div" data-slides>
                        <li className="slide" data-active>
                            <img src={`src/assets/imgs/projects/Clinica/${slidePosition}.png`} className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                    </ul>
                </div>
                
                <div className="project-button-div">
                    <a href="https://github.com/Arthuthu/ClinicaApp" className="project-github-link">
                        Github
                    </a>
                </div>
                
                <div className="project-button-div">
                    <Link to="/" className="portfolio-button-anchor">Voltar</Link>
                </div>
            </div>
        </>
    )
}