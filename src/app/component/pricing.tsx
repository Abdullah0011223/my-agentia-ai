"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Pricing() {
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
            { threshold: 0.3 } // Trigger when 30% of pricing section is visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [controls]);

    return (
        <div id="pricing" className="bg-gray-900 text-white py-16 px-6">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent font-bold text-center">Choose Your Plan</h2>
                <p className="text-center text-gray-400 mt-2">
                    Unlock the power of AI with our flexible pricing options
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
                    {/* Starter Plan */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-md text-center">
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">Starter</h3>
                        <p className="text-4xl font-bold mt-4">
                            $99 <span className="text-lg text-gray-400">per month</span>
                        </p>
                        <ul className="mt-6 space-y-2 text-gray-300">
                            <li>✔ 1 AI Model</li>
                            <li>✔ 100k API Calls</li>
                            <li>✔ Basic Support</li>
                            <li>✔ Weekly Reports</li>
                        </ul>
                        <button className="mt-6 bg-gray-700 text-white px-6 py-3 rounded-lg w-full">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-md text-center border-2 border-red-400 relative">
                        <span className="absolute top-4 right-4 bg-gradient-to-r from-red-400 to-purple-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                            MOST POPULAR
                        </span>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">Pro</h3>
                        <p className="text-4xl font-bold mt-4">
                            $299 <span className="text-lg text-gray-400">per month</span>
                        </p>
                        <ul className="mt-6 space-y-2 text-gray-300">
                            <li>✔ 3 AI Models</li>
                            <li>✔ 500k API Calls</li>
                            <li>✔ Priority Support</li>
                            <li>✔ Daily Reports</li>
                            <li>✔ Custom Integration</li>
                        </ul>
                        <button className="mt-6 bg-gradient-to-r from-red-400 to-purple-500 text-white px-6 py-3 rounded-lg w-full">
                            Upgrade to Pro
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-md text-center">
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">Enterprise</h3>
                        <p className="text-4xl font-bold mt-4">
                            Custom <span className="text-lg text-gray-400">contact us</span>
                        </p>
                        <ul className="mt-6 space-y-2 text-gray-300">
                            <li>✔ Unlimited AI Models</li>
                            <li>✔ Unlimited API Calls</li>
                            <li>✔ Dedicated Support</li>
                            <li>✔ Real-time Analytics</li>
                            <li>✔ Full Customization</li>
                            <li>✔ On-premise Option</li>
                        </ul>
                        <button className="mt-6 bg-gray-700 text-white px-6 py-3 rounded-lg w-full">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
