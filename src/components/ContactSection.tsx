import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Let's <span className="text-gradient">connect</span>
            </h2>
            <p className="mx-auto mb-8 max-w-md font-body text-sm text-muted-foreground">
              Open to new opportunities and interesting projects. Feel free to reach out.
            </p>

            <div className="flex flex-col items-center gap-3">
              <a
                href="mailto:fariamabood0889@gmail.com"
                className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-border bg-card p-3.5 transition-colors hover:border-primary/20"
              >
                <Mail className="h-4 w-4 text-primary" />
                <div className="flex-1 text-left">
                  <p className="font-body text-[11px] text-muted-foreground">Email</p>
                  <p className="font-body text-xs text-foreground">fariamabood0889@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+971566573705"
                className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-border bg-card p-3.5 transition-colors hover:border-primary/20"
              >
                <Phone className="h-4 w-4 text-primary" />
                <div className="flex-1 text-left">
                  <p className="font-body text-[11px] text-muted-foreground">Phone</p>
                  <p className="font-body text-xs text-foreground">+971 566573705</p>
                </div>
              </a>
              <a
                href="https://wa.me/918744022563"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-border bg-card p-3.5 transition-colors hover:border-primary/20"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                <div className="flex-1 text-left">
                  <p className="font-body text-[11px] text-muted-foreground">WhatsApp</p>
                  <p className="font-body text-xs text-foreground">+91 8744022563</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/faria-mabood-yazdani-876062188"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-border bg-card p-3.5 transition-colors hover:border-primary/20"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                <div className="flex-1 text-left">
                  <p className="font-body text-[11px] text-muted-foreground">LinkedIn</p>
                  <p className="font-body text-xs text-foreground">faria-mabood-yazdani</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 text-center">
        <p className="font-body text-[11px] text-muted-foreground">
          © 2026 Faria Mabood. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
