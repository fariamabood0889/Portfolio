import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Eye, Layers, Fingerprint, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProjectDetailed {
  summary: string;
  problem: string;
  approach: string[];
  techStack: string[];
  challenges: string[];
  results: string;
  keyLearnings: string[];
  images?: { src: string; alt: string }[];
  datasets?: string[];
}

interface Project {
  icon: typeof Brain;
  title: string;
  tags: string[];
  description: string;
  detailed?: ProjectDetailed;
}

const projects: Project[] = [
  {
    icon: Brain,
    title: "AI-Powered Fault Diagnosis Chatbot for Optical Transport Networks",
    tags: ["LLMs", "RAG", "FAISS", "Python", "NLP"],
    description:
      "LLM-powered intelligent chatbot for diagnosing and predicting faults in 4.8T, 8T, and 12T OTN systems. Integrated with vector search for automated root-cause analysis.",
    detailed: {
      summary:
        "Developed an intelligent chatbot designed to assist engineers in diagnosing and predicting faults in 4.8T, 8T, and 12T Optical Transport Network (OTN) systems. The system leverages Large Language Models (LLMs) and vector search to analyze technical documentation, alarm logs, and configuration data, enabling faster troubleshooting and automated root-cause analysis for telecom network operations.",
      problem:
        "Telecom OTN systems generate a large number of alarms and operational logs. Identifying the root cause of faults requires engineers to manually search through technical documentation and historical alarm data, which is time-consuming and error-prone. An intelligent system was needed to quickly interpret queries, analyze relevant system data, and provide accurate fault diagnosis support.",
      approach: [
        "Knowledge Base Creation — Technical documents, alarm logs, and configuration data were processed and converted into vector embeddings.",
        "Semantic Search with Vector Database — FAISS vector search was used to retrieve the most relevant information based on user queries.",
        "LLM-Based Query Processing — Large Language Models were integrated with the retrieval system to generate contextual responses and assist engineers in identifying potential root causes of network alarms.",
        "Suppression Model Integration — Implemented a suppression model to filter redundant alarms and improve the accuracy and reliability of fault detection.",
      ],
      techStack: ["Python", "LLM", "NLP", "FAISS", "Hugging Face Transformers", "RAG", "Semantic Search", "OTN (4.8T, 8T, 12T)"],
      challenges: [
        "Handling large volumes of telecom alarm logs and technical documentation",
        "Improving semantic search accuracy for domain-specific telecom queries",
        "Reducing false alarms through alarm suppression models",
        "Ensuring reliable responses for complex network troubleshooting scenarios",
      ],
      results:
        "The intelligent chatbot significantly improved the efficiency of troubleshooting in OTN systems by enabling engineers to quickly retrieve relevant technical information and identify possible root causes of alarms. The integration of LLMs with FAISS vector search enhanced knowledge retrieval accuracy and reduced manual debugging time in network operations.",
      keyLearnings: [
        "Building LLM-based domain-specific chatbots for enterprise systems",
        "Implementing Retrieval-Augmented Generation (RAG) pipelines",
        "Working with vector databases for semantic search",
        "Applying AI techniques to real-world telecom infrastructure problems",
      ],
    },
  },
  {
    icon: Eye,
    title: "Automatic Animal Recognition",
    tags: ["Deep Learning", "Object Detection", "Detectron2"],
    description:
      "Three-layer approach: body bounding box annotation, keypoint detection, and precise prediction of animal class. End-to-end deep learning pipeline for real-time detection.",
    detailed: {
      summary:
        "This project focuses on building an automated computer vision system capable of detecting and identifying animals from images and video frames using deep learning. Wildlife monitoring often requires manual observation and labeling, which is time-consuming and difficult at scale. The goal was to develop an intelligent framework that can automatically recognize animals and identify individual species using advanced deep learning techniques.",
      problem:
        "Wildlife researchers collect large amounts of image and video data from natural habitats and zoo environments. Manually analyzing this data to detect and identify animals is slow, labor-intensive, and prone to human error. An automated system was needed to accurately detect animals and distinguish between different individuals or species using visual features.",
      approach: [
        "Data Annotation — Frames from wildlife datasets were manually annotated to create labeled training data containing animal body bounding boxes.",
        "Keypoint Detection — Detectron2 was used to detect important body landmarks (keypoints) of animals, enabling the model to understand pose, body structure, and spatial features.",
        "Identity Classification — Extracted keypoint features were passed to a Faster R-CNN model with a ResNet-50 Feature Pyramid Network (FPN) backbone, generating bounding boxes, predicted class labels, and confidence scores.",
      ],
      techStack: ["Python", "CNN", "Detectron2", "Faster R-CNN", "ResNet-50 FPN", "Keypoint Detection", "Object Detection"],
      challenges: [
        "Handling variations in pose, lighting, and camera angles in wildlife images",
        "Limited availability of annotated animal datasets",
        "Improving accuracy when animals appear partially visible or overlapping",
        "Ensuring the model generalizes across different species",
      ],
      datasets: [
        "BristolGorillas2020 — 628 video segments, 5,428 annotated frames, 7 individual gorillas",
        "Monkey Species Dataset (Kaggle) — 2,028 annotated images, 5 different monkey species",
        "80% training / 20% testing split",
      ],
      results:
        "89% mAP on the gorilla dataset · 91.3% mAP on the monkey species dataset. Deep learning models such as Faster R-CNN with FPN can effectively automate animal detection and identification, supporting wildlife research and conservation efforts.",
      keyLearnings: [
        "Designing end-to-end deep learning pipelines for computer vision tasks",
        "Applying keypoint detection for pose and structure analysis",
        "Training and optimizing object detection models for real-world datasets",
        "Understanding the challenges of limited training data in wildlife AI systems",
      ],
      images: [
      {
        src: "/Portfolio/images/gorilla-results.png",
        alt: "Gorilla recognition results — 89% mAP"
      },
      {
        src: "/Portfolio/images/monkey-results.png",
        alt: "Monkey species recognition results — 91.3% mAP"
      },
      {
        src: "/Portfolio/images/keypoint-detection.png",
        alt: "Keypoint detection on gorilla"
      }
    ],	
    },
  },
  {
    icon: Fingerprint,
    title: "Gorilla Face Recognition",
    tags: ["Deep Learning", "Video Analytics"],
    description:
      "AI-driven approach to recognise individual gorillas using video datasets in zoo environments. Custom model architecture for fine-grained facial feature extraction.",
  },
  {
    icon: Layers,
    title: "Semantic Image Segmentation",
    tags: ["Deep Learning", "Atrous Convolution"],
    description:
      "Enhanced segmentation using Atrous convolution for improved multi-scale feature extraction. Scalable architecture for complex visual understanding tasks.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-28" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">Projects</p>
          <h2 className="mb-12 font-display text-3xl font-bold md:text-4xl">
            AI/ML <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => project.detailed && setSelectedProject(project)}
                className={`rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/20 ${project.detailed ? "group cursor-pointer" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <project.icon className="mb-3 h-4 w-4 text-primary" />
                  {project.detailed && (
                    <ExternalLink className="mb-3 h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </div>
                <h3 className="mb-2 font-display text-sm font-semibold leading-snug">{project.title}</h3>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 font-body text-[10px] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-body text-xs leading-relaxed text-muted-foreground">{project.description}</p>
                {project.detailed && (
                  <p className="mt-3 font-body text-[11px] text-primary/50 group-hover:text-primary transition-colors">Click for details →</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto border-border bg-card">
          {selectedProject?.detailed && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <selectedProject.icon className="h-4 w-4 text-primary" />
                </div>
                <DialogTitle className="font-display text-xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="font-body text-sm text-primary/70">
                  {selectedProject.tags.join(" · ")}
                </DialogDescription>
              </DialogHeader>

              {/* Summary */}
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {selectedProject.detailed.summary}
              </p>

              {/* Problem */}
              <div className="mt-5">
                <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-primary">Problem</p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {selectedProject.detailed.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="mt-5">
                <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-primary">Approach</p>
                <div className="space-y-2">
                  {selectedProject.detailed.approach.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="flex gap-3 rounded-lg border border-border bg-background p-3"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <p className="font-body text-sm leading-relaxed text-muted-foreground">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Datasets */}
              {selectedProject.detailed.datasets && (
                <div className="mt-5">
                  <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-primary">Datasets</p>
                  <div className="space-y-1.5">
                    {selectedProject.detailed.datasets.map((ds, i) => (
                      <div key={i} className="flex gap-2 font-body text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/40" />
                        {ds}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              <div className="mt-5">
                <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-primary">Results</p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {selectedProject.detailed.results}
                </p>
              </div>

              {/* Result Images */}
              {selectedProject.detailed.images && (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selectedProject.detailed.images.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className="overflow-hidden rounded-lg border border-border"
                    >
                      <img src={img.src} alt={img.alt} className="w-full object-contain" />
                      <p className="p-2 font-body text-[10px] text-muted-foreground text-center">{img.alt}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Challenges */}
              <div className="mt-5">
                <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-primary">Challenges</p>
                <div className="space-y-1.5">
                  {selectedProject.detailed.challenges.map((c, i) => (
                    <div key={i} className="flex gap-2 font-body text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/40" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="mt-5">
                <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-primary">Key Learnings</p>
                <div className="space-y-1.5">
                  {selectedProject.detailed.keyLearnings.map((l, i) => (
                    <div key={i} className="flex gap-2 font-body text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/40" />
                      {l}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-5">
                <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-primary">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.detailed.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-body text-[11px] text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
