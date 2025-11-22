import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-16 pt-10">
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
            Contact
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            <span className="bg-linear-to-r from-amber-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
              Let&apos;s collaborate
            </span>{" "}
            on research, design, or a project idea.
          </h1>
          <p className="text-lg text-slate-200/80">
            I respond quickly to thoughtful questions and project ideas. Share a
            bit of context and I will follow up with next steps.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:10214581@students.usd497.org"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-5 py-2.5 text-slate-900 font-semibold shadow-lg shadow-amber-300/20 transition hover:-translate-y-0.5 hover:shadow-amber-200/40"
            >
              Email me directly
              <span className="text-base">-{">"}</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-200/50 hover:text-amber-200"
            >
              View my work
            </Link>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="space-y-4 rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10 backdrop-blur">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-0 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-0 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white">
                How can I help?
              </label>
              <textarea
                rows={4}
                placeholder="Share context about your idea, question, or project."
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-0 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-5 py-3 text-center text-base font-semibold text-slate-900 shadow-lg shadow-amber-300/20 transition hover:-translate-y-0.5 hover:shadow-amber-200/40"
            >
              Send message
            </button>
            <p className="text-xs text-slate-400">
              I will reply within 24 hours with next steps or a quick call link.
            </p>
          </form>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Response style
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                Clear action items, honest feedback, and timelines you can
                depend on.
              </p>
              <p className="mt-2 text-sm text-slate-200/80">
                Whether it is a research review, design critique, or pair
                programming session, I aim to leave you with practical next
                steps.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-900/70 p-4 ring-1 ring-white/10 col-span-2">
                <p className="text-sm text-slate-300">Email</p>
                <a
                  href="mailto:10214581@students.usd497.org"
                  className="text-lg font-semibold text-amber-100 transition hover:text-white"
                >
                  10214581@students.usd497.org
                </a>
              </div>
              <div className="rounded-2xl bg-slate-900/70 p-4 ring-1 ring-white/10 col-span-2">
                <p className="text-sm text-slate-300">Location</p>
                <p className="text-lg font-semibold text-white">
                  Kansas, USA (remote friendly)
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 p-4 ring-1 ring-white/10">
                <p className="text-sm text-slate-300">Availability</p>
                <p className="text-lg font-semibold text-white">
                  Weekday evenings & weekends
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 p-4 ring-1 ring-white/10">
                <p className="text-sm text-slate-300">Collaboration</p>
                <p className="text-lg font-semibold text-white">
                  Open to research, design, and dev roles
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
