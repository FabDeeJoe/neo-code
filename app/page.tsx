'use client';

import { DynamicHeroSection } from './components/DynamicHeroSection';
import { Feature } from './components/ui/feature';
import { Users, GitBranch, Brain, TrendingUp, Search, Code, Rocket, RefreshCcw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AIGradientText } from './components/ui/ai-gradient-text';
import Image from 'next/image';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="overflow-hidden">
      {/* Logo et Navigation */}
      <div className="absolute top-4 left-4 z-50">
        <Image src="/images/logo.svg" alt="Neo Code Logo" width={150} height={50} />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-light to-white">
        <motion.div {...fadeInUp}>
          <DynamicHeroSection
            badge={<span>Prototypes livrés en 1 semaine grâce à l'<AIGradientText>IA</AIGradientText></span>}
            title1="Modernisez"
            title2="Vos Outils en 7 Jours"
            description="Transformez vos outils métiers obsolètes en applications modernes et intuitives en combinant expertise humaine et intelligence artificielle."
            ctaText="Démarrer votre projet"
            ctaHref="/contact"
            secondaryCtaText="Découvrir notre méthode"
            secondaryCtaHref="/notre-methode"
          />
        </motion.div>
      </section>

      {/* Service Excel/VBA */}
      <section className="relative bg-white bg-[radial-gradient(#dce7fc_1px,transparent_1px)] [background-size:16px_16px]">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-20"
        >
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
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            imageAlt="Transformation d'un fichier Excel en application web moderne"
          />
        </motion.div>
      </section>

      {/* Service Modernisation Logiciels - Fond dégradé violet très léger */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-20"
        >
          <Feature
            badge="Applications Vieillissantes"
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
        </motion.div>
      </section>

      {/* Notre Approche Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto py-20 lg:py-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-dark">Notre Approche Unique</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthodologie qui combine expertise humaine et <AIGradientText>intelligence artificielle</AIGradientText> pour des résultats exceptionnels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* L'Humain au Centre */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark">L'Humain au Centre</h3>
              </div>
              <p className="text-gray-600">
                Vos besoins et votre expertise métier guident chaque décision. L'<AIGradientText>IA</AIGradientText> est un outil, vous gardez le contrôle.
              </p>
            </motion.div>

            {/* Itération Rapide */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Itération Rapide</h3>
              </div>
              <p className="text-gray-600">
                Prototype en 1 semaine grâce à l'<AIGradientText>IA</AIGradientText>, puis affinage continu avec votre retour d'expérience.
              </p>
            </motion.div>

            {/* IA Supervisée */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2"><AIGradientText>IA</AIGradientText> Supervisée</h3>
              </div>
              <p className="text-gray-600">
                L'<AIGradientText>IA</AIGradientText> accélère le développement, l'expertise humaine garantit la qualité et la pertinence.
              </p>
            </motion.div>

            {/* Amélioration Continue */}
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Amélioration Continue</h3>
              </div>
              <p className="text-gray-600">
                Vos outils évoluent en permanence grâce aux retours utilisateurs et aux avancées de l'<AIGradientText>IA</AIGradientText>.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Comment on Travaille Section - Fond dégradé bleu-vert très léger */}
      <section className="relative bg-gradient-to-tl from-cyan-50 via-white to-emerald-50">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto px-4 py-20 lg:py-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Notre méthode
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une approche en 5 étapes pour moderniser vos outils métiers.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {/* Étape 1 */}
              <motion.div 
                className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Audit & Analyse</h3>
                  <p className="text-gray-600">
                    Analyse approfondie de vos outils actuels pour identifier les opportunités d'amélioration.
                  </p>
                </div>
              </motion.div>

              {/* Étape 2 */}
              <motion.div 
                className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Conception & Architecture</h3>
                  <p className="text-gray-600">
                    Design d'une solution moderne et évolutive adaptée à vos besoins.
                  </p>
                </div>
              </motion.div>

              {/* Étape 3 */}
              <motion.div 
                className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Développement & Tests</h3>
                  <p className="text-gray-600">
                    Développement rapide et tests approfondis pour garantir qualité et performance.
                  </p>
                </div>
              </motion.div>

              {/* Étape 4 */}
              <motion.div 
                className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Livraison & Formation</h3>
                  <p className="text-gray-600">
                    Déploiement de votre solution et formation approfondie de vos équipes.
                  </p>
                </div>
              </motion.div>

              {/* Étape 5 */}
              <motion.div 
                className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <RefreshCcw className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Évolution Continue</h3>
                  <p className="text-gray-600">
                    Amélioration continue basée sur vos retours d'expérience.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="text-center mt-12"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/notre-methode"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                En savoir plus sur notre méthode
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section - Fond dégradé violet */}
      <section className="relative bg-gradient-to-r from-[#7F6EFA] to-[#6A5CD6]">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto px-4 py-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Moderniser vos Outils ?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Discutons de votre projet et découvrez comment notre approche unique peut transformer votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-[#7F6EFA] transition-colors duration-200"
                >
                  Contactez-nous
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Link 
                  href="/notre-approche"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-transparent bg-white text-lg font-medium rounded-lg text-[#7F6EFA] hover:bg-opacity-90 transition-colors duration-200"
                >
                  En savoir plus
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
