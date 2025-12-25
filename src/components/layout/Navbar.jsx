import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
                : 'bg-transparent pt-8'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* Left: Nav Buttons */}
                <div className="hidden md:flex space-x-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${isScrolled
                                ? 'text-primary hover:bg-gray-100'
                                : 'text-white border border-white hover:bg-white hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Center: Official Logo - Larger */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img
                        src={logo}
                        alt="Handara Bali Logo"
                        className={`h-12 w-auto object-contain transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
                    />
                </div>

                {/* Right: Call Us */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${isScrolled
                            ? 'bg-primary text-white hover:bg-secondary'
                            : 'border border-white text-white hover:bg-white hover:text-primary'
                            }`}
                    >
                        Call Us
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden relative z-50 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-8 md:hidden shadow-2xl"
                        style={{ height: '100vh', width: '100vw' }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-primary text-3xl font-serif font-bold hover:text-secondary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-primary text-white px-12 py-4 rounded-full text-sm font-bold uppercase tracking-widest mt-6 hover:bg-secondary transition-all shadow-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Call Us
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
