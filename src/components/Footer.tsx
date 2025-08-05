export default function Footer() {
  const links = [
    { label: "Status", href: "#" },
    { label: "Announcements", href: "#" }, 
    { label: "Docs", href: "#" },
    { label: "About", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" }
  ];

  const socialLinks = [
    { icon: "💬", href: "#", label: "Discord" },
    { icon: "📘", href: "#", label: "Facebook" }, 
    { icon: "💼", href: "#", label: "LinkedIn" },
    { icon: "🐦", href: "#", label: "Twitter" }
  ];

  return (
    <footer className="border-t bg-background mt-16">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2023 – 2025 OpenRouter, Inc.</span>
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}