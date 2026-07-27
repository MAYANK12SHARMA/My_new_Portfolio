import { Award, BadgeCheck, ExternalLink, Globe } from "lucide-react";

export const LeadershipCard = ({ item }) => {
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
        from-[#141d26]
        via-[#101820]
        to-[#0d141b]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-[0_0_60px_rgba(0,255,255,.18)]
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

      {/* Watermark */}

      <div className="absolute -right-8 -bottom-8 opacity-[0.04] pointer-events-none">
        <img src={item.logo} alt="" className="w-72 h-72 object-contain" />
      </div>

      {/* Ribbon */}

      <div className="absolute top-0 right-0 rounded-bl-2xl bg-gradient-to-r from-green-500 to-emerald-400 px-5 py-2 text-xs font-bold tracking-wider text-black">
        VERIFIED
      </div>

      <div className="relative z-10 px-12 py-10">
        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left */}

          <div className="flex flex-1 items-start gap-8">
            {/* Logo */}

            <div
              className="
    w-52
    h-40
    rounded-3xl
    border
    border-primary/20
    bg-gradient-to-br
    from-primary/10
    to-primary/5
    flex
    items-center
    justify-center
    shrink-0
  "
            >
              <img
                src={item.logo}
                alt={item.organization}
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Text */}

            <div className="min-w-0 flex-1">
              <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                {item.organization}
              </div>

              <h3 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight break-words">
                {item.title}
              </h3>

              <p className="mt-3 text-muted-foreground">{item.duration}</p>
            </div>
          </div>

          {/* Program Badge */}

          <div className="flex justify-end lg:ml-8">
            <div
              className="
                rounded-full
                bg-primary
                text-black
                px-6
                py-3
                font-bold
                tracking-widest
                h-fit
              "
            >
              COMMUNITY LEADER
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 border-t border-white/10" />

        {/* Description */}

        <div className="space-y-5">
          <h4 className="text-xl font-semibold">Role Summary</h4>

          <p className="leading-8 text-muted-foreground">{item.description}</p>
        </div>

        {/* KPI Cards */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          {item.highlights.map((highlight) => (
            <div
              key={highlight}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                transition-all
                duration-300
                hover:border-primary/40
                hover:bg-primary/5
              "
            >
              <Award className="w-8 h-8 text-primary mb-4" />

              <p className="font-semibold leading-7">{highlight}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-10 flex-wrap">
          {item.credential && (
            <a
              href={item.credential}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-primary
                px-6
                py-3
                font-semibold
                text-black
                transition-all
                hover:scale-105
              "
            >
              Program Details
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {item.verify && (
            <a
              href={item.verify}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-primary/20
                bg-primary/10
                px-6
                py-3
                font-semibold
                transition-all
                hover:bg-primary
                hover:text-black
              "
            >
              Public Profile
              <BadgeCheck className="w-4 h-4" />
            </a>
          )}

          {item.website && (
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                px-6
                py-3
                transition-all
                hover:border-primary
              "
            >
              Organization
              <Globe className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
