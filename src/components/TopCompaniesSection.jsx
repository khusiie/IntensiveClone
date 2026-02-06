import React, { useState } from 'react';

const TopCompaniesSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            thumbnail: "https://i.ytimg.com/vi/-U_YQ3W50nE/maxresdefault.jpg",
            title: "NxtWave Hire: Transfor...",
            speaker: "Sriram Natarajan",
            role: "Chief Executive Officer",
            company: "Kloudworx",
            highlight: "A GAME CHANGER IN RECRUITMENT",
            youtubeId: "-U_YQ3W50nE"
        },
        {
            id: 2,
            thumbnail: "https://i.ytimg.com/vi_webp/91mJXAKrji0/sddefault.webp",
            title: "NxtWave Hire - We'll con...",
            speaker: "Gopal Parvathaneni",
            role: "Chairman and CEO",
            company: "EPSoft",
            highlight: "Our Hiring Game. Evolved",
            youtubeId: "Y9aGu-fp1JA"
        },
        {
            id: 3,
            thumbnail: "https://i.ytimg.com/vi_webp/66ZBOqaHyho/sddefault.webp",
            title: "NxtWave Hire - One Stop...",
            speaker: "Shilpa Chowdri",
            role: "HR Director",
            company: "Multiple Companies",
            highlight: "HIRING EXCEPTIONAL TALENT THROUGHOUT THE YEAR!",
            youtubeId: "66ZBOqaHyho"
        },
        {
            id: 4,
            thumbnail: "https://i.ytimg.com/vi/X4YpCUk5FeQ/sddefault.jpg",
            title: "Trained & Aligned with Industry",
            speaker: "Recruiter Feedback",
            role: "Director - Talent Acquisition",
            company: "Tech Mahindra",
            highlight: "Industry Ready Talent",
            youtubeId: "X4YpCUk5FeQ"
        },
        {
            id: 5,
            thumbnail: "https://i.ytimg.com/vi/kSKFhkfq5hg/maxresdefault.jpg",
            title: "NxtWave Hire - Recruiting...",
            speaker: "Industry Experts",
            role: "Talent Acquisition",
            company: "Top Tech MNCs",
            highlight: "Quality Candidates at Scale",
            youtubeId: "kSKFhkfq5hg"
        }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-[#fafbfc] overflow-hidden" id="companies">
            <div className="max-w-[1800px] mx-auto px-6">

                {/* Top Section: Heading & Main Video */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#183b56] leading-tight mb-6">
                            Why <span className='text-blue-600'> Top Companies </span><span className="text-[#183b56]">Prefer </span>
                            <span className="text-blue-600">NxtWave Students</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg mb-8">
                            NxtWave students carved a name for themselves in the IT industry. Hear it directly from the CEOs, CXOs and HRs of tech companies.
                        </p>
                    </div>

                    <div className="relative group cursor-pointer">
                        <div className="relative rounded-[24px] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://i.ytimg.com/vi_webp/-U_YQ3W50nE/maxresdefault.webp"
                                alt="NxtWave Milestone"
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => { e.target.src = 'https://i.ytimg.com/vi/-U_YQ3W50nE/maxresdefault.jpg' }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                                    <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </div>
                            {/* Card Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <div className="flex items-center gap-3 mb-2">
                                    <img src="https://assets.ccbp.in/frontend/react-js/nxtwave-logo-white-img.png" alt="NxtWave" className="h-6" />
                                    <p className="text-sm font-bold opacity-90">NxtWave Celebrates a Major Milestone | 2000+ Co...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Video Carousel */}
                <div className="relative px-12">
                    <div className="flex transition-transform duration-500 ease-out gap-6 overflow-hidden">
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-slate-100 group cursor-pointer h-full">
                                    <div className="relative aspect-video">
                                        <img src={item.thumbnail} alt={item.speaker} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110">
                                                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.company}</p>
                                        <h4 className="text-sm font-black text-[#183b56] leading-tight mb-2 line-clamp-1">{item.title}</h4>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#183b56]">{item.speaker}</p>
                                                <p className="text-[10px] text-slate-500">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all z-10"
                    >
                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

                {/* Footer Component */}
                <div className="flex flex-col items-center mt-20 gap-10">
                    <div className="flex flex-col items-center gap-8 w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse"></div>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Next batch starts on Feb 9th</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-[#7c3aed] text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-[0_15px_30px_-5px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                                Book a Free Demo
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TopCompaniesSection;
