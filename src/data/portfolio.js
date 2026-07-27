export const portfolio = {
  personal: {
    name: "Mayank Sharma",
    role: "Backend Developer | AI Engineer | Open Source Contributor",
    location: "Mathura, Uttar Pradesh, India",
    email: "mayank.5shar@gmail.com",
    phone: "+91-9557560564",

    tagline:
      "Building scalable backend systems, AI-powered applications, and cloud-native solutions.",

    shortBio:
      "Computer Science undergraduate specializing in AI & Analytics with industry experience at IIT Bombay and Open Climate Fix. Passionate about backend engineering, distributed systems, AI, and cloud technologies.",

    resume: "/resume.pdf",

    profileImage: "/avator.png",

    socials: {
      github: "https://github.com/Mayank12sharma",
      linkedin: "https://linkedin.com/in/mayanksharmams",
      leetcode: "https://leetcode.com/u/Mayank-05-old/",
      email: "mailto:mayank.5shar@gmail.com",
    },
  },

  education: [
    {
      university: "GLA University",
      degree: "B.Tech Computer Science & Engineering",
      specialization: "AI & Analytics",
      duration: "2023 - 2027",
      cgpa: "8.59",
    },
  ],

  experience: [
    {
      company: "IIT Bombay",

      role: "Project Intern",

      duration: "May 2025 – Jul 2025",

      logo: "/experience/iitb.png",

      type: "Internship",

      watermark: "IIT",

      verified: true,

      website: "https://www.iitb.ac.in/",

      project: "https://github.com/Mayank-05",

      certificate:
        "https://drive.google.com/file/d/1w8Tl8sfFgKYMyNWEoI7NwtxxPy85kHOD/view?usp=sharing",

      highlight:
        "Designed and implemented a high-availability microservice architecture for real-time traffic incident detection using Google Maps APIs and Azure Cloud.",

      description: [
        "Built scalable Django REST APIs.",
        "Integrated Google Maps Traffic APIs.",
        "Developed backend scheduler services.",
        "Improved system reliability using PostgreSQL.",
        "Worked with Azure Cloud deployment.",
      ],

      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "Azure",
        "Docker",
        "REST API",
        "Google Maps",
      ],
    },

    {
      company: "Open Climate Fix",

      role: "Open Source Contributor",

      duration: "Dec 2024 – Mar 2025",

      logo: "/experience/ocf.PNG",

      type: "Open Source",

      watermark: "OCF",

      verified: true,

      website: "https://openclimatefix.org/",

      project:
        "https://docs.google.com/document/d/1kcgIrO-cZVLiBvtdylzeiX4XaLAsIr6bbudY1mtSUgQ/edit?usp=sharing",

      certificate:
        "https://docs.google.com/document/d/1kcgIrO-cZVLiBvtdylzeiX4XaLAsIr6bbudY1mtSUgQ/edit?usp=sharing",

      highlight:
        "Contributed to backend infrastructure and improved Docker, testing, and CI/CD pipelines for open-source AI projects.",

      description: [
        "Developed reusable backend modules.",
        "Enhanced Docker workflows.",
        "Improved CI/CD pipelines.",
        "Created modular Pytest suites.",
      ],

      technologies: [
        "Python",
        "FastAPI",
        "Docker",
        "GitHub Actions",
        "Pytest",
        "PostgreSQL",
      ],
    },
  ],

  skills: {
    languages: ["Python", "Java", "JavaScript", "SQL"],

    backend: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "REST APIs",
      "Microservices",
    ],

    frontend: ["React", "HTML", "CSS", "Tailwind CSS", "Streamlit"],

    databases: ["PostgreSQL", "MySQL", "Redis"],

    ai: [
      "OpenAI",
      "Azure AI",
      "RAG",
      "Machine Learning",
      "Deep Learning",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
    ],

    devops: ["Docker", "GitHub Actions", "Azure", "CI/CD", "Git"],
  },

  projects: [
    {
      title: "Traffic Incident Detection System",
      featured: true,

      description:
        "Microservice architecture for real-time road monitoring using Google Maps API.",

      technologies: ["Django", "React", "Azure", "PostgreSQL"],

      github: "",
      live: "",
      image: "/projects/traffic.png",
    },

    {
      title: "Plot Wizard",

      featured: true,

      description:
        "AI-powered data visualization and ML learning platform with integrated chatbot.",

      technologies: ["Python", "Streamlit", "OpenAI", "Azure AI"],

      github: "",
      live: "",
      image: "/projects/plotwizard.png",
    },

    {
      title: "GPS Toll Based System",

      featured: true,

      description:
        "GPS toll simulation platform using Django, Arduino and Redis powered billing.",

      technologies: ["Python", "Django", "Redis", "Docker"],

      github: "",
      live: "",
      image: "/projects/gps.png",
    },
  ],

  certifications: [
    {
      title: "AI-900",
      subtitle: "Azure AI Fundamentals",
      issuer: "Microsoft",
      logo: "/certifications/azure.svg",
      watermark: "🤖",

      skills: ["Azure AI", "Machine Learning", "NLP", "Computer Vision"],

      accent: "from-sky-500/20 via-cyan-500/10 to-transparent",

      link: "https://learn.microsoft.com/en-us/users/mayanksharma-05/credentials/f8db76426da196e7", // Your AI-900 certificate URL
    },

    {
      title: "AZ-900",
      subtitle: "Azure Fundamentals",
      issuer: "Microsoft",
      logo: "/certifications/azure.svg",
      watermark: "☁️",

      skills: ["Azure", "Cloud", "Networking", "Security"],

      accent: "from-cyan-500/20 via-blue-500/10 to-transparent",

      link: "https://learn.microsoft.com/en-us/users/mayanksharma-05/credentials/49c8e6ef9b28beaa", // Your AZ-900 certificate URL
    },

    {
      title: "OCI AI",
      subtitle: "Oracle AI Foundations Associate",
      issuer: "Oracle",
      logo: "/certifications/oracle.svg",
      watermark: "🔷",

      skills: ["OCI", "AI", "Cloud", "Machine Learning"],

      accent: "from-red-500/20 via-orange-500/10 to-transparent",

      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=52c27364db01cd51e0faf05c0ae1dead8711eb4ada8f78c0e4be976809ca08ae", // Your Oracle certificate URL
    },
  ],

  achievements: [
    "Project Intern at IIT Bombay",
    "Open Source Contributor at Open Climate Fix",
    "Microsoft AI-900 Certified",
    "Microsoft AZ-900 Certified",
    "OCI AI Foundations Certified",
  ],

  leadership: [
    {
      title: "Microsoft Learn Student Ambassador",

      organization: "Microsoft",

      logo: "/leadership/microsoft.svg",

      watermark: "MS",

      duration: "2024 - Present",

      description:
        "Selected as a Microsoft Learn Student Ambassador to promote cloud computing and AI technologies. Organized workshops, mentored students, and helped developers learn Azure, Generative AI, and modern software engineering.",

      highlights: [
        "150+ Students Mentored",
        "Azure AI Workshops",
        "Technical Speaker",
        "Community Building",
      ],

      credential: "https://studentambassadors.microsoft.com/",

      verify:
        "https://www.linkedin.com/in/mayanksharmams/overlay/Position/2761790740/treasury/?profileId=ACoAAEYDpRgB-0KVhyknwYorcXDRGX55UwJgpxA",

      website: "https://studentambassadors.microsoft.com/",
    },

    {
      title: "Google Cloud Arcade Facilitator",

      organization: "Google Cloud",

      logo: "/leadership/google.png",

      watermark: "GC",

      duration: "2024 - Present",

      description:
        "Guided students through Google Cloud Arcade by mentoring participants, promoting cloud technologies, and helping learners complete hands-on labs across Google Cloud Platform.",

      highlights: [
        "600+ Community Members",
        "Cloud Mentorship",
        "Google Cloud Labs",
        "Technical Guidance",
      ],

      credential: "https://www.cloudskillsboost.google/",

      verify:
        "https://www.linkedin.com/in/mayanksharmams/overlay/1721188579581/single-media-viewer?profileId=ACoAAEYDpRgB-0KVhyknwYorcXDRGX55UwJgpxA",

      website: "https://cloud.google.com/",
    },
  ],
};
