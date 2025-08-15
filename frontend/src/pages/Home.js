import React from 'react';
import '../style/menu.css';
import '../style/home.css';
import AccountMenu from '../components/AccountMenu';
import cvSenda from '../images/cvSenda.png';
import Projects from '../components/Projects';
import Badges from '../components/Badges';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <AccountMenu />

            {/* Section principale */}
            <section className="home-section">
                <div className="home-container">

                    {/* Image */}
                    <div className="home-image-wrapper">
                        <div className="home-image-shape"></div>
                        <img
                            src={cvSenda}
                            alt="Senda Zidi"
                            className="home-image"
                        />
                    </div>

                    {/* Texte */}
                    <div className="home-text">
                        <h2 className="home-title">— Je suis Senda Zidi.</h2>
                        <h3 className="home-subtitle">Développeur·se Web</h3>
                        <p className="home-description">
                            Développeur·se web basé·e en Tunisie, je crée des
                            applications modernes avec React et Node.js.
                            Passionné·e par la création d’expériences
                            utilisateur fluides et esthétiques, je cherche à
                            améliorer la vie des gens grâce à la technologie.
                        </p>
                        <button className="home-button">
                            En savoir plus →
                        </button>
                    </div>
                </div>
            </section>

            {/* Section Projets */}
            <section className="home-section" style={{ backgroundColor: '#ECECEC', minHeight: 'auto', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Mes Projets</h2>
                    <Projects />
                </div>
            </section>
            <Badges />
            <Contact />
            <Footer />
        </>
    );
}
