import { Code2, Database, BrainCircuit, Server, Cloud, Monitor } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    color: "text-blue-400",
    skills: portfolio.skills.languages,
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-400",
    skills: portfolio.skills.backend,
  },
  {
    title: "Frontend",
    icon: Monitor,
    color: "text-pink-400",
    skills: portfolio.skills.frontend,
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-orange-400",
    skills: portfolio.skills.databases,
  },
  {
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    color: "text-violet-400",
    skills: portfolio.skills.ai,
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-400",
    skills: portfolio.skills.devops,
  },
];

export const Skills = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-primary uppercase tracking-[0.3em] text-sm">
            Technical Expertise
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-8">
            I specialize in backend engineering, scalable API development,
            AI-powered applications, cloud technologies, and modern web
            development.
          </p>

        </div>

        {/* Skills Grid */}

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillGroups.map((group) => {

            const Icon = group.icon;

            return (

              <div
                key={group.title}
                className="glass rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
              >

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">

                    <Icon className={`w-7 h-7 ${group.color}`} />

                  </div>

                  <h3 className="text-2xl font-semibold">
                    {group.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {group.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-primary/20
                        bg-primary/5
                        text-sm
                        hover:bg-primary
                        hover:text-black
                        transition-all
                        duration-300
                        cursor-default
                      "
                    >
                      {skill} 
                    </span>

                  ))}

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
};