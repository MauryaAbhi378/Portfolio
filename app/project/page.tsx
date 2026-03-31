import { ArrowUpRight } from "lucide-react";
import projects from "@/projects";
import Link from "next/link";

type TechStack = Record<string, string[] | undefined>;

type Project = {
  title: string;
  slug: string;
  shortDesc: string;
  techStack: TechStack;
  live: string;
  github: string;
  web: string;
};

export const metadata = {
  title: "  Abhishek Maurya | Projects",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#131313] min-h-screen pt-32 pb-28">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-white tracking-[-0.02em] mb-3">
          Projects
        </h1>

        {/* List */}
        <div>
          {(projects as Project[]).map((project, i) => (
            <div
              key={i}
              className="group relative flex items-start justify-between gap-6 py-6 border-b border-white/6 first:border-t first:border-t-white/6"
            >
              {/* Stretched link overlay */}
              <Link
                href={`/project/${project.slug}`}
                className="absolute inset-0 z-0"
                aria-label={project.title}
              />

              <div className="relative z-10 min-w-0 pointer-events-none">
                <h2 className="text-white font-semibold text-[1.0625rem] mb-1.5 group-hover:text-[#B1C5FF] transition-colors">
                  {project.title}
                </h2>
                <p className="text-[#938F99] text-sm leading-relaxed max-w-2xl">
                  {project.shortDesc}
                </p>
              </div>

              {/* External links — above stretched link */}
              <div className="relative z-10 flex items-center gap-3 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#938F99] hover:text-white transition-colors font-mono"
                  >
                    Live <ArrowUpRight size={12} />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#938F99] hover:text-white transition-colors font-mono"
                  >
                    GitHub <ArrowUpRight size={12} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
