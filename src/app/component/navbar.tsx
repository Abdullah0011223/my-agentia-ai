"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Scroll listener to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["solution", "features", "analytics", "pricing", "testimonials", "contact"];
            let found = false;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        found = true;
                        break;
                    }
                }
            }

            if (!found) setActiveSection(""); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(id);
        }
        setIsOpen(false); // Mobile menu close karein
    };

    const navLinks = [
        { id: "solution", label: "Solutions" },
        { id: "features", label: "Features" },
        { id: "analytics", label: "Analytics" },
        { id: "pricing", label: "Pricing" },
        { id: "testimonials", label: "Testimonials" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="bg-black text-white py-5 font-medium fixed w-full z-50">
            <div className="flex justify-between items-center px-7">
                {/* Left Side - Logo */}
                <div className="text-xl font-bold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
                    Artificial Intelligence
                </div>

                {/* Hamburger Menu Button */}
                <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Right Side - Navigation Links */}
                <div className="lg:flex space-x-6 hidden">
                    {navLinks.map((item, index) => (
                        <button 
                            key={index} 
                            onClick={() => scrollToSection(item.id)} 
                            className={`relative cursor-pointer hover:text-red-500 group transition-all ${
                                activeSection === item.id ? "text-red-400" : "text-white"
                            }`}
                        >
                            {item.label}
                            <span className={`absolute left-0 right-auto -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:right-0 ${activeSection === item.id ? "w-full" : ""}`}></span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden flex flex-col space-y-4 px-7 pb-5">
                    {navLinks.map((item, index) => (
                        <button 
                            key={index} 
                            onClick={() => scrollToSection(item.id)} 
                            className="block text-white hover:text-red-400 py-2 border-b border-gray-700"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
