import React from 'react';

const LearnerExperiences = () => {
    const experiences = [
        {
            name: "Vijaya Lakshmi Agrahapu",
            role: "Associate Engineer",
            title: "Living My Dream Mome...",
            thumbnail: "https://img.youtube.com/vi/fpPwEFB86d4/maxresdefault.jpg", // Simplified thumb
            videoUrl: "https://www.youtube.com/watch?v=fpPwEFB86d4"
        },
        {
            name: "Leela Prasanthi Karri",
            role: "Associate Engineer",
            title: "NxtWave Helped Me to...",
            thumbnail: "https://img.youtube.com/vi/8fFk1c7iT2k/maxresdefault.jpg",
            videoUrl: "https://www.youtube.com/watch?v=8fFk1c7iT2k"
        },
        {
            name: "Rahul S.",
            role: "Full Stack Developer",
            title: "NxtWave's Guidance Le...",
            thumbnail: "https://img.youtube.com/vi/fpPwEFB86d4/maxresdefault.jpg", // Mocking another thumb
            videoUrl: "https://www.youtube.com/watch?v=fpPwEFB86d4"
        }
    ];

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#183b56] text-center mb-12">
                    Hear NxtWave learners' experiences
                </h2>

                <div className="relative group">
                    {/* Navigation Arrows */}
                    <button className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-400 hover:text-primary transition-colors">
                        <svg className="w-8 h-8 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-400 hover:text-primary transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="relative group/video cursor-pointer">
                                    <img
                                        src={exp.thumbnail}
                                        alt={exp.name}
                                        className="w-full aspect-video object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover/video:bg-black/40 transition-colors">
                                        <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover/video:bg-red-700 transition-colors">
                                            <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Overlay titles to match screenshot */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                                        <div className="bg-white/90 backdrop-blur rounded p-1">
                                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-wave-logo-img.png" alt="Logo" className="h-4" />
                                        </div>
                                        <div className="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-slate-800">
                                            {exp.title}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-[#183b56]">{exp.name}</h3>
                                    <p className="text-sm text-slate-500">{exp.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnerExperiences;
