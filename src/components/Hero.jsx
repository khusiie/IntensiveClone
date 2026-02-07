import React, { useState, useEffect } from 'react';
import durationIcon from '../assets/Third/image.png';
import eligibilityIcon from '../assets/Third/image copy 2.png';
import onlineIcon from '../assets/Third/image copy.png';
import supportIcon from '../assets/Third/image copy 3.png';

import testimonial1 from '../assets/testimonials/1.png';
import testimonial2 from '../assets/testimonials/2.png';
import testimonial3 from '../assets/testimonials/3.png';
import testimonial4 from '../assets/testimonials/4.png';

const bottomFeatures = [
    { icon: durationIcon, label: 'Course Duration', value: '5-8 months based on the Job Track you choose' },
    { icon: eligibilityIcon, label: 'Eligibility', value: 'B. Tech (all branches), BSc, B.Com, BBA, etc. No CGPA cut-off' },
    { icon: onlineIcon, label: 'Online', value: '3 Hours Classes and 3 Hours Labs Every Day' },
    {
        icon: supportIcon, label: 'Support', badge: 'NEW', value: 'Dedicated Success Coach and Live Sessions with course mentors'
    }
];

const testimonials = [
    {
        text: "From being a Delivery Boy in Swiggy to Programmer Analyst in an MNC!",
        name: "Venkat Sai",
        education: "Mechanical Engineering",
        image: testimonial1,
        companyLogo: "https://assets.ccbp.in/frontend/react-js/companies-exl-img.png"
    },
    {
        text: "Non-IT to IT: Started my career as a Software Engineer at 4.5 LPA",
        name: "Maddineni Bhargava",
        education: "Civil Engineering",
        image: testimonial2,
        companyLogo: "https://assets.ccbp.in/frontend/react-js/professionals-microsoft-img.png"
    },
    {
        text: "Gap of 3 years to settling in a high-paying software job",
        name: "Manvendra Shah",
        education: "B.Sc Computer Science",
        image: testimonial3,
        companyLogo: "https://assets.ccbp.in/frontend/react-js/professionals-aha-img.png"
    },
    {
        text: "Mock interviews by the placement team helped me improve.",
        name: "Bhargavi",
        education: "CSE, JNTU",
        image: testimonial4,
        companyLogo: "https://assets.ccbp.in/frontend/react-js/companies-systech-img.png"
    }
];

