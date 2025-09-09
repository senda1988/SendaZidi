import React, { useState, useEffect } from 'react';
import '../style/Typewriter.css'; // Ajoute ce fichier CSS (on le crée juste après)

export default function Typewriter({ text = '', speed = 100 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!text || index >= text.length) return;

        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            setIndex((prevIndex) => prevIndex + 1);
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, text, speed]);

    return (
        <span>
            {displayedText}
            <span className="blinking-cursor">|</span>
        </span>
    );
}
