import React from 'react';
import '../style/home.css';
import AccountMenu from '../components/AccountMenu';
import cvSenda from '../images/cvSenda.png';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Projects from '../components/Projects';
import Badges from '../components/Badges';

export default function Home() {
    return (
        <>
            <AccountMenu />

            {/* Section principale */}
            <section className="home-section">
                <div className="home-container">

                    {/* Texte */}
                    <div className="home-text">
                        <p className="intro-small">Hi, Myself</p>
                        <h1 className="intro-title">Senda</h1>
                        <h2 className="intro-subtitle">
                            And I'm a <span className="highlight">Frontend Developer</span>
                        </h2>
                        <p className="intro-desc">
                            Passionate about creating beautiful, responsive websites and
                            exceptional user experiences. Specialized in modern web
                            technologies including React, Vue.js, and advanced CSS frameworks.
                        </p>

                        {/* Icônes réseaux */}
                        <div className="social-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaGithub /></a>
                        </div>

                        <button className="contact-btn">READ MORE</button>
                    </div>

                    {/* Image */}
                    <div className="home-image-wrapper">
                        <img src={cvSenda} alt="Senda" className="home-image" />
                    </div>
                </div>
            </section>
            {/* ---------------- Projects Section ---------------- */}
            <Projects />

            {/* ---------------- Badges/Certificats Section ---------------- */}
            <Badges />

            {/* ---------------- Contact Section ---------------- */}
            <section className="contact-section" style={{ padding: '4rem 2rem', backgroundColor: '#F9FAFB' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', color: '#1E40AF', marginBottom: '2rem' }}>Contactez-moi</h2>
                    <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="text" placeholder="Nom" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }} />
                        <input type="email" placeholder="Email" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }} />
                        <textarea placeholder="Message" rows="5" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}></textarea>
                        <button type="submit" style={{ backgroundColor: '#1E40AF', color: '#FFFFFF', padding: '0.8rem', border: 'none', borderRadius: '50px', fontWeight: '600', cursor: 'pointer' }}>
                            Envoyer
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
