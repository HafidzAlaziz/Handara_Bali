import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#F9F9F9] py-16 border-t border-gray-100">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">

                <div className="mb-8 md:mb-0 md:max-w-xs">
                    <img
                        src={logo}
                        alt="Handara Bali Logo"
                        className="h-16 w-auto object-contain mb-4 grayscale brightness-50 opacity-80"
                    />
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                        Rasakan ketenangan di jantung dataran tinggi Bali. Tempat di mana alam dan kenyamanan bertemu.
                    </p>
                </div>

                <div className="text-right md:text-right w-full md:w-auto">
                    <p className="text-sm md:text-base text-gray-400 font-serif italic">
                        “Rasakan ketenangan di jantung <br className="hidden md:block" />
                        dataran tinggi Bali.”
                    </p>
                    <p className="mt-4 text-[10px] text-gray-300 uppercase tracking-widest">
                        © 2024 Handara Bali. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
