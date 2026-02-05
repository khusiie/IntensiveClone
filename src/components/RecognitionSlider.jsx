import React, { useState, useEffect } from 'react';

const RecognitionSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const slides = [
        {
            bgColor: 'bg-[#183b56]',
            content: (
                <div className="flex flex-col md:flex-row items-center w-full h-full overflow-hidden">
                    <div className="flex-1 p-6 md:p-10 text-white">
                        <p className="text-lg md:text-xl font-medium leading-tight mb-2">
                            We are honored to be a
                        </p>
                        <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                            2024 Technology Pioneer
                        </h3>
                        <p className="text-base opacity-80 font-medium">#techpioneers24</p>
                    </div>
                    <div className="flex-1 h-full bg-[#0f1b2d] flex items-center justify-center p-6 border-l border-white/5">
                        <div className="relative border-[3px] border-yellow-500 p-5 md:p-8 rounded-xl bg-black shadow-2xl scale-90 md:scale-100">
                            <div className="flex flex-col items-center">
                                <span className="text-[8px] uppercase tracking-[0.2em] text-[#A5A1F7] mb-3 font-bold">World Economic Forum</span>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-white text-xs font-bold opacity-80 uppercase">Only</span>
                                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">100</span>
                                </div>
                                <span className="text-[9px] text-white/60 font-medium uppercase tracking-wider">startups chosen across the world</span>
                            </div>
                            <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-500/20 blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-12 h-12 bg-yellow-500/20 blur-2xl"></div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            bgColor: 'bg-[#1a365d]',
            content: (
                <div className="flex flex-col md:flex-row items-center w-full h-full p-6 md:p-10 gap-6 md:gap-10 relative overflow-hidden">
                    <div className="flex-1 text-white z-10">
                        <h3 className="text-xl md:text-3xl font-bold leading-snug">
                            Founders <span className="text-yellow-400">Mr. Anupam Pedarla</span> and <span className="text-yellow-400">Mr. Sashank Gujjula</span> made it to the prestigious <span className="text-yellow-400">2024 Forbes India 30 Under 30 list!</span>
                        </h3>
                    </div>
                    <div className="flex-1 relative z-10 scale-90 md:scale-100">
                        <div className="relative border-[5px] border-[#fbbf24] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] max-w-[320px] mx-auto">
                            <img
                                src="https://assets.ccbp.in/frontend/react-js/nxt-wave-founders-forbes-img.png"
                                alt="Founders"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Logo */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center text-white p-4">
                                <div className="absolute top-3 left-0 right-0 flex flex-col items-center">
                                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] mb-1 opacity-90">Featured on</p>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Forbes_logo.svg" className="h-4 filter brightness-0 invert" alt="Forbes" />
                                </div>
                                <div className="mt-6">
                                    <p className="text-5xl font-black italic tracking-tighter leading-none">30</p>
                                    <p className="text-3xl font-black italic tracking-tighter leading-none ml-5">Under 30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-400 opacity-5 blur-[120px] rounded-full"></div>
                </div>
            )
        },
        {
            bgColor: 'bg-[#2d2d6d]',
            content: (
                <div className="flex flex-col md:flex-row items-center justify-around w-full h-full p-8 gap-8">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="relative group/trophy cursor-default">
                            <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover/trophy:scale-110">
                                <img src="https://img.icons8.com/isometric/100/trophy.png" className="w-16" alt="Trophy" />
                            </div>
                            <div className="absolute -inset-4 bg-yellow-400/20 blur-2xl rounded-full opacity-0 group-hover/trophy:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="text-white space-y-1">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-300 font-bold">Recognized as</p>
                            <h4 className="font-extrabold text-xl leading-tight">Best Tech Skilling<br />EdTech Company</h4>
                            <p className="text-[10px] text-indigo-200 opacity-60">by Times Business Awards in 2022</p>
                        </div>
                    </div>

                    <div className="h-32 w-[1px] bg-white/10 hidden md:block"></div>

                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="relative group/award cursor-default">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover/award:scale-110">
                                <img src="https://img.icons8.com/isometric/100/medal.png" className="w-16" alt="Medal" />
                            </div>
                            <div className="absolute -inset-4 bg-blue-400/20 blur-2xl rounded-full opacity-0 group-hover/award:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="text-white space-y-1">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-300 font-bold">Recognized as</p>
                            <h4 className="font-extrabold text-xl leading-tight">Trusted Education<br />Brand</h4>
                            <p className="text-[10px] text-indigo-200 opacity-60">by Prime Insights</p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const slideWidth = viewportWidth < 768 ? viewportWidth - 40 : 900;
    const gap = 24;
    const offset = (viewportWidth / 2) - (currentSlide * (slideWidth + gap)) - (slideWidth / 2);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="py-20 bg-[#f8fafc] overflow-hidden">
            <div className="relative w-full">
                <div
                    className="flex transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
                    style={{ transform: `translateX(${offset}px)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`rounded-[32px] overflow-hidden flex-shrink-0 transition-all duration-700 ${index === currentSlide ? 'scale-100 opacity-100 shadow-2xl' : 'scale-[0.88] opacity-30 blur-[2px]'}`}
                            style={{
                                width: `${slideWidth}px`,
                                height: viewportWidth < 768 ? '320px' : '380px',
                                marginRight: `${gap}px`
                            }}
                        >
                            <div className={`w-full h-full ${slide.bgColor}`}>
                                {slide.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center mt-12 gap-10">
                    <div className="flex items-center gap-8">
                        <button
                            onClick={prevSlide}
                            className="text-slate-400 hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-sm"
                        >
                            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>

                        <div className="flex items-center gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`transition-all duration-300 ${currentSlide === index ? 'w-10 h-1.5 bg-blue-600 rounded-full' : 'w-2 h-2 bg-slate-200 rounded-full'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="text-slate-400 hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-sm"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Batch starts today</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-[#7c3aed] text-white px-12 py-4 rounded-2xl font-black text-lg shadow-[0_15px_30px_-5px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                                Enroll Now
                            </button>
                            <button className="border-2 border-slate-200 text-slate-800 px-10 py-4 rounded-2xl font-black text-lg hover:bg-white hover:border-slate-300 transition-all transform hover:-translate-y-1 shadow-sm">
                                Book a Free Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecognitionSlider;
