import React from 'react';

const MediaSection = () => {
    const mediaArticles = [
        {
            publisherLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/India_Today_logo.svg",
            date: "08 Oct 2024",
            image: "https://assets.ccbp.in/frontend/react-js/nxt-wave-media-1-img.png", // Attempting to guess CCBP asset URL
            title: "Over 2000 Companies Hire NxtWave Learners, Addressing the Talent...",
            link: "https://www.indiatoday.in/pr-newswire?rkey=20241008EN25620&filter=4315"
        },
        {
            publisherLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Hindustan_Times_logo.svg",
            date: "04 Sep 2024",
            image: "https://assets.ccbp.in/frontend/react-js/nxt-wave-media-2-img.png",
            title: "NxtWave and NSDC launch SkillUp India 4.0, aims to empower over...",
            link: "https://www.hindustantimes.com/education/news/nxtwave-and-nsdc-launch-skillup-india-4-0-aims-to-empower-over-30-lakh-students-101725365770655-amp.html"
        },
        {
            publisherLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
            date: "03 Sep 2024",
            image: "https://assets.ccbp.in/frontend/react-js/nxt-wave-media-3-img.png",
            title: "NSDC, NxtWave join hands to upskill 3 million students",
            link: "https://www.cnbctv18.com/education/nsdc-nxtwave-mou-skill-india-mission-ai-ml-workshops-3-million-students-19470158.htm"
        }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#183b56] mb-12">NxtWave in the media</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaArticles.map((article, index) => (
                        <div key={index} className="flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="p-6 flex justify-between items-center bg-white border-b border-slate-50">
                                <img src={article.publisherLogo} alt="Publisher" className="h-6 object-contain opacity-80" />
                                <span className="text-slate-400 text-xs font-medium">{article.date}</span>
                            </div>
                            <div className="relative aspect-video overflow-hidden group">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.src = "https://placehold.co/600x400/5046e5/ffffff?text=NxtWave+Media";
                                    }}
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-[#183b56] leading-snug mb-8 flex-1">
                                    {article.title}
                                </h3>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary font-bold text-sm group"
                                >
                                    Read Article
                                    <svg
                                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel indicators (Simplified for static clone) */}
                <div className="flex justify-center items-center gap-2 mt-12">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-slate-600 w-4' : 'bg-slate-300'}`}></div>
                        ))}
                    </div>
                    <button className="text-slate-400 hover:text-primary transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MediaSection;
