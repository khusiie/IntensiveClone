import React from 'react';
import clockIcon from '../assets/Third/image.png';
import computerIcon from '../assets/Third/image copy.png';
import booksIcon from '../assets/Third/image copy 2.png';
import scrollIcon from '../assets/Third/image copy 3.png';

const CareerSteps = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="roadmap">
            <div className="max-w-[1300px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-16 relative">

                    {/* Left Sticky Column */}
                    <div className="lg:sticky lg:top-32 h-fit space-y-10">
                        <div>
                            <h2 className="text-4xl md:text-[54px] font-black text-[#183b56] leading-[1.1] mb-12">
                                Get Ready for Your <br />
                                IT Career in <span className="text-[#183b56]">3 Steps</span>
                            </h2>

                            <div className="flex flex-col gap-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] animate-pulse"></div>
                                    <span className="text-[14px] font-black text-slate-400 uppercase tracking-widest">Batch starts today</span>
                                </div>

                                <div className="flex flex-wrap gap-6">
                                    <button className="bg-[#7c3aed] text-white px-14 py-4.5 rounded-2xl font-black text-lg shadow-[0_15px_35px_-10px_rgba(124,58,237,0.6)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1 active:scale-95">
                                        Enroll Now
                                    </button>
                                    <button className="border-2 border-[#7c3aed] text-[#7c3aed] bg-white px-10 py-4.5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all transform hover:-translate-y-1 active:scale-95">
                                        Book a Free Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Timeline Column */}
                    <div className="relative pl-12 md:pl-16">
                        {/* Step 1: Fundamentals */}
                        <div className="mb-24 relative">
                            {/* Step Indicator */}
                            <div className="absolute top-0 -left-[45px] md:-left-[53px] w-10 h-10 md:w-12 md:h-12 bg-[#183b56] text-white rounded-full flex items-center justify-center font-black text-lg md:text-xl border-[4px] border-white shadow-sm z-10">
                                1
                            </div>

                            <div className="space-y-8 pt-1.5 px-2">
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#183b56]">Fundamentals</h3>

                                <div className="space-y-5 text-lg font-bold text-slate-500">
                                    <div className="flex items-center gap-3">
                                        <img src={clockIcon} alt="" className="h-6 w-6 object-contain" />
                                        <p>Duration: <span className="text-[#183b56]">2 Months</span></p>
                                    </div>
                                    <div className="flex items-center rounded-full gap-3">
                                        <img src={computerIcon} alt="" className="h-6 w-6 object-contain " />
                                        <p>3 Hours Classes and 3 Hours Labs per day</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <img src={booksIcon} alt="" className="h-6 w-6 object-contain" />
                                            <p>Courses Include</p>
                                        </div>
                                        <div className="flex flex-wrap gap-4">
                                            {[
                                                { name: 'HTML', icon: 'https://assets.ccbp.in/frontend/react-js/html-icon-img.png' },
                                                { name: 'CSS', icon: 'https://assets.ccbp.in/frontend/react-js/css-icon-img.png' },
                                                { name: 'Python', icon: 'https://assets.ccbp.in/frontend/react-js/python-icon-img.png' },
                                                { name: 'SQL', icon: 'https://assets.ccbp.in/frontend/react-js/sql-icon-img.png' }
                                            ].map((cur, i) => (
                                                <div key={i} className="flex flex-col items-center gap-2 bg-white rounded-xl border border-slate-100 p-3 shadow-sm min-w-[70px]">
                                                    <img src={cur.icon} alt={cur.name} className="h-8 object-contain" />
                                                    <span className="text-[10px] uppercase font-black tracking-tighter text-slate-400">{cur.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src={scrollIcon} alt="" className="h-6 w-6 object-contain" />
                                        <p>Fundamentals Exam</p>
                                    </div>
                                </div>
                                <a href="#" className="inline-flex items-center gap-2 text-[#7c3aed] font-black group">
                                    View Curriculum
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                                </a>

                                {/* Project Carousel/Mockup Preview */}
                                <div className="relative mt-12 bg-slate-50 rounded-[32px] p-8 md:p-12 overflow-hidden">
                                    <div className="flex gap-8 items-center justify-center">
                                        <img src="https://assets.ccbp.in/frontend/react-js/project-mockup-1-img.png" alt="Project 1" className="w-[45%] h-auto rounded-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-500" />
                                        <img src="https://assets.ccbp.in/frontend/react-js/project-mockup-2-img.png" alt="Project 2" className="w-[45%] h-auto rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-500" />
                                    </div>
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#183b56]"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Job Tracks */}
                        <div className="mb-24 relative">
                            <div className="absolute top-0 -left-[45px] md:-left-[53px] w-10 h-10 md:w-12 md:h-12 bg-[#183b56] text-white rounded-full flex items-center justify-center font-black text-lg md:text-xl border-[4px] border-white shadow-sm z-10">
                                2
                            </div>

                            <div className="space-y-8 pt-1.5 px-2">
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#183b56]">Choose your Job Track</h3>
                                    <p className="text-lg font-bold text-slate-500">Based on your Fundamentals exam score, we'll also recommend you a suitable Job Track.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            option: 'OPTION 1',
                                            name: 'MERN Full Stack',
                                            duration: '6 Months',
                                            salary: '3 LPA - 12 LPA',
                                            tech: ['MongoDB', 'Express JS', 'React JS', 'Node JS'],
                                            status: 'Seats Available'
                                        },
                                        {
                                            option: 'OPTION 2',
                                            name: 'Java Full Stack',
                                            duration: '6 Months',
                                            salary: '3 LPA - 12 LPA',
                                            tech: ['React JS', 'Java', 'Spring'],
                                            status: 'Seats Available'
                                        },
                                        {
                                            option: 'OPTION 3',
                                            name: 'QA/Automation Testing',
                                            duration: '3 Months',
                                            salary: '2 LPA - 7 LPA',
                                            tech: ['Selenium'],
                                            status: 'Seats filled. Next batch starts on 01 Jul 2026',
                                            limited: true
                                        },
                                        {
                                            option: 'OPTION 4',
                                            name: 'Data Analytics',
                                            duration: '3 Months',
                                            salary: '2 LPA - 7 LPA',
                                            tech: ['Power BI', 'Tableau'],
                                            status: 'Seats filled. Next batch starts on 01 Jul 2026',
                                            limited: true
                                        }
                                    ].map((track, i) => (
                                        <div key={i} className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all border-l-4 border-l-[#7c3aed]">
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="text-[10px] font-black tracking-widest text-[#7c3aed] bg-[#7c3aed]/10 px-3 py-1 rounded-full">{track.option}</span>
                                            </div>
                                            <h4 className="text-2xl font-black text-[#183b56] mb-6">{track.name}</h4>

                                            <div className="space-y-4 mb-10">
                                                <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                                    <span className="opacity-60">🕒</span>
                                                    <p>Duration: {track.duration}</p>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                                    <span className="opacity-60">💰</span>
                                                    <p>Fresher Salaries : {track.salary} In India</p>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                                    <span className="opacity-60">⚙️</span>
                                                    <p>Real-time project</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-4 mb-10">
                                                {track.tech.map((t, ti) => (
                                                    <div key={ti} className="flex flex-col items-center gap-1.5">
                                                        <div className="w-10 h-10 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer">
                                                            <img src={`https://assets.ccbp.in/frontend/react-js/${t.toLowerCase().replace(/ /g, '-')}-icon-img.png`} alt={t} className="h-6 w-auto" />
                                                        </div>
                                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{t}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                                <a href="#" className="text-[#7c3aed] font-black text-xs group flex items-center gap-1">
                                                    View Curriculum
                                                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                                                </a>
                                                <div className={`flex items-center gap-2 text-[11px] font-black ${track.limited ? 'text-orange-500' : 'text-green-600'}`}>
                                                    {track.limited ? '🔒' : '✅'}
                                                    <span>{track.status}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Placement Assistance */}
                        <div className="relative">
                            <div className="absolute top-0 -left-[45px] md:-left-[53px] w-10 h-10 md:w-12 md:h-12 bg-[#183b56] text-white rounded-full flex items-center justify-center font-black text-lg md:text-xl border-[4px] border-white shadow-sm z-10">
                                3
                            </div>

                            <div className="space-y-12 pt-1.5 px-2">
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#183b56]">Placement Assistance for Your Job</h3>
                                    <p className="text-lg font-bold text-slate-400">Up to 16 Months from the date of joining</p>
                                </div>

                                <div className="space-y-8">
                                    <p className="text-xl font-bold text-[#183b56]">Free Add-ons:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                                        {[
                                            { name: 'Aptitude Training', icon: 'https://assets.ccbp.in/frontend/react-js/aptitude-training-icon-img.png' },
                                            { name: 'Soft Skills Training', icon: 'https://assets.ccbp.in/frontend/react-js/soft-skills-training-icon-img.png' },
                                            { name: 'Resume Preparation', icon: 'https://assets.ccbp.in/frontend/react-js/resume-preparation-icon-img.png' },
                                            { name: 'AI-Powered Mock Interviews', icon: 'https://assets.ccbp.in/frontend/react-js/ai-mock-interviews-icon-img.png' },
                                            { name: 'Mock Interviews by Tech and HR Panels', icon: 'https://assets.ccbp.in/frontend/react-js/panel-interviews-icon-img.png' },
                                            { name: 'Scheduling Interviews', icon: 'https://assets.ccbp.in/frontend/react-js/scheduling-interviews-icon-img.png' },
                                            { name: 'Access to 300+ Senior Interview Experiences', icon: 'https://assets.ccbp.in/frontend/react-js/interview-experiences-icon-img.png' },
                                            { name: 'Access to Placement Portal', icon: 'https://assets.ccbp.in/frontend/react-js/placement-portal-icon-img.png' },
                                            { name: 'Mega Offline Placement Drives', icon: 'https://assets.ccbp.in/frontend/react-js/placement-drives-icon-img.png' },
                                            { name: 'Negotiation with companies for higher salaries', icon: 'https://assets.ccbp.in/frontend/react-js/salary-negotiation-icon-img.png' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-5">
                                                <div className="w-12 h-12 flex-shrink-0 bg-slate-50 rounded-xl p-3 flex items-center justify-center shadow-sm">
                                                    <img src={item.icon} alt={item.name} className="w-full h-auto" />
                                                </div>
                                                <p className="text-base font-bold text-slate-600 leading-tight">{item.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Placement Dashboard Preview */}
                                <div className="mt-16 bg-gradient-to-br from-white to-blue-50/50 rounded-[32px] p-8 overflow-hidden relative border border-slate-100 shadow-sm">
                                    <div className="flex justify-center">
                                        <img src="https://assets.ccbp.in/frontend/react-js/placement-dashboard-img.png" alt="Dashboard" className="w-3/4 h-auto transform transition-transform hover:scale-105 duration-700 pointer-events-none" />
                                    </div>
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#183b56]"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerSteps;
