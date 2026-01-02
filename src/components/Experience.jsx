import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-16 sm:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-8 sm:mb-12 text-center md:text-left">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">My Journey</h4>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white">Work Experience</h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    {/* Current Position */}
                    <div className="bg-card p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Frontend Developer</h3>
                                <h4 className="text-base sm:text-lg text-primary font-semibold">The BAAP Company</h4>
                            </div>
                            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold border border-primary/20 self-start">
                                Current
                            </span>
                        </div>

                        <ul className="space-y-3 text-sm sm:text-base text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1.5 text-xs">▸</span>
                                <span>Developed and maintained backend systems using Node.js & Express.js</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1.5 text-xs">▸</span>
                                <span>Built secure RESTful APIs and integrated MongoDB & MySQL databases</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1.5 text-xs">▸</span>
                                <span>Collaborated with senior developers on scalable solutions</span>
                            </li>
                        </ul>
                    </div>

                    {/* Project Experience */}
                    <div className="bg-card p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">ERP System Frontend</h3>
                                <h4 className="text-base sm:text-lg text-gray-400">React.js Application</h4>
                            </div>
                            <span className="inline-block px-4 py-2 rounded-full bg-white/5 text-gray-300 text-xs sm:text-sm font-bold border border-white/10 self-start">
                                Project
                            </span>
                        </div>

                        <ul className="space-y-3 text-sm sm:text-base text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1.5 text-xs">▸</span>
                                <span>Built dynamic interfaces using React.js and Tailwind CSS</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1.5 text-xs">▸</span>
                                <span>Integrated real-time data with RESTful APIs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1.5 text-xs">▸</span>
                                <span>Implemented state management using Redux/Context API</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gray-800">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center md:text-left">Education</h3>
                    <div className="bg-card p-5 sm:p-6 rounded-xl border border-gray-800">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-primary text-lg sm:text-xl">🎓</span>
                            </div>
                            <div>
                                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Bachelor of Computer Applications (BCA)</h4>
                                <p className="text-primary font-semibold mb-2 text-sm sm:text-base">University of Mysore</p>
                                <p className="text-gray-400 text-xs sm:text-sm">Currently Pursuing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
