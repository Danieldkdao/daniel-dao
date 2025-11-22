"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMessageAction } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const ContactFormSchema = z.object({
  name: z.string().min(1, { error: "Name field cannot be empty." }),
  email: z.email({ error: "Invalid email " }),
  subject: z.string().min(1, { error: "Subject field cannot be empty." }),
  message: z.string().min(1, { error: "Message field cannot be empty." }),
});

type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(ContactFormSchema),
  });
  const router = useRouter();

  const handleSendMessage = async (formData: ContactFormSchemaType) => {
    if (
      !formData.name.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    )
      return toast.error("Invalid fields.");
    await sendMessageAction(
      formData.name,
      formData.email,
      formData.subject,
      formData.message
    );
    reset();
    toast.success("Your message has been successfully sent!");
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(handleSendMessage)}
      className="space-y-4 rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10 backdrop-blur"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-white">Name</label>
        <input
          {...register("name", { setValueAs: (v) => (v.trim() ? v : "") })}
          type="text"
          placeholder="Your name"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-0 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/30"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">
            {errors.name.message || "Name is invalid."}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-white">Email</label>
        <input
          {...register("email")}
          placeholder="you@example.com"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-0 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/30"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">
            {errors.email.message || "Email is invalid."}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-white">Subject</label>
        <input
          {...register("subject", { setValueAs: (v) => (v.trim() ? v : "") })}
          placeholder="Research Collaboration"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-0 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/30"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">
            {errors.subject.message || "Subject is invalid."}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-white">Content</label>
        <textarea
          {...register("message", { setValueAs: (v) => (v.trim() ? v : "") })}
          rows={4}
          placeholder="Please share what you had in mind."
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-0 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/30"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">
            {errors.message.message || "Message is invalid."}
          </p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className={`w-full rounded-full bg-linear-to-r from-amber-300 via-fuchsia-400 to-sky-400 px-5 py-3 text-center text-base font-semibold text-slate-900 shadow-lg shadow-amber-300/20 transition ${
          isSubmitting
            ? "cursor-not-allowed opacity-60"
            : "hover:-translate-y-0.5 hover:shadow-amber-200/40 cursor-pointer"
        }`}
      >
        Send message
      </button>
      <p className="text-xs text-slate-400">
        I will try to reply within 24 hours.
      </p>
    </form>
  );
};

export default ContactForm;
