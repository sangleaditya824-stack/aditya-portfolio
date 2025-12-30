import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "ERP System",
            description: "A comprehensive Enterprise Resource Planning system with real-time data integration, inventory management, and reporting modules.",
            tags: ["React.js", "Node.js", "MongoDB", "Tailwind"],
            link: "#"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website featuring a modern dark UI, neon accents, and responsive design to showcase skills and work.",
            tags: ["React.js", "Framer Motion", "Tailwind"],
            link: "#"
        },
        {
            title: "E-Commerce Dashboard",
            description: "An admin dashboard for managing products, orders, and customers with data visualization charts.",
            tags: ["React.js", "Chart.js", "Express"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-16 sm:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
                    <div className="text-center sm:text-left">
                        <h4 className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">My Portfolio</h4>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white">Recent Work</h2>
                    </div>
                    <a href="https://github.com/aditya-sangale" target="_blank" rel="noreferrer" className="hidden sm:inline-block text-muted hover:text-primary transition-colors font-medium text-sm">
                        View GitHub &gt;
                    </a>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-2xl overflow-hidden transition-all group"
                        >
                            {/* Placeholder Project Image */}
                            <div className="h-40 sm:h-48 bg-gray-900 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-3xl sm:text-4xl opacity-20 uppercase tracking-widest">
                                    {project.title.substring(0, 3)}
                                </div>
                            </div>

                            <div className="p-6 sm:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted mb-6 line-clamp-3 text-sm sm:text-base">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a href={project.link} className="inline-block text-primary font-bold hover:underline text-sm sm:text-base">
                                    View Project &gt;
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <a href="https://github.com/aditya-sangale" className="text-muted hover:text-primary transition-colors font-bold text-sm">
                        View GitHub &gt;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
