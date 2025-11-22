import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaArrowRight } from "react-icons/fa6";

const highlights = [
  {
    title: "Curiosity-first research",
    body: "I love digging into problems, from writing simulations to running lab-style experiments that reveal real-world patterns.",
    tags: ["Modeling", "Experimentation", "Data storytelling"],
  },
  {
    title: "Full-stack builds",
    body: "I am currently learning full-stack development with Next JS and other web technologies.",
    tags: ["Next.js", "APIs", "UI/UX"],
  },
  {
    title: "Impact-driven mindset",
    body: "Every project is tied to a question that matters. I measure, iterate, and share what I learn.",
    tags: ["Metrics", "Writing", "Collaboration"],
  },
];

const milestones = [
  {
    title: "Previous project",
    detail:
      "Researched the impact AI student monitoring tools in schools, reached out to over 700 students, parents, staff, and teachers.",
  },
  {
    title: "Currently exploring",
    detail:
      "The impacts of social media and AI on high school students critical thinking skills.",
  },
  {
    title: "Next up",
    detail:
      "Learn about machine learning and hardware to build even cooler projects.",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-16 pt-10">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Building for impact
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                <span className="bg-linear-to-r from-amber-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
                  Hi, I&apos;m Daniel Dao.
                </span>{" "}
                I build thoughtful projects at the intersection of code, STEM,
                and curiosity.
              </h1>
              <p className="text-lg text-slate-200/80">
                From research writeups to full-stack apps, I love translating
                questions into experiments and experiments into products people
                can use.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-5 py-2.5 text-slate-900 font-semibold shadow-lg shadow-amber-300/20 transition hover:-translate-y-0.5 hover:shadow-amber-200/40"
              >
                See projects
                <FaArrowRight />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-200/50 hover:text-amber-200"
              >
                Learn more
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200/80 transition hover:border-amber-200/60 hover:text-amber-100"
              >
                Contact
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Researcher", "Developer", "Teammate"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900/70 p-6 ring-1 ring-white/10 backdrop-blur">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-10 top-0 h-48 w-48 bg-amber-300/30 blur-3xl" />
              <div className="absolute right-0 top-10 h-40 w-40 bg-sky-400/25 blur-3xl" />
            </div>
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200/70">
                Quick stats
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-300">Recent focus</p>
                  <p className="text-2xl font-semibold text-white">
                    Next.js websites, STEM research, data science.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-300">Collaboration</p>
                  <p className="text-2xl font-semibold text-white">
                    Collaborate with teammates and experts. 
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-amber-200/40 bg-linear-to-r from-amber-300/20 via-fuchsia-400/20 to-sky-400/20 p-4 text-sm text-amber-100 ring-1 ring-white/10">
                I aim to make every project transparent: clear problem
                statements, progress logs, and measurable outcomes.
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                What guides my work
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Principles that keep me building
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-white"
            >
              Learn about me
              <FaArrowRight />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10 transition hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-linear-to-br from-amber-300/10 via-fuchsia-400/10 to-sky-400/10" />
                </div>
                <div className="relative space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-200/80">{item.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-amber-100 ring-1 ring-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="grid gap-6 rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10 backdrop-blur lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Projects
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Building in public and sharing progress
            </h2>
            <p className="text-slate-200/80">
              I try my best to learn as much as I can. Then I put that knowledge
              to use by building and completing projects.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-white"
            >
              View all projects
              <FaArrowRight />
            </Link>
            <div className="flex flex-wrap gap-3">
              {[
                "Weekly checkpoints",
                "Documented decisions",
                "Open to feedback",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {milestones.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 ring-1 ring-white/10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                  {item.title}
                </p>
                <p className="mt-2 leading-relaxed text-white/90">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
