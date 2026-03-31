import experiences from "@/experience";

type Experience = {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  working: string;
  workLocation: string;
  workType: string;
  description: string;
  techLearned: string[];
};

function formatDate(dateStr: string): string {
  if (dateStr === "Present") return "PRESENT";
  const [year, month] = dateStr.split("-");
  if (!month) return year;
  const monthName = new Date(Number(year), Number(month) - 1).toLocaleString("en-US", { month: "short" }).toUpperCase();
  return `${monthName} ${year}`;
}

export default function WorkPage() {
  return (
    <main className="bg-[#131313]">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#131313] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-white mb-5">
            Experience
          </h1>
        </div>
      </section>

      {/* ── Experience List ───────────────────────────────────── */}
      <section className="bg-[#131313] pb-28">
        <div className="max-w-5xl mx-auto px-8">
          <div className="space-y-10">
            {(experiences as Experience[]).map((exp, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_2fr] gap-12 items-start"
              >
                {/* Left — meta */}
                <div>
                  <p className="text-[0.625rem] tracking-[0.18em] uppercase text-[#938F99]/60 font-mono mb-3">
                    {formatDate(exp.startDate)}&nbsp;—&nbsp;
                    {formatDate(exp.endDate)}
                  </p>
                  <h2 className="text-white font-bold text-[1.375rem] leading-tight tracking-[-0.01em] mb-1">
                    {exp.companyName}
                  </h2>
                  <p className="text-[#938F99] text-[0.8125rem]">
                    {exp.jobTitle}
                  </p>
                </div>

                {/* Right — card */}
                <div
                  className={`relative rounded-xl p-7 overflow-hidden border-l-2 ${
                    exp.working === "true"
                      ? "bg-[#1B1C1C] border-[#B1C5FF]/70"
                      : "bg-[#1B1C1C] border-[#353535]"
                  }`}
                >
                  {/* Corner fade */}
                  <div
                    className={`pointer-events-none absolute top-0 left-0 w-40 h-40 rounded-tl-xl ${
                      exp.working === "true"
                        ? "bg-[radial-gradient(ellipse_at_top_left,rgba(49,80,174,0.28),transparent_70%)]"
                        : "bg-[radial-gradient(ellipse_at_top_left,rgba(53,53,53,0.45),transparent_70%)]"
                    }`}
                  />
                  <p className="text-[#938F99] text-[0.875rem] leading-[1.8] mb-7">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techLearned.map((tech, j) => {
                      const colors = [
                        {
                          bg: "bg-[#FFB787]/10",
                          border: "border-[#FFB787]/40",
                          text: "text-[#FFB787]",
                        },
                        {
                          bg: "bg-[#B1C5FF]/10",
                          border: "border-[#B1C5FF]/40",
                          text: "text-[#B1C5FF]",
                        },
                        {
                          bg: "bg-[#938F99]/10",
                          border: "border-[#938F99]/30",
                          text: "text-[#938F99]",
                        },
                      ];
                      const c = colors[j % colors.length];
                      return (
                        <span
                          key={j}
                          className={`inline-flex items-center px-2.5 py-1 rounded-sm border text-[0.575rem] tracking-[0.18em] uppercase font-mono ${c.bg} ${c.border} ${c.text}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
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
    </main>
  );
}
