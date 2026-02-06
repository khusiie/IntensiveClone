import React from 'react';

const SuccessStories = () => {
    const reviews = [
        {
            name: 'Vishnu Vardhan',
            tag: 'LTI Mindtree',
            text: 'Grateful to NxtWave for the mentorship and mock interviews that made this possible.'
        },
        {
            name: 'Rohith Kumar',
            tag: 'Software Engineer',
            text: 'Learning through NxtWave made this transition feel possible even from a non-tech background.'
        },
        {
            name: 'Sai Ram',
            tag: 'Full Stack Developer',
            text: 'Focused on building real skills instead of worrying about outcomes. Highly recommended!'
        },
        {
            name: 'Kavya D M',
            tag: 'Top MNC',
            text: 'I needed real skills, not hope. NxtWave helped me restart my career properly.'
        },
        {
            name: 'Manisha Kumari',
            tag: 'Capgemini',
            text: 'NxtWave gave me the push and support I was missing. Happy to land my first job!'
        },
        {
            name: 'Durga Prasad',
            tag: 'Software Engineer',
            text: 'Joined NxtWave after trying other platforms. The support here is unmatched.'
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-center text-4xl font-extrabold mb-16">
                    Real Stories of <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">Real Success</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {reviews.map((review, index) => (
                        <div key={index} className="glass-card flex flex-col justify-between p-10">
                            <p className="text-lg italic text-slate-700 leading-relaxed mb-8">"{review.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-primary"></div>
                                <div>
                                    <div className="font-bold text-slate-900">{review.name}</div>
                                    <div className="text-sm font-semibold text-primary">{review.tag}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
