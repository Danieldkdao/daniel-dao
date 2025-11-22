import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    title: "Social Media and AI study",
    summary:
      "Conducting an international study to determine and learn about the effects of social media and AI on high school students' critical thinking.",
    stack: ["STEM", "Research", "Collaboration"],
    status: "In progress",
    link: null,
  },
  {
    title: "Math Puzzle App",
    summary:
      "Fun web app where users can solve creative math puzzles, chat with AI, and reach out to the community.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In progress",
    link: null,
  },
  {
    title: "Entrepreneurship Challenge",
    summary: `Proposed business idea "Don't Panic AI Tutors" to teach people about AI. Received the highest award at the Kansas Entrepreneurship Challenge.`,
    stack: ["Business", "Communication", "AI"],
    status: "In progess",
    link: "https://www.instagram.com/p/DIuW7ueyE9U/",
  },
  {
    title: "Website for local Tennis Team",
    summary:
      "Created a website for the local high school tennis team with authentication, blogs, players, and more.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Completed",
    link: "https://free-state-tennis-official.vercel.app",
  },
  {
    title: "AI Student Monitoring Study",
    summary:
      "Studied and researched the impacts of AI student monitoring in schools. Reached out to many members in the community and uncovered diverse perspectives.",
    stack: ["Excel", "Planning", "Collaboration"],
    status: "Completed",
    link: "https://ecybermission.com",
  },
  {
    title: "AI STEM Research Project",
    summary:
      "Explored the perceptions and accuracy of generative AI tools such as ChatGPT, Gemini, and Claude.",
    stack: ["STEM", "Research", "AI"],
    status: "Completed",
    link: "https://lawrencekstimes.com/2024/07/24/lvs-national-stem-competition/",
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
            ideas that help and improve.
          </h1>
          <p className="text-lg text-slate-200/80">
            I like projects that solve a clear problem, include measurable
            outcomes, and feel great to use. Here are a few I have done in the
            past and currently working on.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-5 py-2.5 text-slate-900 font-semibold shadow-lg shadow-amber-300/20 transition hover:-translate-y-0.5 hover:shadow-amber-200/40"
            >
              Collaborate with me
              <FaArrowRight />
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
                  <div className="flex gap-2">
                    <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-100 ring-1 ring-amber-200/30 whitespace-nowrap">
                      {project.status}
                    </span>
                    {project.link && <Link href={project.link} className="rounded-full bg-amber-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-100 ring-1 ring-amber-200/30 flex items-center justify-center">
                      <FaArrowUpRightFromSquare />
                    </Link>}
                  </div>
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
      </main>
      <Footer />
    </div>
  );
}
