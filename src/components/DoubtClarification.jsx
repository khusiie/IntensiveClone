import React from 'react';

const DoubtClarification = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="doubts">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Heading Area */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#183b56] leading-[1.1] mb-6">
                        Get Your <span className="relative inline-block">
                            Doubts Clarified
                            <div className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-[#7c3aed] rounded-full opacity-60"></div>
                        </span> <br />
                        Faster than in Offline Classes
                    </h2>
                    <p className="text-base text-slate-500 font-bold max-w-[800px]">
                        Our highly motivated team of experts are ready to help you with your doubts from <span className="text-[#183b56]">9AM - 9PM Everyday</span>
                    </p>
                </div>

                {/* Cards Container */}
                <div className="space-y-10">

                    {/* Mentor Support Card */}
                    <div className="relative bg-white rounded-[32px] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] items-center">
                            {/* Graphic Side */}
                            <div className="relative p-8 md:p-12 flex justify-center bg-gradient-to-br from-indigo-50/50 via-white to-transparent">
                                <img
                                    src="https://assets.ccbp.in/frontend/react-js/doubts-mentors-img.png"
                                    alt="Mentors"
                                    className="w-[280px] h-auto transform transition-transform group-hover:scale-105"
                                />
                                {/* Dynamic rays background effect */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.2)_0%,transparent_70%)]"></div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12">
                                <h3 className="text-3xl font-black text-[#183b56] mb-4">
                                    1500+ Mentors to Resolve Your Doubts
                                </h3>
                                <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                                    Including Subject Matter Experts, IITians, Teaching Assistants, NxtWave Alumni, etc.
                                </p>
                                <button className="bg-[#7c3aed] text-white px-10 py-4 font-black text-lg rounded-2xl shadow-[0_12px_24px_-8px_rgba(124,58,237,0.5)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                                    Book a free Demo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Resolution Speed Card */}
                    <div className="relative bg-[#021532] rounded-[32px] overflow-hidden group">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500 blur-[100px]"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center text-white relative">
                            {/* Text Content */}
                            <div className="p-10 md:p-16">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[40px] md:text-[50px] font-black leading-tight text-white italic">
                                        <span className="text-[#fb923c]">1000+ Doubts</span>
                                    </h3>
                                    <p className="text-2xl font-bold opacity-90">are resolved within</p>
                                    <h3 className="text-[42px] md:text-[52px] font-black leading-tight text-white border-b-4 border-[#fb923c] inline-block w-fit pb-1">
                                        15 minutes Everyday !
                                    </h3>
                                </div>
                            </div>

                            {/* Graphic Side */}
                            <div className="relative p-8 flex justify-center items-end min-h-[300px]">
                                <img
                                    src="https://assets.ccbp.in/frontend/react-js/doubts-speed-img.png"
                                    alt="Speed"
                                    className="w-[340px] h-auto transform transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-700"
                                />
                                {/* Floating cloud elements would be absolute here if they were separate assets */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DoubtClarification;
