import { portfolio } from "@/data/portfolio";
import { LeadershipCard } from "@/components/LeadershipCard";

export const Leadership = () => {
  return (
    <section id="leadership" className="relative overflow-hidden py-32">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-[180px]" />

        <div className="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[170px]" />
      </div>

      <div className="relative z-10 mx-auto w-[95%] max-w-[1700px] px-6">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-primary">
            COMMUNITY IMPACT
          </span>

          <h2 className="mt-5 text-5xl font-bold">Leadership & Community</h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Beyond building software, I actively contribute to developer
            communities by mentoring students, organizing technical events,
            conducting AI workshops, and promoting cloud technologies through
            global ambassador programs.
          </p>
        </div>

        {/* Cards */}

        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-12">
          {portfolio.leadership.map((item) => (
            <LeadershipCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
