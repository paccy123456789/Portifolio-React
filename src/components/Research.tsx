import { motion } from 'framer-motion';
import { Microscope, Book, Award, CirclePlay, ExternalLink, GraduationCap, Users, Cloud, Container, Cpu, BarChart3 } from 'lucide-react';

// Imported so Vite bundles and fingerprints the assets for both dev and production
import placementImg from '../assets/s1_s6_placement.png';
import latencyImg from '../assets/s1_s6_latency.png';
import componentsImg from '../assets/s1_s6_components.png';
import successImg from '../assets/s1_s6_success.png';
import workloadImg from '../assets/s1_s4_workload.png';
import testbedImg from '../assets/docker_compose_running.png';

type MscFigure = {
  src: string;
  caption: string;
  alt: string;
  frame: string;
  pad?: string;
  span?: string;
};

const mscFigures: MscFigure[] = [
  { src: placementImg, caption: "Placement distribution (S1–S6)", alt: "Observed placement distribution for scenarios S1 to S6 across Edge, Fog and Cloud tiers", frame: "aspect-[2/1]" },
  { src: latencyImg, caption: "Mean & P95 end-to-end latency (S1–S6)", alt: "Mean and P95 end-to-end latency measured in scenarios S1 to S6", frame: "aspect-[2/1]" },
  { src: componentsImg, caption: "Latency component breakdown (S1–S6)", alt: "Average latency components recorded for scenarios S1 to S6", frame: "aspect-[2/1]" },
  { src: successImg, caption: "Request completion rate (S1–S6)", alt: "Request completion rate recorded in scenarios S1 to S6", frame: "aspect-[5/3]" },
  { src: workloadImg, caption: "Workload vs. measured latency (S1–S4)", alt: "Workload and measured latency across scenarios S1 to S4", frame: "aspect-[5/3]" },
  { src: testbedImg, caption: "Containerised testbed running (Docker Compose)", alt: "Docker Compose screenshots showing the Edge, Fog, Cloud, Controller and MQTT services running", frame: "aspect-[9/1]", pad: "p-1 sm:p-2", span: "sm:col-span-2 lg:col-span-3" }
];

const mscSkills = [
  { icon: Cpu, label: "IoT", detail: "Edge–fog–cloud IoT workloads" },
  { icon: BarChart3, label: "Data Science", detail: "Request-level metrics & analysis" },
  { icon: Cloud, label: "Cloud Computing", detail: "Cloud tier placement & fallback" },
  { icon: Container, label: "Docker & Containers", detail: "Multi-service container orchestration" }
];

