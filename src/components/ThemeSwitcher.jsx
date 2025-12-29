import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
    // Define 5 distinct themes
    const themes = [
        { name: 'Gold', color: '#ffb74d', glow: 'rgba(255, 183, 77, 0.4)' },      // Current
        { name: 'Neon Green', color: '#84cc16', glow: 'rgba(132, 204, 22, 0.4)' }, // Original
        { name: 'Sky Blue', color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.4)' },    // Cyan
        { name: 'Purple', color: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)' },     // Purple
        { name: 'Rose', color: '#f43f5e', glow: 'rgba(244, 63, 94, 0.4)' },        // Red/Pink
    ];

    const [currentTheme, setCurrentTheme] = useState(themes[0]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Apply theme to root
        document.documentElement.style.setProperty('--primary', currentTheme.color);
        document.documentElement.style.setProperty('--color-primary', currentTheme.color); // Update for Tailwind v4 if needed heavily
        document.documentElement.style.setProperty('--primary-glow', currentTheme.glow);
        document.documentElement.style.setProperty('--color-primary-glow', currentTheme.glow);

        // Also update the lighter hover color logic if you want robust hover states
        // But simply updating primary usually covers most as we used opacity or brightness filters elsewhere
    }, [currentTheme]);

    return (
        <div className="fixed top-24 right-0 z-50 flex items-center">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#121212] p-3 text-white rounded-l-lg border-y border-l border-gray-800 shadow-xl hover:text-primary transition-colors"
                title="Change Theme"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin-slow">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                    <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                    <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                    <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                    <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                    <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                </svg>
            </button>

            {/* Colors Panel */}
            <div className={`bg-[#121212] border-y border-b border-gray-800 p-4 flex flex-col gap-3 shadow-xl transition-all duration-300 origin-right ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} rounded-bl-lg`}>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Theme</h4>
                <div className="flex flex-col gap-2">
                    {themes.map((theme) => (
                        <button
                            key={theme.name}
                            onClick={() => setCurrentTheme(theme)}
                            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 flex items-center justify-center ${currentTheme.name === theme.name ? 'border-white scale-110' : 'border-transparent'}`}
                            style={{ backgroundColor: theme.color }}
                            title={theme.name}
                        >
                            {currentTheme.name === theme.name && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
