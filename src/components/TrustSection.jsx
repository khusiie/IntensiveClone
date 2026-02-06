import React from 'react';
import alumniLogos from '../assets/Alumini/image.png';

const TrustSection = () => {
    return (
        <section className="bg-slate-50 py-16 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className=" text-center mb-12 heading-sathosi-font">
                    Your <span className="relative inline-block">
                        Trainers
                        <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#7c3aed] rounded-full opacity-60 transform -rotate-2"></div>
                    </span> are Alumni of
                </h2>
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex gap-0 w-max animate-[scroll_40s_linear_infinite]">
                        {/* Repeat the image for seamless infinite scroll */}
                        <img src={alumniLogos} alt="Alumni Companies" className="h-10 md:h-14 w-auto object-contain" />
                        <img src={alumniLogos} alt="Alumni Companies" className="h-10 md:h-14 w-auto object-contain" />
                    </div>
                </div>
                <p className="mt-12 text-center text-slate-500 font-medium">and many more...</p>
            </div>
        </section>
    );
};

export default TrustSection;
