import './css/site.css'

function App() {
  return (
    <>
      <section className="hidden">
          <div className="profile-pic-div">
              <img src="https://media.licdn.com/dms/image/D4D03AQFBfvqc9GSVpg/profile-displayphoto-shrink_800_800/0/1665262332486?e=1697673600&v=beta&t=rhQ3i0gYxoewWG7NSEIu2ofdAhF_MmYndpA3taUl5bg" 
              alt="linkedin-picture" className="profile-pic"/>
          </div>
      </section>
      
      <section className="hidden">
          <div className="info-description">
              <div className="info-paragraph">
                  Olá, meu nome é Arthur de Castro Geromello.
                  Tenho 24 anos, sou desenvolvedor FullStack, Engenheiro da Computação.
              </div>
              <div className="info-paragraph">
                  Minhas principais áreas de expertise incluem C#, SQL, HTML, Javascript, React, Blazor e Docker.
                  Estou sempre buscando expandir meu conhecimento e explorar novas tecnologias para aprimorar minhas habilidades.
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
      </section>
      
      <section className="hidden">
          <div className="section-title">
              <div>Desenvolvimento Web FullStack com C# / React / Blazor</div>
          </div>
      
          <div className="icons-div">
              <div className="center-text">
                  <img className="language-icons" alt="icone-csharp" src="https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png" />
              </div>
              <div className="center-text">
                  <img className="language-icons" alt="icone-sql" src="https://cdn-icons-png.flaticon.com/512/4299/4299956.png" />
              </div>
              <div className="center-text">
                  <img className="language-icons" alt="icone-html" src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
              </div>
              <div className="center-text">
                  <img className="language-icons" alt="icone-css" src="https://cdn-icons-png.flaticon.com/512/919/919826.png" />
              </div>
              <div className="center-text">
                  <img className="language-icons" alt="icone-javascript" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
              </div>
              <div className="center-text">
                  <img className="language-icons" alt="icone-react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
              </div>
              <div className="center-text">
                  <img className="language-icons" alt="icone-docker" src="https://cdn-icons-png.flaticon.com/512/5969/5969059.png" />
              </div>
              <div className="center-text">
                  <img className="language-icons" alt="icone-blazor" src="https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png" />
              </div>
          </div>
      </section>
      
      <section className="hidden">
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
      </section>

      <section className="hidden">
      <div className="competencias">
          <div className="section-title">
              Competências
          </div>
          <div className="competencias-list-div">
              <div className="lists-div">
                  <ul>
                      <li>Inglês (Avançado)</li>
                      <li className="competencias-eng">Engenheiro da Computação - UNIFEV (Centro Universitário de Votuporanga)</li>
                  </ul>
              </div>
          </div>
        </div>
      </section>
          
      <section className="hidden">
          <div className="section-title" id="section-id">
              Meus projetos
          </div>
              <div className="projects-div">
                  <div className="project-div">
                      <div className="project-title">
                          Roadmaps
                      </div>
                      <a href="./pages/roadmaps.html">
                          <img src="src\imgs\projects\Roadmap\1.png" className="index-project-picture" />
                      </a>
                  </div>
                  <div className="project-div">
                      <div className="project-title">
                          Antigo portfólio
                      </div>
                      <a href="./pages/oldportfolio.html">
                          <img src="src\imgs\projects\OldPortfolio\1.png" className="index-project-picture" />
                      </a>
                  </div>
          
              </div>
              <div className="projects-div">
                  <div className="project-div">
                      <div className="project-title">
                          NetCore
                      </div>
                      <a href="./pages/netcoreapp.html">
                          <img src="/src\imgs\projects\NetCoreApp\1.png" className="index-project-picture" />
                      </a>
                  </div>
                  <div className="project-div">
                      <div className="project-title">
                          Clinica
                      </div>
                      <a href="./pages/clinica.html">
                          <img src="src\imgs\projects\Clinica\1.png" className="index-project-picture" />
                      </a>
                  </div>
              </div>
      </section>

      <section className="hidden">
          <div className="section-title" id="contact-section">
              Contato
          </div>
          <div className="contato-div">
              <div>
                  <div className="contato-info-div">
                      <div>
                          <img className="contact-icon" alt="whatsapp-icon" src="src\imgs\emailicon.png" />
                      </div>
                      <div className="display-flex-justify-evenly">
                          <div className="contact-section-title">
                              Whatsapp:
                          </div>
                          <div>
                              (17) 99782-4891
                          </div>
                      </div>
                  </div>
                  <div className="contato-info-div">
                      <div>
                          <img className="contact-icon" alt="github-icon" src="src\imgs\githubicon.png" />
                      </div>
                      <a href="https://github.com/Arthuthu" className="link">
                          Github
                      </a>
                  </div>
              </div>
              <div>
                  <div className="contato-info-div">
                      <div>
                          <img className="contact-icon" alt="email-icon" src="src\imgs\emailicon.png" id="email-icon"/>
                      </div>
                      <div className="display-flex-justify-evenly" id="email-div">
                          <div className="contact-section-title" id="email-section-title">
                              Email:
                          </div>
                          <div>
                              arthurgeromello@hotmail.com
                          </div>
                      </div>
                  </div>
                  <div className="contato-info-div">
                      <div>
                          <img className="contact-icon" alt="linkedin-icon" src="src\imgs\linkedinicon.png" />
                      </div>
                      <a href="https://www.linkedin.com/in/arthur-geromello-ab44a8159/" className="link">
                          Linkedin
                      </a>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default App
