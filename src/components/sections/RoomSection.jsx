import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Local Assets
import room1Main from '../../assets/room1-main.jpg';
import room1Alt from '../../assets/room1-alt.jpg';
import room1Thumb from '../../assets/room1-thumb.jpg';
import room2Main from '../../assets/room2-main.jpg';
import room2Alt from '../../assets/room2-alt.jpg';
import room2Thumb from '../../assets/room2-thumb.jpg';
import room3Main from '../../assets/room3-main.jpg';
import room3Alt from '../../assets/room3-alt.jpg';
import room3Thumb from '../../assets/room3-thumb.jpg';

const rooms = [
    {
        id: 1,
        title: 'The Tempekan Nyang-Nyang',
        description: 'Immerse yourself in tranquillity with stunning views of the serene lagoon right from your private terrace. Each Lagoon View Villa is designed with natural wood accents, large sliding glass doors, and a minimalist aesthetic that blends seamlessly with the surrounding environment.',
        image1: room1Main,
        image2: room1Alt,
        thumbnail: room1Thumb
    },
    {
        id: 2,
        title: 'Garden View Villa',
        description: 'Our Garden View Villas offer a peaceful sanctuary surrounded by lush tropical greenery. Experience the authentic Balinese hospitality in a setting that celebrates nature and traditional design elements with premium comfort.',
        image1: room2Main,
        image2: room2Alt,
        thumbnail: room2Thumb
    },
    {
        id: 3,
        title: 'Hillside Private Oasis',
        description: 'Perched on the rolling hills, this villa provides a panoramic view of the misty mountains. Perfect for those seeking absolute privacy and a deep connection with the natural landscape of Bedugul.',
        image1: room3Main,
        image2: room3Alt,
        thumbnail: room3Thumb
    }
];

const RoomSection = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % rooms.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
    };

    const currentRoom = rooms[index];

    return (
        <section className="py-24 bg-white overflow-hidden" id="services">
            <div className="container mx-auto px-6 md:px-12 mb-16">
                <h2 className="text-3xl md:text-3xl font-sans font-bold text-[#1D3D2F]">
                    Find your room here
                </h2>
            </div>

            <div className="w-full">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start px-6 md:px-12 max-w-[1300px] mx-auto">

                    {/* 1. Main Left Image */}
                    <div className="w-[300px] md:w-[450px] lg:w-[480px] xl:w-[520px] flex-shrink-0 relative overflow-hidden rounded-[2.5rem] aspect-[1.1] shadow-xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`img1-${currentRoom.id}`}
                                src={currentRoom.image1}
                                alt={currentRoom.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>

                    {/* 2. Middle Column: Text + Thumbnail + Controls */}
                    <div className="flex flex-col w-full lg:w-[400px] xl:w-[450px] min-h-[400px] lg:min-h-[480px] py-4">
                        {/* Text Content */}
                        <div className="flex-grow">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`text-${currentRoom.id}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="text-3xl md:text-4xl font-sans font-bold text-black mb-6 leading-tight">
                                        {currentRoom.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-10 font-light">
                                        {currentRoom.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Bottom Content Area */}
                        <div className="flex items-end justify-between w-full mt-auto">
                            {/* Thumbnail (Left side) */}
                            <div className="w-32 h-24 md:w-40 md:h-28 rounded-3xl overflow-hidden shadow-lg border-4 border-white flex-shrink-0 relative bg-gray-50">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={`thumb-${currentRoom.id}`}
                                        src={currentRoom.thumbnail}
                                        alt="Detail"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Navigation Controls (Right side) */}
                            <div className="flex items-center space-x-3 mb-2">
                                <span className="text-[11px] font-bold text-gray-400 mr-4 tracking-tighter">
                                    {index + 1}/{rooms.length}
                                </span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={handlePrev}
                                        className="w-12 h-12 rounded-full border border-gray-100 bg-[#f0f0f0] text-gray-500 flex items-center justify-center hover:bg-gray-200 transition-all active:scale-95"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-12 h-12 rounded-full bg-[#1A301D] text-white flex items-center justify-center hover:bg-opacity-90 transition-all shadow-md active:scale-95"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Right Side Image */}
                    <div className="hidden xl:block w-[300px] flex-shrink-0 relative overflow-hidden rounded-[2rem] aspect-[1.1] shadow-xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={`img2-${currentRoom.id}`}
                                src={currentRoom.image2}
                                alt="Room Set"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RoomSection;
