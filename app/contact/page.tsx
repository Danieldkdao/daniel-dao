import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaArrowRight } from "react-icons/fa6";
import ContactForm from "@/components/contact-form";

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
            I will try my best to reach out as quickly as I can. Then we can
            discuss ideas and topics that we could collborate on.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:10214581@students.usd497.org"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-5 py-2.5 text-slate-900 font-semibold shadow-lg shadow-amber-300/20 transition hover:-translate-y-0.5 hover:shadow-amber-200/40"
            >
              Email me directly
              <FaArrowRight />
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
          <ContactForm />
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Reach out
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                Collaborations and project ideas
              </p>
              <p className="mt-2 text-sm text-slate-200/80">
                Whether it is a research, programming, or anything related to
                STEM, I will try my best to reach out and discuss the relevant context. 
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
                  Open to research, programming, or STEM opportunities
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
