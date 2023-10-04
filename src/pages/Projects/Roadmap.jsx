import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Roadmap() {
    const maxNumberOfSlides = 12;
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
                Roadmaps
            </div>
            
            <div className="info-description">
                <div className="info-paragraph">
                    Roadmaps é um site desenvolvido em Blazor que se integra de forma eficiente com uma API,
                    permitindo a obtenção de informações cruciais a partir de um banco de dados robusto.
                    O coração do sistema é o backend construído em C#,
                    que emprega uma REST API e duas bibliotecas especializadas para gerir a lógica de negócios,
                    enquanto realiza buscas otimizadas utilizando o ORM Dapper.
                    O armazenamento confiável é garantido por meio do SQL Server,
                    onde tabelas bem definidas e stored procedures foram implementadas para executar comandos e consultas de maneira eficaz.
                </div>
                <div className="info-paragraph">
                    Durante o desenvolvimento,
                    também foi adotada uma abordagem defensiva com o uso de bibliotecas como FluentValidation,
                    assegurando que todos os dados sejam válidos antes de serem processados.
                    Além disso, a implementação de logs foi incorporada ao sistema,
                    permitindo o registro de informações relevantes para uma análise mais aprofundada em caso de ocorrência de erros inesperados.
                </div>
                <div className="info-paragraph">
                    Para garantir a integridade do código, foi elaborado um projeto de testes abrangente,
                    apoiado pela biblioteca XUnit.
                    A combinação de FluentAssertions, AutoFixture e NSubstitute contribui para a validação contínua do funcionamento esperado do código,
                    reforçando a confiabilidade do sistema como um todo.
                </div>
            </div>
   
            <div>
                <div className="carousel" data-carousel>
                <button onClick={decrementSlidePosition} className="carousel-button prev">&#8656;</button>
                <button onClick={incrementSlidePosition} className="carousel-button next">&#8658;</button>
                    <ul className="project-images-div" data-slides>
                    <li className="slide" data-active>
                            <img src={`src/assets/imgs/projects/Roadmap/${slidePosition}.png`} className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                    </ul>
                </div>
                
                <div className="project-button-div">
                    <a href="https://github.com/Arthuthu/Roadmap" className="project-github-link">
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