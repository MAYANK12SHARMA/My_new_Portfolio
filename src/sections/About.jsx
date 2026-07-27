import { BrainCircuit, ServerCog, Cloud, GitBranch } from "lucide-react";

const highlights = [
  {
    icon: ServerCog,
    title: "Backend Engineering",
    description:
      "Designing scalable APIs, microservices, and distributed systems using FastAPI, Django REST Framework, PostgreSQL, Redis, and Docker.",
  },

  {
    icon: BrainCircuit,
    title: "AI & Generative AI",
    description:
      "Building intelligent applications with OpenAI, Azure AI, RAG pipelines, machine learning, and data-driven automation.",
  },

  {
    icon: GitBranch,
    title: "Open Source",
    description:
      "Contributed production-ready backend improvements, testing infrastructure, and CI/CD enhancements at Open Climate Fix.",
  },

  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploying reliable cloud-native applications using Docker, Azure, GitHub Actions, PostgreSQL, and modern DevOps practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering
              <span className="font-serif italic font-normal text-white">
                {" "}
                intelligent software
              </span>
              <br />
              for the real world.
            </h2>

            <div className="space-y-5 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm{" "}
                <span className="text-white font-semibold">Mayank Sharma</span>,
                a Computer Science undergraduate specializing in Artificial
                Intelligence & Analytics at GLA University. I enjoy building
                scalable backend systems, cloud-native applications, and
                AI-powered solutions that solve real-world problems.
              </p>

              <p>
                During my internship at{" "}
                <span className="text-primary">IIT Bombay</span>, I worked on a
                high-availability monolithic architecture for traffic incident
                detection using Django REST Framework, PostgreSQL, Azure, and
                Google Maps APIs. I also contributed to
                <span className="text-primary"> Open Climate Fix</span>,
                improving backend infrastructure, Docker environments, automated
                testing, and CI/CD workflows.
              </p>

              <p>
                My interests span Backend Engineering, Distributed Systems,
                Artificial Intelligence, Cloud Computing, and Open Source. I
                continuously explore emerging technologies while building
                software that is scalable, maintainable, and impactful.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground leading-8">
                "I believe great software is built by combining strong
                engineering fundamentals with continuous learning. My goal is to
                create scalable, reliable, and intelligent systems that make a
                meaningful impact."
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10">
              <div>
                <h3 className="text-4xl font-bold text-primary">IIT</h3>

                <p className="text-sm text-muted-foreground">
                  Bombay Internship
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary">OCF</h3>

                <p className="text-sm text-muted-foreground">Open Source</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary">3+</h3>

                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-primary">10+</h3>

                <p className="text-sm text-muted-foreground">
                  Technical Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
