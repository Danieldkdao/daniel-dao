import Image from "next/image";
import Logo from "@/public/logo.png";

const Footer = () => {
  return (
    <footer className="relative mt-16 w-full px-6 pb-10 pt-14">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 bottom-10 h-48 w-48 -rotate-12 bg-linear-to-br from-amber-400 via-fuchsia-500 to-sky-500 opacity-25 blur-3xl" />
        <div className="absolute right-0 top-0 h-36 w-36 bg-sky-400 opacity-25 blur-2xl" />
        <div className="absolute left-1/2 top-6 h-24 w-24 -translate-x-1/2 bg-amber-300 opacity-20 blur-2xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 rounded-3xl bg-slate-900/90 px-8 py-10 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/10 p-2 ring-1 ring-white/5">
              <Image
                src={Logo}
                alt="Website logo"
                width={52}
                height={52}
                className="rounded-lg shadow-lg shadow-amber-500/20"
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Daniel Dao
              </p>
              <p className="text-lg font-semibold text-white">Official Website</p>
            </div>
          </div>
          <p className="max-w-sm text-sm text-slate-200/90">
            Exploring bold ideas for the future. Thank you for visiting—your
            feedback helps shape what comes next.
          </p>
          <a
            href="#survey"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-amber-200/40"
          >
            Take the Survey
            <span className="text-lg">→</span>
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
            Navigation
          </p>
          <a
            href="#home"
            className="block rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-amber-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-amber-300"
          >
            About
          </a>
          <a
            href="#survey"
            className="block rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-amber-300"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-amber-300"
          >
            Contact
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
            Stay in touch
          </p>
          <p className="text-slate-200/90">Email me anytime:</p>
          <a
            href="mailto:10214581@students.usd497.org"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 font-semibold text-amber-200 transition hover:bg-white/5 hover:drop-shadow-[0_0_12px_rgba(253,230,138,0.6)]"
          >
            10214581@students.usd497.org
          </a>
          <div className="pt-2 text-xs text-slate-400">
            © 2025 Daniel Dao. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
