import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutPortrait from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "2+", label: "Years XP" },
    { value: "2", label: "Internships" },
    { value: "5+", label: "Tech Stacks" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 gradient-border-animated rounded-2xl" />
              
              <div className="relative glass-card rounded-2xl overflow-hidden p-2">
                <img
                  src={aboutPortrait}
                  alt="About Anfel Bouchetit"
                  className="w-full h-[500px] object-cover rounded-xl"
                />
                
                {/* Floating stats overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 glass-card neon-border rounded-xl p-6"
                >
                  <div className="text-4xl font-orbitron font-bold text-primary">MSc</div>
                  <div className="text-sm text-muted-foreground">In Progress</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-secondary" />
              <span className="text-xs tracking-[0.3em] text-secondary font-orbitron">
                ABOUT.ME
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-glow-cyan">BUILDING</span>
              <br />
              <span className="text-foreground">DIGITAL EXPERIENCES</span>
            </h2>

            <div className="space-y-4 text-muted-foreground font-inter leading-relaxed mb-10">
              <p>
                Computer Science student at the University of Constantine 2 with experience 
                in web and mobile development, including REST API design, full-stack 
                integration, and UI/UX design.
              </p>
              <p>
                Passionate about modern technologies, I dedicate my energy to creating 
                elegant and efficient solutions. While technically rigorous, I also enjoy 
                being creative in finding innovative approaches to complex problems.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card neon-border-cyan rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-orbitron font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <a href="#contact" className="cyber-button rounded-lg inline-flex items-center gap-2">
                <span>Let's Collaborate</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
