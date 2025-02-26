"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ParticlesComponent from "./particles";

export default function ContactForm() {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Restart animation every time it enters the viewport
                    controls.start({ opacity: 1, y: 0 });
                } else {
                    // Reset to initial state when it leaves viewport
                    controls.start({ opacity: 0, y: 50 });
                }
            },
            { threshold: 0.3 } // 30% form visible hote hi animation trigger
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [controls]);

    return (
        <div id="contact" className="relative min-h-screen flex items-center justify-center px-6">
            <ParticlesComponent />

            {/* Animated Contact Form */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }} // Start hidden and move up
                animate={controls} // Controls manage animation state
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative bg-gray-900 text-white p-8 rounded-xl w-full max-w-lg shadow-lg z-10"
            >
                <h2 className="text-center text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">Get in Touch</h2>
                <p className="text-center text-gray-400 mb-6">
                    Have a question or need support? Feel free to reach out!
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-300 mb-1">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Message</label>
                        <textarea
                            rows={4}
                            placeholder="Write your message..."
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-red-400 to-purple-500  text-white py-3 rounded-lg font-bold text-lg transition"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
