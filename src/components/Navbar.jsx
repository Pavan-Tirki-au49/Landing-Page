import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';
import '../App.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">STREAMFLIX</div>

            <ul className="nav-links">
                <li className="active">Home</li>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>Sports</li>
                <li>Kids</li>
            </ul>

            <div className="nav-right">
                <Search className="icon-btn" size={20} />
                <Bell className="icon-btn" size={20} />

                <div className="avatar">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User" />
                </div>

                <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="mobile-menu">
                    <a href="#">Home</a>
                    <a href="#">Movies</a>
                    <a href="#">TV Shows</a>
                    <a href="#">Sports</a>
                    <a href="#">Kids</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
