import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`relative w-full z-[1000] transition-all duration-300 ${scrolled ? 'py-4 bg-white border-b border-slate-200 shadow-sm' : 'py-6'}`}>
            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-wave-logo-img.png"
                        alt="NxtWave Logo"
                        className="h-8 md:h-10 object-contain"
                    />
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <a href="#hero" className="text-slate-600 hover:text-primary font-medium transition-colors">Home</a>
                    <a href="#curriculum" className="text-slate-600 hover:text-primary font-medium transition-colors">Curriculum</a>
                    <a href="#placements" className="text-slate-600 hover:text-primary font-medium transition-colors">Placements</a>
                    <a href="#reviews" className="text-slate-600 hover:text-primary font-medium transition-colors">Reviews</a>
                    <button className="btn-primary text-sm px-6 py-2.5">Book a Free Demo</button>
                </div>
                {/* Mobile menu button could go here */}
            </div>
        </nav>
    );
};

export default Navbar;
