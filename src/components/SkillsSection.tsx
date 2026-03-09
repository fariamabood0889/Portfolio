import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Terminal, Brain, Cpu } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Core Systems",
    skills: ["C++", "Multithreading", "Memory Management", "Linux Internals"],
  },
  {
    icon: Server,
    title: "Networking",
    skills: ["TCP/IP", "Socket Programming", "IPC", "Distributed Systems", "OTN", "DWDM", "NMS", "High Availability"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Query Optimisation", "Indexing"],
  },
  {
    icon: Terminal,
    title: "Backend & DevOps",
    skills: ["Python", "FastAPI", "REST APIs", "Docker", "Jenkins", "Git", "CI/CD"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    skills: ["LLMs", "Vector Search", "PyTorch", "AI-based Log Analysis"],
  },
  {
    icon: Cpu,
    title: "Tools & Debug",
    skills: ["GDB", "Valgrind", "strace", "Google Test", "PyTest", "TDD"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">Expertise</p>
          <h2 className="mb-12 font-display text-3xl font-bold md:text-4xl">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/20"
              >
                <cat.icon className="mb-3 h-4 w-4 text-primary" />
                <h3 className="mb-3 font-display text-sm font-semibold">{cat.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-2.5 py-0.5 font-body text-[11px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
