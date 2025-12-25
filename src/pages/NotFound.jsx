import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Local Assets
import bg404 from '../assets/hero-bg.jpg'; // Using hero-bg as a fallback for offline stability

const NotFound = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#0F1C2E] overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${bg404})`,
                }}
            >
                <div className="absolute inset-0 bg-[#0F2823]/80 mix-blend-multiply" />
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
                    Oops! We can't seem to find the page you <br className="hidden md:block" />
                    are looking for! Don't worry and try <br className="hidden md:block" />
                    heading back to our home.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row gap-6 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        to="/"
                        className="bg-white text-[#0F2823] px-10 py-4 text-lg font-semibold hover:bg-gray-100 transition-all rounded-full min-w-[240px]"
                    >
                        Back To Home Page
                    </Link>
                    <button
                        className="bg-[#98B88B] text-[#0F2823] px-10 py-4 text-lg font-semibold hover:bg-[#86A37A] transition-all rounded-full min-w-[240px]"
                    >
                        Contact US
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
