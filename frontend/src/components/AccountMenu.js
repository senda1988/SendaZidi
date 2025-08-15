import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style/menu.css';

export default function AccountMenu() {
    return (
        <div className="menu-container">
            <Link to="/" className="menu-link">Home</Link>
            <Link to="/about" className="menu-link">About</Link>
            <Link to="/certifications" className="menu-link">Certifications</Link>
            <Link to="/contact" className="menu-link">Contact</Link>
        </div>
    );
}
