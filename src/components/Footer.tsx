import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shakifahmed', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shakif-ahmed', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shakifahmed21@gmail.com', label: 'Email' },
  ];

  const quickLinks = ['Home', 'Skills', 'Education', 'Projects', 'Publications', 'Experience', 'Certifications'];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066b3] via-sky-400 to-cyan-400" />
      
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gray-800">
                  <Mail size={14} className="text-[#0066b3]" />
                </div>
                <a
                  href="mailto:shakifahmed21@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  shakifahmed21@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gray-800">
                  <Linkedin size={14} className="text-[#0066b3]" />
                </div>
                <a
                  href="https://www.linkedin.com/in/shakif-ahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  linkedin.com/in/shakif-ahmed
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gray-800">
                  <Github size={14} className="text-white" />
                </div>
                <a
                  href="https://github.com/shakifahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  github.com/shakifahmed
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Shakif Ahmed. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;