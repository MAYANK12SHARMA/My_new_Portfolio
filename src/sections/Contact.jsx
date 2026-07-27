import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Send,
  Copy,
} from "lucide-react";

import { SiLeetcode } from "react-icons/si";
import { Button } from "@/components/Button";
import { portfolio } from "@/data/portfolio";

const contactCards = [
  {
    title: "Email",
    value: portfolio.personal.email,
    href: `mailto:${portfolio.personal.email}`,
    icon: Mail,
  },
  {
    title: "Phone",
    value: portfolio.personal.phone,
    href: `tel:${portfolio.personal.phone}`,
    icon: Phone,
  },
  {
    title: "Location",
    value: portfolio.personal.location,
    href: "#",
    icon: MapPin,
  },
];

const socials = [
  {
    name: "GitHub",
    href: portfolio.personal.socials.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: portfolio.personal.socials.linkedin,
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    href: portfolio.personal.socials.leetcode,
    icon: SiLeetcode,
  },
];

export const Contact = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.personal.email);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[0.3em] text-primary text-sm">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Whether it's an internship, full-time role, freelance opportunity,
            research collaboration, or an exciting project — I'd love to
            connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}

          <div className="space-y-6">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="
                    glass
                    rounded-2xl
                    p-6
                    flex
                    items-center
                    gap-5
                    border
                    border-white/10
                    hover:border-primary/40
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-xl
                      bg-primary/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{card.title}</h3>

                    <p className="text-muted-foreground">{card.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right */}

          <div
            className="
              glass
              rounded-3xl
              border
              border-white/10
              p-10
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                mb-8
              "
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

              <span className="font-medium">Available for Opportunities</span>
            </div>

            <h3 className="text-3xl font-bold">Contact Information</h3>

            <p className="mt-4 text-muted-foreground leading-8">
              Feel free to reach out through email, LinkedIn, or GitHub. I
              usually respond within 24 hours.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                onClick={() =>
                  window.open(`mailto:${portfolio.personal.email}`)
                }
              >
                <Send className="w-5 h-5" />
                Send Email
              </Button>

              <Button variant="outline" onClick={copyEmail}>
                <Copy className="w-5 h-5" />
                Copy Email
              </Button>
            </div>

            {/* Social */}

            <div className="mt-12">
              <h4 className="font-semibold mb-5">Find Me Online</h4>

              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        w-14
                        h-14
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
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};