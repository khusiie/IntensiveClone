import React from 'react';

const TrainersAlumniSection = () => {
    const logos = [
        { name: 'Stanford University', url: 'https://assets.ccbp.in/frontend/react-js/trainers-stanford-img.png' },
        { name: 'Google', url: 'https://assets.ccbp.in/frontend/react-js/companies-google-img.png' },
        { name: 'IIT Bombay', url: 'https://assets.ccbp.in/frontend/react-js/trainers-iit-bombay-img.png' },
        { name: 'amazon', url: 'https://assets.ccbp.in/frontend/react-js/professionals-amazon-img.png' },
        { name: 'IIT Delhi', url: 'https://assets.ccbp.in/frontend/react-js/trainers-iit-delhi-img.png' },
        { name: 'Microsoft', url: 'https://assets.ccbp.in/frontend/react-js/companies-microsoft-img.png' }
    ];

    return (
        <section className="py-20 bg-[#f8fbff]" id="trainers-alumni">
            <div className="max-w-[1100px] mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-black text-[#183b56] mb-14">
                    Your <span className="relative inline-block">
                        Trainers
                        <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#7c3aed] rounded-full opacity-60"></div>
                    </span> are Alumni of
                </h2>

                {/* Logos Row */}
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 mb-6">
                    {logos.map((logo, i) => (
                        <div key={i} className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer">
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-8 md:h-10 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden text-sm font-black text-slate-400">{logo.name}</span>
                        </div>
                    ))}
                </div>

                {/* Subtitle */}
                <p className="text-[13px] text-slate-400 font-bold tracking-wide">and many more...</p>

            </div>
        </section>
    );
};

export default TrainersAlumniSection;
