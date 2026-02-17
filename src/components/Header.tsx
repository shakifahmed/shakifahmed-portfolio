import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'Skills',
    'Education',
    'Experience',
    'Projects',
    'Publications',
    'Certifications'
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Name/Logo */}
          <a href="#home" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Shakif Ahmed
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-lg"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/Shakif_Ahmed_CV.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0066b3] text-white font-medium transition-all duration-200 hover:bg-[#005599]"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="/Shakif_Ahmed_CV.pdf"
                download
                className="flex items-center space-x-2 px-4 py-3 mt-2 bg-[#0066b3] text-white rounded-lg font-medium"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;