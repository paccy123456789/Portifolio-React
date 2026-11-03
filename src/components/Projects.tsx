import { useEffect, useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, Shield, Activity, X, Wifi, Network, Sprout, Cpu } from 'lucide-react';

// Imported so Vite fingerprints and bundles them for production builds
import coreSwitchImg from '../assets/core-switch.jpg';
import librenmsImg from '../assets/librenms.png';
import fortinetImg from '../assets/fortinet.png';
import nagiosImg from '../assets/nagios.png';
import wazuhImg from '../assets/wazuh.png';
import nessusImg from '../assets/nessus.png';
import nmapImg from '../assets/nmap.jpg';
import nacImg from '../assets/nac.jpg';
import hikImg from '../assets/hikcentral.jpg';
import pentestImg from '../assets/pentest.jpg';
import incidentImg from '../assets/incident-response.jpg';
import smartImg1 from '../assets/smart1.png';
import smartImg2 from '../assets/smart2.png';
import smartImg3 from '../assets/smart3.png';
import tinymlImg from '../assets/tinyml-anomaly.jpg';

type Project = {
  title: string;
  description: string;
  image: string;
  images?: string[];
  link?: string;
  linkLabel?: string;
  tags: string[];
  icon: ReactNode;
  details: string[];
  group: 'network' | 'security' | 'iot';
};

