import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



export default function OldPortfolio() {
    const maxNumberOfSlides = 5;
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
                Antigo Portfolio
            </div>
            
            <div className="info-description">
                <div className="info-paragraph">
                    Este projeto marca o início da minha jornada em compartilhar e exibir meus primeiros projetos.
                    Criado com entusiasmo, ele serviu como meu ponto de partida para destacar conquistas passadas.
                </div>
                <div className="info-paragraph">
                    Diferente dos projetos subsequentes, esta versão inicial não apresenta uma camada backend, concentrando-se principalmente na experiência do usuário.
                    As tecnologias empregadas são HTML5, CSS3 e Razor Pages,
                    proporcionando uma interface simples, porém eficaz.
                </div>
                <div className="info-paragraph">
                    Os projetos apresentados nesse portfólio inaugural refletem meu ponto de partida na área, caracterizando-se por sua simplicidade e escala comparativamente menor. Eles representam um capítulo inicial na minha jornada de desenvolvimento,
                    contrastando significativamente com os projetos robustos e abrangentes que compõem meu portfólio atual.
                </div>
                <div className="info-paragraph">
                    Embora modestos em comparação, esses primeiros projetos são fundamentais para compreender o progresso que alcancei desde então.
                    Cada projeto é uma lembrança das minhas conquistas e do meu crescimento contínuo como desenvolvedor.
                </div>
            </div>
    
            <div>
                <div className="carousel" data-carousel>
                    <button onClick={decrementSlidePosition} className="carousel-button prev">&#8656;</button>
                    <button onClick={incrementSlidePosition} className="carousel-button next">&#8658;</button>
                    <ul className="project-images-div" data-slides>
                        <li className="slide" data-active>
                            <img src={`/imgs/projects/OldPortfolio/${slidePosition}.png`} className="project-page-picture" alt="Imagem projeto"/>
                        </li>
                    </ul>
                </div>
        
                <div className="project-button-div">
                    <a href="https://github.com/Arthuthu/PortfolioSite" className="project-github-link">
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