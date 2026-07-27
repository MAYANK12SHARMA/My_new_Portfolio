import { Building2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ExperienceCard } from "@/components/ExperienceCard";

export const Experience = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[180px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center mb-28">
          <span className="uppercase tracking-[0.35em] text-primary text-sm">
            PROFESSIONAL JOURNEY
          </span>

          <h2 className="mt-5 text-5xl font-bold">Experience</h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every professional experience has contributed to my growth as a
            Backend Engineer, AI Developer and Open Source Contributor.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Center Line */}

          <div
            className="
              hidden
              lg:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-[3px]
              -translate-x-1/2
              rounded-full
              bg-gradient-to-b
              from-transparent
              via-primary
              to-transparent
            "
          />

          {portfolio.experience.map((job, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={job.company}
                className={`
  relative
  grid
  lg:grid-cols-2
  gap-28
  items-center

  ${index !== 0 ? "-mt-10" : ""}
`}
              >
                {/* Left Side */}

                <div className={isLeft ? "lg:pr-20" : "lg:pl-20 lg:order-2"}>
                  <ExperienceCard job={job} />
                </div>

                {/* Empty Side */}

                <div
                  className={
                    isLeft ? "hidden lg:block" : "hidden lg:block lg:order-1"
                  }
                />

                {/* Timeline Node */}

                <div
                  className="
                    hidden
                    lg:flex
                    absolute
                    left-1/2
                    top-24
                    -translate-x-1/2
                    z-30
                  "
                >
                  <div
                    className="
                      relative
                      w-24
                      h-24
                      rounded-full
                      bg-[#081018]
                      border-4
                      border-primary
                      flex
                      items-center
                      justify-center
                      shadow-[0_0_50px_rgba(0,255,255,.25)]
                    "
                  >
                    {/* Pulse */}

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        animate-ping
                        
                      "
                    />

                    {/* Company Logo */}

                    {job.logo ? (
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="
                          w-12
                          h-12
                          object-contain
                          relative
                          z-10
                        "
                      />
                    ) : (
                      <Building2
                        className="
                          w-10
                          h-10
                          text-primary
                          relative
                          z-10
                        "
                      />
                    )}
                  </div>
                </div>

                {/* Year */}

                <div
                  className={`
                    hidden
                    lg:block
                    absolute
                    top-44
                    ${isLeft ? "left-[52%]" : "right-[52%]"}
                  `}
                >
                  <div
                    className="
                      rounded-full
                      bg-primary
                      text-black
                      px-4
                      py-2
                      font-semibold
                      text-sm
                    "
                  >
                    {job.duration}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
