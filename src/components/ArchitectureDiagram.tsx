import { motion } from "framer-motion";

interface DiagramNode {
  id: string;
  label: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  type?: "primary" | "secondary" | "accent" | "muted";
}

interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
}

interface DiagramGroup {
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DiagramData {
  title: string;
  width: number;
  height: number;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  groups?: DiagramGroup[];
}

const nodeColors = {
  primary: { bg: "hsl(40 70% 55% / 0.15)", border: "hsl(40 70% 55% / 0.5)", text: "hsl(40 70% 55%)" },
  secondary: { bg: "hsl(220 15% 15%)", border: "hsl(220 15% 25%)", text: "hsl(40 20% 85%)" },
  accent: { bg: "hsl(40 70% 55% / 0.08)", border: "hsl(40 70% 55% / 0.3)", text: "hsl(40 20% 85%)" },
  muted: { bg: "hsl(220 18% 12%)", border: "hsl(220 15% 22%)", text: "hsl(220 10% 55%)" },
};

const getNodeCenter = (node: DiagramNode) => ({
  cx: node.x + (node.width || 120) / 2,
  cy: node.y + (node.height || 40) / 2,
});

const ArchitectureDiagram = ({ diagram }: { diagram: DiagramData }) => {
  const nodeMap = Object.fromEntries(diagram.nodes.map((n) => [n.id, n]));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="mt-4"
    >
      <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-primary">
        {diagram.title}
      </p>
      <div className="overflow-x-auto rounded-lg border border-border bg-background p-3">
        <svg
          viewBox={`0 0 ${diagram.width} ${diagram.height}`}
          className="w-full"
          style={{ minWidth: 400 }}
        >
          {/* Groups */}
          {diagram.groups?.map((g, i) => (
            <g key={`group-${i}`}>
              <rect
                x={g.x}
                y={g.y}
                width={g.width}
                height={g.height}
                rx={8}
                fill="hsl(220 15% 10% / 0.5)"
                stroke="hsl(220 15% 22%)"
                strokeWidth={1}
                strokeDasharray="6 3"
              />
              <text
                x={g.x + 8}
                y={g.y + 14}
                fontSize={9}
                fill="hsl(220 10% 45%)"
                fontFamily="Inter, sans-serif"
              >
                {g.label}
              </text>
            </g>
          ))}

          {/* Edges */}
          {diagram.edges.map((edge, i) => {
            const from = nodeMap[edge.from];
            const to = nodeMap[edge.to];
            if (!from || !to) return null;
            const fc = getNodeCenter(from);
            const tc = getNodeCenter(to);

            const dx = tc.cx - fc.cx;
            const dy = tc.cy - fc.cy;
            const midX = fc.cx + dx / 2;
            const midY = fc.cy + dy / 2;

            return (
              <g key={`edge-${i}`}>
                <defs>
                  <marker
                    id={`arrow-${i}`}
                    markerWidth="8"
                    markerHeight="6"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0,0 L8,3 L0,6" fill="hsl(40 70% 55% / 0.4)" />
                  </marker>
                </defs>
                <line
                  x1={fc.cx}
                  y1={fc.cy}
                  x2={tc.cx}
                  y2={tc.cy}
                  stroke="hsl(40 70% 55% / 0.25)"
                  strokeWidth={1.5}
                  markerEnd={`url(#arrow-${i})`}
                />
                {edge.label && (
                  <text
                    x={midX}
                    y={midY - 5}
                    fontSize={8}
                    fill="hsl(220 10% 50%)"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {diagram.nodes.map((node, i) => {
            const w = node.width || 120;
            const h = node.height || 40;
            const colors = nodeColors[node.type || "secondary"];
            return (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={w}
                  height={h}
                  rx={6}
                  fill={colors.bg}
                  stroke={colors.border}
                  strokeWidth={1}
                />
                <text
                  x={node.x + w / 2}
                  y={node.y + h / 2 + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={9}
                  fontWeight={500}
                  fill={colors.text}
                  fontFamily="Inter, sans-serif"
                >
                  {node.label.length > 18
                    ? node.label.split(" ").reduce<string[]>((lines, word) => {
                        const last = lines[lines.length - 1] || "";
                        if (last.length + word.length > 16) {
                          lines.push(word);
                        } else {
                          lines[lines.length - 1] = last ? `${last} ${word}` : word;
                        }
                        return lines;
                      }, []).length > 1
                      ? node.label.substring(0, 18) + "…"
                      : node.label
                    : node.label}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>
    </motion.div>
  );
};

export default ArchitectureDiagram;
