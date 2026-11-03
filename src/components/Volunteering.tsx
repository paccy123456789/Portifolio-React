import { motion } from 'framer-motion';
import { Heart, Calendar, Users, ExternalLink } from 'lucide-react';

const Volunteering = () => {
  return (
    <section id="volunteering">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="heading-lg">Volunteering & Community</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Committed to using my technical background for social impact and community growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-6 sm:p-10 group hover:border-indigo-500/30"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                <Heart size={14} />
                <span>Volunteer</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                Re_Action for Education Program
              </h3>
              <div className="flex items-center gap-2 font-semibold text-indigo-600">
                <Users size={18} />
                <span>makesense · in partnership with The Laidlaw Foundation</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 text-slate-500 font-medium text-sm">
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                <Calendar size={14} className="text-slate-400" />
                <span>Jul 2020 - Sep 2020 · 3 mos</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                <Heart size={14} className="text-slate-400" />
                <span>Cause: Children</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-600 leading-relaxed max-w-3xl">
            <p>
              I had the opportunity to participate in the Re_Action for Education Program, a one-week
              volunteer initiative organized by Makesense in partnership with The Laidlaw Foundation,
              aimed at addressing the educational challenges caused by the COVID-19 pandemic.
            </p>
            <p>
              During this program, I collaborated with a diverse team to support innovative solutions
              that help improve access to education, particularly for learners affected by disruptions
              in traditional learning systems. This experience allowed me to contribute to meaningful
              social impact while strengthening my skills in teamwork, problem-solving, and community
              engagement.
            </p>
            <p>
              Through this initiative, I gained valuable insights into how technology and collaborative
              efforts can be leveraged to address real-world challenges in education, especially in
              low-resource settings. It also reinforced my commitment to using my technical and research
              background to support impactful solutions in society.
            </p>
            <p>
              I am grateful for the guidance and support provided by the program mobilizers and fellow
              participants, and I look forward to continuing to contribute to initiatives that promote
              equitable access to education.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100">
            <a
              href="https://www.linkedin.com/in/pacifique-proffesor/overlay/VolunteerExperience/913997251/treasury/?profileId=ACoAAC-rFPMB_R27QVmfvOHF1ATZ6wiBld5eoRc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              <ExternalLink size={18} />
              View Certificate
            </a>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
