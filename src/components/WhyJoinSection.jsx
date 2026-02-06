import React from 'react';
import nsdcLogo from '../assets/join/image.png';
import nasscomLogo from '../assets/join/image copy.png';

const WhyJoinSection = () => {
    const comparisonData = [
        {
            feature: "Curriculum",
            intensive2: "Designed as per companies' current requirements",
            others: "Not industry-aligned"
        },
        {
            feature: "Doubts Clarification",
            intensive2: "9AM - 9PM Doubt Clarification. 1500+ Mentors to help you.",
            others: "Only 1-2 hours per day"
        },
        {
            feature: "Trainers",
            intensive2: "Alumni of IIT & Top MNCs like Amazon, Microsoft. Built world-class products",
            others: "No real world project experience"
        },
        {
            feature: "Placements Record",
            intensive2: "Proven results for every branch, degree, CGPA",
            others: "For only select branches, degrees"
        },
        {
            feature: "Placements Opportunities",
            intensive2: "Unlimited from a pool of 3000+ companies",
            others: "Limited (15-20)"
        },
        {
            feature: "Institute Recognised by",
            intensive2: (
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xs text-slate-500 font-medium">Recognized by</p>
                    <div className="flex items-center gap-4">
                        <img
                            src={nsdcLogo}
                            alt="NSDC"
                            className="h-6 object-contain"
                        />
                        <img
                            src={nasscomLogo}
                            alt="NASSCOM"
                            className="h-4 object-contain"
                        />
                    </div>
                </div>
            ),
            others: "No recognition"
        },
        {
            feature: "Projects",
            intensive2: "10+ Real-time Projects that makes your resume strong",
            others: "~1-2 real time projects"
        },
        {
            feature: "Access to Labs",
            intensive2: "24*7 Online State-of-the-art Labs. No installation/setup needed.",
            others: "Only 2 hours/day"
        },
        {
            feature: "AI Mock Interviews",
            intensive2: "with NxtMock",
            others: "cross"
        },
        {
            feature: "Expert Mock Interviews",
            intensive2: "with Dedicated Tech & HR Panels",
            others: "cross"
        },
        {
            feature: "Seniors' Interview Experiences",
            intensive2: "Access to 300+ Sessions",
            others: "cross"
        },
        {
            feature: "Scheduling Interviews",
            intensive2: "check",
            others: "cross"
        },
        {
            feature: "Salary Negotiation with Companies",
            intensive2: (
                <div className="flex flex-col items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-xs font-medium text-slate-600">For higher salaries</span>
                </div>
            ),
            others: "cross"
        }
    ];

    const renderCellContent = (content) => {
        if (content === "check") {
            return (
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
            );
        }
        if (content === "cross") {
            return (
                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
            );
        }
        return content;
    };

    return (
        <section className="py-20 bg-white overflow-hidden scroll-mt-20" id="why-intensive">
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-[#183b56] mb-12 text-center md:text-left">
                    Why Join Intensive?
                </h2>

                <div className="relative overflow-x-auto pb-8">
                    <div className="min-w-[800px]">
                        {/* Table Header */}
                        <div className="flex items-end text-center font-bold text-sm mb-4">
                            <div className="w-[25%] px-4"></div>
                            <div className="w-[37.5%] bg-[#7c3aed] text-white py-4 rounded-t-2xl shadow-[0_-4px_20px_-5px_rgba(124,58,237,0.3)] border-x-2 border-t-2 border-[#7c3aed]">
                                Intensive 2.0
                            </div>
                            <div className="w-[37.5%] bg-[#e2e8f0] text-slate-600 py-4 rounded-t-2xl border-x-2 border-t-2 border-[#e2e8f0] ml-2">
                                Other Coaching Institutes
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                            {comparisonData.map((row, index) => (
                                <div
                                    key={index}
                                    className={`flex items-stretch border-b border-slate-100 last:border-0 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                                >
                                    {/* Feature Name */}
                                    <div className="w-[25%] p-5 text-[15px] font-bold text-slate-600 flex items-center bg-slate-50 border-r border-slate-200">
                                        {row.feature}
                                    </div>

                                    {/* Intensive 2.0 Column */}
                                    <div className="w-[37.5%] p-5 text-[15px] font-bold text-[#183b56] text-center flex items-center justify-center border-x-2 border-[#7c3aed] relative bg-white">
                                        {renderCellContent(row.intensive2)}
                                    </div>

                                    {/* Others Column */}
                                    <div className="w-[37.5%] p-5 text-[15px] font-medium text-slate-500 text-center flex items-center justify-center ml-2">
                                        {renderCellContent(row.others)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Component inside WhyJoinSection */}
                <div className="flex flex-col items-left mt-12 gap-10">
                    <div className="flex flex-col items-left gap-8 w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse"></div>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Next batch starts on Feb 9th</span>
                        </div>

                        <div className="flex flex-wrap justify-left gap-6">
                            <button className="bg-[#7c3aed] text-white px-6 py-2 rounded-2xl font-medium text-md shadow-[0_15px_30px_-5px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                                Book a Free Demo
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyJoinSection;