const projects: Project[] = [
  {
    title: "Advanced Network Infrastructure",
    group: "network",
    description: "Design and deployment of an advanced enterprise network infrastructure at Rwanda Energy Group, built on Cisco Catalyst 9500 core switching with VLAN segmentation, secure remote access and encrypted site-to-site connectivity.",
    image: coreSwitchImg,
    tags: ["Cisco Catalyst 9500", "VLAN & DHCP", "Port Security & SSH", "SNMP", "SSL & Site-to-Site VPN"],
    icon: <Network className="text-indigo-500" />,
    details: [
      "Deployed Cisco Catalyst 9500 series core switches as the backbone of the enterprise network at Rwanda Energy Group, delivering high-throughput, redundant core connectivity.",
      "Designed and implemented dynamic VLANs to segment departments, servers and management traffic, improving performance, security and broadcast control.",
      "Configured inter-VLAN routing and centralised DHCP services for automated, reliable IP address allocation across the campus network.",
      "Hardened device management by enabling SSH with strong authentication and disabling insecure legacy protocols such as Telnet.",
      "Enforced switch port security to restrict MAC addresses per port and prevent unauthorised devices from connecting to the network.",
      "Enabled SNMP for integration with the LibreNMS and Nagios monitoring platforms, giving real-time visibility into switch health, interfaces and traffic.",
      "Configured SSL VPN for secure remote user access and Site-to-Site VPN tunnels to interconnect remote sites and partners over encrypted links.",
      "Documented the topology, configurations and standard operating procedures, and trained IT staff on the new network infrastructure."
    ]
  },
  {
    title: "Access Control & Security Management",
    group: "security",
    description: "Enterprise-wide installation and configuration of HikCentral Professional to manage physical access control and security operations.",
    image: hikImg,
    tags: ["HikCentral Professional", "Access Control", "Security Management"],
    icon: <Shield className="text-red-500" />,
    details: [
      "Led the installation and configuration of HikCentral Professional for enterprise-wide access control.",
      "Designed and implemented physical security policies, managing door access, visit records, and real-time monitoring.",
      "Optimized the security dashboard for efficient oversight and incident response.",
      "Integrated access control with existing network infrastructure for unified security management.",
      "Trained staff on system operations and security protocol enforcement."
    ]
  },
  {
    title: "Network Monitoring Ecosystem",
    group: "network",
    description: "Enterprise-wide monitoring implementation using LibreNMS to ensure 99.9% uptime and real-time visibility into network health.",
    image: librenmsImg, 
    tags: ["LibreNMS", "SNMP", "Traffic Analysis"],
    icon: <Activity className="text-green-500" />,
    details: [
      "Installed, configured and maintained LibreNMS as the central monitoring platform for the enterprise network.",
      "Enabled SNMP polling across core switches, routers, servers and access devices to collect performance and availability metrics.",
      "Built dashboards for real-time traffic analysis, interface utilisation and device health.",
      "Configured alerting thresholds so that downtime and abnormal traffic patterns are detected and escalated quickly.",
      "Used historical monitoring data for capacity planning and to support network upgrade decisions."
    ]
  },
  {
    title: "Network Access Control (NAC)",
    group: "network",
    description: "Implementation of Cisco ISE with Wireless LAN Controller (WLC) integration at Rwanda Energy Group to control and authorise access to the corporate network.",
    image: nacImg,
    tags: ["Cisco ISE", "WLC", "802.1X"],
    icon: <Wifi className="text-cyan-500" />,
    details: [
      "Implemented Cisco Identity Services Engine (ISE) as the Network Access Control (NAC) solution for the organisation at Rwanda Energy Group.",
      "Deployed and configured the Wireless LAN Controller (WLC) to manage the enterprise wireless access points, SSIDs and client connectivity.",
      "Enforced 802.1X authentication and authorisation policies so that only approved users and devices can reach the corporate network.",
      "Segmented wired and wireless access, providing controlled guest wireless access isolated from internal resources.",
      "Integrated ISE with the WLC for wireless access control, endpoint profiling and consistent policy enforcement.",
      "Monitored authentication and authorisation logs, and provided support for user and device onboarding issues."
    ]
  },
  {
    title: "Cybersecurity Infrastructure",
    group: "security",
    description: "Deployment and management of Fortinet security appliances for enterprise-grade threat protection.",
    image: fortinetImg,
    tags: ["Fortinet", "Firewall", "Security Policy"],
    icon: <Shield className="text-primary-500" />,
    details: [
      "Installed and configured Fortinet firewalls and defined security policies aligned with the organisation's security requirements.",
      "Managed firewall rules, router Access Control Lists (ACLs), web content filtering and Demilitarized Zone (DMZ) design.",
      "Created Remote Access VPNs for external users and Site-to-Site VPNs between EUCL and its super dealers.",
      "Monitored daily security logs for unusual events and acted as liaison between incident response leads and subject matter experts.",
      "Provided secured access to network users while protecting data from internal and external attacks."
    ]
  },
  {
    title: "Service Health Monitoring",
    group: "network",
    description: "Nagios implementation for real-time host and service status tracking across the infrastructure.",
    image: nagiosImg,
    tags: ["Nagios", "Service Monitoring", "Alerting"],
    icon: <Activity className="text-blue-500" />,
    details: [
      "Deployed Nagios for real-time host and service status tracking across critical infrastructure.",
      "Configured host and service checks for servers, network devices and business applications.",
      "Defined notification and escalation rules to alert the right teams when services degrade or fail.",
      "Maintained monitoring together with Cacti and LibreNMS as part of a broader monitoring toolset.",
      "Used service availability reports to support systems reliability, functionality and stability objectives."
    ]
  },
  {
    title: "Security Assessment",
    group: "security",
    description: "Wazuh implementation for security configuration assessment and threat detection.",
    image: wazuhImg,
    tags: ["Wazuh", "Compliance", "HIDS"],
    icon: <Shield className="text-purple-500" />,
    details: [
      "Implemented Wazuh for host-based intrusion detection (HIDS) and security configuration assessment.",
      "Centralised security logs from servers and endpoints for continuous monitoring and correlation.",
      "Identified configuration weaknesses and non-compliance against security baselines.",
      "Supported incident response by providing the evidence and visibility needed to investigate security events.",
      "Contributed to cybersecurity awareness and hardening efforts across the organisation."
    ]
  },
  {
    title: "Vulnerability Management",
    group: "security",
    description: "Continuous security assessment using Tenable Nessus to identify and remediate infrastructure vulnerabilities.",
    image: nessusImg,
    tags: ["Nessus", "Risk Assessment", "Patch Management"],
    icon: <Terminal className="text-red-500" />,
    details: [
      "Performed regular vulnerability assessments of network infrastructure and servers using Tenable Nessus.",
      "Analysed scan results to prioritise findings based on risk and business impact.",
      "Coordinated antivirus and security patch deployment to network servers and user PCs.",
      "Tracked remediation progress and reported outstanding risks to management.",
      "Combined Nessus findings with Wazuh monitoring to strengthen the overall security posture."
    ]
  },
  {
    title: "Penetration Testing & Web Application Security",
    group: "security",
    description: "Hands-on penetration testing practice using Burp Suite on Kali Linux to assess web applications and network services, prove exploitability of weaknesses and report remediation actions.",
    image: pentestImg,
    tags: ["Burp Suite", "Kali Linux", "OWASP Top 10", "Web App Security"],
    icon: <Terminal className="text-rose-500" />,
    details: [
      "Ran end-to-end penetration tests in a controlled lab environment with Kali Linux as the testing platform.",
      "Used Burp Suite as an intercepting proxy to capture requests, inspect parameters, manipulate payloads and analyse server responses.",
      "Identified common web application weaknesses aligned with the OWASP Top 10, including injection, broken access control and security misconfiguration.",
      "Performed reconnaissance, host discovery and port/service enumeration with Kali tooling to map the attack surface of target hosts.",
      "Exploited validated findings to demonstrate real-world impact, capturing proof such as requests, payloads and screenshots.",
      "Produced structured penetration test reports with risk ratings, proof of concept and prioritised remediation recommendations.",
      "Fed the findings into hardening work alongside vulnerability management (Nessus) and monitoring (Wazuh)."
    ]
  },
  {
    title: "Incident Response & Malware Analysis",
    group: "security",
    description: "End-to-end security incident handling: detecting and analysing malware activity in Splunk SIEM, confirming the malware type with VirusTotal and other analysis tools, then managing and reporting the incident in TheHive.",
    image: incidentImg,
    tags: ["Splunk SIEM", "TheHive", "VirusTotal", "Malware Analysis"],
    icon: <Shield className="text-amber-500" />,
    details: [
      "Monitored and triaged security events in Splunk SIEM, correlating logs to single out suspicious activity and establish a timeline of the incident.",
      "Analysed the suspect files and activity to identify the malware type and understand how it behaved on the affected host.",
      "Enriched the findings with VirusTotal and other malware analysis tools, checking file hashes, domains and IP addresses to confirm the malware family and reputation.",
      "Collected the indicators of compromise (IOCs) and supporting evidence, such as process, file and network artefacts, to build a clear picture of the attack.",
      "Registered and managed the incident in TheHive, using cases, tasks and observables to organise the investigation and track each response action.",
      "Documented the full incident lifecycle in TheHive, from detection and analysis through containment to closure, keeping the evidence attached to each case.",
      "Produced a structured incident report covering root cause, impact, IOCs and recommended remediation actions.",
      "Fed the lessons learned back into detection and hardening, improving future monitoring and response readiness."
    ]
  },
  {
    title: "Smart Irrigation with IoT",
    group: "iot",
    description: "Hands-on MSc class project building a mini smart irrigation system on the ESP32: real-time monitoring of soil moisture, water level and humidity, live dashboards, automated sprinklers, and LoRa testing for remote farms with weak or no internet.",
    image: smartImg1,
    images: [smartImg1, smartImg2, smartImg3],
    link: "https://lnkd.in/djA7K5dX",
    tags: ["ESP32", "LoRa", "IoT Sensors", "Smart Agriculture", "Packet Tracer"],
    icon: <Sprout className="text-emerald-500" />,
    details: [
      "Built a mini smart irrigation system around an ESP32 microcontroller, using it for sensor data acquisition and Wi-Fi communication with a monitoring dashboard.",
      "Connected water-level, soil-moisture and humidity sensors to monitor the soil and plant conditions continuously and in real time.",
      "Streamed the readings to a dashboard for real-time visualisation and decision-making, turning raw sensor data into clear, actionable insight.",
      "Automated sprinklers and actuators so that irrigation reacts to live moisture changes instead of relying on fixed manual schedules.",
      "Tested low-power long-range communication with LoRa, extending the system to remote farming areas that have weak or no internet coverage.",
      "Recreated the whole IoT irrigation field in Cisco Packet Tracer to model the network, the devices and the data flow of a real deployment.",
      "Demonstrated end to end how sensors detect soil and water conditions, how the ESP32 publishes data to the cloud, and how the actuators respond automatically.",
      "Focused on practical agricultural impact: reducing water wastage, increasing crop yield and supporting data-driven farming in water-scarce regions."
    ]
  },
  {
    title: "TinyML Environmental Anomaly Detection",
    group: "iot",
    description: "MSc co-authored research project: a TinyML-based wireless sensor network node that runs an anomaly detection model directly on an ESP32, so temperature, humidity and particulate matter (PM) readings that indicate air pollution are judged on the device and alerts are sent by SMS only when something is genuinely wrong.",
    image: tinymlImg,
    link: "https://github.com/paccy123456789/Real-Time-Environmental-Anomaly-Detection-Project",
    linkLabel: "View on GitHub",
    tags: ["TinyML", "ESP32", "TensorFlow Lite", "WSN", "Anomaly Detection", "PM Sensor", "Twilio API"],
    icon: <Cpu className="text-violet-500" />,
    details: [
      "Designed a decentralised wireless sensor network node where sensing, preprocessing and inference all happen at the edge instead of in the cloud.",
      "Built the node on an ESP32/Arduino-class microcontroller able to run TensorFlow Lite Micro, with a DHT22 sensor collecting digital temperature and humidity readings and a particulate matter (PM) sensor used to measure air pollution.",
      "Instrumented the node beyond the reported baseline by including a particulate matter (PM) sensor, extending its environmental coverage from temperature and humidity to airborne particle levels that indicate air pollution.",
      "Structured the software into three layers: data acquisition, an edge intelligence layer running the TFLite interpreter on scaled inputs, and a notification layer that raises alerts.",
      "Performed real-time data cleaning on the device, casting values to numeric formats and handling missing readings to avoid null-pointer failures during inference.",
      "Applied Z-score normalisation using the training statistics (temperature mean 29.21 / std 4.81 and humidity mean 40.89 / std 12.89) so the network received correctly scaled inputs.",
      "Converted the model from TensorFlow to the FlatBuffer (.tflite) format and ran it through the tf.lite.Interpreter with a 1x2 input vector and a single anomaly probability output.",
      "Triggered automated alerts when the anomaly probability passed the 0.80 threshold, sending an HTTP POST to the Twilio REST API for real-time SMS notification.",
      "Debugged a 401 Unauthorized response from the API, which highlighted the importance of secure credential handling and correct REST authentication configuration.",
      "Validated detection performance with a ROC curve, reaching an AUC of 0.999 for the logistic model against 0.071 for the Z-score baseline rule.",
      "Analysed temperature/humidity time series and correlation heatmaps, injecting synthetic spikes to confirm the model responded to abnormal environmental events."
    ]
  },
  {
    title: "Network Reconnaissance & Scanning",
    group: "security",
    description: "Advanced network scanning and host discovery using Nmap to map live hosts, open ports and running services.",
    image: nmapImg,
    tags: ["Nmap", "Host Discovery", "Port Scanning"],
    icon: <Terminal className="text-emerald-500" />,
    details: [
      "Use Nmap as the advanced network scanner for host discovery and network inventory across WAN and LAN segments.",
      "Run port and service/version detection scans to identify exposed services and unexpected open ports.",
      "Map network topology and validate firewall and ACL rules by testing reachability from different network zones.",
      "Feed Nmap results into vulnerability assessment and hardening activities together with Nessus.",
      "Document discoveries to support network capacity planning, security audits and troubleshooting."
    ]
  }
];

