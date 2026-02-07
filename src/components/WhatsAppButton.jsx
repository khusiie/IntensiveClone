import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919390111761"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[50] bg-[#25d366] text-white p-3 sm:px-5 sm:py-2.5 rounded-full shadow-lg hover:bg-[#128c7e] transition-all flex items-center gap-2 group"
        >
            <span className="hidden sm:inline text-sm font-bold">Chat with us</span>
            <FaWhatsapp className="w-6 h-6 sm:w-6 sm:h-6" />
            <div className="absolute top-[-4px] right-[-4px] w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
        </a>
    );
};

export default WhatsAppButton;
