import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Local Assets
import about1 from '../../assets/about-1.png';
import about2 from '../../assets/about-2.png';
import about3 from '../../assets/about-3.png';
import about4 from '../../assets/about-4.png';

const slides = [
    {
        id: 1,
        title: 'Unforgettable Stays, Unbeatable Offers',
        description: 'Discover breathtaking destinations, relax in style, and enjoy incredible savings on your next escape.',
        image: about1,
        hasContent: true
    },
    {
        id: 2,
        title: 'Discover Paradise in the Heart of Bali',
        description: 'Experience the authentic beauty of Bali with our curated local tours of Tegallalang Rice Terrace and exclusive experiences.',
        image: about2,
        hasContent: true
    },
    {
        id: 3,
        title: 'Serene Sunsets and Golden Moments',
        description: 'Watch the sun dip below the horizon with a cocktail in hand at our world-class beach club.',
        image: about3,
        hasContent: true
    },
    {
        id: 4,
        title: 'Mountain Retreat and Lush Escapes',
        description: 'Reconnect with nature in the cool highland mist and tropical rainforests surrounding Bedugul.',
        image: about4,
        hasContent: true
    }
];

const AboutSection = () => {
    return (
        <section className="py-24 bg-[#f4faff] relative overflow-hidden" id="about">
            {/* Watercolor Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, #d1e8ff 0%, transparent 40%), radial-gradient(circle at 80% 70%, #fff4e6 0%, transparent 40%)`,
                    filter: 'blur(60px)'
                }}
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
                    <div className="lg:w-1/2">
                        <motion.span
                            className="inline-block px-4 py-1.5 border border-[#4A6741] text-[#4A6741] rounded-lg font-sans font-bold text-sm mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            [About Us]
                        </motion.span>
                        <motion.h2
                            className="text-4xl lg:text-5xl font-sans font-bold text-black leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Discover Our Story <br />
                            and What Drives Us
                        </motion.h2>
                    </div>
                    <motion.div
                        className="lg:w-1/2 lg:pt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                            Founded with a passion for adventure and a commitment to comfort, Wanderlust Inn was designed to be more than just a place to stay—it's a retreat for those with a love for exploration.
                        </p>
                        <motion.button
                            className="bg-[#1A301D] text-white px-10 py-3.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md active:scale-95"
                            whileHover={{ scale: 1.05 }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>

                {/* Slider Section */}
                <div className="relative -mx-6 md:-mx-12 lg:mx-0">
                    <Swiper
                        modules={[Navigation, Autoplay, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.about-next',
                            prevEl: '.about-prev',
                        }}
                        className="about-swiper !pb-20 !pt-5"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} className="!w-[300px] md:!w-[500px] lg:!w-[700px]">
                                {({ isActive }) => (
                                    <div className={`relative rounded-[2.5rem] overflow-hidden transition-all duration-700 h-[350px] md:h-[450px] lg:h-[500px] ${isActive ? 'shadow-2xl' : 'shadow-lg opacity-60 scale-90 blur-[1px]'}`}>
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Content Overlay */}
                                        {slide.hasContent && isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <h4 className="text-2xl md:text-3xl font-bold mb-4 max-w-md">{slide.title}</h4>
                                                    <p className="text-sm md:text-base opacity-90 mb-6 max-w-sm line-clamp-2">{slide.description}</p>
                                                    <button className="bg-white text-black font-bold px-8 py-2.5 rounded-full text-sm hover:bg-[#D4AF37] hover:text-white transition-all shadow-lg shadow-black/20">
                                                        Learn More
                                                    </button>
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex items-center space-x-4 mt-8 lg:mt-0 lg:absolute lg:bottom-4 lg:left-0 z-20">
                        <button className="about-prev w-12 h-12 rounded-full bg-[#f0f0f0] text-gray-500 flex items-center justify-center hover:bg-gray-200 transition-all active:scale-90">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button className="about-next w-12 h-12 rounded-full bg-[#1A301D] text-white flex items-center justify-center hover:bg-opacity-90 transition-all shadow-md active:scale-90">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
