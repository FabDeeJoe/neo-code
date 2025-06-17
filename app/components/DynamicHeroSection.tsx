'use client';

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import Link from 'next/link';

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
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-20"
        animate={{ 
          background: [
            "linear-gradient(to right, rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.2))",
            "linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
            "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))",
            "linear-gradient(to right, rgba(99, 102, 241, 0.2), rgba(59, 130, 246, 0.2))",
          ]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
    </motion.div>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-foreground/5 backdrop-blur-sm"
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
  badge,
  title1,
  title2,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
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
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <div className="mb-8">
            {badge}
          </div>
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-neo-dark sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title1} <br/>{title2}
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href={ctaHref}
              className="rounded-md bg-neo-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neo-purple transition-colors duration-200"
            >
              {ctaText}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="text-sm font-semibold leading-6 text-neo-dark hover:text-neo-purple transition-colors duration-200"
            >
              {secondaryCtaText} <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 