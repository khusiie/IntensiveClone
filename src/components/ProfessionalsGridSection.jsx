import companiesIcon from '../assets/Professional/image.png';
import packageIcon from '../assets/Professional/image copy.png';

const ProfessionalsGridSection = () => {
    const professionals = [
        { name: 'Sayak Dutta', role: 'Software Engineer', company: 'Google', logo: 'https://assets.ccbp.in/frontend/react-js/companies-google-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-9-img.png' },
        { name: 'Bharadhwaj', role: 'Software Engineer', company: 'amazon', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-amazon-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-1-img.png' },
        { name: 'Nikhil', role: 'Software Developer', company: 'SAMSUNG', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-samsung-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-2-img.png' },
        { name: 'Dinesh Varma', role: 'Software Engineer', company: 'wipro', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-wipro-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-5-img.png' },
        { name: 'Meghna Barnwl', role: 'Software Engineer', company: 'Flipkart', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-flipkart-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-6-img.png' },
        { name: 'Shailesh', role: 'Member Technical', company: 'JIO', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-jio-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-7-img.png' },
        { name: 'Sonali Kothapalli', role: 'Junior Data Analyst', company: 'ADF', logo: 'https://assets.ccbp.in/frontend/react-js/companies-needl-ai-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-4-img.png' },
        { name: 'Rahul Kumar', role: 'Software Developer', company: 'Jio', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-jio-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-8-img.png' },
        { name: 'Ranjith Tevnan', role: 'ML Engineer (Intern)', company: 'Disney+ Hotstar', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-hotstar-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-9-img.png' },
        { name: 'Jayant Mathur', role: 'Software Developer', company: 'TCS', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-tcs-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-12-img.png' },
        { name: 'Jayakar Reddy', role: 'Software Engineer', company: 'GEP', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-gep-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-13-img.png' },
        { name: 'Krishna Murthy', role: 'Software engineer', company: 'CYIENT', logo: 'https://assets.ccbp.in/frontend/react-js/professionals-cyient-img.png', image: 'https://assets.ccbp.in/frontend/react-js/professionals-14-img.png' }
    ];

    const row1 = professionals.slice(0, 4);
    const row2 = professionals.slice(4, 8);
    const row3 = professionals.slice(8, 12);

    const ProfessionalCard = ({ prof }) => (
        <div className="bg-white rounded-[20px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100/50 flex items-center gap-4 w-[340px] hover:shadow-xl transition-all duration-300 flex-shrink-0 group">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0">
                <img
                    src={prof.image}
                    alt={prof.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${prof.name}&background=6366f1&color=fff&bold=true` }}
                />
            </div>
            <div className="flex-grow min-w-0">
                <div className="mb-2">
                    <h4 className="font-bold text-[#1e293b] text-[16px] leading-tight truncate">{prof.name}</h4>
                    <p className="text-[13px] text-slate-500 font-medium truncate">{prof.role}</p>
                </div>
                <div className="h-6 flex items-center">
                    <img
                        src={prof.logo}
                        alt={prof.company}
                        className="h-full object-contain max-w-[110px] filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="hidden text-[11px] font-black text-slate-400 uppercase tracking-tight">{prof.company}</span>
                </div>
            </div>
        </div>
    );

    const MarqueeRow = ({ items, reverse = false, speed = "60s" }) => (
        <div className="flex w-full overflow-hidden py-2">
            <div
                className={`flex gap-6 w-max items-center animate-scroll-horizontal ${reverse ? 'flex-row-reverse' : ''}`}
                style={{ animationDuration: speed }}
            >
                {[...items, ...items, ...items, ...items, ...items].map((prof, idx) => (
                    <ProfessionalCard key={idx} prof={prof} />
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-[#f8fbff] overflow-hidden" id="professionals">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">

                {/* Left Column: Title & Stats */}
                <div className="flex flex-col gap-10 lg:pl-10">
                    <div>
                        <h2 className="text-4xl md:text-[56px] font-bold text-[#334155] leading-[1.1] mb-12 tracking-tight">
                            Trusted by <span className="relative inline-block">
                                Thousands
                                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#7c3aed] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                                </svg>
                            </span> to Become IT Professionals
                        </h2>

                        <div className="space-y-12">
                            <div className="flex items-center gap-6">
                                <img src={companiesIcon} alt="Companies" className="h-16 md:h-20 w-auto object-contain" />
                                <div>
                                    <p className="text-3xl font-bold text-[#2563eb] leading-none mb-2">2000+ Companies</p>
                                    <p className="text-[16px] font-medium text-slate-500">Hired NxtWave Learners</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <img src={packageIcon} alt="Package" className="h-16 md:h-20 w-auto object-contain" />
                                <div>
                                    <p className="text-3xl font-bold text-[#2563eb] leading-none mb-2">₹38 LPA</p>
                                    <p className="text-[16px] font-medium text-slate-500">Highest package</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 mt-8">
                        <div className="flex items-center gap-3">
                            <div className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.4)]"></div>
                            <span className="text-[17px] font-medium text-slate-600">Next batch starts on Feb 9th</span>
                        </div>

                        <div className="flex flex-wrap gap-5">
                            <button className="bg-[#7c3aed] text-white px-12 py-4 rounded-xl font-bold text-[18px] shadow-[0_8px_30px_-8px_rgba(124,58,237,0.5)] hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1 active:scale-95">
                                Book a Free Demo
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Clean Horizontal Marquee */}
                <div className="relative">
                    <div className="flex flex-col gap-6 xl:translate-x-12">
                        <MarqueeRow items={row1} speed="120s" />
                        <MarqueeRow items={row2} reverse speed="140s" />
                        <MarqueeRow items={row3} speed="130s" />
                    </div>

                    {/* Visual Overlays for seamless look */}
                    <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#f8fbff] via-[#f8fbff]/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#f8fbff] via-[#f8fbff]/80 to-transparent z-10 pointer-events-none"></div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scroll-horizontal {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-20%); }
                }
                .animate-scroll-horizontal {
                    animation: scroll-horizontal linear infinite;
                }
                .flex-row-reverse.animate-scroll-horizontal {
                    animation-direction: reverse;
                }
            `}} />
        </section>
    );
};

export default ProfessionalsGridSection;
