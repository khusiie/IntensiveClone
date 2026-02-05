import React from 'react';

const TrustSection = () => {
    const companies = [
        'Google', 'Amazon', 'Microsoft', 'Goldman Sachs',
        'Oracle', 'Adobe', 'Samsung', 'LTI Mindtree',
        'Capgemini', 'TCS', 'Infosys', 'Wipro'
    ];

    return (
        <section className="bg-slate-50 py-16 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-slate-900">Your Trainers are Alumni of</h2>
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex gap-8 w-max animate-[scroll_40s_linear_infinite]">
                        {/* Double the logos for seamless infinite scroll animation */}
                        {[...companies, ...companies].map((company, index) => (
                            <div key={index} className="bg-white px-10 py-4 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-500 text-xl whitespace-nowrap min-w-[200px] flex items-center justify-center">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
                <p className="mt-12 text-center text-slate-500 font-medium">and 2000+ more companies...</p>
            </div>
        </section>
    );
};

export default TrustSection;
