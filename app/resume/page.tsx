
const DRIVE_RESUME_LINK =
  "https://drive.google.com/file/d/12Q96kIvBJJ2ZKoUhJGUTODvNswSDTGv9/view?usp=sharing";

// For the embedded preview, Drive uses /preview instead of /view
const DRIVE_EMBED_LINK = DRIVE_RESUME_LINK.replace("/view", "/preview");

export default function ResumePage() {
  return (
    <main className="bg-[#131313] min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-36 pb-10">
        <div className="max-w-5xl mx-auto px-8 flex items-end justify-between">
          <div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-white mb-4">
              Resume
            </h1>
            <p className="text-[#938F99] text-base">
              View and download my professional resume.
            </p>
          </div>
        </div>
      </section>

      {/* ── PDF Embed ─────────────────────────────────────────── */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-8">
          <div className="rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#1B1C1C]">
            <iframe
              src={DRIVE_EMBED_LINK}
              className="w-full"
              style={{ height: "calc(100vh - 5rem)" }}
              allow="autoplay"
              title="Resume PDF"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
