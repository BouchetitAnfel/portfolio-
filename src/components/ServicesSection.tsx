import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Smartphone, Palette, Server } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive and modern web applications with clean code.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "React"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications with seamless user experiences.",
    technologies: ["Flutter", "Dart", "Mobile UI/UX", "API Integration"],
    featured: true,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
    technologies: ["Figma", "Photoshop", "Illustrator", "Canva", "Branding"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Robust server-side solutions and RESTful API development.",
    technologies: ["Laravel", "MySQL", "REST API", "OAuth2", "Python"],
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${skill.featured ? "md:-mt-6" : ""}`}
    >
      {/* Featured badge */}
      {skill.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 text-xs font-orbitron tracking-wider bg-primary text-primary-foreground rounded-full">
            FAVORITE
          </span>
        </div>
      )}

      <motion.div
        className={`relative h-full glass-card rounded-2xl p-8 ${
          skill.featured ? "neon-border" : "neon-border-cyan"
        }`}
        animate={{
          y: isHovered ? -10 : 0,
          boxShadow: isHovered
            ? skill.featured
              ? "0 20px 60px hsl(300 100% 58% / 0.3)"
              : "0 20px 60px hsl(186 100% 50% / 0.3)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
            skill.featured
              ? "bg-primary/20 text-primary"
              : "bg-secondary/20 text-secondary"
          }`}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-orbitron font-bold mb-2">{skill.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 font-inter">
          {skill.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs font-orbitron rounded-full ${
                skill.featured
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "bg-secondary/10 text-secondary border border-secondary/30"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    "Git", "Postman", "WAMP/XAMPP", "VS Code", "Android Studio"
  ];

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-secondary" />
            <span className="text-xs tracking-[0.3em] text-secondary font-orbitron">
              SKILLS.TOOLKIT
            </span>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-glow-cyan">EXPERTISE</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-inter">
            Technical skills and tools I use to bring ideas to life with 
            precision and creativity.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground font-orbitron mb-6 block">
            TOOLS.I.USE
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-6 py-3 glass-card neon-border-cyan rounded-lg text-sm font-orbitron"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
