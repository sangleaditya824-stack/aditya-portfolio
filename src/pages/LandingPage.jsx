import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const LandingPage = () => {
    return (
        <div className="bg-background text-white font-body">
            {/* Each section takes full viewport height and uses scroll-snap for smooth navigation */}
            <section id="home" className="snap-start min-h-screen">
                <Hero />
            </section>
            <section id="about" className="snap-start min-h-screen py-20">
                <Skills />
            </section>
            <section id="experience" className="snap-start min-h-screen py-20">
                <Experience />
            </section>
            <section id="projects" className="snap-start min-h-screen py-20">
                <Projects />
            </section>
            <section id="contact" className="snap-start min-h-screen py-20">
                <Contact />
            </section>
        </div>
    );
};

export default LandingPage;
