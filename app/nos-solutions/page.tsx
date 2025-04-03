'use client';

import { Feature } from '../components/ui/feature';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nos Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Des solutions sur mesure pour moderniser vos outils métiers et accélérer votre transformation digitale.
            </p>
          </div>
        </div>
      </div>

      {/* Excel/VBA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
                Excel & VBA
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Libérez-vous des Limites d'Excel
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transformez vos fichiers Excel complexes en applications web modernes, sécurisées et collaboratives. Gardez la puissance de vos outils tout en éliminant leurs limitations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Migration Intelligente</h3>
                    <p className="text-gray-600">Conversion automatisée de vos macros VBA en code moderne et maintenable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Sécurité Renforcée</h3>
                    <p className="text-gray-600">Protection avancée de vos données sensibles avec gestion fine des accès.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Collaboration en Temps Réel</h3>
                    <p className="text-gray-600">Travaillez à plusieurs simultanément sans conflits de versions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Interface Moderne</h3>
                    <p className="text-gray-600">Design intuitif et responsive, accessible sur tous les appareils.</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Moderniser mes fichiers Excel
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4"
                alt="Excel to Web App"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Apps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Application Modernization"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6">
                Applications vieillissantes
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Modernisez vos Applications Existantes
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Donnez une nouvelle vie à vos logiciels vieillissants avec des technologies cloud modernes. Améliorez l'expérience utilisateur tout en préservant vos processus métiers.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Architecture Cloud</h3>
                    <p className="text-gray-600">Migration vers une infrastructure moderne, évolutive et sécurisée.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Interface Intuitive</h3>
                    <p className="text-gray-600">Design moderne adapté aux besoins de vos utilisateurs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Performance Optimale</h3>
                    <p className="text-gray-600">Applications rapides et réactives pour une meilleure productivité.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Intégration Transparente</h3>
                    <p className="text-gray-600">Connexion fluide avec vos autres outils et systèmes.</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Moderniser mes applications
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prêt à Moderniser vos Outils ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discutons de votre projet et voyons comment nous pouvons vous aider à transformer vos outils métiers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Démarrer votre projet
              </Link>
              <Link 
                href="/comment-on-travaille"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Découvrir notre méthode
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 