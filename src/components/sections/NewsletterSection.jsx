import React from 'react';
import { motion } from 'framer-motion';

// Local Assets
import newsletterBg from '../../assets/newsletter-bg.jpg';
import newsRice from '../../assets/news-rice.jpg';

const NewsletterSection = () => {
    return (
        <section className="relative py-32 flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed z-0 transform scale-110"
                style={{
                    backgroundImage: `url(${newsletterBg})`
                }}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/10 z-0" />

            {/* Floating Card */}
            <motion.div
                className="relative z-10 bg-white rounded-[2.5rem] p-12 md:p-16 text-center max-w-2xl mx-6 shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h2
                    className="text-3xl md:text-3xl font-serif font-bold text-primary mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Stay Connected with <br /> Handara
                </motion.h2>

                <motion.div
                    className="rounded-2xl overflow-hidden mb-10 h-56 relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                >
                    <img
                        src={newsRice}
                        alt="Rice Terrace"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <span className="bg-white/90 backdrop-blur text-primary text-xs font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-wider">
                            Read Our Blog
                        </span>
                    </div>
                </motion.div>

                <p className="text-gray-500 font-light text-sm mb-8 max-w-md mx-auto leading-relaxed">
                    Never miss a moment with Handara Connected, your go-to platform for updates, news, and exclusive content.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto relative text-left">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-50 transition-all placeholder:text-gray-400"
                    />
                    <button className="bg-[#98B88B] text-primary px-8 py-3 rounded-full text-sm font-bold hover:bg-[#86A37A] transition-colors shadow-lg">
                        Join
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default NewsletterSection;
