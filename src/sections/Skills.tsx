import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiGit, SiFigma, SiDocker, SiVercel
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact />, level: 92 },
      { name: "TypeScript", icon: <SiTypescript />, level: 88 },
      { name: "JavaScript", icon: <SiJavascript />, level: 95 },
      { name: "HTML5", icon: <SiHtml5 />, level: 95 },
      { name: "CSS3", icon: <SiCss />, level: 90 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
      { name: "Express", icon: <SiExpress />, level: 82 },
      { name: "MongoDB", icon: <SiMongodb />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 78 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit />, level: 90 },
      { name: "Figma", icon: <SiFigma />, level: 75 },
      { name: "Docker", icon: <SiDocker />, level: 70 },
      { name: "Vercel", icon: <SiVercel />, level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">// Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            My <span className="text-gradient">tech stack</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <SectionReveal key={cat.title} delay={catIdx * 0.1}>
              <div className="glass-card hover-glow p-6 h-full">
                <h3 className="font-heading font-semibold text-lg text-primary mb-6">{cat.title}</h3>
                <div className="space-y-5">
                  {cat.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5 text-sm text-foreground">
                          <span className="text-primary text-base">{skill.icon}</span>
                          {skill.name}
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-primary/80"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
