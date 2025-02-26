export default function Solutions() {
    return (
        <div id="solution" className="bg-gray-800 py-10">
            <h1 className="text-center font-bold text-4xl bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
                Innovative AI Solutions
            </h1>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-10">
                {/* AI Solution Cards */}
                <div className="bg-gray-700 px-6 py-12 rounded-3xl text-center">
                    <h1 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent text-3xl font-bold">
                        Natural Language Processing
                    </h1>
                    <p className="text-gray-300 text-lg mt-4">Advanced text analysis and generation</p>
                </div>

                <div className="bg-gray-700 px-6 py-12 rounded-3xl text-center">
                    <h1 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent text-3xl font-bold">
                        Computer Vision
                    </h1>
                    <p className="text-gray-300 text-lg mt-4">Image recognition and object detection</p>
                </div>

                <div className="bg-gray-700 px-6 py-12 rounded-3xl text-center">
                    <h1 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent text-3xl font-bold">
                        AI Chatbots
                    </h1>
                    <p className="text-gray-300 text-lg mt-4">Intelligent virtual assistants</p>
                </div>

                <div className="bg-gray-700 px-6 py-12 rounded-3xl text-center">
                    <h1 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent text-3xl font-bold">
                        Predictive Analytics
                    </h1>
                    <p className="text-gray-300 text-lg mt-4">Data-driven future insights</p>
                </div>
            </div>
        </div>
    );
}
