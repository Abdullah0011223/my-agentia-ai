export default function Features() {
    return (
        <div id="features" className="bg-black py-10 px-4">
            <h1 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent font-bold text-4xl text-center">Key Features</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
                <div className="border border-red-400 bg-gray-900 p-8 rounded-2xl text-center">
                    <h2 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent font-semibold text-xl">Scalable Architecture</h2>
                    <p className="text-gray-400 mt-2">Built to grow with your business needs</p>
                </div>

                <div className="border border-red-400 bg-gray-900 p-8 rounded-2xl text-center">
                    <h2 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent font-semibold text-xl">Real-time Processing</h2>
                    <p className="text-gray-400 mt-2">Instant insights and decision-making</p>
                </div>

                <div className="border border-red-400 bg-gray-900 p-8 rounded-2xl text-center">
                    <h2 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent font-semibold text-xl">Customizable Solutions</h2>
                    <p className="text-gray-400 mt-2">Tailored AI models for your specific use case</p>
                </div>

                <div className="border border-red-400 bg-gray-900 p-8 rounded-2xl text-center">
                    <h2 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent font-semibold text-xl">Secure and Compliant</h2>
                    <p className="text-gray-400 mt-2">Enterprise-grade security and data protection</p>
                </div>
            </div>
        </div>
    );
}
