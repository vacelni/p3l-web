'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-[#E5E5EA]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="font-semibold text-black">P3L</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#programs"
              className="text-sm text-black hover:text-[#86868B] transition-colors"
            >
              Program Pelatihan
            </a>
            <a
              href="#services"
              className="text-sm text-black hover:text-[#86868B] transition-colors"
            >
              Layanan Engineering
            </a>
            <a
              href="#schedules"
              className="text-sm text-black hover:text-[#86868B] transition-colors"
            >
              Jadwal
            </a>
            <a
              href="#contact"
              className="text-sm text-black hover:text-[#86868B] transition-colors"
            >
              Kontak
            </a>
          </nav>

          <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:scale-[1.02] active:scale-98 transition-transform">
            Hubungi
          </button>
        </div>
      </div>
    </header>
  );
}
