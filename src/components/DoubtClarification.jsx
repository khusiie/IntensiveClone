import React from 'react';
import mentorImg from '../assets/Doubt/image.png';
import speedImg from '../assets/Doubt/image copy.png';

const DoubtClarification = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="doubts">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Heading Area */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#183b56] leading-[1.1] mb-6">
                        Get Your <span className="relative inline-block">
                            Doubts Clarified
                            <div className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-[#7c3aed] rounded-full opacity-60"></div>
                        </span> <br />
                        Faster than in Offline Classes
                    </h2>
                    <p className="text-base text-slate-500 font-medium max-w-[800px]">
                        Our highly motivated team of experts are ready to help you with your doubts from <span className="text-[#183b56]">9AM - 9PM Everyday</span>
                    </p>
                </div>

                {/* Cards Container */}
                <div className="space-y-10">

                    {/* Mentor Support Card */}
                    <div className="relative bg-white rounded-[32px] border  border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] items-center">
                            {/* Graphic Side */}
                            <div className="relative p-8 md:p-12 flex justify-center bg-gradient-to-br from-indigo-50/50 via-white to-transparent">
                                <img
                                    src={mentorImg}
                                    alt="Mentors"
                                    className="w-[380px] h-auto transform transition-transform group-hover:scale-105"
                                />
                                {/* Dynamic rays background effect */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.2)_0%,transparent_70%)]"></div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 space-y-4">
                                <h3 className="text-3xl font-bold text-[#183b56] mb-4">
                                    1500+ Mentors to Resolve Your Doubts
                                </h3>
                                <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                                    Including Subject Matter Experts, IITians, Teaching Assistants, NxtWave Alumni, etc.
                                </p>
                                <button className="bg-[#7c3aed] text-white px-10 py-4 font-bold text-lg rounded-2xl shadow-[0_12px_24px_-8px_rgba(124,58,237,0.5)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                                    Book a free Demo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Resolution Speed Card */}
                    <div className="relative bg-[#021532] rounded-[32px] overflow-hidden group">
                        {/* Background Decor - Geometric Shapes */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 right-0 w-full h-full opacity-30">
                                <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
                                    <path d="M-50,100 L150,0 L200,200 Z" fill="#1e40af" opacity="0.4" />
                                    <path d="M600,0 L850,200 L700,400 Z" fill="#1e40af" opacity="0.3" />
                                    <path d="M100,300 L300,400 L50,450 Z" fill="#1e40af" opacity="0.2" />
                                    {/* Small floating triangles */}
                                    <path d="M400,50 L420,30 L440,50 Z" fill="white" opacity="0.1" />
                                    <path d="M700,300 L715,280 L730,300 Z" fill="white" opacity="0.1" />
                                </svg>
                            </div>
                            <div className="absolute -left-20 -top-20 w-[300px] h-[300px] bg-blue-600/10 blur-[80px] rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.3fr] items-center text-white relative">
                            {/* Text Content */}
                            <div className="p-10 md:pl-16 md:pr-4 py-10 relative z-10">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[48px] md:text-[62px] font-[900] leading-tight italic tracking-tight text-[#ff7a2d]">
                                        1000+ Doubts
                                    </h3>
                                    <p className="text-xl md:text-2xl font-medium text-white mb-4">are resolved within</p>
                                    <div className="relative inline-block w-fit">
                                        <h3 className="text-[40px] md:text-[52px] font-bold leading-tight text-white mb-2">
                                            15 minutes Everyday !
                                        </h3>
                                        {/* Hand-drawn style yellow underline */}
                                        <div className="absolute -bottom-1 left-0 w-[105%] h-[4px] bg-[#f59e0b] rounded-full transform -rotate-[0.8deg] opacity-90"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Graphic Side */}
                            <div className="relative p-6 flex justify-center items-center min-h-[340px]">
                                <img
                                    src={speedImg}
                                    alt="Speed"
                                    className="w-full h-auto max-w-[540px] object-contain relative z-10"
                                />
                                {/* Soft glow behind image */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DoubtClarification;
