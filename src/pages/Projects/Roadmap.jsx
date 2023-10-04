import React from 'react'
import { Link } from 'react-router-dom'

export default function Roadmap() {
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
                    <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
                    <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
                    <ul className="project-images-div" data-slides>
                    <li className="slide" data-active>
                            <img src="src\assets\imgs\projects\Roadmap\1.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\2.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\3.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\4.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\5.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\6.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\7.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\8.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\9.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\10.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\11.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\Roadmap\12.png" className="project-page-picture" alt="Imagem projeto"/>
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