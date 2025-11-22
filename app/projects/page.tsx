import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const projects = [
  {
    title: "STEM Research Portal",
    summary:
      "A hub for classmates to upload experiments, visualize results, and share commentary with mentors.",
    stack: ["Next.js", "TypeScript", "Charts"],
    status: "Live prototype",
  },
  {
    title: "Environmental Sensor Dashboard",
    summary:
      "Collects local readings, cleans the data, and displays trends with alerts for outliers or anomalies.",
    stack: ["APIs", "Data viz", "Automation"],
    status: "In testing",
  },
  {
    title: "Robotics Playbook",
    summary:
      "Interactive notebook of wiring diagrams, drive code snippets, and build logs for team handoffs.",
    stack: ["Documentation", "UI/UX", "Collaboration"],
    status: "In progress",
  },
  {
    title: "Study Sprint Scheduler",
    summary:
      "Micro-planning tool to break research tasks into sprints, track effort, and surface blockers early.",
    stack: ["Next.js", "Planning", "Accessibility"],
    status: "Shipped",
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-10">
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
            Projects
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            <span className="bg-linear-to-r from-amber-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
              Building, iterating, and sharing
            </span>{" "}
            to make ideas tangible.
          </h1>
          <p className="text-lg text-slate-200/80">
            I like projects that solve a clear problem, include measurable
            outcomes, and feel great to use. Here are a few I am refining and
            releasing.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-5 py-2.5 text-slate-900 font-semibold shadow-lg shadow-amber-300/20 transition hover:-translate-y-0.5 hover:shadow-amber-200/40"
            >
              Collaborate with me
              <span className="text-base">-{">"}</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-200/50 hover:text-amber-200"
            >
              View approach
            </Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10 transition hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-linear-to-br from-amber-300/12 via-fuchsia-400/12 to-sky-400/12" />
              </div>
              <div className="relative space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-100 ring-1 ring-amber-200/30">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-slate-200/80 leading-relaxed">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-900/60 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10 backdrop-blur lg:grid-cols-[1fr_1fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              How I ship
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Intentional process, polished results
            </h2>
            <p className="text-slate-200/80">
              Each project follows a simple loop: define the problem, sketch
              flows, validate with quick prototypes, and ship with docs so
              others can build on it.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "User-centered UX",
                "Fast iterations",
                "Documented decisions",
                "Accessibility-first",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-sm text-slate-300">What I am testing</p>
              <p className="text-xl font-semibold text-white">
                Combining simulations with real-world measurements to guide
                design choices.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-sm text-slate-300">What comes next</p>
              <p className="text-xl font-semibold text-white">
                Packaging starter kits so classmates can launch their own tools
                faster.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
