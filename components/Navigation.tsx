'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#0a0a0a]/80 border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white border border-white/5 flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300 relative overflow-hidden p-1.5 shadow-lg shadow-white/5">
              <img src="/images/logo.png" alt="Expert Cool Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-syne font-bold text-sm tracking-tight text-cool-400">EXPERT COOL</span>
              <span className="block text-[10px] text-neutral-500 uppercase tracking-widest">AC Technician</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['services', 'why-us', 'gallery', 'process', 'reviews', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {item.replace('-', ' ')}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+923017067764"
              className="hidden sm:flex cta-btn items-center gap-2 bg-cool-500 text-black text-xs font-medium uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-cool-400 transition-colors duration-300"
            >
              <Icon icon="lucide:phone" className="text-sm" />
              Call Now
            </a>
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
            >
              <Icon
                icon={isOpen ? 'lucide:refrigerator' : 'lucide:air-vent'}
                className="text-xl"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Side Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#0a0a0a] border-l border-white/5 shadow-2xl flex flex-col p-8 transition-transform duration-300 cubic-bezier(0.2, 0.8, 0.2, 1) ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <span className="font-syne font-bold text-lg text-cool-400">MENU</span>
          <button onClick={closeMenu} className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10">
            <Icon icon="lucide:refrigerator" className="text-xl" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {['services', 'why-us', 'gallery', 'process', 'reviews', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={closeMenu}
              className="text-xl font-syne font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {item.replace('-', ' ').charAt(0).toUpperCase() + item.replace('-', ' ').slice(1)}
            </a>
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-white/5">
          <a
            href="tel:+923017067764"
            className="cta-btn flex items-center justify-center gap-2 bg-cool-500 text-black text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-xl"
          >
            <Icon icon="lucide:phone" />
            Call Now
          </a>
        </div>
      </div>
    </>
  );
}
