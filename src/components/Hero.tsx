import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import profileImage from "../assets/profile.jpg";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Yogesh01010",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yogeshsharma1010/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:yogeshsharm26879@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:8208945238",
      label: "Phone",
    },
  ];

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-20 md:mt-0"
            >
              <h2 className="text-lg text-primary font-medium mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-5xl text-white md:text-7xl font-bold text-foreground mb-4">
                Yogesh
                <span className="text-gradient block">Sharma</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl text-muted-foreground font-light mb-6">
                Full Stack Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Passionate about creating beautiful, functional, and
                user-friendly applications. I love turning complex problems into
                simple, elegant solutions.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary text-black hover:shadow-glow transition-all duration-300"
              >
                <a
                  href="https://drive.google.com/file/d/1aXq_XSM3_7j7aSQ-AP--gfUoWFiCZ9bt/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-background p-2">
                  <img
                    src={profileImage}
                    alt="Yogesh Sharma"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
