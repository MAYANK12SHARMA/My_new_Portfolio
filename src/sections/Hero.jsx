import { Button } from "@/components/Button";
import { SiLeetcode } from "react-icons/si";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Brain,
  MapPin,
  Code2,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { portfolio } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Backend Engineer • AI Developer • Open Source Contributor
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glow-text">Scalable Backend</span>
                <br />
                &
                <br />
                <span className="font-serif italic font-normal text-white">
                  AI Systems.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I'm{" "}
                <span className="text-white font-semibold">Mayank Sharma</span>,
                a Computer Science undergraduate specializing in AI & Analytics.
                I build scalable backend applications, AI-powered solutions,
                distributed systems, and cloud-native software with hands-on
                experience at IIT Bombay and Open Climate Fix.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Connect
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="/resume.pdf"
                download="Mayank_Sharma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                {
                  icon: Github,
                  href: portfolio.personal.socials.github,
                },
                {
                  icon: Linkedin,
                  href: portfolio.personal.socials.linkedin,
                },
                {
                  icon: Mail,
                  href: portfolio.personal.socials.email,
                },
                {
                  icon: SiLeetcode,
                  href: portfolio.personal.socials.leetcode,
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          {/* Right Column - Virtual AI Avatar */}

          <div className="relative flex justify-center items-center animate-fade-in animation-delay-300">
            {/* Main Glow */}

            <div
              className="
      absolute
      w-[650px] h-[650px]
      rounded-full
      bg-cyan-500/10
      blur-[120px]
      animate-pulse
    "
            />

            {/* Outer Rotating Ring */}

            <div
              className="
      absolute
      w-[540px] h-[540px]
      rounded-full
      border
      border-cyan-400/20
      animate-spin
      [animation-duration:30s]
    "
            />

            {/* Middle Ring */}

            <div
              className="
      absolute
       w-[470px] h-[470px]
      rounded-full
      border
      border-dashed
      border-primary/20
      animate-spin
      [animation-direction:reverse]
      [animation-duration:20s]
    "
            />

            {/* Glass Circle */}

            <div
              className="
      relative
      w-[400px]
      h-[400px]
      rounded-full
      backdrop-blur-2xl
      bg-white/[0.03]
      border
      border-white/10
      flex
      items-center
      justify-center
      shadow-[0_0_80px_rgba(0,255,255,.15)]
    "
            >
              <img
                src={portfolio.personal.profileImage}
                alt={portfolio.personal.name}
                className="
  w-[400px]
  md:w-[430px]
  lg:w-[460px]
  xl:w-[500px]
  object-contain
  select-none
  drop-shadow-[0_0_100px_rgba(0,255,255,.35)]
  animate-float
  scale-110
"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[
                ...portfolio.skills.languages,
                ...portfolio.skills.backend,
                ...portfolio.skills.frontend,
                ...portfolio.skills.databases,
                ...portfolio.skills.ai,
                ...portfolio.skills.devops,
                ...portfolio.skills.languages,
                ...portfolio.skills.backend,
                ...portfolio.skills.frontend,
                ...portfolio.skills.databases,
                ...portfolio.skills.ai,
                ...portfolio.skills.devops,
              ].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
