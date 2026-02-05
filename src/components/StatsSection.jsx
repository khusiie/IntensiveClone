import React from 'react';

const StatsSection = () => {
    const stats = [
        { label: 'Highest Package', value: '44 LPA', sub: 'in Top MNCs' },
        { label: 'Learners Placed', value: '25,000+', sub: 'and counting' },
        { label: 'Companies Hired', value: '2000+', sub: 'across India' },
        { label: 'Avg Salary Hike', value: '120%', sub: 'for Career Starters' }
    ];

    return (
        <section id="stats" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Your Seniors Got Placed.<br />
                        <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">It’s Your Turn Now!</span>
                    </h2>
                    <p className="text-lg text-slate-600">Join thousands of NxtWave learners who have successfully transitioned into high-paying IT roles regardless of their background.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card text-center p-10 hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl font-black text-primary font-outfit mb-2">{stat.value}</div>
                            <div className="text-xl font-bold text-slate-900 mb-1">{stat.label}</div>
                            <div className="text-sm text-slate-500 font-medium">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
