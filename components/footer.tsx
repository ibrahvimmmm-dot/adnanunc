import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Industries", href: "#industries" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo with hover effect */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/footLogo.jpg"
                alt="OPTI CORE DC SOLUTIONS Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                OPTI CORE
              </span>
              <span className="text-xs tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-primary/80">
                DC SOLUTIONS
              </span>
            </div>
          </a>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {'© 2025 OPTI CORE DC SOLUTIONS. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}