import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import experiences from "@/experience";
import projects from "@/projects";

type Experience = {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  working: string;
  workLocation: string;
  workType: string;
};

type Project = {
  title: string;
  slug: string;
  shortDesc: string;
};

function formatDate(dateStr: string): string {
  if (dateStr === "Present") return "Present";
  const [year, month] = dateStr.split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-[#131313] min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-8 pt-28 pb-32 w-full">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-[#938F99] mb-7 font-mono">
            Creative Developer
          </p>

          <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-7">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-[#B1C5FF]">Abhishek Maurya.</span>
          </h1>

          <p className="text-[#938F99] text-base leading-relaxed max-w-xl mb-10">
            Frontend developer with hands-on experience building responsive,
            real-time web and mobile interfaces across React, React Native, and
            Next.js. Passionate about debugging complex UI issues, shipping
            production-ready features, and crafting clean, performant user
            experiences.
          </p>

          <div className="flex items-center gap-7">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-[#001849] bg-linear-to-br from-[#B1C5FF] to-[#0051C3] transition-opacity hover:opacity-90"
            >
              View Projects <ArrowRight size={14} />
            </Link>

            <Link
              href="#contact"
              className="text-sm text-[#938F99] hover:text-white transition-colors tracking-[0.08em]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────── */}
      <section className="bg-[#1B1C1C] py-28">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-xl font-bold text-white mb-14 tracking-[-0.01em]">
            Experience
          </h2>

          <div className="space-y-10">
            {(experiences as Experience[]).map((exp, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-6 group"
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-white font-medium text-[0.9375rem]">
                      {exp.companyName}
                    </h3>
                    {exp.working === "true" && (
                      <Badge className="bg-green-500/15 text-green-400 border-0 text-[0.625rem] font-mono px-2 py-0.5 rounded-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                        Working
                      </Badge>
                    )}
                  </div>
                  <p className="text-[#938F99] text-sm">{exp.jobTitle}</p>
                </div>

                {/* Right */}
                <div className="text-right shrink-0">
                  <p className="text-[#938F99] text-xs font-mono uppercase tracking-wider whitespace-nowrap">
                    {formatDate(exp.startDate)}&nbsp;&ndash;&nbsp;
                    {exp.endDate === "Present"
                      ? "Present"
                      : formatDate(exp.endDate)}
                  </p>
                  <p className="text-[#938F99] text-xs font-mono uppercase tracking-wider whitespace-nowrap mt-1">
                    {exp.workLocation}&nbsp;({exp.workType})
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/work"
              className="text-sm text-[#938F99] hover:text-white transition-colors bg-[#353535] hover:bg-[#3e3c42] px-6 py-2.5 rounded-md"
            >
              Show all work experiences
            </Link>
          </div>
        </div>
      </section>

      {/* ── Projects (preview) ──────────────────────────────── */}
      <section className="bg-[#131313] py-28">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-xl font-bold text-white mb-2 tracking-[-0.01em]">
            Projects
          </h2>

          <div>
            {(projects as Project[]).slice(0, 2).map((project, i) => (
              <div
                key={i}
                className="group relative flex items-start justify-between gap-6 py-6 border-b border-white/6"
              >
                <Link href={`/project/${project.slug}`} className="absolute inset-0 z-0" aria-label={project.title} />
                <div className="relative z-10 pointer-events-none">
                  <h3 className="text-white font-semibold text-[1.0625rem] mb-1.5 group-hover:text-[#B1C5FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#938F99] text-sm leading-relaxed max-w-xl">
                    {project.shortDesc}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#938F99] shrink-0 mt-1 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all relative z-10 pointer-events-none"
                />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 text-sm text-[#938F99] hover:text-white transition-colors"
            >
              View all projects <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-[#131313] py-32">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold text-white leading-[1.05] tracking-[-0.02em]">
            Let&apos;s curate
            <br />
            something{" "}
            <em className="font-light italic text-[#E6E1E5]/80">new.</em>
          </h2>
        </div>
      </section>
    </>
  );
}
