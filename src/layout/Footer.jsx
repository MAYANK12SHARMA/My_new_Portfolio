import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: Github,
    href: portfolio.personal.socials.github,
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: portfolio.personal.socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: portfolio.personal.socials.email,
    label: "Email",
  },
];

export const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="relative border-t border-white/10 mt-20">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold">{portfolio.personal.name}</h2>

            <p className="text-primary mt-2">{portfolio.personal.role}</p>

            <p className="mt-6 text-muted-foreground leading-8">
              Passionate about building scalable backend systems, AI-powered
              applications, and cloud-native solutions. Always excited to
              collaborate on meaningful projects.
            </p>
          </div>

          {/* Center */}

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    text-muted-foreground
                    hover:text-primary
                    transition-colors
                  "
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}

          <div>
            <h3 className="text-xl font-semibold mb-6">Connect</h3>

            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="
                      w-12
                      h-12
                      rounded-xl
                      glass
                      flex
                      items-center
                      justify-center
                      hover:bg-primary
                      hover:text-black
                      transition-all
                    "
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-muted-foreground">
                📧 {portfolio.personal.email}
              </p>

              <p className="text-muted-foreground">
                📍 {portfolio.personal.location}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-14 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left */}

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()}</span>

              <span>{portfolio.personal.name}</span>

              <span>•</span>

              <span>All Rights Reserved.</span>
            </div>

            {/* Center */}

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                text-muted-foreground
              "
            >
              Built with
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              using
              <Code2 className="w-4 h-4 text-primary" />
              Brain 💀
            </div>

            {/* Right */}

            <button
              onClick={scrollToTop}
              className="
                w-12
                h-12
                rounded-xl
                glass
                hover:bg-primary
                hover:text-black
                transition-all
              "
            >
              <ArrowUp className="w-5 h-5 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
