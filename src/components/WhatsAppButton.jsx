import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919390111761"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-[50] bg-[#25d366] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg hover:bg-[#128c7e] transition-all flex items-center gap-2 group"
        >
            <span className="text-sm font-bold">Chat with us</span>
            <FaWhatsapp className="w-6 h-6" />
            <div className="absolute top-[-4px] right-[-4px] w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
        </a>
    );
};

export default WhatsAppButton;
