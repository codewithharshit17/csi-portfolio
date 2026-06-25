"use client";

import React, { useRef } from "react";
import { LiveProjectButton } from "./LiveProjectButton";

interface Project {
  title: string;
  status: string;
  description: string;
  details: string;
  link?: string;
  linkLabel?: string;
}

const projects: Project[] = [
  {
    title: "J.A.R.V.I.S.",
    status: "Architected / active development",
    description:
      "Multi-agent AI operating system with a Next.js frontend, FastAPI backend, six-tier memory architecture, computer vision pipeline, and voice pipeline.",
    details:
      "Redis, PostgreSQL, vector DB, OpenCV, MediaPipe, DeepFace, Whisper, ElevenLabs, and Porcupine.",
    link: "https://github.com/",
    linkLabel: "View Code",
  },
  {
    title: "MapMyTree",
    status: "Shipped 2026",
    description:
      "Mobile app built with NGO Vivekanand Seva Mandal for GPS-tagged tree mapping, photo verification, and per-tree QR codes.",
    details: "Flutter, PostgreSQL, field workflows, and verification tooling.",
    link: "https://github.com/",
    linkLabel: "Live Project",
  },
  {
    title: "KAPI Pen & Stationery",
    status: "In progress",
    description:
      "Production e-commerce platform for a retail business, covering storefront, auth, payments, and operational state.",
    details:
      "Next.js 15, TypeScript, Tailwind, Prisma, PostgreSQL, Supabase Auth, Razorpay, and Zustand.",
    link: "#",
    linkLabel: "In Progress",
  },
  {
    title: "Open Source (GSSoC)",
    status: "Community contributions",
    description:
      "Contributions to community open-source projects through GirlScript Summer of Code.",
    details: "Issue triage, implementation work, and maintainable pull requests.",
    link: "https://github.com/",
    linkLabel: "View Contributions",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = `${e.clientX - rect.left}px`;
    const y = `${e.clientY - rect.top}px`;

    requestAnimationFrame(() => {
      card.style.setProperty("--mouse-x", x);
      card.style.setProperty("--mouse-y", y);
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#121212]/50 p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-md transition duration-300 hover:border-white/15 hover:bg-[#161616]/60 flex flex-col justify-between min-h-[320px]"
    >
      {/* Radial mouse glow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(215, 226, 234, 0.05), transparent 80%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div>
          <div className="mb-6 flex items-start justify-between gap-5">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight uppercase">
              {project.title}
            </h3>
            <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[#BBCCD7] font-mono">
              {project.status}
            </span>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-[#D7E2EA]/80 font-light">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-white/5 pt-4">
          <p className="text-xs leading-relaxed text-zinc-500 font-mono tracking-tight max-w-[65%]">
            {project.details}
          </p>
          {project.link && (
            <div className="shrink-0">
              <LiveProjectButton href={project.link} label={project.linkLabel} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-[#0C0C0C] px-6 py-24 sm:px-10 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 border-t border-white/5 pt-12 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#BBCCD7] font-mono">
              Selected work
            </p>
            <h2 className="max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-none text-white tracking-tight uppercase">
              Systems, apps, and product code.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500 font-light">
            A compact log of systems engineering, full-stack product code, and mobile ecosystems shipped with real impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
