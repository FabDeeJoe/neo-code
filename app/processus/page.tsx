"use client";

import Image from "next/image";
import { Timeline } from "../components/ui/timeline";
import { CheckCircle, Search, RefreshCw, TrendingUp, Brain } from "lucide-react";

export default function ProcessPage() {
  const data = [
    {
      title: "Étape 1",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Audit & Analyse
          </h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Nous commençons par une analyse approfondie de vos outils et processus actuels pour identifier les opportunités d'amélioration.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Analyse des outils existants
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Identification des points de friction
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Évaluation des besoins utilisateurs
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Analyse et audit"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Réunion d'équipe"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Étape 2",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Conception & Architecture
          </h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Nous concevons une solution moderne et évolutive qui répond parfaitement à vos besoins métiers.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Architecture cloud-native
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Design d'interface intuitif
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Planification de la sécurité
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
              alt="Architecture logicielle"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12"
              alt="Design d'interface"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Étape 3",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Développement & Tests
          </h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Nous développons votre solution avec les meilleures pratiques du marché et un focus sur la qualité.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Développement agile
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Tests automatisés
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Revue de code systématique
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Développement"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd"
              alt="Tests"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Étape 4",
      content: (
        <div>
          <h4 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Évolution Continue
          </h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Le lancement n'est que le début. Nous mettons en place un cycle d'amélioration continue basé sur l'expérience terrain.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Suivi détaillé et analyse des usages
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Optimisation continue des fonctionnalités
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Intégration des nouvelles technologies
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Accompagnement stratégique continu
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Réunion d'équipe"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Analyse de données"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
} 