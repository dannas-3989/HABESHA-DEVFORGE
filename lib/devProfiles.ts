export interface DummyProfile {
    id: string;
    name: string;
    role: string;
    skills: string[];
    accent: "blue" | "purple" | "green";
  }
  
  export const devProfiles: DummyProfile[] = [
    { id: "1", name: "Elbethel Temesgen", role: "Frontend Developer", skills: ["React", "Tailwind", "UI/UX"], accent: "purple" },
    { id: "2", name: "Daniya Nassir", role: "Full-Stack Developer", skills: ["Next.js", "Node.js", "Socket.io"], accent: "blue" },
    { id: "3", name: "Samuel Tadesse", role: "Backend Developer", skills: ["Express", "PostgreSQL", "APIs"], accent: "green" },
    { id: "4", name: "Hana Alemu", role: "Mobile Developer", skills: ["React Native", "Firebase"], accent: "purple" },
    { id: "5", name: "Yonatan Bekele", role: "Designer", skills: ["Figma", "Design Systems"], accent: "blue" },
    { id: "6", name: "Meron Dawit", role: "Data Scientist", skills: ["Python", "ML", "Pandas"], accent: "green" },
  ];