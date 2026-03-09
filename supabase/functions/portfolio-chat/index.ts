import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PORTFOLIO_CONTEXT = `You are Faria Mabood's AI portfolio assistant. Answer questions about Faria based ONLY on the following information. Be friendly, concise, and professional. If asked something not covered below, say you don't have that information and suggest contacting Faria directly.

## About Faria
- Telecom Software Engineer with 3+ years of experience
- Specialises in multi-threaded C++ systems for carrier-grade OTN/DWDM infrastructure
- Strong expertise in Linux internals, performance tuning, and scalable backend architectures
- Passionate about building reliable distributed systems and intelligent automation tools
- Located in Dubai, United Arab Emirates

## Education
- M.Tech in Computer Science and Engineering from Jamia Millia Islamia, New Delhi (Dec 2020 – Nov 2022). First Division (Distinction), CGPA: 9.42
- B.Tech in Computer Science and Engineering from Jamia Millia Islamia, New Delhi (Jul 2016 – Jun 2020). First Division, CGPA: 8.11

## Work Experience

### Software Developer at Centre for Development of Telematics (C-DOT), Govt. of India (Jan 2023 – Present)
- Designed multi-threaded C++ configuration management engine for 4.8T, 8T, and 12T OTN cross-connect systems
- Integrated hardware–software communication modules for controller, fabric, and line cards
- Developed optimised MySQL API layer for DWDM/OTN configuration orchestration
- Implemented restoration and fault-handling logic for distributed nodes
- Engineered LLM-powered fault diagnosis system — reduced troubleshooting time by 40%
- Built simulation frameworks — reduced production errors by 30%
- Optimised C++ modules using GDB and Valgrind profiling

### Post Graduate Engineer Trainee at L&T Technology Services, Mysore (Jan 2022 – Jul 2022)
- Developed Python-based REST API for bird species identification using deep learning audio models
- Built a currency controller Web API generating dynamic exchange rate tables across regions

## Technical Skills
- Core Systems: C++, Multithreading, Memory Management, Linux Internals
- Networking: TCP/IP, Socket Programming, IPC, Distributed Systems, OTN, DWDM, NMS, High Availability
- Databases: MySQL, PostgreSQL, Query Optimisation, Indexing
- Backend & DevOps: Python, FastAPI, REST APIs, Docker, Jenkins, Git, CI/CD
- AI & Automation: LLMs, Vector Search, PyTorch, AI-based Log Analysis
- Tools & Debug: GDB, Valgrind, strace, Google Test, PyTest, TDD

## Projects
1. AI-Powered Fault Diagnosis Chatbot for Optical Transport Networks — LLM-powered chatbot for diagnosing faults in 4.8T, 8T, 12T OTN systems using RAG, FAISS, and semantic search. Reduced troubleshooting time significantly.
2. Automatic Animal Recognition — Deep learning pipeline using Detectron2, Faster R-CNN, ResNet-50 FPN for wildlife detection. Achieved 89% mAP on gorilla dataset and 91.3% mAP on monkey species dataset.
3. Gorilla Face Recognition — AI-driven approach to recognise individual gorillas using video datasets in zoo environments.
4. Semantic Image Segmentation — Enhanced segmentation using Atrous convolution for improved multi-scale feature extraction.

## Certifications
- Machine Learning — Stanford University (Coursera)
- Getting Started with AWS Machine Learning — Coursera

## Publications
- Individual Gorilla Face Recognition Using Deep Learning (M.Tech Thesis)
- Automatic Animal Recognition Using Body and Keypoint Detection (Research Project)

## Contact
- Email: fariamabood0889@gmail.com
- Phone: +971 566573705
- WhatsApp: +91 8744022563
- LinkedIn: linkedin.com/in/faria-mabood-yazdani-876062188
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: PORTFOLIO_CONTEXT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limited. Please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
