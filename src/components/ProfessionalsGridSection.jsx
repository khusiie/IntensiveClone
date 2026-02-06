import React from 'react';
import companiesIcon from '../assets/Professional/image.png';
import packageIcon from '../assets/Professional/image copy.png';

const professionals = [
    { name: 'Yalla Sivaram', role: 'Assoc. Software Engineer', company: 'BOSCH', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-bosch-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-1-img.png' },
    { name: 'Maddineni Bhargava', role: 'ML Engineer (Intern)', company: 'Microsoft', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-microsoft-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-2-img.png' },
    { name: 'Manvendra Shah', role: 'Associate Product Manager', company: 'aha!', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-aha-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-3-img.png' },
    { name: 'Kasa Kiranmai', role: 'Intern Analyst', company: 'Deloitte', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-deloitte-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-4-img.png' },
    { name: 'Surya Sai', role: 'System Engineer Trainee', company: 'Infosys', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-infosys-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-5-img.png' },
    { name: 'Vineet Singla', role: 'Analyst', company: 'Goldman Sachs', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-goldman-sachs-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-6-img.png' },
    { name: 'Hetarth Dave', role: 'Secured Internship', company: 'mastercard', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-mastercard-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-7-img.png' },
    { name: 'Syed Basha', role: 'Trainee software engineer', company: 'GlobalLogic', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-globallogic-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-8-img.png' },
    { name: 'Gulshan Mohiddin', role: 'Associate Process Analyst', company: 'DELHIVERY', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-delhivery-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-9-img.png' },
    { name: 'Soumya Ranjan', role: 'Technical Analyst', company: 'Citi', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-citi-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-10-img.png' }
];

const row1 = professionals.slice(0, 3);
const row2 = professionals.slice(3, 6);
const row3 = professionals.slice(6, 9);
const row4 = [professionals[9], professionals[0], professionals[1]]; // Mix for variety

const ProfessionalCard = ({ prof }) => (
    <div className="bg-white rounded-[12px] p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-slate-100/40 flex flex-col gap-0.5 w-[105px] h-[65px] hover:shadow-md transition-all duration-300 flex-shrink-0">
        <div className="flex items-start gap-1">
            <div className="w-5 h-5 rounded-full overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0">
                <img
                    src={prof.image}
                    alt={prof.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${prof.name}&background=6366f1&color=fff` }}
                />
            </div>
            <div className="min-w-0">
                <h4 className="font-bold text-[#1e293b] text-[7.5px] leading-tight truncate">{prof.name}</h4>
                <p className="text-[6.5px] text-slate-500 font-medium truncate">{prof.role}</p>
            </div>
        </div>

        <div className="mt-auto flex items-center h-3">
            <img
                src={prof.logo}
                alt={prof.company}
                className="max-h-full max-w-[40px] object-contain object-left"
            />
        </div>
    </div>
);

const MarqueeRow = ({ items, reverse = false, speed = "40s" }) => (
    <div className="flex w-full overflow-hidden py-1.5">
        <div
            className={`flex gap-4 w-max items-center animate-marquee-right whitespace-nowrap will-change-transform ${reverse ? 'flex-row-reverse' : ''}`}
            style={{ animationDuration: speed }}
        >
            {/* Increase duplication for smoother 50% loop */}
            {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items].map((prof, idx) => (
                <ProfessionalCard key={idx} prof={prof} />
            ))}
        </div>
    </div>
);

const ProfessionalsGridSection = () => {

    return (
        <section className="py-24 bg-[#f1f6ff] overflow-hidden" id="professionals">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 items-start">

                {/* Left Column: Heading & Stats */}
                <div className="flex flex-col gap-12 lg:pt-8">
                    <div className="relative">
                        <h2 className="text-[42px] md:text-[5xl] font-bold text-[#1e293b] leading-[1.05] tracking-tight">
                            Trusted by Thousands
                            to<br />
                            Become IT
                            Professionals
                        </h2>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 p-3">
                                <img src={companiesIcon} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="text-[22px] font-bold text-[#2563eb] leading-tight mb-1">2000+ Companies</h4>
                                <p className="text-[16px] font-medium text-slate-500">Hired NxtWave Learners</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 p-3">
                                <img src={packageIcon} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="text-[22px] font-bold text-[#2563eb] leading-tight mb-1">₹38 LPA</h4>
                                <p className="text-[16px] font-medium text-slate-500">Highest package</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                            <span className="text-[17px] font-medium text-slate-600">Next batch starts on Feb 9th</span>
                        </div>

                        <button className="w-full md:w-fit bg-[#7c3aed] text-white px-10 py-4 rounded-xl font-bold text-[18px] shadow-[0_10px_25px_-5px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] transition-all active:scale-[0.98]">
                            Book a Free Demo
                        </button>
                    </div>
                </div>

                {/* Right Column: Sliding Grid of Cards */}
                <div className="relative lg:mt-[180px]">
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
