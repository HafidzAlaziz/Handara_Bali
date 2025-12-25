import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../../assets/hero-bg.jpg';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden" id="home">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-100"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
            >
                {/* Subtle overlay for text readability, but keeping it light as per image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-end pb-32">
                <div className="w-full flex flex-col md:flex-row justify-between items-end">

                    {/* Left Side: Text */}
                    <div className="max-w-3xl text-white">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            Sebuah Gerbang Menuju <br />
                            Ketentramman Abadi.
                        </motion.h1>

                        <motion.p
                            className="text-sm md:text-base leading-relaxed max-w-xl text-gray-100 font-light"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        >
                            Melampaui hiruk pikuk, Handara Village menawarkan perlindungan
                            di mana alam dan kemewahan bersatu. Tinggalkan dunia luar
                            di belakang gerbang kami, dan mulailah hidup dalam ketenangan yang presisi.
                        </motion.p>
                    </div>

                    {/* Right Side: Social Buttons (Vertical Stack) */}
                    <motion.div
                        className="hidden md:flex flex-col space-y-3 mt-8 md:mt-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    >
                        {['Instagram', 'WhatsApp', 'Facebook'].map((social) => (
                            <button
                                key={social}
                                className="bg-white text-primary px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-all shadow-lg min-w-[140px] text-center"
                            >
                                {social}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Mobile Socials (Horizontal for mobile) */}
                <div className="flex md:hidden space-x-3 mt-8">
                    {['Instagram', 'WhatsApp', 'Facebook'].map((social) => (
                        <button
                            key={social}
                            className="bg-white text-primary px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                        >
                            {social}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
