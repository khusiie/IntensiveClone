import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0d2436] text-white py-[50px] font-inter">
            <div className="max-w-[1240px] mx-auto px-6">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">

                    {/* Logo & Reach Us */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-1">
                            <img
                                src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_White_logo.svg"
                                alt="NxtWave Logo"
                                className="h-16 object-contain brightness-0 invert"
                            />
                            <span className="text-[10px] self-start mt-1 opacity-60 font-bold tracking-tighter">TM</span>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[#5a7184] text-sm md:text-base font-extrabold uppercase tracking-widest">Reach Us</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-green-500 mt-1">
                                        <FaWhatsapp className="w-5 h-5" />
                                    </div>
                                    <div className="text-sm md:text-base">
                                        <p className="text-[#5a7184] font-bold">+919390111761</p>
                                        <p className="text-xs text-slate-500 font-bold">(WhatsApp only)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-[#38bdf8]">
                                        <FaEnvelope className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm md:text-base text-[#5a7184] font-bold underline underline-offset-4 decoration-slate-700/50 hover:decoration-slate-500 transition-all cursor-pointer">support@nxtwave.tech</p>
                                </div>
                            </div>
                            <a href="#" className="inline-block text-sm text-white underline underline-offset-4 font-bold hover:text-slate-200 transition-colors">Hey AI, learn about us</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-slate-500 text-sm md:text-base font-bold uppercase tracking-widest mb-8">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                            <div className="flex flex-col gap-4">
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">Home</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">Academy</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">Intensive</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">Hire with us</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">Contact Us</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">Blog</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">About Us</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">Reviews</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">Community</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">4.0 Champions</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">NxtWave'23 Review</a>
                                <a href="#" className="text-[#5a7184] text-sm md:text-base font-medium hover:text-white">Python Tutorial</a>
                            </div>
                        </div>
                    </div>

                    {/* Payment & Address */}
                    <div className="space-y-8">
                        <h4 className="text-slate-500 text-sm md:text-base font-bold uppercase tracking-widest">Payment Methods</h4>
                        <div className="grid grid-cols-3 gap-2 max-w-[200px]">
                            <div className="bg-white rounded h-8 flex items-center justify-center p-1"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-[70%] object-contain" alt="Visa" /></div>
                            <div className="bg-white rounded h-8 flex items-center justify-center p-1"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-[70%] object-contain" alt="Mastercard" /></div>
                            <div className="bg-white rounded h-8 flex items-center justify-center p-1"><img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Maestro_logo.svg" className="h-[70%] object-contain" alt="Maestro" /></div>
                            <div className="bg-white rounded h-8 flex items-center justify-center p-1"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo.png" className="h-[70%] object-contain" alt="UPI" /></div>
                            <div className="bg-white rounded h-8 flex items-center justify-center p-1"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg" className="h-[70%] object-contain" alt="RuPay" /></div>
                            <div className="bg-white rounded h-8 flex items-center justify-center p-1"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Razorpay_logo.svg?20200813134351" className="h-[70%] object-contain" alt="Razorpay" /></div>
                        </div>

                        <div className="flex items-start gap-3 pt-4">
                            <div className="text-slate-500 mt-1">
                                <FaMapMarkerAlt className="w-5 h-5" />
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                NxtWave, WeWork Rajapushpa Summit, Nanakramguda Rd, Financial District, Manikonda Jagir, Telangana 500032
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle row: Socials & Legal */}
                <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800/50">
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-white bg-[#3b5998] w-6 h-6 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <FaFacebookF className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] w-6 h-6 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <FaInstagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white bg-[#1da1f2] w-6 h-6 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <FaTwitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white bg-[#0077b5] w-6 h-6 rounded-sm flex items-center justify-center hover:opacity-80 transition-opacity">
                            <FaLinkedinIn className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white bg-[#ff0000] w-6 h-6 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <FaYoutube className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 text-left">
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors">Grievance Redressal</a>
                            <a href="#" className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors">Corporate Social Responsibility Policy</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors">Cookie Policy</a>
                            <a href="#" className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors">Corporate Information</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors">Terms and Conditions</a>
                            <a href="#" className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors">Vision and Values</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Course Tracks */}
                <div className="pt-8 space-y-8">
                    <div>
                        <h4 className="text-[#5a7184] text-sm md:text-base font-bold uppercase tracking-wider mb-4 hover:text-white transition-colors cursor-pointer">Course Tracks</h4>
                        <p className="text-[#5a7184] text-sm md:text-base">Software Training Institute</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h5 className="text-[#5a7184] text-sm md:text-base font-bold mb-3 hover:text-white transition-colors cursor-pointer">MERN Stack Developer course</h5>
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm text-[#5a7184]">
                                {['Hyderabad', 'Bangalore', 'Mumbai', 'Pune', 'Chennai'].map((city, i, arr) => (
                                    <React.Fragment key={city}>
                                        <a href="#" className="hover:text-white transition-colors">{city}</a>
                                        {i < arr.length - 1 && <span className="text-[#5a7184]">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="text-[#5a7184] text-sm md:text-base font-bold mb-3 hover:text-white transition-colors cursor-pointer">Full Stack Developer course</h5>
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm text-[#5a7184]">
                                {['Hyderabad', 'Bangalore', 'Pune', 'Mumbai', 'Delhi', 'Ahmedabad', 'Coimbatore', 'Chennai', 'Chandigarh', 'Noida', 'Kolkata', 'Kochi', 'Bhubaneswar', 'Visakhapatnam', 'Vijayawada', 'Gurgaon', 'Jaipur', 'Indore', 'Kanpur', 'Nagpur', 'Madurai', 'Bhopal', 'Trivandrum', 'Guwahati', 'Patna', 'Aurangabad', 'Trichy', 'Salem', 'Thane', 'Kerala', 'Mysore', 'Telugu', 'Tamil', 'Hindi'].map((city, i, arr) => (
                                    <React.Fragment key={city}>
                                        <a href="#" className="hover:text-white transition-colors">{city}</a>
                                        {i < arr.length - 1 && <span className="text-[#5a7184]">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="text-[#5a7184] text-sm md:text-base font-bold mb-3 hover:text-white transition-colors cursor-pointer">Data Analytics course</h5>
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm text-[#5a7184]">
                                {['Hyderabad', 'Bangalore', 'Pune', 'Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Chandigarh', 'Ahmedabad', 'Coimbatore', 'Gurgaon', 'Noida', 'Kerala', 'Nagpur', 'Indore', 'Jaipur', 'Lucknow', 'Thane', 'Bhopal', 'Dehradun', 'Bhubaneswar', 'Mysore', 'Vadodara', 'Kanpur', 'Trivandrum', 'Surat', 'Nashik', 'Madurai', 'Patna', 'Aurangabad', 'Ghaziabad', 'Meerut', 'Guwahati', 'Kolhapur', 'Kochi', 'Trichy', 'Telugu', 'Tamil', 'Hindi'].map((city, i, arr) => (
                                    <React.Fragment key={city}>
                                        <a href="#" className="hover:text-white transition-colors">{city}</a>
                                        {i < arr.length - 1 && <span className="text-[#5a7184]">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="text-[#5a7184] text-sm md:text-base font-bold mb-3 hover:text-white transition-colors cursor-pointer">QA / Automation Testing course</h5>
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm text-[#5a7184]">
                                {['Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Coimbatore', 'Noida', 'Telugu', 'Tamil', 'Hindi'].map((item, i, arr) => (
                                    <React.Fragment key={item}>
                                        <a href="#" className="hover:text-white transition-colors">{item}</a>
                                        {i < arr.length - 1 && <span className="text-[#5a7184]">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp CTA */}
            <div className="fixed bottom-6 right-6 z-[1000] scale-110 md:scale-125">
                <button className="bg-[#25d366] text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 font-bold shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:bg-[#128c7e] transition-all duration-300 hover:scale-105 active:scale-95">
                    <span className="text-xs">Chat with us</span>
                    <FaWhatsapp className="w-5 h-5" />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
