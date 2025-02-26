"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Testimonials() {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ opacity: 1, y: 0 });
                } else {
                    controls.start({ opacity: 0, y: 50 }); // Reset animation
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [controls]);

    return (
        <div id="testimonials" className="bg-gray-900 py-16 px-6 text-white">
            {/* Testimonials Section */}
            <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
                What Our Clients Say
            </h2>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            >
                {/* Testimonial Cards */}
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-red-400 text-white p-3 rounded-full">
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 11c0 2.21-1.79 4-4 4S4 13.21 4 11s1.79-4 4-4 4 1.79 4 4zm0 0c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                <p className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent text-sm">{testimonial.position}</p>
                            </div>
                        </div>
                        <p className="text-gray-300">{testimonial.feedback}</p>
                    </div>
                ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="bg-gradient-to-r from-red-400 to-purple-500 rounded-xl text-center py-12 px-6 mt-16 max-w-3xl mx-auto"
            >
                <h2 className="text-2xl md:text-3xl font-bold">
                    Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg mt-4">
                    Join the AI revolution and stay ahead of the competition. Let's build the future together.
                </p>
                <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-100">
                    Get Started Now
                </button>
            </motion.div>
        </div>
    );
}

const testimonials = [
    {
        name: "John Doe",
        position: "CEO, TechCorp",
        feedback:
            "Agentia World has revolutionized our AI implementation. Their solutions are cutting-edge and have significantly improved our efficiency.",
    },
    {
        name: "Jane Smith",
        position: "CTO, InnovateCo",
        feedback:
            "The analytics provided by Agentia World have given us unprecedented insights into our operations. It's been a game-changer for our business.",
    },
    {
        name: "Mike Johnson",
        position: "Data Scientist, AI Innovations",
        feedback:
            "As a data scientist, I'm impressed by the depth and accuracy of Agentia World's AI models. They're truly at the forefront of AI technology.",
    },
];
