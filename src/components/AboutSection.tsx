import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "9.42", label: "M.Tech CGPA" },
  { value: "40%", label: "Troubleshooting Reduced" },
  { value: "30%", label: "Error Reduction" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">About</p>
          <h2 className="mb-10 font-display text-3xl font-bold md:text-4xl">
            Building reliable <span className="text-gradient">systems</span>
          </h2>

          <div className="space-y-4 mb-10">
            <p className="font-body text-sm leading-[1.8] text-muted-foreground">
              Telecom Software Engineer with 3+ years of experience developing multi-threaded C++ systems for carrier-grade OTN/DWDM infrastructure. Specialised in hardware–software integration, low-latency configuration engines, and AI-powered fault automation.
            </p>
            <p className="font-body text-sm leading-[1.8] text-muted-foreground">
              Strong expertise in Linux internals, performance tuning, and scalable backend architectures. Passionate about building reliable distributed systems and intelligent automation tools.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="rounded-lg border border-border bg-card p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 font-body text-[11px] text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