const Research = () => {
  return (
    <section id="research" className="bg-white/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h2 className="heading-lg">Research & Academic Projects</h2>
          <p className="text-slate-600 leading-relaxed">
            Exploring the intersection of IoT, digital transformation, and sustainable infrastructure 
            through rigorous academic inquiry and leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {/* Laidlaw Research Project */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-50 rounded-3xl p-5 sm:p-10 border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-widest">
                  <Award size={14} />
                  <span>Laidlaw Research & Leadership Scholar</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                  <span>2019 - 2020</span>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                Transitioning Colleges to a Paperless Environment
              </h3>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mb-6">
                <Users size={16} className="text-indigo-500" />
                <span>University of Rwanda & Laidlaw Foundation (UK)</span>
              </div>
              
              <div className="mb-4 sm:mb-6 rounded-2xl border border-slate-200 bg-white/70 p-6">
                <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-indigo-600 mb-4">
                  <Book size={14} />
                  <span>Abstract</span>
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  This undergraduate research project asked whether colleges could realistically replace paper-based academic and
                  administrative work with fully digital, paperless processes. It was carried out as part of the Laidlaw Research and
                  Leadership programme. The study looked at how institutions currently create, share and store records, and assessed the
                  systems, staff readiness and change-management support needed to move to digital ways of working. It suggested practical
                  steps for digitising records, cutting paper use and making academic processes faster and easier to track, while pointing
                  out the organisational and human barriers that usually slow this kind of change. Beyond the research itself, the project
                  built my skills in research leadership, project coordination and making an evidence-based case for sustainable, digitally
                  enabled institutions.
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a 
                  href="https://www.youtube.com/watch?v=nDFPND4Zvpo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-red-600/20 active:scale-95 sm:w-auto"
                >
                  <CirclePlay size={20} />
                  Watch Presentation
                </a>
                <div className="hidden items-center gap-2 text-slate-500 text-sm font-medium italic sm:flex">
                  <Book size={16} />
                  <span>Undergraduate Research Project</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MSc Practice Project - Edge-Fog-Cloud Placement */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="bg-white rounded-3xl border border-slate-100 relative overflow-hidden group shadow-sm"
          >
            <div className="p-5 sm:p-10 relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Microscope size={120} />
              </div>
              
              <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest">
                  <Microscope size={14} />
                  <span>MSc Practice Project</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                  <span>University of Rwanda</span>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-indigo-600 transition-colors">
                Lightweight Adaptive Microservice Placement for QoS-Aware IoT in the Edge&ndash;Fog&ndash;Cloud Continuum
              </h3>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mb-4 sm:mb-6">
                <GraduationCap size={16} className="text-indigo-500" />
                <span>MSc Internet of Things / Wireless Intelligent Sensor Networks</span>
              </div>

              {/* Measured results & testbed evidence */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Measured Results & Testbed Evidence
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {mscFigures.map((fig) => (
                    <figure
                      key={fig.caption}
                      className={`group/fig rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-indigo-400/60 hover:shadow-md transition-all ${fig.span ?? ''}`}
                    >
                      <div className={`${fig.frame} overflow-hidden bg-white`}>
                        <img
                          src={fig.src}
                          alt={fig.alt}
                          loading="lazy"
                          className={`w-full h-full object-contain transition-transform duration-500 group-hover/fig:scale-[1.02] ${fig.pad ?? 'p-3'}`}
                        />
                      </div>
                      <figcaption className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 border-t border-slate-100 bg-slate-50/30">
                        {fig.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <div className="mb-6 sm:mb-8 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6">
                <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-indigo-600 mb-4">
                  <Book size={14} />
                  <span>Abstract</span>
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Internet of Things (IoT) applications need to respond quickly, but the small devices that collect the data often cannot
                  process it on their own, and sending every request to the cloud is slow and can clog the network. This project asked a
                  simple question: can a lightweight, adaptive placement method keep IoT services fast and reliable across a three-tier
                  Edge, Fog and Cloud setup? To test this, a full test environment was built with Docker Compose, where the Edge, Fog,
                  Cloud, Controller and MQTT services each run as separate containers. This makes it easy to rebuild, scale or deliberately
                  break the setup without using a simulation. At the centre is a small controller that scores each tier by combining
                  latency, CPU load, memory, network quality and current workload, and treats availability as a strict requirement rather
                  than just another score. Services are moved between tiers automatically, and when a lower tier goes down, requests are
                  passed on to the tier above it without the user noticing. The prototype was tested with a 1,000-request baseline and six
                  adaptive scenarios, covering 25,351 requests in total, including tests where containers were stopped on purpose. It
                  handled 100% of requests in every scenario and kept working through full Edge-to-Fog-to-Cloud failover. The results also
                  showed that control and routing overhead, not processing time, is the biggest cost when recovering from a failure. The
                  project proves that a simple, easy-to-understand controller is enough to place services well, and gives a practical,
                  repeatable example for building reliable IoT systems with everyday container tools.
                </p>
              </div>

              {/* Skills gained from this project */}
              <div className="mb-6 sm:mb-8 pt-4 sm:pt-6 border-t border-slate-100">
                <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-indigo-600 mb-4">Advanced Technical Skills Gained</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {mscSkills.map(({ icon: Icon, label, detail }) => (
                    <div
                      key={label}
                      className="group/skill flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-3 sm:p-4 transition-all hover:border-indigo-400/60 hover:bg-white hover:shadow-md"
                    >
                      <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 text-indigo-600 shadow-sm transition-transform duration-300 group-hover/skill:scale-110">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{label}</p>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {["IoT", "Data Science", "Cloud Computing", "Edge & Fog Computing", "Microservices", "Docker", "Containers", "MQTT", "QoS & Fault Tolerance"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a 
                  href="https://drive.google.com/file/d/1l91RXID84pYvSf3ezTYFHlXlkiOQTZDR/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/20 active:scale-95 sm:w-auto"
                >
                  <ExternalLink size={20} />
                  Read Full Report
                </a>
                <div className="hidden items-center gap-2 text-slate-500 text-sm font-medium italic sm:flex">
                  <Book size={16} />
                  <span>MSc Practice Project Report</span>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
