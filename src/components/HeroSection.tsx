import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [0, 1], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, 1], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const titleText = "NEXUS";
  const subtitleText = "PHOTOGRAPHY";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with pulsing neon glow */}
      <div className="absolute inset-0 bg-background">
        <motion.div
          className="absolute inset-0 gradient-radial-glow"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-30" />
        
        {/* Animated scan line */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-30"
          animate={{
            top: ["-10%", "110%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Decorative neon lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.line
          x1="10%"
          y1="0"
          x2="10%"
          y2="100%"
          stroke="hsl(300 100% 58% / 0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="90%"
          y1="0"
          x2="90%"
          y2="100%"
          stroke="hsl(186 100% 50% / 0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
        />
      </svg>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* HUD style label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[1px] bg-primary" />
              <span className="text-xs tracking-[0.3em] text-primary font-orbitron">
                CYBER.VISUAL.ARTIST
              </span>
            </motion.div>

            {/* Main title with letter animation */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black leading-none mb-4">
              {titleText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-glow-magenta"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>

            <h2 className="text-2xl md:text-4xl font-orbitron font-light tracking-[0.2em] mb-8">
              {subtitleText.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.05,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0 mb-10 font-inter"
            >
              Capturing the electric essence of tomorrow through the lens of today. 
              Neon dreams, cyberpunk realities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#portfolio" className="cyber-button rounded-lg">
                View Portfolio
              </a>
              <a href="#contact" className="cyber-button rounded-lg neon-border-cyan">
                Book a Session
              </a>
            </motion.div>
          </motion.div>

          {/* Hero portrait with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              style={{ x: parallaxX, y: parallaxY }}
              className="relative"
            >
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 rounded-2xl blur-xl" />
              
              {/* HUD frame corners */}
              <div className="relative hud-corner rounded-2xl overflow-hidden neon-border">
                <img
                  src={heroPortrait}
                  alt="Cyberpunk photographer portrait"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* HUD overlay elements */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 1 }}
                    className="h-[1px] bg-gradient-to-r from-primary via-secondary to-transparent mb-4"
                  />
                  <div className="flex justify-between text-xs font-orbitron text-muted-foreground">
                    <span>LOC: TOKYO.SECTOR.7</span>
                    <span>SYS: ACTIVE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.3em] text-muted-foreground font-orbitron">
            SCROLL
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
