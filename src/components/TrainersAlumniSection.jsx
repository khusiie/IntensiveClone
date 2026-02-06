import React from 'react';
import alumniLogos from '../assets/Alumini/image.png';

const TrainersAlumniSection = () => {
    return (
        <section className="py-24 bg-white" id="trainers-alumni">
            <div className="max-w-[1240px] mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-[52px] font-bold text-[#334155] leading-tight mb-16 px-4">
                    Your Trainers are Alumni of
                </h2>

                {/* Logos Composite Image */}
                <div className="flex justify-center items-center mb-8 px-4">
                    <img
                        src={alumniLogos}
                        alt="Stanford, Google, IIT, Amazon, Microsoft"
                        className="w-full max-w-[1100px] h-auto object-contain opacity-90"
                    />
                </div>

                {/* Subtitle */}
                <p className="text-[17px] text-slate-400 font-medium tracking-wide">and many more...</p>

            </div>
        </section>
    );
};

export default TrainersAlumniSection;
