import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <header className="relative w-full px-6 py-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-48 w-48 rotate-12 bg-linear-to-br from-amber-400 via-fuchsia-500 to-sky-500 opacity-30 blur-3xl" />
        <div className="absolute -right-10 top-10 h-32 w-32 bg-sky-400 opacity-20 blur-2xl" />
        <div className="absolute bottom-0 left-1/2 h-28 w-28 -translate-x-1/2 bg-amber-300 opacity-20 blur-2xl" />
      </div>
      <nav className="relative mx-auto flex max-w-6xl items-center gap-6 rounded-2xl bg-slate-900/85 px-5 py-4 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/10 p-2 ring-1 ring-white/5">
            <Image
              src={Logo}
              alt="Website logo"
              width={56}
              height={56}
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
        <div className="ml-auto hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link
            href="/"
            className="transition hover:text-amber-300 hover:drop-shadow-[0_0_12px_rgba(253,230,138,0.6)]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition hover:text-amber-300 hover:drop-shadow-[0_0_12px_rgba(253,230,138,0.6)]"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="transition hover:text-amber-300 hover:drop-shadow-[0_0_12px_rgba(253,230,138,0.6)]"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="transition hover:text-amber-300 hover:drop-shadow-[0_0_12px_rgba(253,230,138,0.6)]"
          >
            Contact
          </Link>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-amber-200/40 md:ml-4"
        >
          View projects
          <span className="text-lg">-{">"}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
