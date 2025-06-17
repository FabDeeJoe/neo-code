import Link from 'next/link';
import { Logo } from './logo';

export function Nav() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden sm:flex sm:items-center">
            <Link
              href="/notre-methode"
              className="px-3 py-2 text-neo-dark hover:text-neo-purple transition-colors"
            >
              Notre Méthode
            </Link>
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 rounded-md bg-neo-blue text-white hover:bg-neo-purple transition-colors"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 