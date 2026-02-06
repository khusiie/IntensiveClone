import React, { useState, useEffect } from 'react';
import fundamental1 from '../assets/Fundamental/image.png';
import fundamental2 from '../assets/Fundamental/image copy.png';
import fundamental3 from '../assets/Fundamental/image copy 2.png';
import clockIcon from '../assets/Fundamental/steps/image.png';
import computerIcon from '../assets/Fundamental/steps/image copy.png';
import booksIcon from '../assets/Fundamental/steps/image copy 2.png';
import scrollIcon from '../assets/Fundamental/steps/image copy 3.png';

import addon1 from '../assets/adds-on/image copy.png';
import addon2 from '../assets/adds-on/image copy 2.png';
import addon3 from '../assets/adds-on/image copy 3.png';
import addon4 from '../assets/adds-on/image copy 4.png';
import addon5 from '../assets/adds-on/image copy 5.png';
import addon6 from '../assets/adds-on/image copy 6.png';
import addon7 from '../assets/adds-on/image copy 7.png';
import addon8 from '../assets/adds-on/image copy 8.png';
import addon9 from '../assets/adds-on/image copy 9.png';
import addon10 from '../assets/adds-on/image copy 10.png';
import dashboardImg from '../assets/adds-on/image.png';

import htmlIcon from '../assets/Fundamental/course/image.png';
import cssIcon from '../assets/Fundamental/course/image copy.png';
import pythonIcon from '../assets/Fundamental/course/image copy 2.png';
import sqlIcon from '../assets/Fundamental/course/image copy 3.png';

