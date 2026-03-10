import SectionReveal from "@/components/SectionReveal";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured online store with cart, checkout, and payment integration.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    desc: "Real-time collaborative task board with drag-and-drop functionality.",
    stack: ["React", "TypeScript", "PostgreSQL", "WebSocket"],
    live: "#",
    github: "#",
  },
  {
    title: "AI Chat Interface",
    desc: "Conversational AI interface with streaming responses and markdown support.",
    stack: ["React", "OpenAI", "Tailwind", "Vercel"],
    live: "#",
    github: "#",
  },
  {
    title: "Social Dashboard",
    desc: "Analytics dashboard for social media with interactive charts and insights.",
    stack: ["React", "D3.js", "Express", "REST API"],
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    desc: "Beautiful weather application with location-based forecasts and animations.",
    stack: ["React", "TypeScript", "Weather API", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Generator",
    desc: "A tool that helps developers generate portfolio websites from JSON config.",
    stack: ["React", "Node.js", "Tailwind", "Vite"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">// Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">work</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.08}>
              <div className="glass-card hover-glow p-6 h-full flex flex-col group">
                {/* Color accent bar */}
                <div className="h-1 w-12 rounded-full bg-primary mb-5 group-hover:w-full transition-all duration-500" />

                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <HiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
