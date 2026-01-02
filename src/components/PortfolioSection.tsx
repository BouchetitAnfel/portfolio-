import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  { 
    id: 1, 
    image: portfolio1, 
    title: "MozLearn", 
    category: "E-Learning",
    description: "University club e-learning platform with authentication, course repository, and progress tracking."
  },
  { 
    id: 2, 
    image: portfolio2, 
    title: "Anovia Suites", 
    category: "Full-Stack",
    description: "Hotel management system with Laravel REST API, React dashboard, and Flutter mobile app."
  },
  { 
    id: 3, 
    image: portfolio3, 
    title: "Anteo", 
    category: "Cybersecurity",
    description: "Security simulation project with Figma UI, attack simulations, and Fail2Ban integration."
  },
  { 
    id: 4, 
    image: portfolio4, 
    title: "gigIT", 
    category: "Hackathon",
    description: "Micro-business discovery and management app developed for a university hackathon."
  },
  { 
    id: 5, 
    image: portfolio5, 
    title: "3achba", 
    category: "Mobile App",
    description: "Plant identification app with scanning, care advice, and maintenance tracking features."
  },
  { 
    id: 6, 
    image: portfolio6, 
    title: "Delivro", 
    category: "Mobile App",
    description: "Restaurant delivery app for ordering and meal tracking with Flutter."
  },
];

const PortfolioItem = ({ item, index }: { item: typeof portfolioItems[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group cursor-pointer ${
        index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden rounded-2xl">
        {/* Image */}
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover min-h-[300px]"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: isHovered ? 0.9 : 0.4 }}
          transition={{ duration: 0.3 }}
        />

        {/* Neon border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ 
            boxShadow: "inset 0 0 0 2px transparent",
          }}
          animate={{
            boxShadow: isHovered 
              ? "inset 0 0 0 2px hsl(300 100% 58% / 0.8), 0 0 30px hsl(300 100% 58% / 0.4)"
              : "inset 0 0 0 2px transparent",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Category tag */}
          <motion.span
            className="text-xs tracking-[0.2em] text-primary font-orbitron mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            {item.category.toUpperCase()}
          </motion.span>

          {/* Title */}
          <motion.h3
            className="text-2xl font-orbitron font-bold"
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {item.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-sm text-muted-foreground mt-2 font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {item.description}
          </motion.p>

          {/* View button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-4"
          >
            <span className="inline-flex items-center gap-2 text-sm text-secondary font-orbitron">
              <span>VIEW PROJECT</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.div>
        </div>

        {/* Corner HUD elements */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-secondary/50 rounded-bl-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-32 relative" ref={ref}>
      {/* Background */}
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
            <span className="w-12 h-[1px] bg-primary" />
            <span className="text-xs tracking-[0.3em] text-primary font-orbitron">
              SELECTED.PROJECTS
            </span>
            <span className="w-12 h-[1px] bg-primary" />
          </div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-glow-magenta">PORTFOLIO</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-inter">
            A collection of web and mobile applications built with modern 
            technologies and creative problem-solving.
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/anfel-bouchetit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button rounded-lg inline-block"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
