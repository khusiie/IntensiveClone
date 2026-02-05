import React from 'react';

const CompanyLogosSlider = () => {
    const row1 = [
        { name: 'Cyient', url: 'https://assets.ccbp.in/frontend/react-js/companies-cyient-img.png' },
        { name: 'HCL', url: 'https://assets.ccbp.in/frontend/react-js/companies-hcl-img.png' },
        { name: 'Tata', url: 'https://assets.ccbp.in/frontend/react-js/companies-tata-img.png' },
        { name: 'Cognizant', url: 'https://assets.ccbp.in/frontend/react-js/companies-cognizant-img.png' },
        { name: 'CGI', url: 'https://assets.ccbp.in/frontend/react-js/companies-cgi-img.png' },
        { name: 'Merkle', url: 'https://assets.ccbp.in/frontend/react-js/companies-merkle-img.png' },
        { name: 'Mindtree', url: 'https://assets.ccbp.in/frontend/react-js/companies-mindtree-img.png' },
        { name: 'Delhivery', url: 'https://assets.ccbp.in/frontend/react-js/companies-delhivery-img.png' },
        { name: 'Needl.ai', url: 'https://assets.ccbp.in/frontend/react-js/companies-needl-ai-img.png' },
        { name: 'Fareportal', url: 'https://assets.ccbp.in/frontend/react-js/companies-fareportal-img.png' },
        { name: 'Prodept', url: 'https://assets.ccbp.in/frontend/react-js/companies-prodept-img.png' }
    ];

    const row2 = [
        { name: 'PwC', url: 'https://assets.ccbp.in/frontend/react-js/companies-pwc-img.png' },
        { name: 'Siply', url: 'https://assets.ccbp.in/frontend/react-js/companies-siply-img.png' },
        { name: 'Publicis Sapient', url: 'https://assets.ccbp.in/frontend/react-js/companies-publicis-sapient-img.png' },
        { name: 'Mentor Graphics', url: 'https://assets.ccbp.in/frontend/react-js/companies-mentor-graphics-img.png' },
        { name: 'Observe.ai', url: 'https://assets.ccbp.in/frontend/react-js/companies-observe-ai-img.png' },
        { name: 'Optum', url: 'https://assets.ccbp.in/frontend/react-js/companies-optum-img.png' },
        { name: 'Eurofins', url: 'https://assets.ccbp.in/frontend/react-js/companies-eurofins-img.png' },
        { name: 'Birlasoft', url: 'https://assets.ccbp.in/frontend/react-js/companies-birlasoft-img.png' },
        { name: 'Intellect', url: 'https://assets.ccbp.in/frontend/react-js/companies-intellect-img.png' },
        { name: 'Perficient', url: 'https://assets.ccbp.in/frontend/react-js/companies-perficient-img.png' },
        { name: 'Rakuten', url: 'https://assets.ccbp.in/frontend/react-js/companies-rakuten-img.png' }
    ];

    const row3 = [
        { name: 'Google', url: 'https://assets.ccbp.in/frontend/react-js/companies-google-img.png' },
        { name: 'Amazon', url: 'https://assets.ccbp.in/frontend/react-js/companies-amazon-img.png' },
        { name: 'Nvidia', url: 'https://assets.ccbp.in/frontend/react-js/companies-nvidia-img.png' },
        { name: 'Accenture', url: 'https://assets.ccbp.in/frontend/react-js/companies-accenture-img.png' },
        { name: 'Deloitte', url: 'https://assets.ccbp.in/frontend/react-js/companies-deloitte-img.png' },
        { name: 'Bosch', url: 'https://assets.ccbp.in/frontend/react-js/companies-bosch-img.png' },
        { name: 'Jio', url: 'https://assets.ccbp.in/frontend/react-js/companies-jio-img.png' },
        { name: 'TCS', url: 'https://assets.ccbp.in/frontend/react-js/companies-tcs-img.png' },
        { name: 'Tech Mahindra', url: 'https://assets.ccbp.in/frontend/react-js/companies-tech-mahindra-img.png' },
        { name: 'Goldman Sachs', url: 'https://assets.ccbp.in/frontend/react-js/companies-goldman-sachs-img.png' },
        { name: 'Oracle', url: 'https://assets.ccbp.in/frontend/react-js/companies-oracle-img.png' },
        { name: 'Samsung', url: 'https://assets.ccbp.in/frontend/react-js/companies-samsung-img.png' },
        { name: 'Infosys', url: 'https://assets.ccbp.in/frontend/react-js/companies-infosys-img.png' }
    ];

    const MarqueeRow = ({ items, reverse = false, speed = "40s" }) => (
        <div className="flex w-full overflow-hidden group py-4">
            <div
                className={`flex gap-12 w-max items-center animate-scroll ${reverse ? 'flex-row-reverse' : ''}`}
                style={{ animationDuration: speed }}
            >
                {/* Quadruple items to ensure wide screens don't see gaps */}
                {[...items, ...items, ...items, ...items].map((logo, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
                    >
                        <img
                            src={logo.url}
                            alt={logo.name}
                            className="h-8 md:h-12 w-auto object-contain"
                            onError={(e) => {
                                e.target.closest('.flex-shrink-0').innerHTML = `<span class="text-lg font-bold text-slate-400 opacity-50 whitespace-nowrap">${logo.name}</span>`
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-white overflow-hidden" id="partners">
            <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#183b56] mb-4 relative inline-block">
                    2000+ Companies
                    <div className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-[#7c3aed] rounded-full opacity-60"></div>
                </h2>
                <p className="text-xl md:text-3xl font-extrabold text-[#183b56]">Hired NxtWave Learners</p>
            </div>

            <div className="relative space-y-4 md:space-y-8">
                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <MarqueeRow items={row1} speed="60s" />
                <MarqueeRow items={row2} reverse speed="70s" />
                <MarqueeRow items={row3} speed="80s" />
            </div>

            <div className="flex flex-col items-center mt-20 gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse"></div>
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Batch starts today</span>
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
