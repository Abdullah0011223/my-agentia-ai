"use client";

import { useState, useEffect } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import ParticlesComponent from "./particles";

export default function Hero() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [heroText, setHeroText] = useState("");
  const fullText = "Embrace The Next Era Of AI Innovation";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setHeroText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    // User message
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Typing effect for bot
    let i = 0;
    const botResponse = `Hello, I am Abdullah. You said: ${input}`;
    setTimeout(() => {
      const interval = setInterval(() => {
        setMessages((prev) => {
          const newMessages = [...prev];
          if (newMessages[newMessages.length - 1]?.sender !== "bot") {
            newMessages.push({ text: "", sender: "bot" });
          }
          newMessages[newMessages.length - 1].text = botResponse.slice(
            0,
            i + 1
          );
          return [...newMessages];
        });
        i++;
        if (i === botResponse.length) clearInterval(interval);
      }, 50);
    }, 500);
  };

  return (
    <div className="relative h-screen">
      <ParticlesComponent />
      <div className="flex flex-col justify-center items-center min-h-screen text-center gap-6">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 text-transparent bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text">
          {heroText}
        </h1>

        <h2 className="text-white text-xl sm:text-2xl max-w-2xl">
          Unlock the power of AI to transform and elevate your business.
        </h2>
        <button
          className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-6 py-3 rounded-2xl font-bold"
          onClick={() => {
            const element = document.getElementById("solution");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Explore AI Solutions
        </button>

        {/* Chatbox Button */}
        <IoChatboxEllipsesOutline
          className="bg-red-500 rounded-full text-5xl py-2 text-white fixed bottom-5 right-5 shadow-lg cursor-pointer"
          onClick={() => setShowChat(!showChat)}
        />

        {/* Chatbox UI */}
        {showChat && (
          <div className="fixed bottom-16 right-5 w-80 bg-white p-4 rounded-lg shadow-lg">
            <div className="h-48 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 my-1 text-sm rounded-md ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-300 text-black self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Field & Send Button */}
            <div className="flex mt-2">
              <input
                type="text"
                className="flex-grow border p-2 rounded-l-md"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded-r-md"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
