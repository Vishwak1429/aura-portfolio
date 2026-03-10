import SectionReveal from "@/components/SectionReveal";
import { HiCode, HiLightningBolt, HiHeart } from "react-icons/hi";

const highlights = [
  { icon: <HiCode className="text-2xl" />, title: "Clean Code", desc: "Writing maintainable, scalable code is my passion." },
  { icon: <HiLightningBolt className="text-2xl" />, title: "Fast Learner", desc: "Always exploring new technologies and frameworks." },
  { icon: <HiHeart className="text-2xl" />, title: "User-First", desc: "Building products with exceptional user experiences." },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">// About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Get to know <span className="text-gradient">me</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SectionReveal delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a Full Stack Developer with 3+ years of experience building web applications
                that are both beautiful and functional. I specialize in React, Node.js, and modern
                cloud technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring open-source projects, writing
                technical blog posts, or experimenting with new design patterns. I believe great
                software is the intersection of clean code and thoughtful design.
              </p>
              <p>
                Currently open to new opportunities where I can contribute, learn, and grow as a
                developer while making a meaningful impact.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="glass-card hover-glow p-5 flex items-start gap-4 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
