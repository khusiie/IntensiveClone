import React, { useState, useEffect } from 'react';
import mediaImg1 from '../assets/media/image.png';
import mediaImg2 from '../assets/media/image copy.png';
import mediaImg3 from '../assets/media/image copy 2.png';
import publisherLogo from '../assets/media/headermedia/image.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const MediaSection = () => {
    // Original articles
    const originalArticles = [
        {
            publisherLogo: publisherLogo,
            date: "08 Oct 2024",
            image: mediaImg1,
            title: "Over 2000 Companies Hire NxtWave Learners, Addressing the Talent...",
            link: "https://www.indiatoday.in/pr-newswire?rkey=20241008EN25620&filter=4315"
        },
        {
            publisherLogo: publisherLogo,
            date: "04 Sep 2024",
            image: mediaImg2,
            title: "NxtWave and NSDC launch SkillUp India 4.0, aims to empower over...",
            link: "https://www.hindustantimes.com/education/news/nxtwave-and-nsdc-launch-skillup-india-4-0-aims-to-empower-over-30-lakh-students-101725365770655-amp.html"
        },
        {
            publisherLogo: publisherLogo,
            date: "03 Sep 2024",
            image: mediaImg3,
            title: "NSDC, NxtWave join hands to upskill 3 million students",
            link: "https://www.cnbctv18.com/education/nsdc-nxtwave-mou-skill-india-mission-ai-ml-workshops-3-million-students-19470158.htm"
        }
    ];

    // Duplicate articles to verify slider functionality (6 items total)
    const mediaArticles = [...originalArticles, ...originalArticles];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        // Set initial value
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalItems = mediaArticles.length;
    const maxIndex = Math.max(0, totalItems - itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Calculate number of dots (pages)
    // A simple approach for dots in a carousel like this is often one dot per page, or one dot per item.
    // Given the design often shows dots equal to the number of *starts* or *pages*.
    // Let's go with one dot per possible starting position for granular control, or simplify to pages.
    // The screenshot shows 5 dots. Let's map dots to "groups" or just use the items count logic.
    // For smoothness, let's allow scrolling one by one.
    // Dots count = totalItems - itemsPerPage + 1 (if scrolling 1 by 1) OR total pages.
    // Let's use individual item scrolling (1 by 1).
    // To match the UI (5 dots), duplication might need tuning, but let's stick to dynamic dots.

    // Logic: If we have 6 items and 3 visible.
    // Indexes: 0, 1, 2, 3. (4 positions: 0-2, 1-3, 2-4, 3-5). 
    // Wait, 6 items. Indices: 0,1,2,3,4,5.
    // Window: [0,1,2], [1,2,3], [2,3,4], [3,4,5].
    // Max index = 6 - 3 = 3. 
    // So 0, 1, 2, 3 -> 4 positions.

    // Let's generate dots based on steps.
    const dotCount = maxIndex + 1;


    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#183b56] text-left mb-12">NxtWave in the media</h2>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-8"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                    >
                        {mediaArticles.map((article, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                style={{ width: `calc((100% - ${(itemsPerPage - 1) * 32}px) / ${itemsPerPage})` }}
                            >
                                {/* 
                                   Calculation Explanation: 
                                   (100% - gap_total_width) / items_per_page
                                   Gap is 2rem = 32px.
                                   If 3 items, 2 gaps of 32px. Total gap = 64px.
                                   Width = (100% - 64px) / 3.
                                   This approach works if we use percentage width and margins, OR flex gap.
                                   A safer way with gap-8 (2rem) in parent flex container:
                                   Each item takes 100% / itemsPerPage... but gap affects this.
                                   Flex gap is supported in modern browsers.
                                   Ideally: flex container width is 100%. 
                                   Item width = (100% / itemsPerPage).
                                   But we have Gap.
                                   Let's use `calc` carefully or just use `flex: 0 0 X%` and subtract gap.
                                   Actually, simple trick:
                                   flex: 0 0 calc(100% / itemsPerPage - gap) ??
                                   
                                   Better approach:
                                   Use flex basis with calc.
                                   gap-8 is 2rem.
                                   Mobile (1): 100%
                                   Tablet (2): calc(50% - 1rem)
                                   Desktop (3): calc(33.333% - 1.33rem) (approx 2rem * 2 / 3)
                                */}
                                <div className="p-6 flex justify-between items-center bg-white border-b border-slate-50">
                                    <img src={article.publisherLogo} alt="Publisher" className="h-6 object-contain opacity-80" />
                                    <span className="text-slate-400 text-xs font-medium">{article.date}</span>
                                </div>
                                <div className="relative aspect-video overflow-hidden group">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.src = "https://placehold.co/600x400/5046e5/ffffff?text=NxtWave+Media";
                                        }}
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-bold text-[#183b56] leading-snug mb-8 flex-1">
                                        {article.title}
                                    </h3>
                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 font-bold text-sm group"
                                    >
                                        Read Article
                                        <svg
                                            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel indicators & Controls */}
                <div className="flex justify-center items-center gap-6 mt-12">
                    <button
                        onClick={prevSlide}
                        className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50"
                        aria-label="Previous Slide"
                    >
                        <FaChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: dotCount }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-slate-600 w-6' : 'bg-slate-300 w-1.5 hover:bg-slate-400'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50"
                        aria-label="Next Slide"
                    >
                        <FaChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Inline CSS Helper for the slider calc logic if Tailwind config doesn't suffice for dynamic calc */}
            <style>{`
                /* Ensure gap is handled correctly in the width calc */
                /* Mobile: 1 item, no gap adjustment needed since only 1 shows */
                @media (max-width: 767px) {
                   .flex-shrink-0 { width: 100%; }
                }
                /* Tablet: 2 items, 1 gap of 2rem (32px). Width = (100% - 32px)/2 = 50% - 16px */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .flex-shrink-0 { width: calc(50% - 16px); }
                }
                /* Desktop: 3 items, 2 gaps of 2rem (32px*2=64px). Width = (100% - 64px)/3 */
                @media (min-width: 1024px) {
                    .flex-shrink-0 { width: calc(33.333% - 21.33px); }
                }
            `}</style>
        </section>
    );
};

export default MediaSection;
