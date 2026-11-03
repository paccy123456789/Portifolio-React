import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "MSc in IoT-Wireless Intelligent Sensor Network",
    period: "2025 - 2027",
    institution: "University of Rwanda College of Science and Technology",
    description: "Advanced study in Internet of Things (IoT) and Wireless Intelligent Sensor Networks, focusing on intelligent sensor nodes, low-power communication protocols, and data analytics in sensor networks."
  },
  {
    degree: "BSc in Information Systems",
    period: "2017 - 2022",
    institution: "University of Rwanda College of Science and Technology",
    description: "Foundation in information systems, database management, software engineering, and network fundamentals. Developed a strong analytical background for enterprise-scale IT solutions."
  }
];

const Education = () => {
  return (
    <section id="education">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="heading-lg">Education</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Academic foundations and advanced specializations that support my technical expertise 
            in infrastructure and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className="glass-card p-6 group hover:border-indigo-500/30 bg-white"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100 text-slate-500 text-xs font-bold">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {edu.degree}
              </h3>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                <MapPin size={16} className="text-slate-400" />
                <span className="font-medium">{edu.institution}</span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {edu.description}
              </p>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                <BookOpen size={14} />
                <span>Academic Record</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
