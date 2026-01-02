import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Users, Sparkles, Film } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Portrait Session",
    description: "Intimate cyberpunk portrait sessions with custom neon lighting setups.",
    price: "$500",
    features: ["2-hour session", "20 edited images", "Custom lighting", "Online gallery"],
  },
  {
    icon: Users,
    title: "Editorial Shoot",
    description: "Full editorial production for fashion brands and publications.",
    price: "$2,500",
    features: ["Full day shoot", "50+ edited images", "Creative direction", "Styling consultation"],
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Brand Campaign",
    description: "Complete visual identity and campaign photography for brands.",
    price: "$5,000",
    features: ["Multi-day production", "100+ images", "Video content", "Usage rights"],
  },
  {
    icon: Film,
    title: "Video Production",
    description: "Cinematic neon-lit video content for music and fashion.",
    price: "Custom",
    features: ["4K production", "Color grading", "Motion graphics", "Full post-production"],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${service.featured ? "md:-mt-6" : ""}`}
    >
      {/* Featured badge */}
      {service.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 text-xs font-orbitron tracking-wider bg-primary text-primary-foreground rounded-full">
            POPULAR
          </span>
        </div>
      )}

      <motion.div
        className={`relative h-full glass-card rounded-2xl p-8 ${
          service.featured ? "neon-border" : "neon-border-cyan"
        }`}
        animate={{
          y: isHovered ? -10 : 0,
          boxShadow: isHovered
            ? service.featured
              ? "0 20px 60px hsl(300 100% 58% / 0.3)"
              : "0 20px 60px hsl(186 100% 50% / 0.3)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
            service.featured
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
        <h3 className="text-xl font-orbitron font-bold mb-2">{service.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 font-inter">
          {service.description}
        </p>

        {/* Price */}
        <div className="mb-6">
          <span className={`text-3xl font-orbitron font-bold ${
            service.featured ? "text-primary text-glow-magenta" : "text-secondary"
          }`}>
            {service.price}
          </span>
          {service.price !== "Custom" && (
            <span className="text-muted-foreground text-sm"> / session</span>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm">
              <span className={`w-1.5 h-1.5 rounded-full ${
                service.featured ? "bg-primary" : "bg-secondary"
              }`} />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full py-3 rounded-lg font-orbitron text-sm tracking-wider transition-all duration-300 ${
            service.featured
              ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(300_100%_58%_/_0.5)]"
              : "border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          }`}
        >
          BOOK NOW
        </button>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              SERVICES.PRICING
            </span>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>

          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-glow-cyan">PACKAGES</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-inter">
            Premium photography packages designed for those who dare to stand out 
            in the neon glow.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
