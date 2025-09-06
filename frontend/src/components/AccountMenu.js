import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import '../style/menu.css';

export default function AccountMenu() {
    return (
        <div className="menu-container">
            <Link to="/" className="menu-link">Home</Link>
            <HashLink smooth to="/#projects" className="menu-link">Projekte</HashLink>
            <HashLink smooth to="/#badges" className="menu-link">Zertificate</HashLink>
            <HashLink smooth to="/#skills" className="menu-link">kenntnisse</HashLink>
            <HashLink smooth to="/#contact" className="menu-link">Kontakt</HashLink>
        </div>
    );
}
