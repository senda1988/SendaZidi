import React from 'react';
import '../style/home.css';
import AccountMenu from '../components/AccountMenu';
import cvSenda from '../images/cvSenda.png';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import Projects from '../components/Projects';
import Badges from '../components/Badges';
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from '../components/Footer';


export default function Home() {
    return (
        <>


            <AccountMenu />

            {/* Main Section */}

            <section className="home-section">
                <div className="home-container">

                    <div className="home-text">
                        <p className="intro-small">Hallo, ich bin</p>
                        <h1 className="intro-title">Senda Zidi</h1>
                        <h2 className="intro-subtitle">
                            <span style={{ color: '#fff', fontWeight: '200' }} >Und ich bin</span> <span className="highlight">junior Cloud engineer</span>
                        </h2>
                        <p className="intro-desc">
                            I support the design and automation of cloud infrastructures and CI/CD pipelines to deliver efficient, scalable, and reliable applications.
                        </p>

                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/senda-zidi-71ba1223/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon sx={{ fontSize: 40 }} />
                            </a>
                            <a href="https://github.com/senda1988" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon sx={{ fontSize: 40 }} />
                            </a>
                            <a href="mailto:zidi.senda@gmail.com" target="_blank" rel="noopener noreferrer">
                                <EmailIcon sx={{ fontSize: 40 }} />
                            </a>
                        </div>

                        <a href="/cv.pdf" download="../data/Mon_CV.pdf" className="contact-btn">
                            CV Download
                        </a>
                    </div>

                    <div className="home-image-wrapper">
                        <div className="circle-frame">
                            <img src={cvSenda} alt="Senda" className="home-image" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>
            {/* Badges */}
            <section id="badges" className="badges-section">

                <Badges />
            </section>
            <div className="section-divider"></div>
            {/* Projects Section */}
            <section id="projects" className="projects-section">
                <div className='projects-container'>
                    <h2 class="section-title">Projects</h2>
                    <Projects />
                </div>
            </section>




            {/* Skills */}
            <section id="skills" className="skills-section">
                <h2 class="section-title">Kenntnisse</h2>
                <Skills />
            </section>


            <div className="section-divider"></div>



            <div className="section-divider"></div>

            {/* Contact */}
            <section id="contact" className="contact-section">
                <h2 class="section-title">Kontakt</h2>
                <Contact />
            </section>

            <Footer />
        </>
    );
}
