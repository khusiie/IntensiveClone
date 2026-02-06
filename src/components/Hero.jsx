import React, { useState } from 'react';
import durationIcon from '../assets/Third/image.png';
import eligibilityIcon from '../assets/Third/image copy 2.png';
import onlineIcon from '../assets/Third/image copy.png';
import supportIcon from '../assets/Third/image copy 3.png';

const Hero = () => {

    const bottomFeatures = [
        { icon: durationIcon, label: 'Course Duration', value: '5-8 months based on the Job Track you choose' },
        { icon: eligibilityIcon, label: 'Eligibility', value: 'B. Tech (all branches), BSc, B.Com, BBA, etc. No CGPA cut-off' },
        { icon: onlineIcon, label: 'Online', value: '3 Hours Classes and 3 Hours Labs Every Day' },
        {
            icon: supportIcon, label: 'Support', badge: 'NEW', value: 'Dedicated Success Coach and Live Sessions with course mentors'
        }
    ];

    const [showErrors, setShowErrors] = useState(false);
    const roles = ["Software Engineer", "Data Engineer", "Full Stack Developer", "Data Analyst", "QA Engineer", "Software Developer", "NxtWave Learner"];
    const displayRoles = [...roles, ...roles]; // Duplicate for seamless infinite scroll

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowErrors(true);
    };

    return (
        <section className="relative bg-white overflow-hidden" id="hero" >
            {/* Announcement Bar with Confetti */}
            <div className="bg-[#030712] py-1 relative overflow-hidden">
                <div className="flex justify-center items-center gap-0 px-4">
                    {/* Left Fireworks */}
                    <img
                        src="/src/assets/image copy.png"
                        alt=""
                        className="h-9 md:h-12 w-10 md:w-20 opacity-100 pointer-events-none flex-shrink-0 object-contain -mr-3 md:-mr-6"
                    />

                    {/* Text Content */}
                    <div className="flex items-center gap-1 relative z-10 transition-all duration-300">
                        {/* Party Popper Emoji/Icon */}
                        <img src="/src/assets/image copy 2.png" alt="🎉" className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />

                        <div className="flex items-center flex-nowrap font-medium tracking-tight whitespace-nowrap">
                            <span className="text-[#bef264] text-[14px] md:text-[17px]">
                                NxtWave Intensive Offline Center is starting in Hyderabad.
                            </span>
                            <a href="#" className="text-white text-[13px] md:text-[16px] hover:underline flex items-center gap-1.5 ml-3 md:ml-4 group whitespace-nowrap">
                                Check It Out
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Fireworks */}
                    <img
                        src="/src/assets/image copy.png"
                        alt=""
                        className="h-9 md:h-12 w-10 md:w-20 opacity-100 pointer-events-none flex-shrink-0 object-contain transform scale-x-[-1] -ml-3 md:-ml-6"
                    />
                </div>
            </div>



            {/* Main Hero Content */}
            <div className="relative min-h-[500px]">

                {/* Curved Teal Background */}
                <div className="absolute right-0 top-0 w-[55%] h-full bg-gradient-to-br from-[#2dd4bf] to-[#14b8a6] rounded-bl-[100px] -z-10"></div>

                {/* Dark decorative strip on extreme right */}
                <div className="absolute right-0 top-0 w-[60px] h-full bg-[#0f172a] -z-20"></div>

                <div className="max-w-[1300px] mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

                    {/* Left Content */}
                    <div className="space-y-6 z-10">
                        {/* NEW Badge Section */}
                        <div className="inline-flex items-center gap-3 border border-slate-200 rounded-full px-2 py-1 pr-4 shadow-sm bg-white">
                            <span className="bg-[#f97316] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">NEW</span>
                            <span className="text-slate-600 font-bold text-sm">Intensive 3.0 to 3x your placement chances</span>
                        </div>

                        {/* Main Headline */}
                        <div className="text-center md:text-left">
                            <h1 className="text-[44px] md:text-[54px] font-medium text-[#1e293b] leading-[1.1] mb-4 tracking-wide">
                                A Proven Program<br />
                                To Make You a<br />
                                <div className="relative h-[70px] md:h-[90px] overflow-hidden">
                                    <div className="animate-vertical-marquee flex flex-col">
                                        {displayRoles.map((role, index) => (
                                            <div key={index} className="h-[70px] md:h-[90px] flex items-center">
                                                <span className="text-[#f97316] drop-shadow-sm whitespace-nowrap">{role}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                                        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-3">
                                            <path d="M0 5 Q 25 10, 50 5 T 100 5" stroke="#7c3aed" strokeWidth="1.5" fill="transparent" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </h1>
                        </div>

                        {/* Testimonial Quote */}
                        <div className="pt-4">
                            <div className="relative pl-8 border-l-4 border-slate-200">
                                <span className="absolute -left-3 top-0 text-5xl text-slate-200 font-serif leading-none">"</span>
                                <p className="text-lg font-bold text-slate-600 italic leading-relaxed mb-6">
                                    From being a Delivery Boy in Swiggy to<br />
                                    Programmer Analyst in an MNC!
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src="https://assets.ccbp.in/frontend/react-js/professionals-1-img.png" alt="Venkat Sai" className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="text-sm font-black text-[#183b56]">Venkat Sai</p>
                                        <p className="text-xs text-slate-400 font-medium">Mechanical Engineering</p>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200 mx-2"></div>
                                    <img src="https://assets.ccbp.in/frontend/react-js/companies-exl-img.png" alt="EXL" className="h-6 object-contain" />
                                </div>
                            </div>
                        </div>

                        {/* Carousel Dots */}
                        <div className="flex items-center gap-2 pt-2">
                            <div className="w-6 h-2 rounded-full bg-[#2563eb]"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        </div>
                    </div>

                    {/* Right Side - Form + Character */}
                    <div className="relative z-10">
                        {/* Character Illustration */}
                        <div className="absolute -left-24 bottom-0 w-[280px] z-0 pointer-events-none hidden lg:block">
                            <img src="https://assets.ccbp.in/frontend/react-js/hero-character-img.png" alt="Student" className="w-full h-auto" />
                        </div>

                        {/* Demo Form Card */}
                        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-10 relative z-10 ml-auto max-w-[400px]">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-[28px] leading-tight font-black text-[#0f172a] mb-1">Book a Live Demo</h3>
                                    <h3 className="text-[28px] leading-tight font-black text-[#0f172a]">
                                        For <span className="relative inline-block">
                                            Free !
                                            <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                                <path d="M0 5 Q 25 10, 50 5 T 100 5" stroke="#7c3aed" strokeWidth="3" fill="transparent" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                    </h3>
                                </div>
                                <div className="relative">
                                    <img src="/src/assets/image copy 3.png" alt="Demo Character" className="w-[100px] h-auto relative z-10" />
                                    {/* Gray Shelf */}
                                    <div className="absolute bottom-0 left-[-10px] right-[-10px] h-[4px] bg-slate-200 rounded-full"></div>
                                </div>
                            </div>

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 mb-2">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className={`w-full px-4 py-3 rounded-xl border ${showErrors ? 'border-red-300' : 'border-slate-200'} text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]`}
                                    />
                                    {showErrors && <p className="text-[11px] text-red-500 mt-1">*Required</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 mb-2">Mobile Number (WhatsApp Number)</label>
                                    <div className="flex gap-2">
                                        <div className={`flex items-center gap-1 px-3 py-3 rounded-xl border ${showErrors ? 'border-red-300' : 'border-slate-200'} text-sm font-medium focus-within:ring-2 focus-within:ring-[#7c3aed]/30 focus-within:border-[#7c3aed] flex-1`}>
                                            <span className="text-slate-700 font-bold">IN +91</span>
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                            <input type="tel" placeholder="Enter Mobile Number" className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium outline-none" />
                                        </div>
                                    </div>
                                    {showErrors && <p className="text-[11px] text-red-500 mt-1">*Required</p>}
                                    <p className="text-[11px] text-slate-400 mt-1.5">We assure you that we practice a strict 'NO SPAM' policy</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 mb-2">Highest Qualification</label>
                                    <div className="relative">
                                        <select className={`w-full px-4 py-3 rounded-xl border ${showErrors ? 'border-red-300' : 'border-slate-200'} text-sm font-medium ${showErrors ? 'text-red-700' : 'text-slate-400'} bg-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 appearance-none`}>
                                            <option>Select Highest Qualification</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                    {showErrors && <p className="text-[11px] text-red-500 mt-1">*Required</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 mb-2">Native State</label>
                                    <div className="relative">
                                        <select className={`w-full px-4 py-3 rounded-xl border ${showErrors ? 'border-red-300' : 'border-slate-200'} text-sm font-medium text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 appearance-none`}>
                                            <option>Enter your State</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[11px] text-slate-400 pt-2">
                                    By proceeding further, I agree to the <a href="#" className="text-[#2563eb] underline">Terms & Conditions</a> and <a href="#" className="text-[#2563eb] underline">Privacy Policy</a> of NxtWave
                                </p>

                                <button type="submit" className="w-full bg-[#7c3aed] text-white py-4 rounded-xl font-black text-lg shadow-[0_10px_25px_-8px_rgba(249,115,22,0.5)] hover:bg-[#ea580c] transition-all transform hover:-translate-y-0.5">
                                    Book My Demo
                                </button>
                            </form>


                        </div>
                        <p className="text-center text-xs text-slate-400 mt-6">Product of <span className="font-black text-[#183b56]">NXT</span><span className="font-black text-[#f97316]">WAVE</span></p>
                    </div>
                </div>
            </div >

            {/* Bottom Feature Bar */}
            <div className="bg-[#0f172a] py-8">
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bottomFeatures.map((feat, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <img src={feat.icon} alt="" className="w-8 h-8 object-contain flex-shrink-0" />
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <p className="text-white font-bold text-sm">{feat.label}</p>
                                        {feat.badge && <span className="bg-[#ef4444] text-white text-[8px] font-black px-2 py-0.5 rounded-full">{feat.badge}</span>}
                                    </div>
                                    <p className="text-slate-400 text-[13px] font-medium leading-relaxed">{feat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes vertical-marquee {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-vertical-marquee {
                    animation: vertical-marquee 40s linear infinite;
                }
            `}} />
        </section >
    );
};

export default Hero;
