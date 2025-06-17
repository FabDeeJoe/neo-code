'use client';

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function DynamicGradientBackground() {
  return (
    <motion.div 
      className="absolute inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#dce7fc] via-[#dce7fc]/95 to-[#dce7fc]"
        animate={{ 
          background: [
            "linear-gradient(to right, #dce7fc, rgba(220, 231, 252, 0.95), #dce7fc)",
            "linear-gradient(to right, rgba(220, 231, 252, 0.95), #dce7fc, rgba(220, 231, 252, 0.95))",
            "linear-gradient(to right, #dce7fc, rgba(220, 231, 252, 0.95), #dce7fc)",
          ]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#dce7fc]/40 to-transparent backdrop-blur-[1px]" />
    </motion.div>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-[#2d5075]/5 to-[#7f6fea]/5 backdrop-blur-sm"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: ["-100%", "200%"],
            x: [
              `${parseFloat(String(Math.random() * 100 - 50))}%`,
              `${parseFloat(String(Math.random() * 100 - 50))}%`,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
}

interface DynamicHeroSectionProps {
  badge: React.ReactNode;
  title1: string;
  title2: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export function DynamicHeroSection({
  badge = "New Feature",
  title1 = "Build",
  title2 = "Something Great",
  description = "Description goes here",
  ctaText = "Get Started",
  ctaHref = "#",
  secondaryCtaText = "Learn More",
  secondaryCtaHref = "#",
}: DynamicHeroSectionProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Mettre à jour les dimensions de la fenêtre
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Initialiser les dimensions
    updateWindowSize();

    // Gérer le mouvement de la souris
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("resize", updateWindowSize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [0, windowSize.height], [5, -5]);
  const rotateY = useTransform(mouseX, [0, windowSize.width], [-5, 5]);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#dce7fc] via-[#dce7fc]/95 to-[#dce7fc]">
      <DynamicGradientBackground />
      <FloatingParticles />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-10">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex flex-col items-center space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#dce7fc] via-[#dce7fc]/95 to-[#dce7fc]">
              <Logo width={250} height={75} className="transition-opacity duration-200" />
            </div>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#dce7fc]/80 backdrop-blur-sm border border-[#dce7fc]/20 shadow-[0_2px_8px_0_rgba(0,0,0,0.05)]">
              {badge}
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500"
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-foreground/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {description}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 py-2 transition-all duration-300 hover:bg-primary/90"
              asChild
            >
              <a href={ctaHref}>
                <span className="relative z-10 flex items-center gap-2">
                  {ctaText}
                  <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <motion.span
                  className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 to-blue-500"
                  animate={{
                    background: [
                      "linear-gradient(to right, rgb(99, 102, 241), rgb(59, 130, 246))",
                      "linear-gradient(to right, rgb(139, 92, 246), rgb(236, 72, 153))",
                      "linear-gradient(to right, rgb(59, 130, 246), rgb(16, 185, 129))",
                      "linear-gradient(to right, rgb(99, 102, 241), rgb(59, 130, 246))",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-2"
              asChild
            >
              <a href={secondaryCtaHref}>{secondaryCtaText}</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
    </div>
  );
} 