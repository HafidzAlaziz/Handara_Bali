import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#0F1C2E] overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1560625691-1f18536e9d7c?auto=format&fit=crop&q=80&w=2000")', // Night resort pool
                }}
            >
                <div className="absolute inset-0 bg-[#0F2823]/60 mix-blend-multiply" /> {/* Tint matches primary color */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1C2E]" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mt-10">
                <motion.h1
                    className="text-[120px] md:text-[220px] leading-none font-sans font-medium text-[#FFDEC1]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    404
                </motion.h1>
                <motion.p
                    className="text-xl md:text-3xl text-white font-medium mb-16 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Oops! We can't see to find a page you <br className="hidden md:block" />
                    are looking for! Don't worry and try it <br className="hidden md:block" />
                    out again.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row gap-6 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        to="/"
                        className="bg-white text-[#0F2823] px-10 py-4 text-lg font-semibold hover:bg-gray-100 transition-all rounded-sm min-w-[240px]"
                    >
                        Back To Home Page
                    </Link>
                    <button
                        className="bg-[#98B88B] text-[#0F2823] px-10 py-4 text-lg font-semibold hover:bg-[#86A37A] transition-all rounded-sm min-w-[240px]"
                    >
                        Contact US
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
