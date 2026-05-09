import React from 'react';
import { Link } from 'react-router-dom';
const logo = '/Yuganter_Technologies.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="YugAntar Technologies" className="w-16 h-16 mr-4 rounded-full object-contain" />

              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-secondary-300 group-hover:to-primary-300">
                YugAntar Technologies <br />
                <span className="text-sm md:text-base font-medium">
                  & Training Institute
                </span>
              </h1>
            </div>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 max-w-md">
              YugAntar Technologies Ahmedabad - Leading software development company in Navrangpura offering web development, mobile app solutions, and IT consultancy for businesses in Gujarat.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">

              {/* Facebook */}
              <a href="https://www.facebook.com/share/16Ao4uJg7S/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300 hover:scale-110 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H7.9v-2.88h2.47V9.41c0-2.43 1.45-3.78 3.68-3.78 1.07 0 2.19.19 2.19.19v2.4h-1.23c-1.21 0-1.59.75-1.59 1.52v1.82h2.7l-.43 2.88h-2.27v6.99A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/YugATechnologie" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300 hover:scale-110 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.34-6.99L3.5 22H1l7.03-8.03L2 2h6.828l4.84 6.35L18.244 2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/yugantar_technologies?igsh=Z2Q5cXMxaXg2dm93" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300 hover:scale-110 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 
      0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 
      5a5 5 0 110 10 5 5 0 010-10zm6.5-.25a1.25 
      1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 
      9a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 flex items-center justify-center transition-all duration-300 hover:scale-110 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 
      0zM3.5 8.75h3v9.75h-3V8.75zM9 8.75h2.88v1.33h.04c.4-.76 
      1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v5.4h-3v-4.79c0-1.14-.02-2.6-1.58-2.6-1.58 
      0-1.82 1.23-1.82 2.52v4.87H9V8.75z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-6 text-secondary-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Courses</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Blog</Link></li>
              <li><Link to="/internship" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Internships</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary-400 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100"></span>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-6 text-secondary-400">Contact Info</h3>

            <ul className="space-y-4 text-gray-300">

              {/* Address */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>204, 2nd Floor, Yash Aqua, Vijay Cross Road, Navrangpura, Ahmedabad - 380009</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@yugantartechnologies.com" className="hover:text-secondary-400 transition-colors">
                  info@yugantartechnologies.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>

                <div className="flex flex-col">
                  <a href="tel:+916355582605" className="hover:text-secondary-400 transition-colors">
                    +91 6355582605
                  </a>
                  <a href="tel:+917859982605" className="hover:text-secondary-400 transition-colors">
                    +91 7859982605
                  </a>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© {currentYear} YugAntar Technologies – All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}