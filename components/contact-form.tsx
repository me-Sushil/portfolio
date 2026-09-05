"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { email } from "@/lib/data";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    setStatus("Sending…");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" },
      );
      formRef.current.reset();
      setStatus("Message sent — thank you.");
    } catch {
      setStatus("Please email me directly at me.sushilbishowkarma@gmail.com.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2"
    >
      <input
        name="user_name"
        required
        placeholder="Your name"
        aria-label="Your name"
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        name="user_email"
        required
        type="email"
        placeholder="Your email"
        aria-label="Your email"
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
      <textarea
        name="message"
        required
        placeholder="Tell me what you're building…"
        aria-label="Your message"
        rows={5}
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring sm:col-span-2"
      />
      <input type="hidden" name="to_email" value={email} />
      <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-85"
        >
          Send message <ArrowUpRight className="ml-1 inline size-4" />
        </button>
        <p role="status" className="text-xs text-muted-foreground">
          {status || `Replies go to ${email}`}
        </p>
      </div>
    </form>
  );
}
