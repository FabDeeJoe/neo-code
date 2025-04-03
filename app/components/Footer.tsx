import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+33622501172" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Phone className="w-4 h-4" />
                06 22 50 11 72
              </a>
              <a href="mailto:welcome@neo-code.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Mail className="w-4 h-4" />
                welcome@neo-code.com
              </a>
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-600 hover:text-blue-600">
                Accueil
              </Link>
              <Link href="/comment-on-travaille" className="block text-gray-600 hover:text-blue-600">
                Comment on Travaille
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>

          {/* Mentions Légales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mentions Légales</h3>
            <div className="space-y-3">
              <Link href="/mentions-legales" className="block text-gray-600 hover:text-blue-600">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="block text-gray-600 hover:text-blue-600">
                Politique de Confidentialité
              </Link>
              <Link href="/cgv" className="block text-gray-600 hover:text-blue-600">
                CGV
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} NeoCode. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 