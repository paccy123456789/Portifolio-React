import { motion } from 'framer-motion';
import { Shield, Server, Network, Activity, Database, Lock, Cloud, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Network Security",
    icon: <Shield className="text-primary-500" />,
    skills: ["Firewall Configuration", "Network Access Control (Cisco ISE)", "Wireless LAN Controller (WLC)", "Intrusion Detection (Wazuh)", "Vulnerability Scanning (Nessus)", "Network Scanning (Nmap)", "VPN (Remote Access & Site-to-Site)", "ACL Management", "DMZ Design"]
  },
  {
    title: "Systems Administration",
    icon: <Server className="text-purple-500" />,
    skills: ["Windows Server Administration", "Linux Server Optimization", "Active Directory", "Disaster Recovery", "System Reliability & Stability", "Data Center Operations"]
  },
  {
    title: "Monitoring & Analytics",
    icon: <Activity className="text-green-500" />,
    skills: ["Nagios", "LibreNMS", "Cacti", "Network Traffic Analysis", "Daily Security Logs", "Performance Optimization"]
  },
  {
    title: "Infrastructure Design",
    icon: <Network className="text-blue-500" />,
    skills: ["WAN/LAN Architecture", "Routing & Switching", "Network Capacity Planning", "Wireless Infrastructure", "Infrastructure Procurement", "Strategic Planning"]
  },
  {
    title: "IT Management",
    icon: <Database className="text-orange-500" />,
    skills: ["Budget Preparation", "Annual Work Planning", "Team Leadership", "Procurement Planning", "Reporting & Documentation", "Project Coordination"]
  },
  {
    title: "Security Operations",
    icon: <Lock className="text-red-500" />,
    skills: ["Access Control (HikCentral Professional)", "SIEM (Splunk)", "Incident Response (TheHive)", "Malware Analysis", "Threat Intelligence (VirusTotal)", "Cybersecurity Awareness Training", "Patch Management", "Antivirus Deployment", "Compliance Monitoring", "Incident Response Support", "Security Policy Enforcement"]
  },
  {
    title: "Penetration Testing",
    icon: <Terminal className="text-rose-500" />,
    skills: ["Penetration Testing", "Burp Suite", "Kali Linux", "Web Application Security", "OWASP Top 10", "Vulnerability Exploitation", "Metasploit", "Security Reporting"]
  },
  {
    title: "IoT & Cloud Computing",
    icon: <Cloud className="text-sky-500" />,
    skills: ["Internet of Things (IoT)", "Data Science", "Cloud Computing", "Edge & Fog Computing", "Docker", "Containers & Containerisation", "Docker Compose", "Microservice Placement", "MQTT Messaging", "QoS & Fault Tolerance", "ESP32 & Embedded Systems", "LoRa Communication", "IoT Sensors & Actuators", "Smart Agriculture", "Cisco Packet Tracer", "TinyML & Edge AI", "TensorFlow Lite Micro", "Wireless Sensor Networks", "Anomaly Detection", "Model Quantisation & Pruning"]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="heading-lg">Expertise & Technical Knowledge</h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive set of skills developed through years of experience in enterprise-grade 
            infrastructure management and network security operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className="glass-card p-6 group hover:border-indigo-500/30"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm transition-all group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 transition-all hover:border-indigo-500 hover:text-indigo-600 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
