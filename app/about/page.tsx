import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaArrowRight } from "react-icons/fa6";

const experiences = [
  {
    period: "2025",
    title: "Programming and more STEM",
    detail:
      "Learned about web technologies such as Next.js, Tailwind CSS, and TypeScript. Continued STEM research with an international study.",
  },
  {
    period: "2024",
    title: "Conducted in-person surveys",
    detail:
      "Researched the impacts of digital AI student monitoring tools in school. Reached out to many members in the community, in-person.",
  },
  {
    period: "2023",
    title: "First introduction to STEM",
    detail:
      "Completed a research project studying the perceptions and impacts of generative AI tools like ChatGPT, Gemini, and Claude.",
  },
];

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "Data visualization",
  "APIs",
  "Research methods",
  "Technical writing",
  "Collaboration",
];

export default function About() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-16 pt-10">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              About me
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              <span className="bg-linear-to-r from-amber-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
                STEM student, builder, and teammate
              </span>{" "}
              focused on making ideas real.
            </h1>
            <p className="text-lg text-slate-200/80">
              I enjoy exploring the intersection of curiosity and execution.
              Whether it is designing research protocols, coding interfaces, or
              facilitating group work, I try my best to make the result
              something to be proud of.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-5 py-2.5 text-slate-900 font-semibold shadow-lg shadow-amber-300/20 transition hover:-translate-y-0.5 hover:shadow-amber-200/40"
              >
                Explore projects
                <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-amber-200/50 hover:text-amber-200"
              >
                Reach out
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 ring-1 ring-white/10 backdrop-blur">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Quick profile
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-300">School</p>
                  <p className="text-xl font-semibold text-white">
                    Lawrence Virtual School
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-300">Interests</p>
                  <p className="text-xl font-semibold text-white">
                    Programming, STEM, reseach
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-amber-200/40 bg-linear-to-r from-amber-300/15 via-fuchsia-400/15 to-sky-400/15 p-4 text-sm text-amber-100 ring-1 ring-white/10">
                I value self-driven solutions. Ways to tackle problems that I
                come up with and execute.
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10 backdrop-blur lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Experience timeline
            </p>
            <h2 className="text-3xl font-semibold text-white">
              How I build and learn
            </h2>
            <p className="text-slate-200/80">
              Each year I have learned countless new things, whether it be
              building APIs to conducting literature reviews on complex topics.
              Here are some of my favorite highlights from recent years.
            </p>
          </div>
          <div className="grid gap-4">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-4"
              >
                <div className="rounded-xl bg-amber-300/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 ring-1 ring-amber-200/30">
                  {item.period}
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-200/80">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Skills and tools
              </p>
              <h2 className="text-3xl font-semibold text-white">
                The toolkit I lean on
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-white"
            >
              See them in action
              <FaArrowRight />
            </Link>
          </div>
          <div className="grid gap-3 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 sm:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
