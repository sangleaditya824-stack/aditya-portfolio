import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants/data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields");
            return;
        }

        setIsSending(true);

        try {
            // 1. Send Email via EmailJS
            const serviceId = 'YOUR_SERVICE_ID';  // Replace in EMAIL_SETUP_INSTRUCTIONS.md
            const templateId = 'YOUR_TEMPLATE_ID'; // Replace in EMAIL_SETUP_INSTRUCTIONS.md
            const publicKey = 'YOUR_PUBLIC_KEY';   // Replace in EMAIL_SETUP_INSTRUCTIONS.md

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Aditya',
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            // 2. Open WhatsApp
            const whatsappText = `Hello Aditya,\n\nMy name is *${formData.name}*.\nEmail: ${formData.email}\n\n*Message:* ${formData.message}`;
            const mobileNumber = CONTACT_INFO.phoneRaw;
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${mobileNumber}&text=${encodeURIComponent(whatsappText)}`;

            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            alert('Message sent successfully! Email sent and WhatsApp opened.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send email. But opening WhatsApp...');

            // Still open WhatsApp even if email fails
            const whatsappText = `Hello Aditya,\n\nMy name is *${formData.name}*.\nEmail: ${formData.email}\n\n*Message:* ${formData.message}`;
            const mobileNumber = CONTACT_INFO.phoneRaw;
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${mobileNumber}&text=${encodeURIComponent(whatsappText)}`;
            window.open(whatsappUrl, '_blank');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-[#050505] text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h3 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Get In Touch</h3>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">Let's <span className="text-primary">Connect</span></h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base px-2">
                        Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4 md:space-y-6"
                    >
                        <div className="bg-black p-6 md:p-8 rounded-2xl transition-all">
                            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <a
                                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 bg-primary rounded-lg shrink-0 hover:scale-110 transition-transform cursor-pointer"
                                        style={{ backgroundColor: 'var(--primary)' }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    </a>
                                    <div className="overflow-hidden">
                                        <p className="text-sm text-gray-400">Email</p>
                                        <a
                                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="font-bold text-base md:text-lg break-words hover:text-primary transition-colors cursor-pointer"
                                        >
                                            {CONTACT_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <a
                                        href={`tel:${CONTACT_INFO.phoneRaw}`}
                                        className="p-3 bg-primary rounded-lg text-black shrink-0 hover:scale-110 transition-transform cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </a>
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <a
                                            href={`tel:${CONTACT_INFO.phoneRaw}`}
                                            className="font-bold text-base md:text-lg hover:text-primary transition-colors cursor-pointer"
                                        >
                                            {CONTACT_INFO.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <a
                                        href="https://www.google.com/maps/place/Nashik,+Maharashtra"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary rounded-lg text-black shrink-0 hover:scale-110 transition-transform cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </a>
                                    <div>
                                        <p className="text-sm text-gray-400">Location</p>
                                        <a
                                            href="https://www.google.com/maps/place/Nashik,+Maharashtra"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold text-base md:text-lg hover:text-primary transition-colors cursor-pointer"
                                        >
                                            {CONTACT_INFO.location}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black p-6 md:p-8 rounded-2xl transition-all">
                            <h3 className="text-lg md:text-xl font-bold mb-2">Open for Opportunities</h3>
                            <p className="text-gray-400 text-sm">
                                I'm currently looking for internship opportunities and freelance projects. If you have an interesting project or position, I'd love to hear about it!
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Key Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-black p-6 md:p-8 rounded-2xl relative transition-all"
                    >
                        <h3 className="text-xl md:text-2xl font-bold mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold uppercase text-gray-400 mb-2">Your Name</label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#111] rounded-lg p-3 md:p-4 text-white focus:outline-none transition-colors text-sm md:text-base placeholder:text-gray-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-400 mb-2">Your Email</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#111] rounded-lg p-3 md:p-4 text-white focus:outline-none transition-colors text-sm md:text-base placeholder:text-gray-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold uppercase text-gray-400 mb-2">Your Message</label>
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#111] border border-white/10 rounded-lg p-3 md:p-4 text-white focus:border-primary focus:outline-none transition-colors resize-none text-sm md:text-base placeholder:text-gray-600"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full bg-primary text-black font-bold py-3 md:py-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                {isSending ? 'Sending...' : 'Send to Email & WhatsApp'}
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Socials */}
                <div className="mt-20 pt-8 flex justify-between items-center text-sm text-gray-500">
                    <div className="font-bold text-primary text-lg">AS</div>
                    <p>© 2025 Aditya Sangale. All rights reserved. v1.1</p>
                    <div className="flex items-center gap-6">
                        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></a>
                        <a href={CONTACT_INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></a>
                        <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
