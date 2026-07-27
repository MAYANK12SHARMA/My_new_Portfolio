import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export const Education = () => {
  const education = portfolio.education[0];

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
    "Object-Oriented Programming",
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[0.3em] text-primary text-sm">
            Academic Journey
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Education</h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Strong academic foundation in Computer Science with a specialization
            in Artificial Intelligence & Analytics.
          </p>
        </div>

        <div
          className="
            glass
            rounded-3xl
            border
            border-white/10
            p-10
          "
        >
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left */}

            <div>
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-primary/10
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-3xl font-bold">{education.university}</h3>

              <p className="text-primary mt-2">{education.degree}</p>

              <p className="text-muted-foreground">
                {education.specialization}
              </p>

              <div className="flex items-center gap-2 mt-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{education.duration}</span>
              </div>
            </div>

            {/* Right */}

            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="
                    rounded-2xl
                    border
                    border-primary/20
                    bg-primary/5
                    p-6
                  "
                >
                  <Award className="w-7 h-7 text-primary mb-4" />

                  <h4 className="font-semibold">Current CGPA</h4>

                  <p className="text-4xl font-bold mt-3 text-primary">
                    {education.cgpa}
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-primary/20
                    bg-primary/5
                    p-6
                  "
                >
                  <BookOpen className="w-7 h-7 text-primary mb-4" />

                  <h4 className="font-semibold">Specialization</h4>

                  <p className="mt-3 text-muted-foreground">
                    Artificial Intelligence & Analytics
                  </p>
                </div>
              </div>

              {/* Coursework */}

              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-6">
                  Relevant Coursework
                </h3>

                <div className="flex flex-wrap gap-3">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-primary/5
                        border
                        border-primary/20
                        hover:bg-primary
                        hover:text-black
                        transition-all
                      "
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
