import {
  BadgeCheck,
  ExternalLink,
  Building2,
  Calendar,
  Award,
  Github,
  Globe,
  FileText,
  Sparkles,
} from "lucide-react";

export const ExperienceCard = ({ job }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-gradient-to-br
        from-white/[0.04]
        to-white/[0.02]
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-[0_0_60px_rgba(0,255,255,.18)]
      "
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60" />

      {/* Watermark */}

      <div
        className="
          absolute
          right-4
          bottom-0
          text-[120px]
          font-black
          opacity-[0.05]
          select-none
        "
      >
        {job.watermark}
      </div>

      {/* Shine */}

      <div
        className="
          absolute
          -left-40
          top-0
          h-full
          w-20
          rotate-12
          bg-white/10
          blur-xl
          opacity-0
          transition-all
          duration-1000
          group-hover:left-[120%]
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 p-8">
        {/* Header */}

        <div className="flex justify-between items-start">
          <div className="flex gap-5 items-center">
            <div
              className="
                w-20
                h-20
                rounded-2xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
              "
            >
              <img
                src={job.logo}
                alt={job.company}
                className="w-14 h-14 object-contain"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold">{job.role}</h3>

              <p className="text-primary font-semibold mt-1">{job.company}</p>

              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />

                {job.duration}
              </div>
            </div>
          </div>

          {job.verified && (
            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-green-500/10
                border
                border-green-500/20
                px-4
                py-2
              "
            >
              <BadgeCheck className="w-5 h-5 text-green-400" />

              <span className="text-sm text-green-400">Verified</span>
            </div>
          )}
        </div>

        {/* Divider */}

        <div className="my-8 border-t border-white/10" />

        {/* Highlight */}

        <div
          className="
            rounded-2xl
            border
            border-primary/20
            bg-primary/5
            p-5
          "
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />

            <span className="font-semibold text-primary">Key Achievement</span>
          </div>

          <p className="leading-8 text-muted-foreground">{job.highlight}</p>
        </div>

        {/* Responsibilities */}

        <div className="mt-8">
          <h4 className="font-semibold flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Responsibilities
          </h4>

          <div className="mt-5 space-y-3">
            {job.description.map((item) => (
              <div key={item} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3" />

                <p className="text-muted-foreground leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                bg-primary/10
                border
                border-primary/20
                text-sm
                hover:bg-primary
                hover:text-black
                transition-all
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-3">
          {job.project && (
            <a
              href={job.project}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-primary
                text-black
                font-medium
                hover:scale-105
                transition-all
              "
            >
              <Github className="w-5 h-5" />
              Project
            </a>
          )}

          {job.website && (
            <a
              href={job.website}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                border
                border-white/10
                hover:border-primary
                transition-all
              "
            >
              <Globe className="w-5 h-5" />
              Company
            </a>
          )}

          {job.certificate && (
            <a
              href={job.certificate}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                border
                border-primary/20
                bg-primary/10
                hover:bg-primary
                hover:text-black
                transition-all
              "
            >
              <FileText className="w-5 h-5" />
              Certificate
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Ribbon */}

      <div
        className="
          absolute
          top-0
          right-0
          bg-gradient-to-r
          from-green-500
          to-emerald-400
          text-black
          px-1
          py-1
          rounded-bl-2xl
          text-xs
          font-bold
          tracking-wider
        "
      >
      </div>
    </div>
  );
};
