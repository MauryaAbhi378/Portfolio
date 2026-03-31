import { notFound } from "next/navigation";
import projects from "@/projects";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

type Project = {
  title: string;
  slug: string;
  techStack: Record<string, string[] | undefined>;
  image: string;
  shortDesc: string;
  description: { para1: string; para2: string };
  whatILearned: { title: string; desc: string }[];
  live: string;
  github: string;
  web: string;
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectDetail: string }>;
}) {
  const { projectDetail } = await params;

  const project = (projects as unknown as Project[]).find(
    (p) => p.slug === projectDetail,
  );

  if (!project) notFound();

  const techItems = Object.entries(project.techStack)
    .filter(([, items]) => items && items.length > 0)
    .map(([category, items]) => ({
      category: category.toUpperCase(),
      names: (items ?? []).join(", "),
    }));

  return (
    <main className="bg-[#131313] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[80vh] overflow-hidden flex items-end mt-13">
        {/* Full-width background image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Bottom blur + gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #131313 0%, #131313 8%, rgba(19,19,19,0.7) 40%, rgba(19,19,19,0.1) 70%, transparent 100%)",
            backdropFilter: "blur(0px)",
          }}
        />
        {/* Extra localised blur band at the very bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            maskImage: "linear-gradient(to top, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 40%, transparent 100%)",
          }}
        />

        {/* Title on top of overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 w-full pb-14 pt-10">
          <h1 className="text-5xl md:text-[3.5rem] font-bold text-white tracking-[-0.02em] leading-[1.08]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* ── Project Overview + Tech Stack ── */}
      <section className="bg-[#131313] py-20">
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row gap-16">
          {/* Left — description */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-[#938F99]/60" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#938F99] uppercase">
                Project Overview
              </span>
            </div>
            <p className="text-[#E6E1E5] text-sm leading-[1.85] mb-5">
              {project.description.para1}
            </p>
            <p className="text-[#E6E1E5] text-sm leading-[1.85]">
              {project.description.para2}
            </p>
          </div>

          {/* Right — tech stack */}
          <div className="md:w-60 shrink-0">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#938F99] uppercase block mb-6">
              Tech Stack
            </span>

            <div className="space-y-5">
              {techItems.map(({ names, category }) => (
                <div
                  key={category}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-white text-sm font-medium">
                    {names}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.15em] text-[#938F99]/70 uppercase shrink-0">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Learned + Links ── */}
      <section className="bg-[#131313] py-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16">
          {/* Left — What I Learned card with its own background */}
          <div className="md:w-[70%] bg-[#1B1C1C] rounded-xl p-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-px bg-[#FFB787]/70" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#FFB787]/80 uppercase">
                What I Learned
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.whatILearned.map((item, i) => (
                <div key={i}>
                  <h3 className="text-white font-semibold text-[0.9375rem] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#938F99] text-sm leading-[1.8]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — links on black background */}
          <div className="md:w-[30%] shrink-0 flex flex-col gap-4 md:pt-2">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#B1C5FF] transition-colors group/live"
              >
                View Live Project
                <MoveRight
                  size={14}
                  className="transition-transform group-hover/live:translate-x-1"
                />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#938F99] text-sm hover:text-[#B1C5FF] transition-colors group/gh"
              >
                View GitHub
                <MoveRight
                  size={14}
                  className="transition-transform group-hover/gh:translate-x-1"
                />
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
