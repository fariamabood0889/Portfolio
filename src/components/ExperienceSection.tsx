import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ArchitectureDiagram, { DiagramData } from "@/components/ArchitectureDiagram";
import { otnSystemDiagram, llmDiagnosisDiagram, restApiDiagram } from "@/data/architectureDiagrams";

const experiences = [
  {
    role: "Software Developer",
    org: "Centre for Development of Telematics (C-DOT)",
    location: "Govt. of India",
    period: "Jan 2023 — Present",
    points: [
      "Designed multi-threaded C++ configuration management engine for 4.8T, 8T, and 12T OTN cross-connect systems.",
      "Integrated hardware–software communication modules for controller, fabric, and line cards.",
      "Developed optimised MySQL API layer for DWDM/OTN configuration orchestration.",
      "Implemented restoration and fault-handling logic for distributed nodes.",
      "Engineered LLM-powered fault diagnosis system — reduced troubleshooting time by 40%.",
      "Built simulation frameworks — reduced production errors by 30%.",
      "Optimised C++ modules using GDB and Valgrind profiling.",
    ],
    detailed: {
      summary: "At C-DOT — India's premier telecom R&D centre — I develop mission-critical optical networking systems powering India's telecom backbone. My work spans low-level C++ systems programming to AI-powered diagnostics.",
      highlights: [
        "Designed, developed, and tested controller card configuration management applications handling traffic provisioning, restoration, and FEC features in 4.8T, 8T, and 12T OTN cross-connect systems — contributing to on-site digital transformation initiatives in network automation.",
        "Collaborated with cross-functional production and engineering teams to define requirements, implement software modules, and integrate configurations with client, fabric, and line cards, ensuring seamless hardware–software communication.",
        "Developed software applications to communicate directly with hardware systems, enabling device configuration, monitoring, and fault management across distributed network nodes.",
        "Integrated existing software modules with newly developed components to enhance automation, improve fault detection accuracy, and streamline system operations.",
        "Performed upgrades, troubleshooting, and validation of pre-existing software applications — resolving hardware connectivity issues, network communication errors, and configuration mismatches.",
        "Implemented MySQL APIs for DWDM and OTN configuration management, optimising data handling, query performance, and real-time system response.",
        "Coordinated with internal teams during hardware bring-up and testing, addressing on-site integration challenges and providing support for software–hardware troubleshooting.",
        "Designed and deployed a TGM card configuration management module integrating classical encryption features, improving the reliability and security of critical infrastructure.",
        "Built simulation and testing frameworks for validating configuration and data exchange logic, reducing production errors by 30%.",
        "Developed an intelligent fault-diagnosis chatbot using LLMs to automate root cause analysis, integrated with the management system for traffic creation, deletion, FEC, loopback, and wavelength verification.",
        "Supported CI/CD deployments, peer code reviews, and Agile sprint planning to ensure continuous improvement and high-quality software delivery.",
        "Developed and optimised multithreaded C++ modules with GDB and Valgrind profiling, improving memory efficiency and execution speed in real-time environments.",
      ],
      technologies: ["C/C++", "Python", "MySQL", "LLM/AI", "GDB", "Valgrind", "DWDM", "OTN", "Linux", "CI/CD"],
      diagrams: [otnSystemDiagram, llmDiagnosisDiagram],
    },
  },
  {
    role: "Post Graduate Engineer Trainee",
    org: "Larsen & Toubro Technology Services",
    location: "Mysore",
    period: "Jan 2022 — Jul 2022",
    points: [
      "Developed Python-based REST API for bird species identification using deep learning audio models.",
      "Built a currency controller Web API generating dynamic exchange rate tables across regions.",
    ],
    detailed: {
      summary: "At L&T Technology Services, I worked on building intelligent APIs using Python and deep learning, gaining hands-on experience with REST architectures and real-time data processing.",
      highlights: [
        "Designed and deployed a Python REST API for real-time bird species identification using audio classification models.",
        "Built a dynamic currency exchange rate API serving multi-region financial data with automated table generation.",
      ],
      technologies: ["Python", "REST APIs", "Deep Learning", "Flask"],
      diagrams: [restApiDiagram],
    },
  },
];

const education = [
  {
    degree: "M.Tech in Computer Science and Engineering",
    school: "Jamia Millia Islamia, New Delhi",
    period: "Dec 2020 — Nov 2022",
    detail: "First Division (Distinction) · CGPA: 9.42",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Jamia Millia Islamia, New Delhi",
    period: "Jul 2016 — Jun 2020",
    detail: "First Division · CGPA: 8.11",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

  return (
    <section id="experience" className="relative px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">Career</p>
          <h2 className="mb-12 font-display text-3xl font-bold md:text-4xl">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedExp(exp)}
                className="group cursor-pointer rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/20"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                    <span className="font-body text-xs text-primary">{exp.period}</span>
                    <span className="font-body text-xs text-muted-foreground">· {exp.location}</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mb-0.5 font-display text-base font-semibold">{exp.role}</h3>
                <p className="mb-3 font-body text-xs text-primary/70">{exp.org}</p>
                <ul className="space-y-1.5">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-2 font-body text-xs leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/40" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-body text-[11px] text-primary/50 group-hover:text-primary transition-colors">Click for details →</p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-20">
            <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">Education</p>
            <h2 className="mb-8 font-display text-3xl font-bold md:text-4xl">
              Academic <span className="text-gradient">Background</span>
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <GraduationCap className="mb-2 h-4 w-4 text-primary" />
                  <p className="mb-1 font-body text-xs text-primary">{edu.period}</p>
                  <h3 className="mb-0.5 font-display text-sm font-semibold">{edu.degree}</h3>
                  <p className="mb-2 font-body text-xs text-muted-foreground">{edu.school}</p>
                  <p className="font-body text-xs text-muted-foreground">{edu.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedExp} onOpenChange={(open) => !open && setSelectedExp(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto border-border bg-card">
          {selectedExp?.detailed && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="font-body text-xs text-primary">{selectedExp.period}</span>
                </div>
                <DialogTitle className="font-display text-xl font-bold">
                  {selectedExp.role}
                </DialogTitle>
                <DialogDescription className="font-body text-sm text-primary/70">
                  {selectedExp.org} · {selectedExp.location}
                </DialogDescription>
              </DialogHeader>

              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {selectedExp.detailed.summary}
              </p>

              <div className="mt-5 space-y-3">
                {selectedExp.detailed.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex gap-3 rounded-lg border border-border bg-background p-4"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">{highlight}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5">
                <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-primary">Technologies</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedExp.detailed.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-body text-[11px] text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Diagrams */}
              {selectedExp.detailed.diagrams && selectedExp.detailed.diagrams.length > 0 && (
                <div className="mt-5 space-y-4">
                  {selectedExp.detailed.diagrams.map((diagram: DiagramData, i: number) => (
                    <ArchitectureDiagram key={i} diagram={diagram} />
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExperienceSection;
