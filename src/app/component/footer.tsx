export default function Footer() {
    return (
      <footer className="bg-[#0d1117] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">Artificial Intelligence</h2>
            <p className="text-gray-400">Shaping the future with AI</p>
          </div>
  
          {/* Center Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-blue-400">Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400">Features</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
  
          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold">Connect with us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><i className="fab fa-github"></i></a>
            </div>
          </div>
  
        </div>
  
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © 2025 Artificial Intelligence. All rights reserved.
        </div>
      </footer>
    );
  }
  