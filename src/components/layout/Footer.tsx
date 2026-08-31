export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-theme-text-secondary">
            © {new Date().getFullYear()} Portfolio
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-theme-text-secondary hover:text-theme-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-theme-text-secondary hover:text-theme-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-sm text-theme-text-secondary hover:text-theme-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
