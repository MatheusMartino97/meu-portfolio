import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class Contact extends Component {
  render() {
    return (
      <div id="contact-page" className="page-content">
        <NavBar />
        <header className="page-header">
          <h1>Contato</h1>
        </header>
        <main className="page-main">
          <section className="contact-list">
            <div className="contact">
              <img
                src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png"
                alt="Gmail logo"
                width="48px"
                height="48px"
              />
              <div className="info">
                <em>matheus.martino97@gmail.com</em>
                <a href="mailto:matheus.martino97@gmail.com">
                  Mande-me um email
                </a>
              </div>
            </div>
            <div className="contact">
              <img
                src="https://1.bp.blogspot.com/-FWQXX3VMLo8/XxFkxZp2UNI/AAAAAAAACTE/Ldql0DbCRqYNB89U2eEFGZSpe1YmPkNKACPcBGAYYCw/s400/whatsapp-logo-5.png"
                alt="Whatsapp logo"
                width="48px"
                height="48px"
              />
              <div className="info">
                <em>+55 15 99130-9506</em>
                <a
                  href="https://api.whatsapp.com/send?phone=5515991309506&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio..."
                  target="_blank"
                  rel="noreferrer"
                >
                  Envie-me uma mensagem
                </a>
              </div>
            </div>
            <div className="contact">
              <img
                src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"
                alt="Gmail logo"
                width="48px"
                height="48px"
              />
              <div className="info">
                <em>@matheusmrtno</em>
                <a
                  href="https://www.instagram.com/matheusmrtno/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visite meu Instagram
                </a>
              </div>
            </div>
            <div className="contact">
              <img
                src="https://cdn4.iconfinder.com/data/icons/miu-square-gloss-social/60/github-square-gloss-social-media-512.png"
                alt="Gmail logo"
                width="48px"
                height="48px"
              />
              <div className="info">
                <em>MatheusMartino97</em>
                <a
                  href="https://github.com/MatheusMartino97/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acesse meu GitHub
                </a>
              </div>
            </div>
            <div className="contact">
              <img
                src="https://image.flaticon.com/icons/png/512/174/174857.png"
                alt="Gmail logo"
                width="48px"
                height="48px"
                id="linkedin-logo"
              />
              <div className="info">
                <em>Matheus Martino</em>
                <a
                  href="https://www.linkedin.com/in/matheus-martino/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acesse meu LinkedIn
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Contact;
