import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [themeOpen, setThemeOpen] = useState(false);

    // Define 5 distinct themes
    const themes = [
        { name: 'Gold', color: '#ffb74d', glow: 'rgba(255, 183, 77, 0.4)' },      // Current
        { name: 'Neon Green', color: '#84cc16', glow: 'rgba(132, 204, 22, 0.4)' }, // Original
        { name: 'Sky Blue', color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.4)' },    // Cyan
        { name: 'Purple', color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)' },     // Purple
        { name: 'Rose', color: '#f43f5e', glow: 'rgba(244, 63, 94, 0.4)' },        // Red/Pink
    ];

    const [currentTheme, setCurrentTheme] = useState(themes[0]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Apply theme to root
        document.documentElement.style.setProperty('--primary', currentTheme.color);
        document.documentElement.style.setProperty('--color-primary', currentTheme.color);
        document.documentElement.style.setProperty('--primary-glow', currentTheme.glow);
        document.documentElement.style.setProperty('--color-primary-glow', currentTheme.glow);
    }, [currentTheme]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
                {/* Logo */}
                {/* Logo */}
                <div onClick={() => scrollToSection('#home')} className="cursor-pointer w-12 h-12 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="35" y="75" fontSize="70" fontWeight="900" textAnchor="middle" fill="currentColor" className="text-white font-sans">A</text>
                        <text x="75" y="75" fontSize="70" fontWeight="900" textAnchor="middle" fill="currentColor" className="text-primary font-sans">S</text>
                    </svg>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}

                    <div className="flex items-center gap-4">
                        <button onClick={() => scrollToSection('#contact')} className="px-5 py-2 border border-stone-700 rounded-full text-primary hover:bg-primary hover:text-black transition-all text-sm font-bold">
                            Hire Me
                        </button>

                        {/* Theme Button */}
                        <div className="relative">
                            <button
                                onClick={() => setThemeOpen(!themeOpen)}
                                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-primary transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="14.31" y1="8" x2="20.05" y2="17.94" /><line x1="9.69" y1="8" x2="21.17" y2="8" /><line x1="7.38" y1="12" x2="13.12" y2="2.06" /><line x1="9.69" y1="16" x2="3.95" y2="6.06" /><line x1="14.31" y1="16" x2="2.83" y2="16" /><line x1="16.62" y1="12" x2="10.88" y2="21.94" /></svg>
                            </button>

                            {/* Theme Dropdown */}
                            {themeOpen && (
                                <div className="absolute top-full right-0 mt-2 bg-black border border-white/10 rounded-lg p-3 shadow-xl w-48 flex flex-col gap-2">
                                    <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Choose Theme</p>
                                    <div className="grid grid-cols-5 gap-2">
                                        {themes.map((theme) => (
                                            <button
                                                key={theme.name}
                                                onClick={() => { setCurrentTheme(theme); setThemeOpen(false); }}
                                                className={`w-6 h-6 rounded-full border border-gray-700 hover:scale-110 transition-transform ${currentTheme.name === theme.name ? 'ring-2 ring-white ring-offset-1 ring-offset-black' : ''}`}
                                                style={{ backgroundColor: theme.color }}
                                                title={theme.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-gray-800 p-6 flex flex-col space-y-4 shadow-2xl h-screen">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="text-left text-gray-300 hover:text-primary text-base font-medium py-2"
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="h-px bg-gray-800 my-2"></div>
                    <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400 text-sm">Theme</span>
                        <div className="flex gap-3">
                            {themes.map((theme) => (
                                <button
                                    key={theme.name}
                                    onClick={() => setCurrentTheme(theme)}
                                    className={`w-6 h-6 rounded-full border border-gray-700 ${currentTheme.name === theme.name ? 'ring-2 ring-white ring-offset-1 ring-offset-black' : ''}`}
                                    style={{ backgroundColor: theme.color }}
                                />
                            ))}
                        </div>
                    </div>
                    <button onClick={() => scrollToSection('#contact')} className="w-full text-center px-5 py-3 bg-primary text-black rounded-lg font-bold mt-4">
                        Hire Me
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
