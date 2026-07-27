import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) =>
        document.querySelector(item.href),
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}

        <a href="#home" className="text-2xl font-bold tracking-wide text-white">
          {portfolio.personal.name}
        </a>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition duration-300 ${
                active === item.href.substring(1)
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-medium"
          >
            <Download size={18} />
            Resume
          </a>
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="lg:hidden bg-neutral-900 border-t border-neutral-800">
          <div className="flex flex-col px-6 py-5 gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href={portfolio.personal.resume}
              download
              className="mt-2 bg-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
