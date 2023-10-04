import React from 'react'
import { Link } from 'react-router-dom'

export default function NetCoreApp() {
    return(
        <>
            <div className="section-title">
                NetCoreApp
            </div>

             <div>
                <div className="info-description">
                    <div className="info-paragraph">
                        O Projeto NetCoreApp nasceu como um espaço de experimentação,
                        permitindo-me testar ideias novas, bibliotecas populares e tecnologias emergentes no mundo do .NetCore.
                        Ao longo desse processo, trabalhei em vários projetos menores que visavam aprofundar meu entendimento,
                        praticar diferentes abordagens de codificação e refinar a forma como estruturo meu código.
                        Embora nem todos esses projetos estejam compartilhados publicamente no GitHub,
                        acredito na importância de manter templates disponíveis para referência futura e para fornecer soluções práticas.
                    </div>
                        <div className="info-paragraph">
                        Um desses templates é o .NetCoreApp, que engloba uma ampla gama de conhecimentos no desenvolvimento backend em C# que acumulei ao longo do tempo.
                        Essa é uma forma de organizar e compartilhar soluções que abordam aspectos diversos do desenvolvimento,
                        desde conceitos fundamentais até abordagens mais avançadas.
                        Disponibilizar esses templates no GitHub não só me ajuda a manter um registro do meu progresso,
                        mas também me ajudar a ter futuras referências e permite que outros desenvolvedores aproveitem e aprendam com o meu trabalho.
                    </div>
                    <div className="info-paragraph">
                        O Projeto NetCoreApp reflete meu desejo contínuo de crescimento profissional e contribuição para a comunidade de desenvolvedores.
                        Compartilhar esses recursos é uma maneira de retribuir à comunidade que me ajudou a evoluir como programador,
                        enquanto também construo uma base de conhecimento para mim mesmo,
                        facilitando consultas futuras e a aplicação de soluções bem-sucedidas em projetos subsequentes.
                    </div>
                </div>
            </div>
            
            <div aria-label="Imagens do projeto">
                <div className="carousel" data-carousel>
                    <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
                    <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
                    <ul className="project-images-div" data-slides>
                        <li className="slide" data-active>
                            <img src="src\assets\imgs\projects\NetCoreApp\1.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\NetCoreApp\2.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\NetCoreApp\3.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\NetCoreApp\4.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                        <li className="slide">
                            <img src="src\assets\imgs\projects\NetCoreApp\5.png" className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                    </ul>
                </div>
                
                <div className="project-button-div">
                    <a href="https://github.com/Arthuthu/NetCoreApp" className="project-github-link">
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