import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    const maximumNumberOfProfilePictures = 2;
    const [profilePicture, setProfilePicture] = useState(1)

    function changeProfilePicture() {
        if(profilePicture === maximumNumberOfProfilePictures) {
            setProfilePicture(1)
        } else {
            setProfilePicture(profilePicture => profilePicture + 1)
        }
    }

    return (
        <>
            <div>
                <div className="profile-pic-div">
                    <img src={`/imgs/profile/${profilePicture}.png`} onClick={changeProfilePicture}
                    alt="profile-picture" className="profile-pic"/>
                </div>
            </div>
            
            <div>
                <div className="info-description">
                    <div className="info-paragraph">
                        Olá, meu nome é Arthur de Castro Geromello.
                        Tenho 24 anos, sou desenvolvedor FullStack, Engenheiro da Computação.
                    </div>
                    <div className="info-paragraph">
                        Minhas principais áreas de expertise incluem C#, SQL, HTML, Javascript, React, Blazor e Docker.
                        Diariamente procuro aperfeiçoar meus conhecimentos, sempre com o intuito de utilizar as melhores
                        tecnologias e as melhoras práticas da programação.
                    </div>
                    <div className="info-paragraph">
                        Hoje em dia para mim, programação se tornou um lifestyle, meu objetivo é se tornar um desenvolvedor
                        extremamente capaz de resolver qualquer problema da melhor maneira possível.
                    </div>
                    <div className="info-paragraph">
                        Neste portfólio, apresento os meus projetos que desenvolvi.
                        Além da programação, tenho um grande interesse em colaboração e aprendizado em equipe.
                        Acredito que as melhores soluções surgem quando diferentes mentes se unem em busca de um objetivo comum.
                    </div>
                    <div className="info-paragraph">
                        Agradeço por visitar meu portfólio e ficarei feliz em receber seu feedback e responder a qualquer pergunta que você possa ter.
                        Atenciosamente, Arthur de Castro Geromello.
                    </div>
                </div>
            </div>
            
            <div>
                <div className="section-title">
                    <div>Desenvolvimento Web FullStack com C# / React / Blazor</div>
                </div>
            
                <div className="icons-div">
                    <div className="center-text">
                        <img className="language-icons" alt="icone-csharp" src="/imgs\language-icons\csharp.png" />
                    </div>
                    <div className="center-text">
                        <img className="language-icons" alt="icone-sql" src="/imgs\language-icons\sql.png" />
                    </div>
                    <div className="center-text">
                        <img className="language-icons" alt="icone-html" src="/imgs\language-icons\html.png" />
                    </div>
                    <div className="center-text">
                        <img className="language-icons" alt="icone-css" src="/imgs\language-icons\css.png" />
                    </div>
                    <div className="center-text">
                        <img className="language-icons" alt="icone-javascript" src="/imgs\language-icons\javascript.png" />
                    </div>
                    <div className="center-text">
                        <img className="language-icons" alt="icone-react" src="/imgs\language-icons\react.png" />
                    </div>
                    <div className="center-text">
                        <img className="language-icons" alt="icone-docker" src="/imgs\language-icons\docker.png" />
                    </div>
                    <div className="center-text">
                        <img className="language-icons" alt="icone-blazor" src="/imgs\language-icons\blazor.png" />
                    </div>
                </div>
            </div>
            
            <div>
                <div className="other-categories-div">
                    <div className="section-div">
                        <div className="section-title">
                            Frameworks
                        </div>
                
                        <div className="lists-div">
                            <ul>
                                <li>EntityFramework</li>
                                <li>Bootstrap</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-div">
                        <div className="section-title">
                            Bibliotecas
                        </div>
                
                        <div className="lists-div">
                            <ul>
                                <li>XUnit</li>
                                <li>Dapper</li>
                                <li>FluentAssertion</li>
                                <li>FluentValidation</li>
                                <li>Redis Caching</li>
                                <li>Serilog</li>
                                <li>Hangfire</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-div">
                        <div className="section-title">
                            Outras Categorias (Conceitos e Práticas)
                        </div>
                
                        <div className="lists-div">
                            <ul>
                                <li>Rest API</li>
                                <li>UnitTests</li>
                                <li>Dependency Injection</li>
                                <li>Logging</li>
                                <li>Git</li>
                                <li>SOLID</li>
                                <li>KISS</li>
                                <li>YAGNI</li>
                                <li>Clean Architecture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
            <div>
                <div className="competencias">
                    <div className="section-title">
                        Competências
                    </div>
                    <div className="competencias-list-div">
                        <div className="competencias-div">
                            <div className="competencias-label">Inglês (Fluente)</div>
                            <div className="center-margin">
                                Ja faz muito tempo que eu venho estudando e utilizando o Inglês
                                no meu dia a dia, e hoje eu posso dizer que eu práticamente tenho um Inglês fluente.
                                Todo conteúdo que eu pesquiso ou estudo sobre na internet, primeiramente eu pesquiso em
                                Inglês, e devido a isso, aprender se torna mais facil.
                            </div>
                            <div className="competencias-label">Engenheiro da Computação - UNIFEV (Centro Universitário de Votuporanga)</div>
                            <div className="center-margin">
                                Eu ja estou no meu ultimo ano da Engenharia de Computação e ganhei muito conhecimento durante todo esse tempo.
                                Hoje eu ja sei a carreira que eu quero seguir e pretendo continuar estudando continuamente para poder me 
                                aperfeiçoar cada vez mais.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            <div>
                <div className="section-title" id="section-id">
                    Meus projetos
                </div>
                <div className="projects-div">
                    <div className="project-div">
                        <div className="project-title">
                            Roadmaps
                        </div>
                        <Link to="/roadmap">
                            <img src="/imgs/projects/Roadmap/1.png" className="index-project-picture" />
                        </Link>
                    </div>
                    <div className="project-div">
                        <div className="project-title">
                            Antigo portfólio
                        </div>
                        <Link to="oldportfolio">
                            <img src="/imgs/projects/OldPortfolio/1.png" className="index-project-picture" />
                        </Link>
                    </div>
                </div>
                <div className="projects-div">
                    <div className="project-div">
                        <div className="project-title">
                            NetCore
                        </div>
                        <Link to="netcoreapp">
                            <img src="/imgs/projects/NetCoreApp/1.png" className="index-project-picture" />
                        </Link>
                    </div>
                    <div className="project-div">
                        <div className="project-title">
                            Clinica
                        </div>
                        <Link to="clinica">
                            <img src="/imgs/projects/Clinica/1.png" className="index-project-picture" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}