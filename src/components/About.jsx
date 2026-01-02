import React from 'react';
import { CONTACT_INFO } from '../constants/data';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-background text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">About Me</h3>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Passionate About <span className="text-primary">Technology</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        I'm a dedicated BCA student with a strong foundation in computer science and a passion for creating meaningful digital solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl transition-all group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary rounded-lg text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 0 6-3 6-3s3 3 6 3v-5" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-white">Education</h3>
                                <p className="text-gray-400">Bachelor of Computer Applications (BCA)</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Year Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl transition-all group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary rounded-lg text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-white">Year</h3>
                                <p className="text-gray-400">3rd Year Student</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl transition-all group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary rounded-lg text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-white">Location</h3>
                                <p className="text-gray-400">{CONTACT_INFO.location}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Focus Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl transition-all group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary rounded-lg text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1 text-white">Focus</h3>
                                <p className="text-gray-400">Web Development & Software</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
