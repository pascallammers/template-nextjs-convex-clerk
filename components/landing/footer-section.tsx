import { Instagram, Facebook, Mail } from "lucide-react";

const links = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Mail, href: "mailto:kontakt@parasitcheck.de", label: "E-Mail" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-border/30 bg-[oklch(0.16_0.02_152)] py-10 text-white/50 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-white/90">
              Parasitcheck
            </p>
            <p className="mt-1 text-sm">
              Der smarte Parasitentest für Zuhause.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm transition-colors hover:text-white/80"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] transition-colors hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Parasitcheck. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
