import React from 'react';
import headerLogo from '../assets/media/headermedia/image.png';

const LearnerExperiences = () => {
    const experiences = [
        {
            name: "NxtWave Learner",
            role: "Software Engineer",
            title: "My Transformation with NxtWave",
            thumbnail: "https://img.youtube.com/vi/KGKJgq7sBfU/maxresdefault.jpg",
            videoUrl: "https://youtu.be/KGKJgq7sBfU"
        },
        {
            name: "NxtWave Learner",
            role: "Associate Engineer",
            title: "Achieving My Career Goals",
            thumbnail: "https://img.youtube.com/vi/m_LshX1kT_s/maxresdefault.jpg",
            videoUrl: "https://youtu.be/m_LshX1kT_s"
        },
        {
            name: "NxtWave Learner",
            role: "Full Stack Developer",
            title: "From Zero to Hero in Tech",
            thumbnail: "https://img.youtube.com/vi/ET9KDQo3BQ0/maxresdefault.jpg",
            videoUrl: "https://youtu.be/ET9KDQo3BQ0"
        }
    ];

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-large text-[#183b56] text-left mb-12">
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
                                        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                                            <img src={headerLogo} alt="Logo" className="h-12 w-12 object-contain" />
                                        </div>

                                    </div>
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
