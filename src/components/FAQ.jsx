import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-white border border-slate-200 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 hover:shadow-md"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="px-6 py-5 flex justify-between items-center bg-transparent">
                <span className="text-[17px] font-bold text-[#183b56]">{question}</span>
                <span className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("Training Details");

    const categoryData = {
        "Training Details": [
            {
                question: "What is the duration of the program?",
                answer: "The Fundamentals phase usually takes 2 months, followed by a 6-month job track, either MERN Full Stack or Java Full Stack. While learning, you’ll work on multiple real-world projects to build a portfolio that you can showcase to recruiters, and you’ll also receive continuous placement support until you secure a job, including resume guidance, mock interviews, and interview preparation. The program is self-paced, so you can learn at your own convenience."
            },
            {
                question: "What is the NxtWave Intensive curriculum? Why is it so successful in getting tech jobs?",
                answer: "Reverse-engineered and industry-aligned by gathering insights from 3,000+ hiring companies. It takes you from zero to building real-world projects."
            },
            {
                question: "Why is NxtWave's Intensive program so effective?",
                answer: "Complete ecosystem with Learn → Practice → Apply cycle, 24x7 lab access, live doubt support (11 AM – 8 PM), and dedicated success coaches."
            },
            {
                question: "How flexible are the timings of NxtWave Intensive program?",
                answer: "You have complete flexibility to learn at your convenient time and pace. Only live webinars have fixed schedules (mostly weekends/evenings)."
            },
            {
                question: "How can I clarify my doubts while learning?",
                answer: "Get help through live doubt sessions and discussion forums with domain experts available from 11 AM to 8 PM daily."
            },
            {
                question: "Why is it recommended that you learn right from fundamentals at NxtWave Intensive?",
                answer: "Solid foundations allow you to master advanced concepts faster. Our non-conventional teaching builds a developer thinking pattern."
            },
            {
                question: "How can I learn along with my college or office?",
                answer: "Our learning platform is self-paced. You can learn after working hours, regular college hours, or during weekends."
            }
        ],
        "Eligibility": [
            {
                question: "Who can join the program?",
                answer: "Anyone looking for a tech job can join. Degree, branch, marks, or backlogs are not barriers. We teach from scratch."
            },
            {
                question: "Are non-CS branch students eligible?",
                answer: "Yes, graduates from Mech, Civil, ECE, EEE, and other branches successfully transition to tech roles through this program."
            }
        ],
        "Placement Support": [
            {
                question: "How long will I receive placement support?",
                answer: "Continuous support until you secure a job, including rescue assistance, mock interviews, and access to 2000+ hiring companies."
            }
        ],
        "IRC": [
            {
                question: "What is Industry Ready Certification (IRC)?",
                answer: "IRC represents your readiness for a job, jointly certified by NxtWave and NSDC (Govt. of India)."
            }
        ],
        "Fee": [
            {
                question: "Are there EMI options available?",
                answer: "Yes, EMI support is available for various options to make the program accessible for everyone."
            }
        ]
    };

    const categories = Object.keys(categoryData);

    return (
        <section id="faq" className="py-24 bg-[#fff]">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-[48px] font-bold text-[#183b56] mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
                    {/* Categories Tab List */}
                    <div className="flex flex-row lg:flex-col gap-4 lg:gap-2 border-b lg:border-b-0 lg:border-l border-slate-200 pb-4 lg:pb-0 overflow-x-auto lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-left px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-bold transition-all relative flex-shrink-0 whitespace-nowrap ${activeCategory === cat
                                    ? 'text-[#5046e5]'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {activeCategory === cat && (
                                    <>
                                        {/* Desktop Indicator (Left Line) */}
                                        <div className="hidden lg:block absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[#5046e5]"></div>
                                        {/* Mobile Indicator (Bottom Line) */}
                                        <div className="block lg:hidden absolute left-0 bottom-0 w-full h-[2px] bg-[#5046e5]"></div>
                                    </>
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="space-y-4">
                        {categoryData[activeCategory].map((faq, index) => (
                            <FAQItem key={`${activeCategory}-${index}`} {...faq} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
