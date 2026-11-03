import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ShieldCheck, User, Maximize2, Minimize2 } from 'lucide-react';

type Message = { text: string; isBot: boolean };
type QA = { question: string; answer: string };

const OWNER_NAME = "Pacifique HAKIZIMANA";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: `Hello and welcome! I'm ${OWNER_NAME}'s virtual assistant. I can walk you through his professional background, technical expertise, security tooling, network infrastructure projects and how to get in touch. Pick a quick question below and I'll give you the full picture.`,
      isBot: true,
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && (messages.length > 1 || isTyping)) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages.length, isTyping, isOpen]);

  const qa: QA[] = [
    {
      question: 'What is your expertise?',
      answer:
        "He specializes in three tightly connected areas: IT Infrastructure, Network Security and Systems Administration. On the infrastructure side he designs, installs and optimizes server environments and enterprise-wide WAN/LAN networks, with a strong focus on high availability, disaster recovery and capacity planning. On the security side he handles vulnerability management, patch and antivirus deployment, firewall configuration and access control. He also builds monitoring and observability stacks so that every system is measured, healthy and auditable at all times.",
    },
    {
      question: 'Tell me about your experience at REG.',
      answer:
        "At Rwanda Energy Group he currently serves as an IT Systems Infrastructure Specialist, after previously holding the role of IT Network Security Officer from May 2023 to April 2025. He has led initiatives around network monitoring with LibreNMS, Nagios and Cacti, perimeter and endpoint security with Fortinet, and identity-driven access control with Cisco ISE and HikCentral. His day-to-day work covers server optimization, data center infrastructure maintenance, WAN/LAN design and extension, plus departmental budget and IT procurement planning. He also runs cybersecurity awareness sessions so that security is understood across the organization, not just enforced by tools.",
    },
    {
      question: 'Which security tools do you use?',
      answer:
        "His security toolkit covers both prevention and detection. He relies on Fortinet firewalls for perimeter defense, VPN and ACL management; Cisco ISE for network access control and 802.1X; Wazuh as a host-based intrusion detection and SIEM platform; and Tenable Nessus for continuous vulnerability scanning and remediation tracking. For offensive security he carries out penetration testing with Burp Suite and Kali Linux, covering web application and network testing against the OWASP Top 10. For detection and response he works with Splunk as a SIEM, analyses malware using VirusTotal and other analysis tools, and manages incidents and reporting in TheHive. For physical and video access control he uses HikCentral Professional, and for network discovery and auditing he works with Nmap. Together these tools give visibility all the way from the network edge to the endpoint.",
    },
    {
      question: 'What monitoring platforms do you manage?',
      answer:
        "He has deployed and maintained a full monitoring ecosystem. LibreNMS is the central platform for SNMP polling of core switches, routers, servers and access devices, with dashboards for traffic analysis, interface utilization and device health. Nagios covers real-time host and service status tracking with notification and escalation rules, while Cacti is used for long-term performance graphing. He configures alerting thresholds so that downtime and abnormal traffic patterns are detected and escalated quickly, and he uses historical data for capacity planning and network upgrade decisions.",
    },
    {
      question: 'Do you have Cisco networking experience?',
      answer:
        "Yes — advanced enterprise Cisco networking is one of his core strengths. At Rwanda Energy Group he deployed Cisco Catalyst 9500 series core switches as the redundant backbone of the network, designed dynamic VLANs to segment departments, servers and management traffic, and configured inter-VLAN routing with centralized DHCP. He hardened device management with SSH and disabled insecure legacy protocols, enforced switch port security to block unauthorized devices, and enabled SNMP for monitoring integration. On the access side he implemented Cisco Identity Services Engine with a Wireless LAN Controller to enforce 802.1X authentication and segmented guest wireless access.",
    },
    {
      question: 'Do you offer firewall and VPN configuration?',
      answer:
        "Absolutely. He installs and configures Fortinet firewalls, defines security policies, manages router ACLs, web content filtering and DMZ design aligned with the organization's security requirements. On the connectivity side he builds Remote Access and SSL VPNs for external users and engineers encrypted Site-to-Site VPN tunnels between sites and partners — including tunnels created between EUCL and its super dealers. He also monitors daily security logs for unusual events and acts as a liaison between incident response leads and subject matter experts.",
    },
    {
      question: 'What roles did you hold before REG?',
      answer:
        "Before joining Rwanda Energy Group he worked as an Information Technology Officer at HQ Power/Yumn Ltd in Gisagara from January to May 2023, where he set up computers, networks and software for new employees, installed operating systems, supported IT staff, coordinated with other departments and assisted with network security by scanning for vulnerabilities and viruses. Earlier, from January to December 2022, he was a Trainer at the Association des Parents pour la Promotion de l'Education a Byumba in Gicumbi, delivering Windows Server installation and configuration, wireless indoor and outdoor setup, LAN implementation and Routing & Switching training.",
    },
    {
      question: 'What are your strongest technical skills?',
      answer:
        "His skill set spans several areas. Network Security covers firewall configuration, network access control with Cisco ISE, WLC management, intrusion detection with Wazuh, vulnerability scanning with Nessus, network scanning with Nmap, VPNs, ACL management and DMZ design. Penetration Testing covers offensive security with Burp Suite and Kali Linux, web application testing against the OWASP Top 10, vulnerability exploitation and security reporting. Systems Administration covers Windows Server and Linux server optimization, Active Directory, disaster recovery and data center operations. Monitoring & Analytics covers Nagios, LibreNMS, Cacti and traffic analysis. Infrastructure Design covers WAN/LAN architecture, routing and switching, capacity planning and procurement. IT Management covers budgeting, annual work planning, team leadership and reporting. Security Operations covers access control, SIEM monitoring with Splunk, incident response and reporting with TheHive, malware analysis with VirusTotal and other tools, patch management, antivirus deployment, compliance monitoring and cybersecurity awareness training. IoT & Cloud Computing covers edge and fog computing, Docker containers, microservices, MQTT messaging and embedded IoT development with the ESP32, LoRa communication, sensors and actuators including particulate matter (PM) sensing for air pollution monitoring, plus TinyML and edge AI with TensorFlow Lite Micro, wireless sensor networks and real-time anomaly detection.",
    },
    {
      question: 'What kind of projects have you delivered?',
      answer:
        "He has delivered end-to-end projects across enterprise networking and security. Highlights include deploying Cisco Catalyst 9500 core switches with dynamic VLANs, DHCP, SSH, port security, SNMP and both SSL and Site-to-Site VPNs; building a centralized monitoring platform with LibreNMS for real-time visibility; deploying Fortinet firewalls with remote-access and site-to-site tunnels; rolling out Cisco ISE with WLC for wired and wireless network access control; implementing HikCentral Professional for enterprise access control; introducing Wazuh and Tenable Nessus for continuous threat detection and vulnerability assessment; completing penetration testing projects with Burp Suite and Kali Linux; handling incident response and malware analysis with Splunk SIEM, VirusTotal and TheHive, producing structured incident reports; and engineering a TinyML-based wireless sensor network that runs anomaly detection directly on an ESP32 — sensing temperature, humidity and particulate matter (PM) air pollution — and raises SMS alerts only when environmental readings are genuinely abnormal. Each project was documented, tested and handed over with clear operating procedures and staff training.",
    },
    {
      question: 'How can I contact you for a project?',
      answer:
        "He would be glad to talk. You can reach him through the contact details in the footer of this site — email is usually the fastest way to start the conversation. He is based in Kigali, Rwanda, and is open to professional collaborations, technical consultations and infrastructure-focused opportunities. Whether it is a full network design, a security review, or help hardening and monitoring an existing environment, send a short description of your needs and he will come back with next steps and availability.",
    },
    {
      question: 'Tell me about your education.',
      answer:
        "He is currently pursuing an MSc in IoT-Wireless Intelligent Sensor Network (2025-2027) and holds a BSc in Information Systems (2017-2022), both from the University of Rwanda College of Science and Technology. His academic background provides a strong foundation in sensor networks, IoT architecture, and enterprise information systems.",
    },
    {
      question: 'Do you have research or academic projects?',
      answer:
        "Yes, he has significant research experience. Most notably, during his undergraduate studies as a Laidlaw Research and Leadership Scholar (2019-2020), he partnered with the UK's Laidlaw Foundation at the University of Rwanda to research transitioning colleges to paperless environments. This project developed his technical proficiency in digital systems and leadership in project management. During his MSc he has also co-authored a paper on a TinyML-based intelligent wireless sensor network for real-time environmental anomaly detection, and completed a practice project on lightweight adaptive microservice placement for QoS-aware IoT across the edge-fog-cloud continuum. He is continuing his research journey with an MSc focus on Wireless Intelligent Sensor Networks and IoT.",
    },
    {
      question: 'Do you have any volunteering experience?',
      answer:
        "Yes, he participated in the Re_Action for Education Program (Jul-Sep 2020), a volunteer initiative by Makesense in partnership with The Laidlaw Foundation. He collaborated with a diverse team to address educational challenges caused by the COVID-19 pandemic, focusing on innovative solutions to improve access to education for learners in low-resource settings. This experience strengthened his skills in teamwork, problem-solving, and community engagement, reinforcing his commitment to using his technical background for social impact.",
    },
  ];

  const handleQuestionClick = (item: QA) => {
    if (isTyping) return;

    setMessages((prev) => [...prev, { text: item.question, isBot: false }]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { text: item.answer, isBot: true }]);
    }, 900);
  };

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-[100] flex flex-col items-end px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:left-auto sm:px-5 sm:pb-5">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className={`pointer-events-auto mb-3 flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xl shadow-slate-900/20 sm:rounded-3xl max-w-full sm:max-w-[calc(100vw-2.5rem)] ${
              isExpanded
                ? 'h-[calc(100dvh-6.5rem)] sm:h-[min(820px,calc(100dvh-7rem))] sm:w-[560px]'
                : 'h-[70dvh] sm:h-[min(600px,calc(100dvh-7rem))] sm:w-[360px]'
            }`}
          >
            {/* Header */}
            <div className="relative shrink-0 bg-gradient-to-br from-indigo-600 via-indigo-600 to-sky-500 px-3.5 py-3 text-white sm:px-4 sm:py-3.5">
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/10 blur-2xl" />
              <div className="relative flex items-center justify-between gap-2 sm:gap-3">
                <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur sm:h-10 sm:w-10">
                    <Bot size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-[13px] font-bold leading-tight sm:text-[14px]">{OWNER_NAME}</h3>
                    <p className="mt-0.5 flex items-center gap-1.5 truncate text-[10px] text-indigo-100 sm:text-[10.5px]">
                      <Sparkles size={11} className="shrink-0 text-sky-200" />
                      Virtual Assistant
                      <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" />
                      Online
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
                  <button
                    onClick={() => setIsExpanded((v) => !v)}
                    className="rounded-xl p-1.5 transition-colors hover:bg-white/15"
                    aria-label={isExpanded ? 'Minimize chat' : 'Expand chat'}
                    aria-expanded={isExpanded}
                    title={isExpanded ? 'Minimize' : 'Expand'}
                  >
                    {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl p-1.5 transition-colors hover:bg-white/15"
                    aria-label="Close chat"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="chat-scrollbar flex-1 min-h-[110px] space-y-3 overflow-y-auto bg-gradient-to-b from-slate-50 to-white px-3.5 pb-4 pt-5 sm:space-y-3.5 sm:px-4 sm:pt-6"
            >
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-end gap-2 ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.isBot && (
                    <div className="w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white mb-0.5">
                      <Bot size={14} />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-[12.5px] leading-relaxed whitespace-pre-line sm:max-w-[80%] sm:text-[13px] ${
                      msg.isBot
                        ? 'bg-white text-slate-700 shadow-sm shadow-slate-200/70 border border-slate-100 rounded-2xl rounded-bl-sm'
                        : 'bg-gradient-to-br from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/25 rounded-2xl rounded-br-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {!msg.isBot && (
                    <div className="w-7 h-7 shrink-0 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 mb-0.5">
                      <User size={14} />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2 justify-start"
                >
                  <div className="w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white mb-0.5">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-slate-400"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="shrink-0 border-t border-slate-100 bg-white px-3.5 py-3 sm:px-4">
              <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <ShieldCheck size={11} className="text-indigo-500" />
                Quick Questions
              </p>
              <div className="chat-scrollbar flex max-h-[96px] flex-wrap gap-1.5 overflow-y-auto sm:max-h-[112px]">
                {qa.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(item)}
                    disabled={isTyping}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-left text-[11px] font-medium text-slate-600 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-slate-100 bg-slate-50 p-3 sm:p-3.5">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white py-1.5 pl-3.5 pr-1.5 shadow-sm">
                <span className="flex-1 text-[11.5px] text-slate-400">
                  Select a question above to start...
                </span>
                <button
                  disabled
                  className="cursor-not-allowed rounded-xl bg-slate-200 p-2 text-slate-400"
                  aria-label="Send"
                >
                  <Send size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-xl shadow-indigo-600/30 ring-4 ring-white/60 sm:h-14 sm:w-14"
        aria-label="Toggle chat"
        aria-expanded={isOpen}
        title={`Chat with ${OWNER_NAME}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
          </motion.span>
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
