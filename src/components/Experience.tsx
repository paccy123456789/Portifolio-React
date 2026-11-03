import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "IT Systems Infrastructure Specialist",
    company: "Rwanda Energy Group",
    period: "Current",
    location: "Kigali, Rwanda",
    responsibilities: [
      "Manage and coordinate activities related to Network and Systems administration",
      "Responsible for designing, installation, administration and optimization of company servers and related components to achieve high performance of the various applications",
      "Provide technical network plan, engineering and architecture and assist in long-term strategic planning to ensure network capacity meets current and future network requirements",
      "Responsible for managing the network & data center infrastructure maintenance",
      "Responsible for systems reliability, functionality and stability, disaster recovery availability and operations",
      "Lead in designing, developing and maintaining the company Wide Area Network and coordinate network extensions including Local Area Networks",
      "Schedule upgrades and network security of equipment and software systems and providing secured access to the network users",
      "Manage the security of data from internal and external attack and ensure the availability of the network and systems",
      "Develop and keep up to date with the latest technologies of networking and communication",
      "Participate in the preparation of the departmental budget and IT infrastructure, network and data center procurement plans",
      "Develop periodic systems infrastructure reports for management's attention",
      "Participate in the development of the departmental annual work plan and monitor their implementation in line with the Business plan"
    ]
  },
  {
    title: "IT Network Security Officer",
    company: "Rwanda Energy Group",
    period: "May 2023 - Apr 2025",
    location: "Kigali, Rwanda",
    responsibilities: [
      "Identifying vulnerabilities in the network infrastructure and servers",
      "Perform Antivirus and security patches deployment to network servers and Users PC",
      "Monitor network usage to ensure compliance with security policies",
      "Monitor daily security logs for unusual events and act as a liaison between incident response leads and subject matter experts",
      "Support with the installation and configuration of network security architectures, including firewalls, router ACLs (Access Control Lists), web content filters and Demilitarized Zones (DMZ)",
      "Educate employees about Cybersecurity Awareness",
      "Installation, Configuration and Managing Network Monitoring Tools (Nagios, Cacti, and LibreNms)",
      "Creation of remote access vpn to the external users",
      "Site to site vpn creation between EUCL and its super dealers",
      "Installation, Configuration, and maintenance of network"
    ]
  },
  {
    title: "Information Technology Officer",
    company: "HQ Power/Yumn Ltd.",
    period: "Jan 2023 - May 2023",
    location: "Gisagara, Southern Province, Rwanda",
    responsibilities: [
      "Setting up new computers, networks, and software for new employees",
      "Providing support to IT Staff",
      "Installing Operating Systems and other computer software applications on new computers",
      "Coordinating with other departments to ensure that all technology is working properly for the company",
      "Collecting, Analyzing and storing data for use in reports",
      "Supporting the maintenance of existing computer systems, including troubleshooting problems with hardware and software",
      "Assisting with computer network security by scanning for vulnerabilities and viruses",
      "Providing technical support for computer hardware and software issues"
    ]
  },
  {
    title: "Trainer",
    company: "Association des Parents pour la Promotion de l'Education a Byumba",
    period: "Jan 2022 - Dec 2022",
    location: "Gicumbi, Northern Province, Rwanda",
    responsibilities: [
      "Window server installation and configuration",
      "Set up wireless indoor and outdoor systems",
      "Set up Local Area Network (LAN)",
      "Maintain and deploy computer systems",
      "Routing and Switching training"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="heading-lg">Professional Experience</h2>
          <p className="text-slate-600 leading-relaxed">
            A track record of managing enterprise infrastructure and securing critical energy systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-8 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className="glass-card p-6 group hover:border-indigo-500/30"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2 font-semibold text-indigo-600">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-slate-500 font-medium text-sm">
                  <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                    <Calendar size={14} className="text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                    <MapPin size={14} className="text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/40 shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
