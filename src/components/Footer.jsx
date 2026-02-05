import React from 'react';

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
                                src="https://assets.ccbp.in/frontend/react-js/nxt-wave-logo-img.png"
                                alt="NxtWave Logo"
                                className="h-8 object-contain brightness-0 invert"
                            />
                            <span className="text-[10px] self-start mt-1 opacity-60 font-bold tracking-tighter">TM</span>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[#38bdf8] text-[13px] font-extrabold uppercase tracking-widest">Reach Us</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-green-500 mt-1">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.207l-.669 2.441 2.51-.658c.883.48 1.848.774 2.899.774l.01-.003c3.181 0 5.767-2.586 5.767-5.766 0-3.18-2.585-5.761-5.764-5.761zm3.392 8.235c-.145.406-.832.738-1.147.784-.315.046-1.746.596-3.415-.098-1.669-.694-2.715-2.392-2.798-2.508-.083-.115-.662-.882-.662-1.685 0-.803.414-1.197.563-1.378.148-.181.331-.227.441-.227l.314.007c.101.005.234-.038.366.28.132.321.455 1.109.495 1.19.039.081.066.175.013.284-.053.108-.08.175-.158.267-.079.091-.166.202-.237.27-.078.076-.158.158-.068.314.091.156.402.662.862 1.072.593.528 1.092.69 1.248.766.156.076.247.063.339-.044.092-.108.394-.458.499-.615.105-.157.21-.131.354-.079.144.053.916.432 1.073.513.158.081.263.121.302.188.039.067.039.39-.106.796z" /></svg>
                                    </div>
                                    <div className="text-sm">
                                        <p className="text-slate-300 font-medium">+919390111761</p>
                                        <p className="text-[10px] text-slate-500 font-bold">(WhatsApp only)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-[#38bdf8]">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <p className="text-sm text-slate-300 underline underline-offset-4 decoration-slate-700/50 hover:decoration-slate-500 transition-all cursor-pointer">support@nxtwave.tech</p>
                                </div>
                            </div>
                            <a href="#" className="inline-block text-[11px] text-white underline underline-offset-4 font-extrabold hover:text-slate-200 transition-colors">Hey AI, learn about us</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-slate-500 text-[13px] font-bold uppercase tracking-widest mb-8">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                            <div className="flex flex-col gap-4">
                                <a href="#" className="text-slate-300 text-sm hover:text-white">Home</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">Academy</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">Intensive</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">Hire with us</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">Contact Us</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">Blog</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="#" className="text-slate-300 text-sm hover:text-white">About Us</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">Reviews</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">Community</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">4.0 Champions</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">NxtWave'23 Review</a>
                                <a href="#" className="text-slate-300 text-sm hover:text-white">Python Tutorial</a>
                            </div>
                        </div>
                    </div>

                    {/* Payment & Address */}
                    <div className="space-y-8">
                        <h4 className="text-slate-500 text-[13px] font-bold uppercase tracking-widest">Payment Methods</h4>
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
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                NxtWave, WeWork Rajapushpa Summit, Nanakramguda Rd, Financial District, Manikonda Jagir, Telangana 500032
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle row: Socials & Legal */}
                <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800/50">
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-white bg-[#3b5998] w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="#" className="text-white bg-[#1da1f2] w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </a>
                        <a href="#" className="text-white bg-[#0077b5] w-7 h-7 rounded-sm flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                        </a>
                        <a href="#" className="text-white bg-[#ff0000] w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                        {['Privacy Policy', 'Grievance Redressal', 'Corporate Social Responsibility Policy', 'Cookie Policy', 'Corporate Information', 'Terms and Conditions', 'Vision and Values'].map((link) => (
                            <a key={link} href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">{link}</a>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Course Tracks */}
                <div className="pt-8 space-y-8">
                    <div>
                        <h4 className="text-[#38bdf8] text-sm font-bold uppercase tracking-wider mb-4">Course Tracks</h4>
                        <p className="text-slate-500 text-sm">Software Training Institute</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h5 className="text-slate-400 text-[13px] font-bold mb-3">MERN Stack Developer course</h5>
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500">
                                {['Hyderabad', 'Bangalore', 'Mumbai', 'Pune', 'Chennai'].map((city, i, arr) => (
                                    <React.Fragment key={city}>
                                        <a href="#" className="hover:text-slate-300 transition-colors">{city}</a>
                                        {i < arr.length - 1 && <span className="text-slate-700">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="text-slate-400 text-[13px] font-bold mb-3">Full Stack Developer course</h5>
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500">
                                {['Hyderabad', 'Bangalore', 'Pune', 'Mumbai', 'Delhi', 'Ahmedabad', 'Coimbatore', 'Chennai', 'Chandigarh', 'Noida', 'Kolkata', 'Kochi', 'Bhubaneswar', 'Visakhapatnam', 'Vijayawada', 'Gurgaon', 'Jaipur', 'Indore', 'Kanpur', 'Nagpur', 'Madurai', 'Bhopal', 'Trivandrum', 'Guwahati', 'Patna', 'Aurangabad', 'Trichy', 'Salem', 'Thane', 'Kerala', 'Mysore', 'Telugu', 'Tamil', 'Hindi'].map((city, i, arr) => (
                                    <React.Fragment key={city}>
                                        <a href="#" className="hover:text-slate-300 transition-colors">{city}</a>
                                        {i < arr.length - 1 && <span className="text-slate-700">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="text-slate-400 text-[13px] font-bold mb-3">Data Analytics course</h5>
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500">
                                {['Hyderabad', 'Bangalore', 'Pune', 'Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Chandigarh', 'Ahmedabad', 'Coimbatore', 'Gurgaon', 'Noida', 'Kerala', 'Nagpur', 'Indore', 'Jaipur', 'Lucknow', 'Thane', 'Bhopal', 'Dehradun', 'Bhubaneswar', 'Mysore', 'Vadodara', 'Kanpur', 'Trivandrum', 'Surat', 'Nashik', 'Madurai', 'Patna', 'Aurangabad', 'Ghaziabad', 'Meerut', 'Guwahati', 'Kolhapur', 'Kochi', 'Trichy', 'Telugu', 'Tamil', 'Hindi'].map((city, i, arr) => (
                                    <React.Fragment key={city}>
                                        <a href="#" className="hover:text-slate-300 transition-colors">{city}</a>
                                        {i < arr.length - 1 && <span className="text-slate-700">|</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h5 className="text-slate-400 text-[13px] font-bold mb-3">QA / Automation Testing course</h5>
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500">
                                {['Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Coimbatore', 'Noida', 'Telugu', 'Tamil', 'Hindi'].map((item, i, arr) => (
                                    <React.Fragment key={item}>
                                        <a href="#" className="hover:text-slate-300 transition-colors">{item}</a>
                                        {i < arr.length - 1 && <span className="text-slate-700">|</span>}
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.552.92 3.123 1.399 4.882 1.4 5.462 0 9.905-4.444 9.908-9.906.002-2.648-1.03-5.138-2.903-7.013-1.873-1.874-4.363-2.909-7.01-2.909-5.463 0-9.906 4.443-9.909 9.905 0 2.128.546 3.741 1.591 5.31l-.947 3.455 3.548-.931zm9.333-5.01c-.18-.09-.567-.28-.655-.312-.088-.032-.152-.048-.216.048-.064.096-.25.312-.306.376-.056.064-.112.072-.292.016l-.168-.06c-.636-.26-1.125-.42-1.545-.76-.328-.26-.503-.49-.66-.75-.088-.16-.01-.247.081-.336.08-.08.18-.21.27-.314.03-.03.04-.03.06-.03.04-.02.05-.02.08-.02.07-.02.13-.01.19.04.04.04.11.12.21.23.09.11.16.2.22.25.06.05.08.11.04.19-.04.09-.27.42-.32.49-.06.06-.11.07-.22.02-.11-.05-.47-.17-.9-.56-.37-.33-.62-.73-.69-.85-.07-.12-.01-.18.08-.27.08-.08.18-.21.27-.31s.12-.13.18-.22c.06-.09.03-.17-.01-.25-.04-.08-.15-.36-.21-.5-.06-.15-.12-.13-.18-.13-.06 0-.12-.01-.19-.01-.07 0-.18.03-.28.14-.1.11-.38.37-.38.9s.39 1.04.44 1.11c.05.07.76 1.16 1.84 1.62.26.11.46.18.62.23.27.11.52.1.72.07.22-.03.68-.28.78-.54.1-.26.1-.48.07-.54-.03-.06-.11-.1-.29-.19z" /></svg>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
