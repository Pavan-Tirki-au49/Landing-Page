import React from 'react';
import { Play, Info } from 'lucide-react';
import { HERO_CONTENT } from '../data/mockData';
import '../App.css';

const Hero = () => {
    return (
        <div
            className="hero"
            style={{ backgroundImage: `url(${HERO_CONTENT.image})` }}
        >
            <div className="hero-content">
                <h1 className="hero-title">{HERO_CONTENT.title}</h1>

                <div className="hero-meta">
                    <span className="rating-badge">HD</span>
                    <span>{HERO_CONTENT.year}</span>
                    <span>{HERO_CONTENT.rating} Rating</span>
                    <span>{HERO_CONTENT.duration}</span>
                </div>

                <p className="hero-desc">
                    {HERO_CONTENT.description}
                </p>

                <div className="hero-actions">
                    <button className="btn btn-primary">
                        <Play fill="black" size={24} /> Play
                    </button>
                    <button className="btn btn-secondary">
                        <Info size={24} /> More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
