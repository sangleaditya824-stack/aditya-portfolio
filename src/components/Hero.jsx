import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/aditya.png';

const Hero = () => {
    const profilePic = profileImg;

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-6 sm:px-12 py-20 md:py-0">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -50, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
                />
            </div>

            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text Content */}
                <div className="text-left order-2 md:order-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-bold text-sm sm:text-base mb-4 tracking-[0.2em] uppercase"
                    >
                       
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-white font-heading tracking-tight"
                    >
                        Building Digital
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">Experiences</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-gray-400 text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed font-light"
                    >
                        Passionate Frontend Developer with expertise in React.js and modern web technologies.
                        I build accessible, pixel-perfect, and performant web experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <a href="#contact" className="bg-primary !text-white text-center px-8 py-3.5 text-base font-bold rounded-lg shadow-[0_0_20px_var(--primary-glow)]" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>
                            Let's Connect
                        </a>
                        <a href="#skills" className="px-8 py-3.5 border-2 border-gray-700 hover:border-primary hover:text-black hover:bg-primary rounded-lg font-bold text-white transition-all text-center text-base" onClick={(e) => { e.preventDefault(); document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' }); }}>
                            My Skills
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="grid grid-cols-3 gap-6 max-w-xl"
                    >
                        <div className="text-left">
                            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-1">3+</h3>
                            <p className="text-gray-500 text-sm">Years Experience</p>
                        </div>
                        <div className="text-left">
                            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-1">20+</h3>
                            <p className="text-gray-500 text-sm">Projects Done</p>
                        </div>
                        <div className="text-left">
                            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-1">15+</h3>
                            <p className="text-gray-500 text-sm">Happy Clients</p>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col items-center justify-center order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group delay-0"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#ff00ff] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-primary/50 transition-colors bg-[#121212] flex items-center justify-center">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-8 text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Aditya Sangale</h2>
                        <p className="text-primary tracking-widest uppercase text-sm font-bold mt-2">Frontend Developer</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
