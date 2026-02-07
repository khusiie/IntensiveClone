import React from 'react';
import companiesIcon from '../assets/Professional/companies_icon.png';
import packageIcon from '../assets/Professional/package_icon.png';
import commonLogo from '../assets/Professional/logo/image.png';

const professionals = [
    { name: 'Yalla Sivaram', role: 'Assoc. Software Engineer', company: 'BOSCH', logo: commonLogo, image: commonLogo },
    { name: 'Maddineni Bhargava', role: 'ML Engineer (Intern)', company: 'Microsoft', logo: commonLogo, image: commonLogo },
    { name: 'Manvendra Shah', role: 'Associate Product Manager', company: 'aha!', logo: commonLogo, image: commonLogo },
    { name: 'Kasa Kiranmai', role: 'Intern Analyst', company: 'Deloitte', logo: commonLogo, image: commonLogo },
    { name: 'Surya Sai', role: 'System Engineer Trainee', company: 'Infosys', logo: commonLogo, image: commonLogo },
    { name: 'Vineet Singla', role: 'Analyst', company: 'Goldman Sachs', logo: commonLogo, image: commonLogo },
    { name: 'Hetarth Dave', role: 'Secured Internship', company: 'mastercard', logo: commonLogo, image: commonLogo },
    { name: 'Syed Basha', role: 'Trainee software engineer', company: 'GlobalLogic', logo: commonLogo, image: commonLogo },
    { name: 'Gulshan Mohiddin', role: 'Associate Process Analyst', company: 'DELHIVERY', logo: commonLogo, image: commonLogo },
    { name: 'Soumya Ranjan', role: 'Technical Analyst', company: 'Citi', logo: commonLogo, image: commonLogo },
    { name: 'Vineet Singla', role: 'Analyst', company: 'Goldman Sachs', logo: commonLogo, image: commonLogo },
    { name: 'Syed Basha', role: 'Trainee software engineer', company: 'GlobalLogic', logo: commonLogo, image: commonLogo },
    { name: 'Maddineni Bhargava', role: 'ML Engineer (Intern)', company: 'Microsoft', logo: commonLogo, image: commonLogo },
    { name: 'Manvendra Shah', role: 'Associate Product Manager', company: 'aha!', logo: commonLogo, image: commonLogo },
    { name: 'Kasa Kiranmai', role: 'Intern Analyst', company: 'Deloitte', logo: commonLogo, image: commonLogo },
    { name: 'Surya Sai', role: 'System Engineer Trainee', company: 'Infosys', logo: commonLogo, image: commonLogo },

];

const ProfessionalCard = ({ prof }) => (
    <div className="
    bg-white rounded-xl px-3 py-2
    w-[160px] h-[90px]
    border border-slate-200
    shadow-[0_2px_8px_rgba(0,0,0,0.04)]
    flex items-start gap-2
  ">
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
            <img src={prof.image} alt={prof.name} className="w-full h-full object-cover" />
        </div>

        {/* Text */}
        <div className="min-w-0">
            <h4 className="text-sm font-semibold text-slate-900 truncate">
                {prof.name}
            </h4>
            <p className="text-xs text-slate-500 truncate">
                {prof.role}
            </p>

            <div className="mt-1 h-4">
                <img
                    src={prof.logo}
                    alt={prof.company}
                    className="h-full max-w-[80px] object-contain"
                />
            </div>
        </div>
    </div>
);


const row1 = professionals.slice(0, 4);
const row2 = professionals.slice(4, 8);
const row3 = professionals.slice(8, 12);
const row4 = professionals.slice(12, 16);

const MarqueeRow = ({ items, reverse = false, speed = "40s" }) => (
    <div className="flex w-full overflow-hidden py-2">
        <div
            className={`flex gap-6 w-max items-center animate-marquee-right whitespace-nowrap will-change-transform ${reverse ? 'flex-row-reverse' : ''}`}
            style={{ animationDuration: speed }}
        >
            {/* Duplicate items for seamless loop */}
            {[...items, ...items, ...items, ...items, ...items, ...items].map((prof, idx) => (
                <ProfessionalCard key={idx} prof={prof} />
            ))}
        </div>
    </div>
);

const ProfessionalsGridSection = () => {
    return (
        <section className="py-24 bg-[#f1f6ff] overflow-hidden" id="professionals">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-0 items-start">

                {/* Left Column */}
                <div className="flex flex-col gap-12 lg:pt-8">
                    <h2 className="text-[42px] md:text-[5xl] font-bold text-[#1e293b] leading-[1.05]">
                        Trusted by <span className="relative inline-block">
                            Thousands
                            <svg className="absolute left-0 -bottom-2 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 8C60 2 120 2 180 6C220 8 260 10 295 6" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span> to<br />Become IT Professionals
                    </h2>

                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 ">
                                <img src={companiesIcon} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="text-[22px] font-bold text-[#2563eb]">2000+ Companies</h4>
                                <p className="text-[16px] text-slate-500">Hired NxtWave Learners</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 ">
                                <img src={packageIcon} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="text-[22px] font-bold text-[#2563eb]">₹38 LPA</h4>
                                <p className="text-[16px] text-slate-500">Highest package</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-fit bg-[#7c3aed] text-white px-6 py-3 rounded-xl font-medium text-sm">
                        Book a Free Demo
                    </button>
                </div>

                {/* Right Column - Animated Marquee Rows */}
                <div className="relative lg:mt-24">
                    <div className="flex flex-col gap-3">
                        <MarqueeRow items={row1} speed="40s" />
                        <div className="ml-12 md:ml-16">
                            <MarqueeRow items={row2} reverse speed="40s" />
                        </div>
                        <div className="ml-6 md:ml-8">
                            <MarqueeRow items={row3} speed="40s" />
                        </div>
                        <div className="ml-10 md:ml-20">
                            <MarqueeRow items={row4} reverse speed="40s" />
                        </div>
                    </div>

                    {/* Fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f1f6ff] via-[#f1f6ff]/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f1f6ff] via-[#f1f6ff]/80 to-transparent z-10 pointer-events-none"></div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-right {
                    animation: marquee-right linear infinite;
                }
                .flex-row-reverse.animate-marquee-right {
                    animation-direction: reverse;
                }
            `}} />
        </section>
    );
};

export default ProfessionalsGridSection;
