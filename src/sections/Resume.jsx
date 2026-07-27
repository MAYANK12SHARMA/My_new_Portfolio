import { Download, FileText, ExternalLink, CheckCircle2 } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { portfolio } from "@/data/portfolio";

const highlights = [
  "Backend Engineering",
  "Artificial Intelligence",
  "Microservices Architecture",
  "Cloud Computing",
  "Open Source Contributions",
  "REST API Development",
];

export const Resume = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div
          className="
            glass
            rounded-3xl
            border
            border-white/10
            overflow-hidden
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}

            <div className="p-10 lg:p-14">
              <span className="uppercase tracking-[0.3em] text-primary text-sm">
                Resume
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Let's Work Together
              </h2>

              <p className="mt-6 text-lg text-muted-foreground leading-8">
                My resume highlights my experience in backend engineering, AI,
                cloud technologies, distributed systems, and open-source
                contributions. Feel free to download it for a detailed overview.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-10">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <AnimatedBorderButton
                  as="a"
                  href={portfolio.personal.resume}
                  download
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </AnimatedBorderButton>

                <a
                  href={portfolio.personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    rounded-xl
                    bg-primary
                    text-black
                    font-semibold
                    hover:scale-105
                    transition-all
                  "
                >
                  <ExternalLink className="w-5 h-5" />
                  Preview Resume
                </a>
              </div>
            </div>

            {/* Right Side */}

            <div
              className="
                bg-primary/5
                flex
                items-center
                justify-center
                p-10
              "
            >
              <div
                className="
                  glass
                  rounded-2xl
                  p-8
                  border
                  border-primary/20
                  max-w-sm
                  w-full
                "
              >
                <div
                  className="
                    w-20
                    h-20
                    rounded-2xl
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    mx-auto
                  "
                >
                  <FileText className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-center mt-6">Resume</h3>

                <p className="text-center text-muted-foreground mt-4">
                  Updated with latest experience, certifications, projects,
                  internships, and technical skills.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between">
                    <span>Experience</span>
                    <span>2+</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Projects</span>
                    <span>10+</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Certifications</span>
                    <span>3+</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Open Source</span>
                    <span>✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
