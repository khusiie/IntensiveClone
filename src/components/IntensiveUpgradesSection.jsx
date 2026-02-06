import React from 'react';
import liveIcon from '../assets/Fourth/image copy.png';
import coachIcon from '../assets/Fourth/image copy 2.png';
import managerIcon from '../assets/Fourth/image.png';
import drivesIcon from '../assets/Fourth/image copy 3.png';

const IntensiveUpgradesSection = () => {
    const features = [
        {
            icon: liveIcon,
            title: 'Live Sessions (Monday to Friday)',
            description: 'To learn coding best practices, get interview tips, discuss doubts and more from experts.'
        },
        {
            icon: coachIcon,
            title: 'Dedicated Success Coach for Every Student',
            description: 'To guide you and ensure a smooth learning journey'
        },
        {
            icon: managerIcon,
            title: 'Placement Success Manager',
            description: 'To give feedback on your interview performance and boost your confidence'
        },
        {
            icon: drivesIcon,
            title: 'Mega Offline Placement Drives',
            description: 'Once in every 3 months'
        }
    ];

    return (
        <section className="py-24 bg-white" id="intensive-upgrades">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* NEW Badge - Left aligned */}
                <div className="flex justify-start mb-6 ml-2">
                    <span className="bg-[#ef4444] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        NEW
                    </span>
                </div>

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-[46px] font-black text-[#183b56] leading-[1.15]">
                        The All New Intensive 3.0 Upgrades to
                    </h2>
                    <h2 className="text-4xl md:text-[46px] font-black text-[#183b56] leading-[1.15] relative inline-block mt-2">
                        Supercharge Your Career
                        <svg className="absolute -bottom-3 left-0 w-full" height="8" viewBox="0 0 300 8" preserveAspectRatio="none">
                            <path d="M0,4 Q75,8 150,4 T300,4" stroke="#7c3aed" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
                        </svg>
                    </h2>
                </div>

                {/* Features Grid - 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 mb-16">
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                            <div className="relative flex-shrink-0">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-14 h-14 object-contain transition-transform group-hover:scale-110"
                                />
                                {feature.badge && (
                                    <span className={`absolute -top-1 -right-2 ${feature.badgeColor} text-white text-[8px] font-black px-2 py-0.5 rounded-full shadow-sm`}>
                                        {feature.badge}
                                    </span>
                                )}
                            </div>
                            <div>
                                <h3 className="text-[17px] font-black text-[#183b56] mb-1.5 leading-snug">{feature.title}</h3>
                                <p className="text-[14px] font-medium text-slate-400 leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show All Link */}
                <div className="text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-[#2563eb] font-bold text-[14px] hover:underline transition-all group">
                        Show all Upgrades
                        <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default IntensiveUpgradesSection;