const projectGroups = [
  {
    id: 'network' as const,
    label: 'Network & Infrastructure',
    description: 'Enterprise networking, monitoring and secure connectivity foundations.',
    icon: <Network className="text-indigo-600" />,
    iconWrap: 'bg-indigo-50 border-indigo-100',
  },
  {
    id: 'security' as const,
    label: 'Security & Cyber Defence',
    description: 'Protective controls, vulnerability management and incident response.',
    icon: <Shield className="text-red-600" />,
    iconWrap: 'bg-red-50 border-red-100',
  },
  {
    id: 'iot' as const,
    label: 'IoT & Edge Intelligence',
    description: 'Connected sensing, embedded systems and on-device machine learning.',
    icon: <Cpu className="text-emerald-600" />,
    iconWrap: 'bg-emerald-50 border-emerald-100',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  return (
    <section id="projects" className="bg-white/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between items-end mb-8"
        >
          <div>
            <h2 className="heading-lg mb-4">Key Projects & Platforms</h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              Specialized platforms and infrastructure solutions delivered end to end, grouped by domain
              across network, security and IoT. Click any card for full details.
            </p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {projectGroups.map((group) => {
            const groupProjects = projects.filter((project) => project.group === group.id);
            return (
              <div key={group.id} id={`projects-${group.id}`} className="scroll-mt-24">
                <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm ${group.iconWrap}`}>
                    {group.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{group.label}</h3>
                    <p className="text-xs font-medium text-slate-500 sm:text-[13px]">{group.description}</p>
                  </div>
                  <span className="ml-auto shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {groupProjects.length} {groupProjects.length === 1 ? 'project' : 'projects'}
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {groupProjects.map((project, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className="glass-card overflow-hidden group text-left cursor-pointer hover:border-indigo-500/30"
            >
              <div className="relative aspect-video overflow-hidden">
                {project.images ? (
                  <div className="grid h-full grid-cols-3 gap-px bg-slate-200">
                    {project.images.map((src, idx) => (
                      <div key={idx} className="overflow-hidden bg-slate-50">
                        <img 
                          src={src} 
                          alt={`${project.title} ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
                <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-lg group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-between gap-2">
                  {project.title}
                  <ExternalLink size={16} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" />
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto relative bg-white shadow-2xl border-none"
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close"
                className="absolute top-6 right-6 z-10 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-500/50 transition-all shadow-lg active:scale-90"
              >
                <X size={20} />
              </button>

              {activeProject.images ? (
                <div className="overflow-hidden rounded-t-2xl border-b border-slate-200 bg-slate-50">
                  <div className="grid grid-cols-3 gap-px bg-slate-200">
                    {activeProject.images.map((src, idx) => (
                      <div key={idx} className="aspect-[4/3] overflow-hidden bg-white">
                        <img 
                          src={src} 
                          alt={`${activeProject.title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 px-10 py-6">
                    <div className="p-4 bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg">
                      {activeProject.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{activeProject.title}</h3>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[21/9] overflow-hidden rounded-t-2xl">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-10 flex items-center gap-6">
                    <div className="p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl">
                      {activeProject.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">{activeProject.title}</h3>
                  </div>
                </div>
              )}

              <div className="p-8 md:p-10">
                <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">{activeProject.description}</p>

                {activeProject.link && (
                  <a 
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-8 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-700 active:scale-95"
                  >
                    {activeProject.linkLabel ?? "View Live Simulation"}
                    <ExternalLink size={16} />
                  </a>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-indigo-600 mb-6">Implementation Details</h4>
                    <ul className="space-y-4">
                      {activeProject.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-4 text-slate-600 text-sm leading-relaxed">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/40 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
