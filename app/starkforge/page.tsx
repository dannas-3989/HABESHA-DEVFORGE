"use client";

import { useState } from "react";
import Link from "next/link";

const kits = [
  {
    id: "next-chapa",
    title: "Next.js + Chapa",
    description:
      "A starter structure for building Ethiopian payment experiences with Chapa.",
    stack: ["Next.js", "TypeScript", "Chapa"],
    command: "npx create-next-app@latest my-chapa-app",
  },
  {
    id: "telebirr",
    title: "Telebirr Webhook",
    description:
      "A practical webhook starting point for experimenting with Telebirr-style payment events.",
    stack: ["Node.js", "Webhooks", "Telebirr"],
    command: "git clone habesha-devforge/telebirr-webhook",
  },
  {
    id: "amharic-ui",
    title: "Amharic UI",
    description:
      "A UI foundation for products that need Ethiopian language and localization support.",
    stack: ["React", "Tailwind", "Amharic"],
    command: "npx create-next-app@latest amharic-ui",
  },
];

export default function StarkForgePage() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyCommand(id: string, command: string) {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(id);

      window.setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch {
      setCopied(null);
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-28 text-white">
      <div className="mx-auto max-w-6xl">

        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-500 transition hover:text-white"
        >
          ← Back to home
        </Link>

        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
            StarkForge
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Don't start
            <br />
            <span className="text-gray-500">from zero.</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Local-first starter kits for developers building products for
            Ethiopian users.
          </p>
        </div>

        {/* KIT GRID */}
        <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kits.map((kit) => (
            <article
              key={kit.id}
              className="group flex min-h-[360px] flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-gray-600">
                  /forge/{kit.id}
                </span>

                <span className="rounded-full border border-emerald-400/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  Starter
                </span>
              </div>

              <h2 className="mt-10 text-2xl font-bold">
                {kit.title}
              </h2>

              <p className="mt-3 flex-1 leading-7 text-gray-400">
                {kit.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {kit.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black">
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                  <span className="text-[10px] uppercase tracking-wider text-gray-600">
                    Terminal
                  </span>

                  <button
                    onClick={() => copyCommand(kit.id, kit.command)}
                    className="text-xs text-gray-500 transition hover:text-white"
                  >
                    {copied === kit.id ? "Copied ✓" : "Copy"}
                  </button>
                </div>

                <code className="block overflow-x-auto p-3 text-xs text-gray-400">
                  $ {kit.command}
                </code>
              </div>
            </article>
          ))}
        </section>

        {/* NOTE */}
        <section className="mt-10 rounded-2xl border border-yellow-500/10 bg-yellow-500/[0.03] p-5">
          <p className="text-sm leading-6 text-gray-400">
            <span className="font-bold text-yellow-400">Prototype note:</span>{" "}
            These commands are starter references for the hackathon MVP. The
            Forge interface is designed to show how locally relevant
            boilerplates could be distributed through Habesha DevForge.
          </p>
        </section>
      </div>
    </main>
  );
}