const Hero = () => {

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Sync slider with vertical marquee (20s duration / 7 roles ≈ 2857ms)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 2857);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const [showErrors, setShowErrors] = useState(false);
    const roles = ["Software Engineer", "Data Engineer", "Full Stack Developer", "Data Analyst", "QA Engineer", "Software Developer", "NxtWave Learner"];
    const displayRoles = [...roles, ...roles]; // Duplicate for seamless infinite scroll

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }, 2000); // 2s pause
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentRoleIndex === roles.length) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentRoleIndex(0);
            }, 500); // Match transition duration
            return () => clearTimeout(timeout);
        }
    }, [currentRoleIndex, roles.length]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowErrors(true);
    };

    return (
        <section className="relative bg-white overflow-hidden" id="hero" >
            {/* Announcement Bar with Confetti */}
            <div className="bg-[#030712] py-1 relative overflow-hidden">
                <div className="flex justify-center items-center gap-0">
                    {/* Left Fireworks */}
                    <img
                        src="/src/assets/image copy.png"
                        alt=""
                        className="hidden sm:block h-9 md:h-12 w-10 md:w-20 opacity-100 pointer-events-none flex-shrink-0 object-contain -mr-3 md:-mr-20"
                    />

                    {/* Text Content */}
                    <div className="flex items-center justify-center gap-2 md:gap-3 relative z-10 transition-all duration-300 px-2 sm:px-0">
                        {/* Party Popper Emoji/Icon */}
                        <img src="/src/assets/image copy 2.png" alt="🎉" className="w-4 h-4 md:w-6 md:h-6" />

                        <div className="flex flex-wrap items-center justify-center sm:justify-start font-medium tracking-tight text-center sm:text-left gap-x-2">
                            <span className="text-[#bef264] text-[11px] sm:text-[17px] leading-tight">
                                NxtWave Intensive Offline Center is starting in Hyderabad.
                            </span>
                            <a href="#" className="text-white text-[11px] sm:text-[16px] hover:underline flex items-center gap-1 group whitespace-nowrap">
                                Check It Out
                                <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                        className="hidden sm:block h-9 md:h-12 w-10 md:w-20 opacity-100 pointer-events-none flex-shrink-0 object-contain transform scale-x-[-1] -ml-3 md:-ml-20"
                    />
                </div>
            </div>



            {/* Main Hero Content */}
            <div className="relative min-h-[500px] mt-20">

                {/* Curved Teal Background */}
                <div className="hidden md:block absolute right-0 top-0 w-[55%] h-full bg-gradient-to-br from-[#2dd4bf] to-[#14b8a6] rounded-bl-[100px] -z-10"></div>

                {/* Dark decorative strip on extreme right */}
                <div className="hidden md:block absolute right-0 top-0 w-[60px] h-full bg-[#0f172a] -z-20"></div>

                {/* Background Decoration Image at Bottom */}
                <div
                    className="hidden md:block absolute left-0 right-0 bottom-0 h-[400px] pointer-events-none bg-no-repeat bg-bottom bg-right"
                    style={{
                        backgroundImage: 'url(https://cdn.prod.website-files.com/5fa61cbbf0d432b3230f62b1/63bd0ef0158ffc50087d92fc_1366-embed-form-bg-image.avif)',
                        backgroundSize: 'contain',
                        zIndex: 5,
                        opacity: 0.8
                    }}
                >
                </div>

                <div className="max-w-[1300px] mx-auto px-6 pt-4 pb-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

                    {/* Left Content */}
                    <div className="space-y-6 z-10">
                        {/* NEW Badge Section */}
                        <div className="inline-flex items-center gap-3 border border-slate-200 rounded-full px-3 py-2 pr-6 shadow-sm bg-white">
                            <span className="bg-[#f97316] text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">NEW</span>
                            <span className="text-slate-600 font-medium text-base">Intensive 3.0 to 3x your placement chances</span>
                        </div>

                        {/* Main Headline */}
                        <div className="text-center md:text-left">
                            <h1 className="text-[32px] md:text-[48px] font-bold text-[#1e293b] leading-[48px] md:leading-[64px] mb-4 tracking-wide">
                                A Proven Program<br />
                                To Make You a<br />
                                <div className="relative h-[48px] md:h-[64px] overflow-hidden inline-block align-bottom">
                                    <div
                                        className="flex flex-col will-change-transform"
                                        style={{
                                            transform: `translateY(-${(currentRoleIndex * 100) / displayRoles.length}%)`,
                                            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                                        }}
                                    >
                                        {displayRoles.map((role, index) => (
                                            <div key={index} className="h-[48px] md:h-[64px] flex items-center">
                                                <span className="text-[#ea580c] drop-shadow-sm whitespace-nowrap">{role}</span>
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

                        {/* Testimonial Card */}
                        {/* Testimonial Image Only */}
                        <div className="pt-2">
                            <div className="w-full flex justify-center md:justify-start transition-all duration-500">
                                <img
                                    src={testimonials[activeTestimonial].image}
                                    alt="Success Story"
                                    className="w-full max-w-[450px] h-auto object-contain"
                                />
                            </div>

                            {/* Carousel Dots */}
                            <div className="w-full max-w-[450px] flex justify-center items-center gap-2 mt-6">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`rounded-full transition-all duration-300 ${activeTestimonial === index ? 'w-8 h-2.5 bg-[#334155]' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form + Character */}
                    <div className="relative z-10">
                        {/* Demo Form Card */}
                        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-10 relative z-20 mx-auto lg:ml-auto lg:mr-8 max-w-[480px] lg:-mt-14 max-h-[88vh] overflow-y-auto custom-scrollbar">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-[28px] leading-tight font-bold text-[#0f172a] mb-1">Book a Live Demo</h3>
                                    <h3 className="text-[28px] leading-tight font-bold text-[#0f172a]">
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

                                <button type="submit" className="w-full bg-[#7c3aed] text-white py-3 rounded-xl font-medium text-md shadow-[0_10px_25px_-8px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-0.5">
                                    Book My Demo
                                </button>
                            </form>


                        </div>
                        <p className="text-center text-xs text-white mt-6">Product of <span className="font-black text-white">NXT</span><span className="font-black text-white">WAVE</span></p>
                    </div>
                </div>
            </div >

            {/* Bottom Feature Bar */}
            <div className="bg-[#0f172a] py-8">
                <div className="max-w-[1300px] mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bottomFeatures.map((feat, i) => (
                            <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
                                <img src={feat.icon} alt="" className="w-12 h-12 object-contain flex-shrink-0" />
                                <div>
                                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
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


        </section >
    );
};

export default Hero;
