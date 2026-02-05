import React from 'react';

const Hero = () => {
    const bottomFeatures = [
        { icon: '⏳', label: 'Course Duration', value: '5-8 months based on the Job Track you choose' },
        { icon: '📋', label: 'Eligibility', value: 'B. Tech (all branches), BSc, B.Com, BBA, etc. No CGPA cut-off' },
        { icon: '💻', label: 'Online', value: '3 Hours Classes and 3 Hours Labs Every Day' },
        { icon: '🎯', label: 'Support', badge: 'NEW', value: 'Dedicated Success Coach and Live Sessions with course mentors' }
    ];

    return (
        <section className="relative bg-white overflow-hidden" id="hero">
            {/* Announcement Bar */}
            <div className="bg-[#1e293b] py-2.5 text-center">
                <p className="text-white text-sm font-medium">
                    <span className="mr-2">🎉</span>
                    NxtWave Intensive Offline Center is starting in Hyderabad.
                    <a href="#" className="text-[#38bdf8] font-bold ml-2 hover:underline">Check it Out →</a>
                </p>
            </div>

            {/* Main Hero Content */}
            <div className="relative min-h-[600px]">
                {/* Curved Teal Background */}
                <div className="absolute right-0 top-0 w-[55%] h-full bg-gradient-to-br from-[#2dd4bf] to-[#14b8a6] rounded-bl-[100px] -z-10"></div>

                {/* Dark decorative strip on extreme right */}
                <div className="absolute right-0 top-0 w-[60px] h-full bg-[#0f172a] -z-20"></div>

                <div className="max-w-[1300px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-10 z-10">
                        {/* NEW Badge */}
                        <div className="flex items-center gap-3">
                            <span className="bg-[#ef4444] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">NEW</span>
                            <span className="text-slate-600 font-bold text-sm">Intensive 3.0 to 3x your placement chances</span>
                        </div>

                        {/* Main Headline */}
                        <div>
                            <h1 className="text-5xl md:text-[58px] font-black text-[#183b56] leading-[1.1]">
                                A Proven Program<br />
                                To Make You a<br />
                                <span className="text-[#f97316]">Full Stack Developer</span>
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
                            <h3 className="text-2xl font-black text-[#183b56] mb-1">Book a Live Demo</h3>
                            <h3 className="text-2xl font-black mb-8">For <span className="text-[#f97316]">Free !</span></h3>

                            <form className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 mb-2">Name</label>
                                    <input type="text" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 mb-2">Mobile Number (WhatsApp Number)</label>
                                    <div className="flex gap-2">
                                        <select className="px-3 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none">
                                            <option>IN +91</option>
                                        </select>
                                        <input type="tel" placeholder="Enter Mobile Number" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/30 focus:border-[#7c3aed]" />
                                    </div>
                                    <p className="text-[11px] text-slate-400 mt-1.5">We assure you that we practice a strict 'NO SPAM' policy</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 mb-2">Highest Qualification</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-400 focus:outline-none">
                                        <option>Select Highest Qualification</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-500 mb-2">Native State</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-400 focus:outline-none">
                                        <option>Enter your State</option>
                                    </select>
                                </div>

                                <p className="text-[11px] text-slate-400 pt-2">
                                    By proceeding further, I agree to the <a href="#" className="text-[#2563eb] underline">Terms & Conditions</a> and <a href="#" className="text-[#2563eb] underline">Privacy Policy</a> of NxtWave
                                </p>

                                <button type="submit" className="w-full bg-[#f97316] text-white py-4 rounded-xl font-black text-lg shadow-[0_10px_25px_-8px_rgba(249,115,22,0.5)] hover:bg-[#ea580c] transition-all transform hover:-translate-y-0.5">
                                    Book My Demo
                                </button>
                            </form>

                            <p className="text-center text-xs text-slate-400 mt-6">Product of <span className="font-black text-[#183b56]">NXT</span><span className="font-black text-[#f97316]">WAVE</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Feature Bar */}
            <div className="bg-[#0f172a] py-8">
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bottomFeatures.map((feat, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="text-3xl flex-shrink-0">{feat.icon}</div>
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
        </section>
    );
};

export default Hero;
