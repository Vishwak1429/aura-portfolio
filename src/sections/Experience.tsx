import SectionReveal from "@/components/SectionReveal";

const timeline = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    org: "TechCorp Inc.",
    period: "2023 – Present",
    desc: "Leading frontend architecture for a SaaS platform serving 50K+ users.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    org: "StartupXYZ",
    period: "2021 – 2023",
    desc: "Built and maintained multiple client-facing web applications using React and Node.js.",
  },
  {
    type: "internship",
    title: "Software Engineering Intern",
    org: "Digital Agency Co.",
    period: "2020 – 2021",
    desc: "Developed responsive landing pages and contributed to a component library.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    org: "State University",
    period: "2017 – 2021",
    desc: "Graduated with honors. Focused on web technologies and software engineering.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">// Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            My <span className="text-gradient">journey</span>
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 top-1 z-10" />

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}>
                    <div className="glass-card hover-glow p-5">
                      <span className="text-xs font-mono text-primary">{item.period}</span>
                      <h3 className="font-heading font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="text-sm text-primary/80 mb-2">{item.org}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
