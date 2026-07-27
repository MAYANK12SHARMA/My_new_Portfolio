import { Award, Trophy, Medal, Star, ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const icons = [Award, Trophy, Medal, Star];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[0.3em] text-primary text-sm">
            Recognition
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Achievements</h2>

          <p className="mt-6 text-lg text-muted-foreground">
            A few milestones that reflect my technical journey, continuous
            learning, and professional growth.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolio.achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={achievement.title}
                className="
                  glass
                  rounded-3xl
                  p-8
                  border
                  border-white/10
                  hover:border-primary/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {achievement.title}
                </h3>

                <p className="text-muted-foreground leading-7">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-6
                      text-primary
                      hover:underline
                    "
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
