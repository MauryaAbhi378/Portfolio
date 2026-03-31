import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#131313] py-12">
      <div className="max-w-5xl mx-auto px-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-8 flex-wrap justify-center">
          <Link
            href="mailto:abhim0505@gmail.com"
            className="flex items-center gap-1.5 text-sm text-blue-400 font-extrabold transition-colors"
          >
            abhim0505@gmail.com
            <Mail size={13} strokeWidth={1.5} />
          </Link>

          <span className="text-[#353535] select-none">·</span>

          <Link
            href="https://www.linkedin.com/in/abhishek-maurya-bb5382233/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#938F99] hover:text-white font-extrabold transition-colors"
          >
            LinkedIn
          </Link>

          <span className="text-[#353535] select-none">·</span>

          <Link
            href="https://github.com/MauryaAbhi378"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#938F99] hover:text-white font-extrabold transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
