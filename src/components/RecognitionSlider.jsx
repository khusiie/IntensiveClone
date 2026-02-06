import React, { useState, useEffect } from 'react';
import econImg1 from '../assets/Economic/image.png';
import econImg2 from '../assets/Economic/image copy.png';
import econImg3 from '../assets/Economic/image copy 2.png';
import econImg4 from '../assets/Economic/image copy 3.png';

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
            bgColor: 'bg-[#1a365d]',
            content: (
                <div className="flex flex-col md:flex-row items-center w-full h-full p-8 md:p-12 gap-8 md:gap-12 relative overflow-hidden group">
                    <div className="flex-[1.2] text-white z-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold leading-tight uppercase tracking-tight">
                            <span className="text-[#fbbf24]">World Economic Forum</span> recognized <span className="text-[#fbbf24]">NxtWave</span> as <span className="text-[#fbbf24]">"Technology Pioneer 2024"</span>
                        </h2>
                    </div>
                    <div className="flex-1 relative z-10 flex justify-center">
                        <div className="p-1 px-1.5 border-[6px] border-[#fbbf24] rounded-2xl bg-[#fbbf24] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                            <div className="rounded-xl overflow-hidden aspect-[2/1.1] w-full min-w-[320px] max-w-[450px]">
                                <img
                                    src={econImg1}
                                    alt="World Economic Forum"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            bgColor: 'bg-[#1a365d]',
            content: (
                <div className="flex flex-col md:flex-row items-center w-full h-full p-8 md:p-12 gap-8 md:gap-12 relative overflow-hidden group">
                    <div className="flex-[1.2] text-white z-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed uppercase tracking-tight">
                            Founders <span className="text-[#fbbf24]">Mr. Anupam Pedarla</span> and <span className="text-[#fbbf24]">Mr. Sashank Gujjula</span> made it to the <span className="text-[#fbbf24]">prestigious 2024 Forbes India 30 Under 30 list!</span>
                        </h2>
                    </div>
                    <div className="flex-1 relative z-10 flex justify-center">
                        <div className="p-1 px-1.5 border-[6px] border-[#fbbf24] rounded-2xl bg-[#fbbf24] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transform -rotate-2 group-hover:rotate-0 transition-all duration-500">
                            <div className="rounded-xl overflow-hidden aspect-[2/1.3] w-full min-w-[320px] max-w-[450px]">
                                <img
                                    src={econImg2}
                                    alt="Forbes 30 Under 30"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            bgColor: 'bg-[#1a365d]',
            content: (
                <div className="flex flex-col md:flex-row items-center w-full h-full p-8 md:p-12 gap-8 md:gap-12 relative overflow-hidden group">
                    <div className="flex-[1.2] text-white z-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold leading-tight uppercase tracking-tight">
                            Recognized for <span className="text-[#fbbf24]">Innovation</span> and <span className="text-[#fbbf24]">Impact</span> in Tech Education
                        </h2>
                    </div>
                    <div className="flex-1 relative z-10 flex justify-center gap-6">
                        <div className="p-1 border-[5px] border-[#fbbf24] rounded-2xl bg-[#fbbf24] shadow-2xl w-1/2 rotate-3 group-hover:rotate-0 transition-all duration-500">
                            <img src={econImg3} alt="Award 1" className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="p-1 border-[5px] border-[#fbbf24] rounded-2xl bg-[#fbbf24] shadow-2xl w-1/2 -rotate-3 group-hover:rotate-0 transition-all duration-500">
                            <img src={econImg4} alt="Award 2" className="w-full h-full object-cover rounded-xl" />
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
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Next batch starts on Feb 9th</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-[#7c3aed] text-white px-12 py-4 rounded-2xl font-black text-lg shadow-[0_15px_30px_-5px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
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
