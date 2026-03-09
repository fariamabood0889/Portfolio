import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning",
    issuer: "Stanford University (Coursera)",
    type: "certification" as const,
  },
  {
    title: "Getting Started with AWS Machine Learning",
    issuer: "Coursera",
    type: "certification" as const,
  },
];

const publications = [
  {
    title: "Individual Gorilla Face Recognition Using Deep Learning",
    venue: "M.Tech Thesis · Jamia Millia Islamia",
    description:
      "Developed an AI-driven approach to recognise individual gorillas from video datasets in zoo environments using deep learning-based facial feature extraction.",
    type: "publication" as const,
  },
  {
    title: "Automatic Animal Recognition Using Body and Keypoint Detection",
    venue: "Research Project · Deep Learning",
    description:
      "Three-layer approach combining body bounding box annotation, keypoint detection, and class prediction for real-time animal identification.",
    type: "publication" as const,
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Certifications */}
          <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">Credentials</p>
          <h2 className="mb-10 font-display text-3xl font-bold md:text-4xl">
            Certifications & <span className="text-gradient">Research</span>
          </h2>

          <div className="mb-16 grid gap-4 md:grid-cols-2">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
              >
                <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-sm font-semibold">{cert.title}</h3>
                  <p className="mt-1 font-body text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Publications / Research */}
          <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">Publications</p>
          <h2 className="mb-8 font-display text-2xl font-bold">
            Research <span className="text-gradient">Work</span>
          </h2>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="rounded-lg border border-border bg-card p-5"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-sm font-semibold leading-snug">{pub.title}</h3>
                    <p className="mt-1 font-body text-xs text-primary/70">{pub.venue}</p>
                    <p className="mt-2 font-body text-xs leading-relaxed text-muted-foreground">{pub.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
