import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Twitter, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

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
              <span className="text-glow-magenta">LET'S CREATE</span>
              <br />
              <span className="text-foreground">SOMETHING</span>
              <br />
              <span className="text-secondary">ELECTRIC</span>
            </h2>

            <p className="text-muted-foreground mb-10 max-w-md font-inter">
              Ready to bring your vision to life in neon? Let's collaborate on 
              something extraordinary. Drop me a line and let's make magic happen.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-10">
              <motion.a
                href="mailto:hello@nexus.studio"
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
                  <p className="text-foreground">hello@nexus.studio</p>
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
                  <p className="text-foreground">Tokyo, Sector 7, Japan</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-orbitron">PHONE</span>
                  <p className="text-foreground">+81 3 1234 5678</p>
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
                FOLLOW.ME
              </span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-12 h-12 rounded-lg glass-card neon-border flex items-center justify-center hover:bg-primary/10 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="glass-card neon-border rounded-2xl p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-orbitron text-muted-foreground mb-2 block">
                      NAME
                    </label>
                    <input
                      type="text"
                      className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-orbitron text-muted-foreground mb-2 block">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-orbitron text-muted-foreground mb-2 block">
                    PROJECT TYPE
                  </label>
                  <select className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-inter text-foreground focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select a service</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="editorial">Editorial Shoot</option>
                    <option value="brand">Brand Campaign</option>
                    <option value="video">Video Production</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-orbitron text-muted-foreground mb-2 block">
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full cyber-button rounded-lg text-center"
                >
                  SEND MESSAGE
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
