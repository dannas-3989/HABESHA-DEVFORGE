"use client";
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const accentGradients = {
  blue: "from-blue-900 to-cyan-800",
  purple: "from-purple-900 to-indigo-800",
  green: "from-emerald-900 to-teal-800",
};

const accentGlow = {
  blue: "shadow-cyan-500/30",
  purple: "shadow-purple-500/30",
  green: "shadow-emerald-500/30",
};

export function DevCard({
  name,
  role,
  skills,
  accent = "blue",
}: {
  name: string;
  role: string;
  skills: string[];
  accent?: "blue" | "purple" | "green";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`w-64 h-80 rounded-xl bg-gradient-to-br ${accentGradients[accent]} p-6 text-white flex flex-col justify-between shadow-xl ${accentGlow[accent]}`}
      >
        <div>
          <p className="font-bold text-lg">{name}</p>
          <p className="text-sm opacity-70">{role}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="text-xs bg-white/10 rounded-full px-2 py-1">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}