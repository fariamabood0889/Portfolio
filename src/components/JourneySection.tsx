import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2016",
    title: "The Beginning",
    text: "Started B.Tech in Computer Science at Jamia Millia Islamia — fell in love with algorithms, data structures, and the elegance of well-written code.",
  },
  {
    year: "2020",
    title: "Deeper into Research",
    text: "Pursued M.Tech with a focus on intelligent systems and performance engineering. Graduated with Distinction (9.42 CGPA), driven by curiosity for building things that scale.",
  },
  {
    year: "2022",
    title: "First Industry Steps",
    text: "Joined L&T Technology Services as a trainee — built deep-learning REST APIs and real-time currency exchange systems. Learned how production code differs from textbook code.",
  },
  {
    year: "2023",
    title: "Mission-Critical Systems",
    text: "Joined C-DOT, India's telecom R&D backbone. Started writing multi-threaded C++ for OTN/DWDM systems that power the nation's optical networks — where every bug matters.",
  },
  {
    year: "Now",
    title: "AI Meets Telecom",
    text: "Engineering LLM-powered fault diagnosis tools, building simulation frameworks, and pushing for smarter automation in carrier-grade infrastructure. The journey continues.",
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="relative px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">
            Engineering Journey
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            The story <span className="text-gradient">so far</span>
          </h2>
          <p className="mb-12 max-w-lg font-body text-sm leading-relaxed text-muted-foreground">
            From writing my first line of code to engineering systems that power India's telecom infrastructure — every chapter shaped how I think about software.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-10">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                    className={`relative flex items-start gap-4 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="relative z-10 mt-1 flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background md:absolute md:left-1/2 md:-translate-x-1/2">
                      <span className="font-display text-[10px] font-bold text-primary">
                        {m.year}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className={`flex-1 rounded-lg border border-border bg-card p-5 md:w-[calc(50%-40px)] md:flex-none ${
                        isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                      }`}
                    >
                      <h3 className="mb-1.5 font-display text-sm font-semibold">
                        {m.title}
                      </h3>
                      <p className="font-body text-xs leading-[1.8] text-muted-foreground">
                        {m.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
