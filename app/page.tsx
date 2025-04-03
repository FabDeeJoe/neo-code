'use client';

import { DynamicHeroSection } from './components/DynamicHeroSection';
import { Feature } from './components/ui/feature';

export default function Home() {
  return (
    <main>
      <DynamicHeroSection
        badge="Prototypes livrés en 1 semaine grâce l'IA"
        title1="Modernisez"
        title2="Vos Outils en 7 Jours"
        description="Transformez vos outils métiers obsolètes en applications modernes et intuitives en combinant expertise humaine et intelligence artificielle."
        ctaText="Démarrer votre projet"
        ctaHref="/contact"
        secondaryCtaText="Découvrir notre processus"
        secondaryCtaHref="/processus"
      />

      {/* Service Excel/VBA */}
      <Feature
        badge="Excel & VBA"
        title="Libérez-vous des limites d'Excel"
        description="Transformez vos fichiers Excel complexes en applications web modernes et sécurisées."
        features={[
          {
            title: "Migration Intelligente",
            description: "Conversion automatisée de vos macros VBA en code moderne"
          },
          {
            title: "Sécurité Renforcée",
            description: "Protection avancée de vos données sensibles"
          },
          {
            title: "Collaboration en Temps Réel",
            description: "Travaillez ensemble sans conflits de versions"
          }
        ]}
        imageSrc="https://images.unsplash.com/photo-1543286386-713bdd548da4"
        imageAlt="Excel to Web App Transformation"
      />

      {/* Service Modernisation Logiciels */}
      <Feature
        badge="Legacy Apps"
        title="Modernisez vos Applications Existantes"
        description="Donnez une nouvelle vie à vos logiciels vieillissants avec des technologies cloud modernes."
        features={[
          {
            title: "Architecture Cloud",
            description: "Migration vers une infrastructure moderne et évolutive"
          },
          {
            title: "Interface Intuitive",
            description: "Design moderne adapté à vos utilisateurs"
          },
          {
            title: "Performance Optimale",
            description: "Applications rapides et réactives"
          }
        ]}
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        imageAlt="Application Modernization"
      />
    </main>
  );
}
