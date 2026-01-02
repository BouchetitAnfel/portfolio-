import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 gradient-radial-glow opacity-50" />
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary font-orbitron">
                GET.IN.TOUCH
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-glow-magenta">LET'S BUILD</span>
              <br />
              <span className="text-foreground">SOMETHING</span>
              <br />
              <span className="text-secondary">AMAZING</span>
            </h2>

            <p className="text-muted-foreground mb-10 max-w-md font-inter">
              Looking for an internship or collaboration opportunity? I'm always 
              excited to work on innovative projects and learn new technologies. 
              Let's connect!
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-10">
              <motion.a
                href="mailto:anfel.bouchetit@univ-constantine2.dz"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-orbitron">EMAIL</span>
                  <p className="text-foreground">anfel.bouchetit@univ-constantine2.dz</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-orbitron">LOCATION</span>
                  <p className="text-foreground">Constantine, Algeria</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-orbitron">EDUCATION</span>
                  <p className="text-foreground">Master's in ICT - University of Constantine 2</p>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <span className="text-xs text-muted-foreground font-orbitron mb-4 block">
                CONNECT.WITH.ME
              </span>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/anfel-bouchetit-509a82342"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-lg glass-card neon-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:anfel.bouchetit@univ-constantine2.dz"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-lg glass-card neon-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card neon-border rounded-2xl p-8">
              <h3 className="text-xl font-orbitron font-bold mb-8 text-glow-cyan">EXPERIENCE</h3>
              
              <div className="space-y-8">
                {/* Experience 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <span className="text-xs text-primary font-orbitron">NOV - DEC 2025</span>
                  <h4 className="text-lg font-orbitron font-bold mt-1">Web Development Intern</h4>
                  <p className="text-secondary text-sm">Dpointgroup • Barcelona, Spain</p>
                  <p className="text-muted-foreground text-sm mt-2 font-inter">
                    Engineered user-friendly web interfaces and integrated responsive design 
                    principles to improve accessibility across multiple devices.
                  </p>
                </motion.div>

                {/* Experience 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="relative pl-6 border-l-2 border-secondary/30"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary/20 border-2 border-secondary" />
                  <span className="text-xs text-secondary font-orbitron">DEC 2025</span>
                  <h4 className="text-lg font-orbitron font-bold mt-1">IT Intern</h4>
                  <p className="text-primary text-sm">Algérie Télécom • Batna, Algeria</p>
                  <p className="text-muted-foreground text-sm mt-2 font-inter">
                    Learned troubleshooting of user hardware and software issues, 
                    contributing to efficient resolution of technical challenges.
                  </p>
                </motion.div>

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <span className="text-xs text-primary font-orbitron">2025 - PRESENT</span>
                  <h4 className="text-lg font-orbitron font-bold mt-1">Master's in ICT</h4>
                  <p className="text-secondary text-sm">University of Constantine 2</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="relative pl-6 border-l-2 border-secondary/30"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary/20 border-2 border-secondary" />
                  <span className="text-xs text-secondary font-orbitron">2022 - 2025</span>
                  <h4 className="text-lg font-orbitron font-bold mt-1">Bachelor's in Computer Science</h4>
                  <p className="text-primary text-sm">University of Constantine 2</p>
                  <p className="text-muted-foreground text-sm mt-1 font-inter">
                    Minor in Information Technology
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
