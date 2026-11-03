import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Preloader from './components/Preloader';
import Experience from './components/Experience';
import Education from './components/Education';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Volunteering from './components/Volunteering';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#research", label: "Research" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#volunteering", label: "Volunteering" },
  ];

  const projectGroups = [
    { href: "#projects-network", label: "Network & Infrastructure" },
    { href: "#projects-security", label: "Security & Cyber Defence" },
    { href: "#projects-iot", label: "IoT & Edge Intelligence" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Ambient page background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-white to-indigo-50" />
        <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-indigo-400/20 blur-[110px]" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-sky-400/20 blur-[110px]" />
        <div className="absolute bottom-10 left-1/4 h-[30rem] w-[30rem] rounded-full bg-emerald-300/15 blur-[110px]" />
        <div className="bg-grid absolute inset-0" />
      </div>

      {/* Loading overlay */}
      <Preloader />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            aria-label="Portfolio — back to top"
            className="group relative inline-block text-xl font-extrabold uppercase leading-none tracking-[0.14em]"
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-indigo-700 bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="bg-gradient-to-br from-indigo-600 to-sky-500 bg-clip-text text-transparent">
              .
            </span>
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-indigo-600 via-sky-500 to-transparent transition-all duration-500 ease-out group-hover:w-[110%]" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.label === 'Projects' ? (
                <div key={link.href} className="group relative">
                  <a href={link.href} className="nav-link inline-flex items-center gap-1">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </a>
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-64 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl shadow-slate-900/10 backdrop-blur-md">
                      {projectGroups.map((group) => (
                        <a
                          key={group.href}
                          href={group.href}
                          className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          {group.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              )
            )}
            <a href="#" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-all shadow-md">
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <a 
                      href={link.href} 
                      className="block text-lg font-medium text-slate-600 hover:text-indigo-600 transition-colors py-2"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                    {link.label === 'Projects' && (
                      <div className="mt-1 flex flex-col gap-1 border-l border-slate-200 pl-4">
                        {projectGroups.map((group) => (
                          <a
                            key={group.href}
                            href={group.href}
                            className="py-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
                            onClick={closeMenu}
                          >
                            {group.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a 
                  href="#" 
                  className="mt-2 w-full text-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-md"
                  onClick={closeMenu}
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Education />
        <Research />
        <Skills />
        <Projects />
        <Volunteering />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
