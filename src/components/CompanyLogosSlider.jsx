import React from 'react';
import bigLogo1 from '../assets/biglogo/image.png';
import bigLogo2 from '../assets/biglogo/image copy.png';
import bigLogo3 from '../assets/biglogo/image copy 2.png';

const MarqueeRow = ({ image, reverse = false, speed = "40s" }) => (
    <div className="flex w-full overflow-hidden py-0">
        <div
            className={`flex py-4 items-center animate-scroll shrink-0 min-w-full whitespace-nowrap ${reverse ? 'flex-row-reverse' : ''}`}
            style={{ animationDuration: speed }}
        >
            {/* Using two copies and padding instead of gap for a perfectly seamless 50% translation loop */}
            <img
                src={image}
                alt="Partner Companies"
                className="object-cover h-10 w-auto opacity-100 flex-shrink-0 pr-6"
            />
            <img
                src={image}
                alt="Partner Companies"
                className="object-cover h-10 w-auto opacity-100 flex-shrink-0 pr-6"
            />
        </div>
    </div>
);

const CompanyLogosSlider = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="partners">
            <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
                <div className="inline-block relative">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#183b56] tracking-wide">
                        2000+ Companies
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#7c3aed] rounded-full opacity-60"></div>
                </div>
                <h3 className="text-2xl md:text-5xl font-bold text-[#183b56] tracking-wide mt-6">
                    Hired NxtWave Learners
                </h3>
            </div>

            <div className="relative">
                {/* Gradient Fades for a seamless look */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Using negative margins to force rows even closer together */}
                <div className="relative">
                    <MarqueeRow image={bigLogo1} speed="40s" />
                    <div className="-mt-2 md:-mt-4">
                        <MarqueeRow image={bigLogo2} speed="40s" />
                    </div>
                    <div className="-mt-2 md:-mt-4">
                        <MarqueeRow image={bigLogo3} speed="40s" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mt-20 gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse"></div>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                        Next batch starts on Feb 9th
                    </span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6">
                    <button className="bg-[#7c3aed] text-white px-10 py-3.5 rounded-xl font-bold text-base shadow-[0_8px_20px_-5px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                        Book a Free Demo
                    </button>
                    <button className="text-[#183b56] font-bold text-base hover:text-blue-600 transition-colors flex items-center gap-2">
                        View All Companies
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
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
