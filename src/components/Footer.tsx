import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Share2, Phone, Check, GraduationCap, Microscope, Heart, Users } from 'lucide-react';

// lucide-react no longer ships brand icons, so the LinkedIn glyph is inlined here.
const Linkedin = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.22 0z" />
  </svg>
);

const EMAIL = 'hakizimanapacifique2@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/pacifique-proffesor/';
const PHONE_DISPLAY = '+250 788 298 458';
const PHONE_TEL = '+250788298458';

const futureSections = [
  { icon: <GraduationCap size={20} />, label: "Education" },
  { icon: <Microscope size={20} />, label: "Research" },
  { icon: <Heart size={20} />, label: "Volunteering", href: "#volunteering" },
  { icon: <Users size={20} />, label: "Internships & Training" }
];

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: 'Pacifique HAKIZIMANA — IT Systems Infrastructure & Cybersecurity',
      text: 'Portfolio of Pacifique HAKIZIMANA, IT Systems Infrastructure & Cybersecurity specialist.',
      url,
    };
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Share sheet dismissed — no action needed
    }
  };

  return (
    <footer id="contact" className="border-t border-slate-200 bg-white/60 backdrop-blur-sm relative overflow-hidden scroll-mt-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h2 className="heading-lg">Let's Connect</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Available for professional collaborations, technical consultations, or 
            infrastructure-focused opportunities. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white py-2.5 pl-2.5 pr-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-500/50 hover:text-indigo-600 hover:shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <Mail size={16} />
                </span>
                {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white py-2.5 pl-2.5 pr-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-500/50 hover:text-sky-600 hover:shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <Linkedin size={16} />
                </span>
                LinkedIn
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="group inline-flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white py-2.5 pl-2.5 pr-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-600 hover:shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Phone size={16} />
                </span>
                {PHONE_DISPLAY}
              </a>
              <button
                type="button"
                onClick={handleShare}
                className="group inline-flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white py-2.5 pl-2.5 pr-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-500/50 hover:text-indigo-600 hover:shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  {copied ? <Check size={16} /> : <Share2 size={16} />}
                </span>
                {copied ? 'Link copied' : 'Share'}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Professional Milestones</h4>
            <div className="grid grid-cols-2 gap-4">
              {futureSections.map((item, index) => {
                const className = "flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-500 shadow-sm transition-all hover:bg-white hover:border-indigo-100";
                const content = (
                  <>
                    <div className="text-indigo-500">{item.icon}</div>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </>
                );
                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium text-sm">
            © 2026 <span className="text-slate-900 font-bold">Infrastructure Specialist</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
