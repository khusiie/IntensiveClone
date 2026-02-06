import React, { useState } from 'react';
import scholarshipImage from '../assets/pricing/image.png';
import lockIcon from '../assets/pricing/image copy.png';
import javaIcon from '../assets/pricing/image copy 2.png';
import mernIcon from '../assets/pricing/image copy 3.png';
import dataIcon from '../assets/pricing/image copy 4.png';
import qaIcon from '../assets/pricing/image copy 5.png';

const PricingSection = () => {
    const [plan, setPlan] = useState('post-paid');

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1800px] mx-auto px-6">
                <h2 className="text-5xl font-bold text-[#183b56] mb-8">Your Success is our Success</h2>

                <div className="flex items-center gap-2 mb-8 text-[#183b56] font-bold text-2xl">
                    <span className="text-yellow-500 text-xl">👉</span>
                    Choose your Payment Plan
                </div>

                {/* Plan Toggle */}
                <div className="flex bg-[#e2e8f080] p-1 rounded-lg w-fit mb-10">
                    <button
                        onClick={() => setPlan('post-paid')}
                        className={`px-8 py-2 rounded-md font-bold text-sm transition-all ${plan === 'post-paid' ? 'bg-white text-[#183b56] shadow-sm' : 'text-slate-500'}`}
                    >
                        Post-paid
                    </button>
                    <button
                        onClick={() => setPlan('pre-paid')}
                        className={`px-8 py-2 rounded-md font-bold text-sm transition-all ${plan === 'pre-paid' ? 'bg-white text-[#183b56] shadow-sm' : 'text-slate-500'}`}
                    >
                        Pre-paid
                    </button>
                </div>

                {/* Main Card */}
                <div className="border border-slate-200 rounded-2xl p-8 shadow-sm transition-all">
                    <h3 className="text-xl font-bold text-[#183b56] mb-10">What's included ?</h3>

                    {plan === 'post-paid' ? (
                        <div className="space-y-6">
                            {/* Inclusions Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
                                <div className="flex gap-3 items-center">
                                    <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                        <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-[#475569]">Fundamentals of IT</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                        <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-[#475569]">Unlimited opportunities from a pool of 3000+ companies</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                        <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-[#475569]">9AM - 9PM Doubt Clarification.</p>
                                        <p className="text-sm text-slate-500 mt-0.5">1500+ Mentors to help you.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                        <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                    </div>
                                    <div className="flex flex-col gap-4 w-full">
                                        <p className="text-lg font-medium text-[#475569]">Multiple Job Tracks</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 p-2 px-4 border border-blue-100 rounded-full w-fit">
                                                <img src={javaIcon} className="h-6 w-6 object-contain" alt="Java" />
                                                <span className="text-base font-medium text-[#475569]">Java Full Stack</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 px-4 border border-blue-100 rounded-full w-fit">
                                                <img src={mernIcon} className="h-6 w-6 object-contain" alt="MERN" />
                                                <span className="text-base font-medium text-[#475569]">MERN Full Stack</span>
                                            </div>
                                            <div className="p-3 border border-blue-100 rounded-xl relative">
                                                <div className="flex items-center gap-2">
                                                    <img src={dataIcon} className="h-6 w-6 object-contain" alt="Data Analytics" />
                                                    <span className="text-base font-medium text-[#475569]">Data Analytics</span>
                                                </div>
                                                <div className="text-[12px] text-[#D97706] font-medium mt-1 flex items-center gap-1">
                                                    <img src={lockIcon} alt="" className="w-4 h-4" /> Seats filled. Next batch starts on 01 Jul 2026
                                                </div>
                                            </div>
                                            <div className="p-3 border border-blue-100 rounded-xl relative">
                                                <div className="flex items-center gap-2">
                                                    <img src={qaIcon} className="h-6 w-6 object-contain" alt="QA" />
                                                    <span className="text-base font-medium text-[#475569]">QA / Automation Testing</span>
                                                </div>
                                                <div className="text-[12px] text-[#D97706] font-medium mt-1 flex items-center gap-1">
                                                    <img src={lockIcon} alt="" className="w-4 h-4" /> Seats filled. Next batch starts on 01 Jul 2026
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                        <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-[#475569] mb-3">Placement Support</p>
                                        <ul className="text-sm text-slate-500 space-y-1.5 list-disc ml-4">
                                            <li>Aptitude Training</li>
                                            <li>Soft Skills Training</li>
                                            <li>Resume Preparation</li>
                                            <li>AI-Powered Mock Interviews</li>
                                            <li>Mock Interviews by Tech and HR Panels</li>
                                            <li>300+ Senior Interview Experiences</li>
                                            <li>Scheduling Interviews</li>
                                            <li>Access to Placement Portal</li>
                                            <li>Mega Offline Placement Drives</li>
                                            <li>Negotiation with companies for higher salaries</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex gap-3 items-center">
                                        <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                            <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-[#475569]">10+ Real-time Projects for strong resume</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                            <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-[#475569]">24/7 Online Lab Access</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                            <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">NxtWave Intensive is not a Job Guarantee Program. ⓘ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex gap-3 items-center">
                                        <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                            <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-md font-medium text-[#475569]">3 Hours classes and 3 Hours Labs Everyday</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <div className=" rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 aspect-square">
                                            <svg className="w-12 h-12 p-2 bg-blue-100 rounded-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-md font-medium text-[#475569]">Trainers: IIT alumni & Top MNCs like Amazon, Microsoft</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Horizontal Line */}
                            <div className="border-t border-slate-100 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="flex items-center gap-8">
                                    <div className="flex flex-col">
                                        <span className="text-slate-400 text-sm font-bold line-through">₹75,000/-</span>
                                        <span className="text-3xl font-extrabold text-[#183b56] mt-1">₹49,000/-</span>
                                        <span className="text-[11px] text-slate-400 font-bold">Non-refundable Upfront Fee</span>
                                    </div>
                                    <div className="text-4xl text-[#5046e5] font-bold">+</div>
                                    <div className="flex flex-col">
                                        <span className="text-xl font-bold text-[#183b56]">12% of Annual CTC</span>
                                        <span className="text-[11px] text-slate-400 font-bold mt-1">Pay after you get a job</span>
                                    </div>
                                </div>
                                <div className="relative border border-slate-200 rounded-2xl p-6 pr-20 bg-[#f8fafc] flex flex-col gap-1">
                                    <div
                                        className="absolute -top-3 left-0 text-white text-[10px] uppercase font-bold px-4 py-1.5 flex items-center"
                                        style={{
                                            backgroundImage: 'url(https://cdn.prod.website-files.com/6413e0030367922facca6873/641bfef222ca746d6bd6ece3_Slice%201.png)',
                                            backgroundSize: '100% 100%',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        Additional Scholarships Up To
                                    </div>
                                    <div className="text-2xl font-bold text-[#5046e5] mt-3">₹16,000/-</div>
                                    <a href="#" className="text-[12px] text-orange-500 font-semibold flex items-center gap-1 hover:text-orange-600 transition-colors">
                                        Book a Free Demo to know more.
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                        <img src={scholarshipImage} className="w-20 h-20 object-contain" alt="Scholarship" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-10">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-2xl font-bold text-[#5046e5]">Everything in Postpaid</h4>
                                <div className="text-3xl text-[#5046e5] font-bold">+</div>
                                <p className="text-slate-600 text-sm max-w-md leading-relaxed">
                                    After you complete the course, if you don't get a job, the amount paid will be refunded with a deduction <span className="text-blue-500 cursor-pointer">(Terms and Conditions Apply)</span>.
                                </p>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-slate-400 font-bold line-through mb-1">₹1,50,000/-</span>
                                <span className="text-4xl font-extrabold text-[#183b56]">₹90,000/-</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Buttons */}
                <div className="mt-10 flex flex-col items-left gap-6">
                    <div className="flex items-left gap-2">
                        <input type="radio" checked readOnly className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-slate-800">Next batch starts on Feb 9th</span>
                    </div>

                    <div className="flex flex-wrap justify-left gap-6">
                        <button className="bg-[#7c3aed] text-white px-12 py-3 rounded-xl font-bold shadow-lg shadow-purple-200 hover:bg-[#6d28d9] transition-all">
                            Book a Free Demo
                        </button>
                        <button className="border-2 border-primary text-primary px-10 py-3 rounded-xl font-bold hover:bg-primary/5 transition-all">
                            Book Your Seat for 2000/-
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
