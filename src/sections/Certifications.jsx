import { BadgeCheck, CheckCircle2, ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export const Certifications = () => {
  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-[180px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-primary">
            VERIFIED PROFESSIONAL CERTIFICATIONS
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Certifications
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Industry-recognized certifications validating my expertise in
            Artificial Intelligence, Cloud Computing and Software Engineering.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {portfolio.certifications.map((cert) => (
            <div
              key={cert.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_60px_rgba(0,255,255,.18)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-40`}
              />

              <div className="absolute -right-6 -bottom-10 select-none text-[170px] opacity-[0.05] transition-transform duration-500 group-hover:scale-110">
                {cert.watermark}
              </div>

              <div className="absolute -left-40 top-0 h-full w-24 -skew-x-12 bg-white/10 opacity-0 blur-xl transition-all duration-1000 group-hover:left-[130%] group-hover:opacity-100" />

              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-primary">{cert.issuer}</p>
                    <h3 className="mt-2 text-4xl font-bold">{cert.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {cert.subtitle}
                    </p>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                </div>

                <div className="my-8 border-t border-white/10" />

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium transition-all hover:bg-primary hover:text-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <BadgeCheck className="h-6 w-6 text-green-400" />
                  <span className="font-semibold">Officially Verified</span>
                </div>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  This credential validates practical knowledge and successful
                  completion of the official certification assessment.
                </p>

                <div className="mt-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm">Credential Verified</span>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    group/link
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-primary/20
    bg-primary/10
    px-4
    py-2
    text-sm
    font-semibold
    text-primary
    transition-all
    duration-300
    hover:bg-primary
    hover:text-black
    hover:shadow-[0_0_20px_rgba(0,255,255,.3)]
  "
                  >
                    View Certificate
                    <ExternalLink
                      className="
      h-4
      w-4
      transition-transform
      duration-300
      group-hover/link:translate-x-1
      group-hover/link:-translate-y-1
    "
                    />
                  </a>
                </div>
              </div>

              <div className="absolute right-0 top-0 rounded-bl-2xl bg-green-500 px-4 py-2 text-xs font-bold text-black shadow-lg">
                VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
