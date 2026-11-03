import { motion } from 'framer-motion';
import { Network, Shield, Activity } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';
import profileImg from '../assets/PAC.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with layered overlays for depth and text legibility */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-indigo-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.18),transparent_55%)]" />
        {/* Blend into the light page content below */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-slate-100" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-14 sm:pt-28 sm:pb-16 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-indigo-200 text-xs font-bold uppercase tracking-wider mb-6">
            <Activity size={14} className="text-indigo-300" />
            <span>Infrastructure & Security Specialist</span>
          </div>
          
          <h1 className="heading-xl text-white mb-6">
            Designing Secure <span className="text-indigo-400">Enterprise</span> Systems
          </h1>
          
          <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Specializing in high-performance server administration, network security, and data center operations. 
            Currently leading infrastructure optimization at <span className="font-semibold text-white">Rwanda Energy Group</span>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 border border-white/25 text-white font-semibold text-sm backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="relative w-64 md:w-80 aspect-[413/531] z-10">
            <div className="w-full h-full bg-white rounded-3xl border border-white/20 ring-1 ring-white/10 overflow-hidden relative shadow-2xl shadow-black/40">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-xl">
                <Shield className="text-indigo-600" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-xl">
                <Network className="text-emerald-600" size={24} />
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -inset-4 bg-indigo-500/20 rounded-[2.5rem] -rotate-3 -z-10 blur-sm" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
