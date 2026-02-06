import React from 'react';
import bigLogoImg from '../assets/biglogo/image.png';

const MarqueeRow = ({ reverse = false, speed = "50s" }) => (
    <div className="flex w-full overflow-hidden py-2">
        <div
            className={`flex w-max items-center animate-scroll ${reverse ? 'flex-row-reverse' : ''}`}
            style={{ animationDuration: speed }}
        >
            {/* The composite image contains multiple logos. We only need two copies for a seamless infinite scroll. */}
            <img
                src={bigLogoImg}
                alt="Partner Companies"
                className="h-12 md:h-16 w-auto object-contain opacity-90 px-8 flex-shrink-0"
            />
            <img
                src={bigLogoImg}
                alt="Partner Companies"
                className="h-12 md:h-16 w-auto object-contain opacity-90 px-8 flex-shrink-0"
            />
        </div>
    </div>
);

const CompanyLogosSlider = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="partners">
            <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#183b56] mb-4 relative inline-block tracking-wide">
                    2000+ Companies
                    <div className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-[#7c3aed] rounded-full opacity-60"></div>
                </h2>
                <p className="text-xl md:text-5xl font-bold text-[#183b56] tracking-wide">Hired NxtWave Learners</p>
            </div>

            <div className="relative space-y-4 md:space-y-8">
                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <MarqueeRow speed="60s" />
                <MarqueeRow reverse speed="70s" />
                <MarqueeRow speed="80s" />
            </div>

            <div className="flex flex-col items-center mt-20 gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse"></div>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                        Next batch starts on Feb 9th</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6">
                    <button className="bg-[#7c3aed] text-white px-10 py-3.5 rounded-xl font-bold text-base shadow-[0_8px_20px_-5px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                        Book a Free Demo
                    </button>
                    <button className="text-[#183b56] font-bold text-base hover:text-blue-600 transition-colors flex items-center gap-2">
                        View All Companies
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll linear infinite;
                }
                .flex-row-reverse.animate-scroll {
                    animation-direction: reverse;
                }
            `}} />
        </section>
    );
};

export default CompanyLogosSlider;  