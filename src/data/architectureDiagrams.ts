import { DiagramData } from "@/components/ArchitectureDiagram";

export const otnSystemDiagram: DiagramData = {
  title: "OTN Cross-Connect System Architecture",
  width: 700,
  height: 340,
  groups: [
    { label: "Hardware Layer", x: 10, y: 200, width: 680, height: 130 },
    { label: "Software Layer", x: 10, y: 10, width: 680, height: 180 },
  ],
  nodes: [
    { id: "nms", label: "NMS / CLI", x: 280, y: 25, width: 140, height: 35, type: "primary" },
    { id: "config", label: "Config Mgmt Engine", x: 80, y: 85, width: 140, height: 35, type: "primary" },
    { id: "threads", label: "Multi-Thread Pool", x: 80, y: 140, width: 140, height: 35, type: "accent" },
    { id: "mysql", label: "MySQL DB Layer", x: 280, y: 85, width: 130, height: 35, type: "accent" },
    { id: "restore", label: "Restoration Logic", x: 280, y: 140, width: 130, height: 35, type: "secondary" },
    { id: "llm", label: "LLM Fault Diagnosis", x: 480, y: 85, width: 140, height: 35, type: "primary" },
    { id: "sim", label: "Simulation FW", x: 480, y: 140, width: 140, height: 35, type: "muted" },
    { id: "ctrl", label: "Controller Card", x: 80, y: 220, width: 120, height: 35, type: "secondary" },
    { id: "fabric", label: "Fabric Card", x: 280, y: 220, width: 120, height: 35, type: "secondary" },
    { id: "line", label: "Line Card", x: 480, y: 220, width: 120, height: 35, type: "secondary" },
    { id: "otn48", label: "4.8T OTN", x: 100, y: 280, width: 90, height: 30, type: "muted" },
    { id: "otn8", label: "8T OTN", x: 300, y: 280, width: 90, height: 30, type: "muted" },
    { id: "otn12", label: "12T OTN", x: 500, y: 280, width: 90, height: 30, type: "muted" },
  ],
  edges: [
    { from: "nms", to: "config", label: "commands" },
    { from: "nms", to: "mysql", label: "queries" },
    { from: "nms", to: "llm", label: "diagnostics" },
    { from: "config", to: "threads" },
    { from: "threads", to: "ctrl", label: "HW comm" },
    { from: "mysql", to: "restore" },
    { from: "restore", to: "fabric", label: "failover" },
    { from: "llm", to: "sim", label: "test" },
    { from: "sim", to: "line" },
    { from: "ctrl", to: "otn48" },
    { from: "fabric", to: "otn8" },
    { from: "line", to: "otn12" },
  ],
};

export const llmDiagnosisDiagram: DiagramData = {
  title: "LLM-Powered Fault Diagnosis Pipeline",
  width: 700,
  height: 260,
  nodes: [
    { id: "alarms", label: "Alarm Logs", x: 20, y: 30, width: 110, height: 35, type: "muted" },
    { id: "docs", label: "Tech Documents", x: 20, y: 80, width: 110, height: 35, type: "muted" },
    { id: "configs", label: "Config Data", x: 20, y: 130, width: 110, height: 35, type: "muted" },
    { id: "embed", label: "Vector Embeddings", x: 190, y: 80, width: 130, height: 35, type: "accent" },
    { id: "faiss", label: "FAISS Index", x: 380, y: 80, width: 110, height: 35, type: "primary" },
    { id: "query", label: "Engineer Query", x: 380, y: 180, width: 120, height: 35, type: "secondary" },
    { id: "rag", label: "RAG Pipeline", x: 540, y: 80, width: 120, height: 35, type: "primary" },
    { id: "llm", label: "LLM (Gemini)", x: 540, y: 30, width: 120, height: 35, type: "primary" },
    { id: "suppress", label: "Alarm Suppression", x: 540, y: 130, width: 130, height: 35, type: "accent" },
    { id: "response", label: "Diagnosis Response", x: 540, y: 200, width: 130, height: 35, type: "primary" },
  ],
  edges: [
    { from: "alarms", to: "embed", label: "process" },
    { from: "docs", to: "embed" },
    { from: "configs", to: "embed" },
    { from: "embed", to: "faiss", label: "index" },
    { from: "query", to: "rag", label: "search" },
    { from: "faiss", to: "rag", label: "retrieve" },
    { from: "llm", to: "rag", label: "generate" },
    { from: "rag", to: "suppress", label: "filter" },
    { from: "suppress", to: "response" },
  ],
};

export const restApiDiagram: DiagramData = {
  title: "REST API Architecture",
  width: 600,
  height: 180,
  nodes: [
    { id: "client", label: "API Client", x: 20, y: 70, width: 100, height: 35, type: "secondary" },
    { id: "flask", label: "Flask Server", x: 170, y: 70, width: 110, height: 35, type: "primary" },
    { id: "audio", label: "Audio Processor", x: 330, y: 30, width: 120, height: 35, type: "accent" },
    { id: "dl", label: "DL Model", x: 330, y: 110, width: 120, height: 35, type: "primary" },
    { id: "result", label: "Species ID Result", x: 500, y: 70, width: 110, height: 35, type: "primary" },
  ],
  edges: [
    { from: "client", to: "flask", label: "REST call" },
    { from: "flask", to: "audio", label: "preprocess" },
    { from: "audio", to: "dl", label: "features" },
    { from: "dl", to: "result", label: "classify" },
  ],
};
