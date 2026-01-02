import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="absolute inset-0 grid-overlay opacity-5" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-orbitron font-bold text-glow-magenta"
          >
            NEXUS
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-muted-foreground font-inter text-sm"
          >
            "In the neon glow, we find our truth"
          </motion.p>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground font-inter"
          >
            © 2026 NEXUS Studio. All rights reserved.
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>
    </footer>
  );
};

export default Footer;
