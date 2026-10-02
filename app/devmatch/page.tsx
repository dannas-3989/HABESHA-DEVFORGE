"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DevCard } from "@/components/DevCard";
import { devProfiles } from "@/lib/devProfiles";

type Accent = "blue" | "purple" | "green";

export default function DevMatchPage() {
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [requested, setRequested] = useState<string | null>(null);

  const skills = useMemo(() => {
    const allSkills = devProfiles.flatMap((profile) => profile.skills);
    return ["All", ...Array.from(new Set(allSkills))];
  }, []);

  const filteredProfiles = useMemo(() => {
    const query = search.toLowerCase().trim();

    return devProfiles.filter((profile) => {
      const matchesSearch =
        !query ||
        profile.name.toLowerCase().includes(query) ||
        profile.role.toLowerCase().includes(query) ||
        profile.skills.some((skill) =>
          skill.toLowerCase().includes(query)
        );

      const matchesSkill =
        selectedSkill === "All" ||
        profile.skills.includes(selectedSkill);

      return matchesSearch && matchesSkill;
    });
  }, [search, selectedSkill]);

  function handleRequest(name: string) {
    setRequested(name);

    window.setTimeout(() => {
      setRequested(null);
    }, 2500);
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-20 pt-28 text-white">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-12">
          <Link
            href="/"
            className="mb-6 inline-block text-sm text-gray-500 transition hover:text-white"
          >
            ← Back to home
          </Link>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
            DevMatch
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Find the people
            <br />
            <span className="text-gray-500">to build with.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-400">
            Discover developers by role and skill, then start building your
            team.
          </p>
        </div>

        {/* CONTROLS */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-4 lg:flex-row">

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search developers or skills..."
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400/50"
            />

            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none"
            >
              {skills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* RESULTS */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {filteredProfiles.length} developer
            {filteredProfiles.length === 1 ? "" : "s"} found
          </p>

          {selectedSkill !== "All" && (
            <button
              onClick={() => setSelectedSkill("All")}
              className="text-sm text-emerald-400 hover:text-emerald-300"
            >
              Clear filter
            </button>
          )}
        </div>

        {filteredProfiles.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                className="flex flex-col items-center gap-4"
              >
                <DevCard
                  name={profile.name}
                  role={profile.role}
                  skills={profile.skills}
                  accent={profile.accent as Accent}
                />

                <button
                  onClick={() => handleRequest(profile.name)}
                  className="rounded-full border border-white/15 px-5 py-2 text-sm font-bold text-white transition hover:border-emerald-400/50 hover:bg-emerald-400 hover:text-black"
                >
                  {requested === profile.name
                    ? "Request sent ✓"
                    : "Request to build"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 py-20 text-center">
            <p className="text-lg font-bold">No developers found.</p>
            <p className="mt-2 text-sm text-gray-500">
              Try another name, role, or skill.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}