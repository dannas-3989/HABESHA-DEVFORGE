import Link from "next/link";
import { DevCard } from "@/components/DevCard";
import { devProfiles } from "@/lib/devProfiles";
import { Navbar } from "@/components/Navbar";

const features = [
  {
    number: "01",
    title: "DevMatch",
    description:
      "Find Ethiopian developers with complementary skills and build your team.",
    href: "/devmatch",
  },
  {
    number: "02",
    title: "StarkForge",
    description:
      "Start faster with developer boilerplates designed around local use cases.",
    href: "/starkforge",
  },
  {
    number: "03",
    title: "Agelgil API",
    description:
      "Experiment with Ethiopian-focused mock datasets and developer APIs.",
    href: "/agelgil",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-emerald-400">
            Built for the Ethiopian developer ecosystem
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Find your team.
            <br />
            <span className="text-emerald-400">Build something real.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Habesha DevForge connects developers, provides locally relevant
            starter kits, and gives you tools to prototype Ethiopian-focused
            products faster.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/devmatch"
              className="rounded-full bg-emerald-400 px-7 py-3.5 font-bold text-black transition hover:scale-105 hover:bg-emerald-300"
            >
              Find Developers →
            </Link>

            <Link
              href="/agelgil"
              className="rounded-full border border-white/15 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Explore Agelgil API
            </Link>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.number}
              href={feature.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.06]"
            >
              <span className="text-sm font-mono text-emerald-400">
                {feature.number}
              </span>

              <h2 className="mt-8 text-2xl font-bold text-white">
                {feature.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-400">
                {feature.description}
              </p>

              <div className="mt-7 text-sm font-bold text-white">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DEVELOPER PREVIEW */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                DevMatch
              </p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
                Developers are looking for a team.
              </h2>
            </div>

            <Link
              href="/devmatch"
              className="hidden text-sm font-bold text-gray-400 transition hover:text-white sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {devProfiles.slice(0, 6).map((profile) => (
              <DevCard
                key={profile.id}
                name={profile.name}
                role={profile.role}
                skills={profile.skills}
                accent={profile.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <span>HABESHA.DEVFORGE</span>
          <span>Build locally. Build together.</span>
        </div>
      </footer>
    </main>
  );
}