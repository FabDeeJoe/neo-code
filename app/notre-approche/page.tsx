'use client';

import { Users, GitBranch, Brain, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { PageHeader } from '../components/ui/page-header';

export default function ApprochePage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Notre Approche"
        description="Une approche unique qui combine expertise humaine et intelligence artificielle pour des résultats exceptionnels."
      />

      {/* Les 4 Piliers */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* L'Humain au Centre */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">L'Humain au Centre</h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre approche place vos besoins et votre expertise métier au cœur de chaque décision. L'intelligence artificielle est un outil puissant, mais c'est votre vision qui guide le projet.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Expertise Métier Valorisée</h3>
                    <p className="text-gray-600">Votre connaissance approfondie de votre domaine guide nos choix techniques</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Collaboration Étroite</h3>
                    <p className="text-gray-600">Un dialogue constant pour des solutions parfaitement adaptées</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Contrôle Total</h3>
                    <p className="text-gray-600">Vous gardez la main sur les décisions stratégiques</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Collaboration humaine"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Itération Rapide */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Itération rapide"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <GitBranch className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Itération Rapide</h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre méthodologie unique permet de livrer un prototype fonctionnel en une semaine, puis de l'affiner continuellement selon vos retours.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Prototype en 7 Jours</h3>
                    <p className="text-gray-600">Un premier livrable concret et utilisable en une semaine</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Feedback Continu</h3>
                    <p className="text-gray-600">Vos retours sont intégrés en temps réel pour améliorer la solution</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Adaptation Agile</h3>
                    <p className="text-gray-600">Ajustement rapide aux changements de besoins</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* IA Supervisée */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">IA Supervisée</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nous utilisons l'IA comme un accélérateur de développement, tout en garantissant la qualité par une supervision humaine experte.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Développement Accéléré</h3>
                    <p className="text-gray-600">L'IA automatise les tâches répétitives pour un développement plus rapide</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Contrôle Qualité</h3>
                    <p className="text-gray-600">Chaque ligne de code est validée par nos experts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Innovation Guidée</h3>
                    <p className="text-gray-600">L'IA suggère, l'humain décide</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="IA supervisée"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Amélioration Continue */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Amélioration continue"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Amélioration Continue</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vos outils évoluent constamment grâce aux retours d'expérience et aux avancées technologiques.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Évolution Permanente</h3>
                    <p className="text-gray-600">Intégration régulière des nouvelles fonctionnalités utiles</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Veille Technologique</h3>
                    <p className="text-gray-600">Adoption des dernières innovations pertinentes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">Optimisation Continue</h3>
                    <p className="text-gray-600">Amélioration constante basée sur les retours utilisateurs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 