const CareerSteps = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const fundamentalSlides = [fundamental1, fundamental2, fundamental3];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % fundamentalSlides.length);
        }, 3000); // 3 seconds per slide

        return () => clearInterval(interval);
    }, [fundamentalSlides.length]);

    return (
        <section className="py-24 bg-white overflow-hidden" id="roadmap">
            <div className="max-w-[1300px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-16 relative">

                    {/* Left Sticky Column */}
                    <div className="lg:sticky lg:top-32 h-fit space-y-10">
                        <div>
                            <h2 className="text-4xl md:text-[54px] font-bold text-[#183b56] leading-[1.1] mb-12">
                                Get Ready for Your <br />
                                IT Career in <span className="text-[#183b56]">3 Steps</span>
                            </h2>

                            <div className="flex flex-col gap-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] animate-pulse"></div>
                                    <span className="text-[14px] font-black text-slate-400 uppercase tracking-widest">Next batch starts on Feb 9th</span>
                                </div>

                                <div className="flex flex-wrap gap-6">
                                    <button className="bg-[#7c3aed] text-white px-14 py-4.5 rounded-2xl font-bold text-lg shadow-[0_15px_35px_-10px_rgba(124,58,237,0.6)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1 active:scale-95">
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
                                <h3 className="text-3xl md:text-4xl font-bold text-[#183b56]">Fundamentals</h3>

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
                                                { name: 'HTML', icon: htmlIcon },
                                                { name: 'CSS', icon: cssIcon },
                                                { name: 'Python', icon: pythonIcon },
                                                { name: 'SQL', icon: sqlIcon }
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
                                <div className="relative mt-12 bg-slate-50 rounded-[32px] p-8 md:p-12 overflow-hidden min-h-[300px] flex items-center justify-center">
                                    <div className="w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                                        {fundamentalSlides.map((slide, idx) => (
                                            <div key={idx} className="min-w-full flex justify-center px-4">
                                                <img
                                                    src={slide}
                                                    alt={`Slide ${idx + 1}`}
                                                    className="w-full max-w-[500px] h-auto rounded-2xl shadow-xl object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Slider Dots */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                        {fundamentalSlides.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveSlide(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-[#183b56] w-6' : 'bg-slate-300'
                                                    }`}
                                                aria-label={`Go to slide ${idx + 1}`}
                                            />
                                        ))}
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
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#183b56]">Choose your Job Track</h3>
                                    <p className="text-lg font-bold text-slate-500">Based on your Fundamentals exam score, we'll also recommend you a suitable Job Track.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            option: 'OPTION 1',
                                            name: 'MERN Full Stack',
                                            duration: '6 Months',
                                            salary: '3 LPA - 12 LPA',
                                            tech: [
                                                { name: 'MongoDB', icon: 'https://assets.ccbp.in/frontend/react-js/mongodb-icon-img.png' },
                                                { name: 'Express JS', icon: 'https://assets.ccbp.in/frontend/react-js/express-js-icon-img.png' },
                                                { name: 'React JS', icon: 'https://assets.ccbp.in/frontend/react-js/react-js-icon-img.png' },
                                                { name: 'Node JS', icon: 'https://assets.ccbp.in/frontend/react-js/node-js-icon-img.png' }
                                            ],
                                            color: '#2563eb',
                                            status: 'Seats Available',
                                            limited: false
                                        },
                                        {
                                            option: 'OPTION 2',
                                            name: 'Java Full Stack',
                                            duration: '6 Months',
                                            salary: '3 LPA - 12 LPA',
                                            tech: [
                                                { name: 'React JS', icon: 'https://assets.ccbp.in/frontend/react-js/react-js-icon-img.png' },
                                                { name: 'Java', icon: 'https://assets.ccbp.in/frontend/react-js/java-icon-img.png' },
                                                { name: 'Spring', icon: 'https://assets.ccbp.in/frontend/react-js/spring-icon-img.png' }
                                            ],
                                            color: '#f59e0b',
                                            status: 'Seats Available',
                                            limited: false
                                        },
                                        {
                                            option: 'OPTION 3',
                                            name: 'QA/Automation Testing',
                                            duration: '3 Months',
                                            salary: '2 LPA - 7 LPA',
                                            tech: [
                                                { name: 'Selenium', icon: 'https://assets.ccbp.in/frontend/react-js/selenium-icon-img.png' }
                                            ],
                                            color: '#7c3aed',
                                            status: 'Seats filled. Next batch starts on 01 Jul 2026',
                                            limited: true
                                        },
                                        {
                                            option: 'OPTION 4',
                                            name: 'Data Analytics',
                                            duration: '3 Months',
                                            salary: '2 LPA - 7 LPA',
                                            tech: [
                                                { name: 'Power BI', icon: 'https://assets.ccbp.in/frontend/react-js/power-bi-icon-img.png' },
                                                { name: 'Tableau', icon: 'https://assets.ccbp.in/frontend/react-js/tableau-icon-img.png' }
                                            ],
                                            color: '#0d9488',
                                            status: 'Seats filled. Next batch starts on 01 Jul 2026',
                                            limited: true
                                        }
                                    ].map((track, i) => (
                                        <div key={i} className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                                            <div className="p-8 flex-grow">
                                                <div className="mb-6">
                                                    <span
                                                        className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase"
                                                        style={{ backgroundColor: `${track.color}15`, color: track.color }}
                                                    >
                                                        {track.option}
                                                    </span>
                                                </div>
                                                <h4 className="text-2xl font-bold text-[#183b56] mb-8">{track.name}</h4>

                                                <div className="space-y-5 mb-10">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-5 h-5 flex items-center justify-center opacity-60">
                                                            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                        </div>
                                                        <p className="text-[15px] font-medium text-slate-500">Duration: <span className="font-bold text-[#183b56]">{track.duration}</span></p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-5 h-5 flex items-center justify-center opacity-60 mt-0.5">
                                                            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                                        </div>
                                                        <p className="text-[15px] font-medium text-slate-500 leading-tight">Fresher Salaries : <span className="font-bold text-[#183b56]">{track.salary}</span> In India</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-5 h-5 flex items-center justify-center opacity-60">
                                                            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                        </div>
                                                        <p className="text-[15px] font-bold text-[#183b56]">Real-time project</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-6 mb-10">
                                                    {track.tech.map((t, ti) => (
                                                        <div key={ti} className="flex flex-col items-center gap-2">
                                                            <img src={t.icon} alt={t.name} className="h-7 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                                                            <span className="text-[10px] font-bold text-slate-400 text-center">{t.name}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <a href="#" className="flex items-center gap-2 text-[#7c3aed] font-bold text-[14px] hover:translate-x-1 transition-transform w-fit">
                                                    View Curriculum
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                                                </a>
                                            </div>

                                            <div className={`px-8 py-4 border-t flex items-center justify-center gap-2 text-[13px] font-bold ${track.limited ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-green-50 text-green-600 border-green-100'}`}>
                                                {track.limited ? (
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                                ) : (
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                )}
                                                {track.status}
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
                                    <h3 className="text-3xl md:text-4xl font-bold text-[#183b56]">Placement Assistance for Your Job</h3>
                                    <p className="text-lg font-bold text-slate-400">Up to 16 Months from the date of joining</p>
                                </div>

                                <div className="space-y-8">
                                    <p className="text-xl font-bold text-[#183b56]">Free Add-ons:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                                        {[
                                            { name: 'Aptitude Training', icon: addon1 },
                                            { name: 'Soft Skills Training', icon: addon2 },
                                            { name: 'Resume Preparation', icon: addon3 },
                                            { name: 'AI-Powered Mock Interviews', icon: addon4 },
                                            { name: 'Mock Interviews by Tech and HR Panels', icon: addon5 },
                                            { name: 'Scheduling Interviews', icon: addon6 },
                                            { name: 'Access to 300+ Senior Interview Experiences', icon: addon7 },
                                            { name: 'Access to Placement Portal', icon: addon8 },
                                            { name: 'Mega Offline Placement Drives', icon: addon9 },
                                            { name: 'Negotiation with companies for higher salaries', icon: addon10 }
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
                                        <img src={dashboardImg} alt="Dashboard" className="w-3/4 h-auto transform transition-transform hover:scale-105 duration-700 pointer-events-none" />
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
