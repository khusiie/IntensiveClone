import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: 'Curriculum', href: '#curriculum' },
        { label: 'Job Support', href: '#job-support' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Fee', href: '#pricing' },
        { label: 'FAQs', href: '#faq' }
    ];

    return (
        <>
            <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
                {/* Pink top accent line */}
                <div className="h-1 bg-[#ec4899]"></div>

                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="flex items-center justify-between h-24">

                        {/* Logo */}
                        <a href="#" className="flex items-center">
                            <img src="/src/assets/image.png" alt="NxtWave Intensive" className="h-14 object-contain" />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-[16px] font-semibold text-[#475569] hover:text-[#7c3aed] transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}

                            {/* Login Link */}
                            <a
                                href="#login"
                                className="text-[16px] font-bold text-[#7c3aed] hover:text-[#6d28d9] transition-colors flex items-center"
                            >
                                Login<span className="ml-1  text-xl">→</span>
                            </a>

                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-slate-600 p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Full Screen Dark */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] md:hidden">
                    {/* Dark Overlay Background */}
                    <div className="absolute inset-0 bg-[#1e3a5f] pt-4 px-8">

                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-white p-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Logo in mobile menu */}
                        <div className="pt-8 pb-12">
                            <div className="flex flex-col leading-none">
                                <span className="text-[#7c3aed] text-lg font-black tracking-wide">NXT</span>
                                <span className="text-white text-3xl font-black tracking-tight flex items-center">
                                    WAVE
                                    <span className="text-[10px] text-slate-400 ml-1 self-end mb-1">TM</span>
                                </span>
                            </div>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`text-xl font-bold transition-colors ${index === 0 ? 'text-[#7c3aed]' : 'text-white hover:text-[#7c3aed]'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#login"
                                className="text-xl font-bold text-[#7c3aed] flex items-center gap-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login <span className="font-black text-2xl">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
