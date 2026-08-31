import { Mail, MapPin, Code, Briefcase } from "lucide-react";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "maharjanlishu@gmail.com",
    href: "mailto:maharjanlishu@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Kathmandu, Nepal",
    icon: MapPin,
  },
  {
    label: "GitHub",
    value: "@lishuweb",
    href: "https://github.com/lishuweb",
    icon: Code,
  },
  {
    label: "LinkedIn",
    value: "in/lishu-maharjan",
    href: "https://www.linkedin.com/in/lishu-maharjan/",
    icon: Briefcase,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className=" text-3xl md:text-4xl text-theme-text mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Message */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-theme-text">
              I&apos;m always open to new opportunities, collaborations, or just
              a friendly chat. Whether you have a project in mind or just want
              to say hi — reach out!
            </p>
            <p className="text-sm text-theme-text-secondary">
              Currently available for freelance work and full-time positions.
            </p>
          </div>

          {/* Right: Contact details */}
          <div className="space-y-4">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 group">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-theme-avatar-bg text-theme-icon">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs text-theme-text-secondary">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-theme-text group-hover:text-theme-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
