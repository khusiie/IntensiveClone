import React from 'react';

const CertificateSection = () => {
    const features = [
        {
            icon: (
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center p-3">
                    <img src="https://assets.ccbp.in/frontend/react-js/irc-icon-img.png" alt="IRC" className="w-full" onError={(e) => { e.target.src = 'https://img.icons8.com/color/96/certificate.png' }} />
                </div>
            ),
            title: "Industry-Ready Certification [IRC]",
            description: "Unlike any academic certificate, for the first-time in India, IRC certifies your job readiness."
        },
        {
            icon: (
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center p-3 font-bold text-orange-500">
                    <svg className="w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                </div>
            ),
            title: "Shareable, Credible and Official",
            description: "Add it to your LinkedIn, share it on Twitter & WhatsApp, or via Email. Make your profile stand out everywhere."
        },
        {
            icon: (
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center p-3">
                    <svg className="w-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" /></svg>
                </div>
            ),
            title: "Let companies compete for you",
            description: "IRC certifies your industry-readiness and gets you placed with higher salaries."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden" id="certificates">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Details */}
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="text-4xl font-extrabold text-[#183b56] mb-4 relative inline-block">
                            Get Certified
                            <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#7c3aed] rounded-full"></div>
                        </h2>
                        <p className="text-slate-600 text-[17px] leading-relaxed mt-6 max-w-lg">
                            Yes, you'll get a certificate representing your Industry Readiness once you submit your projects and clear the pre placement test.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 mt-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-6 group">
                                <div className="flex-shrink-0 transition-transform group-hover:scale-110">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#183b56] mb-1">{feature.title}</h3>
                                    <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse"></div>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Batch starts today</span>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#7c3aed] text-white px-10 py-3.5 rounded-xl font-bold text-base shadow-[0_8px_20px_-5px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                                Enroll Now
                            </button>
                            <button className="border-2 border-[#7c3aed] text-[#7c3aed] px-8 py-3.5 rounded-xl font-bold text-base hover:bg-slate-50 transition-all transform hover:-translate-y-1">
                                Book a Free Demo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Certificate Image */}
                <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-white p-2 border border-slate-100 group">
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/intensive-learning-certificate-img.png"
                            alt="NxtWave Certificate"
                            className="w-full h-auto rounded-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                            onError={(e) => { e.target.src = 'https://assets.ccbp.in/frontend/react-js/certified-img.png' }}
                        />
                        {/* Decorative background elements */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse transition-delay-1000"></div>
                    </div>

                    {/* Verified Badge Hover Effect */}
                    <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-tr from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center p-3 shadow-xl transform rotate-12 -translate-y-2 translate-x-2 animate-bounce-slow">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[10px] font-black uppercase tracking-tighter text-yellow-900 border-b border-yellow-800/20">Verified</span>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-2 h-2 text-yellow-900" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes bounce-slow {
                    0%, 100% { transform: translate(8px, -8px) rotate(12deg); }
                    50% { transform: translate(8px, -12px) rotate(10deg); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s infinite ease-in-out;
                }
            `}} />
        </section>
    );
};

export default CertificateSection;
