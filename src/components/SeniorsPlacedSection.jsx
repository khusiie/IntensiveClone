import React, { useState } from 'react';

const SeniorsPlacedSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        'All',
        'Non IT Branch to IT Job',
        'Non-Engineering Degree',
        'Career Gap',
        'Got Into Top MNCs',
        'Non IT job to IT job'
    ];

    const testimonials = [
        {
            name: 'Bairy Vishnu Vardhan',
            date: "Placed in Oct'26",
            company: 'LTI Mindtree',
            logo: 'https://assets.ccbp.in/frontend/react-js/companies-mindtree-img.png',
            avatar: 'https://assets.ccbp.in/frontend/react-js/professionals-3-img.png',
            text: "Thrilled to share that I've started my career as a Graduate Engineer Trainee at LTI Mindtree! Grateful to NxtWave for the mentorship, mock interviews, and guidance that made this possible.",
            linkedIn: true
        },
        {
            name: 'Kulkarni Rohith Kumar',
            date: "Placed in Jan'26",
            logo: 'https://assets.ccbp.in/frontend/react-js/companies-accenture-img.png',
            avatar: 'https://assets.ccbp.in/frontend/react-js/professionals-4-img.png',
            text: "I didn't expect to move into tech after so long, but here I am. Learning through NxtWave made this transition feel possible.",
            linkedIn: true
        },
        {
            name: 'Sai Ram Polisetty',
            date: "Placed in Jan'26",
            logo: 'https://assets.ccbp.in/frontend/react-js/companies-accenture-img.png',
            avatar: 'https://assets.ccbp.in/frontend/react-js/professionals-2-img.png',
            text: "I focused on building real skills instead of worrying about outcomes. Getting selected through NxtWave feels like a strong start for me.",
            linkedIn: true
        }
    ];

    return (
        <section className="py-24 bg-[#f8fbff]" id="seniors-placed">
            <div className="max-w-[1300px] mx-auto px-6">

                {/* Heading Area */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-[52px] font-black text-[#183b56] leading-tight inline-block relative">
                        Your Seniors Got Placed. It's <span className="relative inline-block">
                            Your Turn Now!
                            <div className="absolute -bottom-1.5 left-0 w-full h-[3.5px] bg-[#7c3aed] rounded-full opacity-60"></div>
                        </span>
                    </h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-20 px-4">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full text-[13.5px] font-bold transition-all border ${activeFilter === filter
                                    ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-md'
                                    : 'bg-white text-slate-500 border-slate-300 hover:border-[#2563eb]'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((test, i) => (
                        <div key={i} className="bg-white rounded-[20px] p-8 border border-slate-50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col h-full hover:shadow-lg transition-all duration-300">
                            {/* Card Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-50">
                                        <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-[17px] font-black text-[#183b56] leading-none mb-2">{test.name}</h4>
                                        <p className="text-[13px] font-bold text-slate-400">{test.date}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-3">
                                    <img src={test.logo} alt="Company" className="h-6 object-contain opacity-70" />
                                    <a href="#" className="text-[#0077b5] opacity-90 hover:opacity-100 transition-opacity">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Quote Body */}
                            <div className="relative flex-grow bg-slate-50/50 rounded-2xl p-8 mb-4">
                                <span className="absolute top-4 left-4 text-[60px] text-slate-200 font-serif leading-none">“</span>
                                <p className="text-[15.5px] font-bold text-slate-600 leading-relaxed text-center relative z-10">
                                    {test.text}
                                </p>
                                <span className="absolute bottom-4 right-4 text-[60px] text-slate-200 font-serif leading-none transform rotate-180">“</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center gap-8 mb-16">
                    <button className="text-slate-400 hover:text-[#7c3aed] transition-colors">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="text-slate-400 hover:text-[#7c3aed] transition-colors">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

                {/* Footer CTA Area */}
                <div className="flex flex-col items-center gap-10">
                    <div className="flex items-center gap-2.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] animate-pulse"></div>
                        <span className="text-[13px] font-black text-slate-400 uppercase tracking-widest">Batch starts today</span>
                    </div>

                    <div className="flex items-center gap-10">
                        <button className="bg-[#7c3aed] text-white px-16 py-4 rounded-2xl font-black text-lg shadow-[0_15px_35px_-10px_rgba(124,58,237,0.5)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                            Enroll Now
                        </button>
                        <a href="#" className="text-[#2563eb] font-black text-lg hover:underline transition-all">
                            View All Reviews
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SeniorsPlacedSection;
