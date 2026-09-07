import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/ui-bits";
import { email } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact - Sushil Bishowkarma",
  description: "Get in touch with Sushil Bishowkarma.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-48">
        <PageHeader
          eyebrow="Contact"
          title={
            <>
              Have a good idea?
              <br />
              <em className="text-accent">Let&apos;s talk.</em>
            </>
          }
          description={`For collaborations, conversations, or just saying hello - send a note and it'll land directly in my inbox at ${email}.`}
        />
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
