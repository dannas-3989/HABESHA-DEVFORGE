import { DevCard } from "@/components/DevCard";
import { devProfiles } from "@/lib/devProfiles";

export default function Home() {
  return (
    <div className="min-h-screen bg-black py-16 px-6">
      <h1 className="text-white text-3xl font-bold text-center mb-2">
        Habesha DevForge
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Find your team. Build something real.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {devProfiles.map((profile) => (
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
  );
}