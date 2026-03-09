import { motion } from "framer-motion";
import { ArrowDown, MapPin, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import fariaPhoto from "@/assets/faria-photo.jpg";

const roles = [
  "Telecom Software Engineer",
  "Multi-threaded C++ Developer",
  "AI-Powered Automation Builder",
  "OTN/DWDM Systems Specialist",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
        {/* Photo - Left Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-60 w-60 shrink-0 md:h-80 md:w-80"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 opacity-75 blur-md animate-pulse" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
            <img src={fariaPhoto} alt="Faria Mabood" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        {/* Content - Right Side */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5"
          >
            <MapPin className="h-3 w-3 text-primary" />
            <span className="font-body text-xs text-muted-foreground">Dubai, United Arab Emirates</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-4 font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl"
          >
            Faria <span className="text-gradient">Mabood</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 flex h-8 items-center justify-center md:justify-start"
          >
            <span className="font-body text-base text-primary md:text-lg">{text}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-primary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 max-w-xl font-body text-sm leading-relaxed text-muted-foreground"
          >
            Building carrier-grade optical networking systems & AI-driven diagnostics with 3+ years of experience in mission-critical infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-7 py-2.5 font-body text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-3.5 w-3.5" />
              Download Resume
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-2.5 font-body text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              Explore
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex justify-center gap-3 md:justify-start"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/faria-mabood-yazdani-876062188", label: "LinkedIn" },
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Mail, href: "mailto:fariamabood0889@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};

export default HeroSection;
