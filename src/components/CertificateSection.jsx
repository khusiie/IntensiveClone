import React from 'react';
import certificateImage from '../assets/certified/image.png';
import icon1 from '../assets/certified/image copy.png';
import icon2 from '../assets/certified/image copy 2.png';
import icon3 from '../assets/certified/image copy 3.png';

const CertificateSection = () => {
    const features = [
        {
            iconSrc: icon1,
            title: "Industry-Ready Certification [IRC]",
            description: "Unlike any academic certificate, for the first-time in India, IRC certifies your job readiness."
        },
        {
            iconSrc: icon2,
            title: "Shareable, Credible and Official",
            description: "Add it to your LinkedIn, share it on Twitter & WhatsApp, or via Email. Make your profile stand out everywhere."
        },
        {
            iconSrc: icon3,
            title: "Let companies compete for you",
            description: "IRC certifies your industry-readiness and gets you placed with higher salaries."
        }
    ];

    return (
        <section className="py-12 md:py-24 bg-white overflow-hidden" id="certificates">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Left Column: Details */}
                <div className="flex flex-col gap-8 md:gap-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#183b56] mb-4 relative inline-block">
                            Get Certified
                            <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#7c3aed] rounded-full"></div>
                        </h2>
                        <p className="text-slate-600 text-[15px] md:text-[17px] leading-relaxed mt-4 md:mt-6 max-w-lg">
                            Yes, you'll get a certificate representing your Industry Readiness once you submit your projects and clear the pre placement test.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 md:gap-5 mt-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4 md:gap-3 group">
                                <div className="flex-none w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform group-hover:scale-110">
                                    <img src={feature.iconSrc} alt={feature.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-lg font-bold text-[#183b56] mb-1">{feature.title}</h3>
                                    <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 mt-4">
                        <div className="flex items-left gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse"></div>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                Next batch starts on Feb 9th</span>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#7c3aed] text-white px-10 py-3.5 rounded-xl font-bold text-base shadow-[0_8px_20px_-5px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1">
                                Book a Free Demo
                            </button>

                        </div>
                    </div>
                </div>

                {/* Right Column: Certificate Image */}
                <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] bg-white p-2 border border-slate-100 group">
                        <img
                            src={certificateImage}
                            alt="NxtWave Certificate"
                            className="w-full h-auto rounded-xl transform transition-transform duration-700 group-hover:scale-[1.02]"
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
