'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui/logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Approche', href: '/notre-approche' },
    { name: 'Méthode', href: '/notre-methode' },
    { name: 'Solutions', href: '/nos-solutions' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      hasScrolled ? 'bg-gradient-to-r from-[#dce7fc] via-[#dce7fc]/95 to-[#dce7fc] backdrop-blur-md shadow-sm' : 'bg-gradient-to-r from-[#dce7fc] via-[#dce7fc]/90 to-[#dce7fc]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center py-4">
              <Link href="/" className="flex items-center">
                <Logo width={120} height={36} className="transition-opacity duration-200 hover:opacity-90" />
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8 sm:items-center">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20 ${
                    pathname === item.href
                      ? 'border-[#7F6EFA] text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-[#7F6EFA] hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#7F6EFA] hover:bg-[#6A5CD6] transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-20 inset-x-0 bg-[#dce7fc] shadow-lg border-t">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === item.href
                    ? 'bg-[#7F6EFA]/10 border-[#7F6EFA] text-[#7F6EFA]'
                    : 'border-transparent text-gray-500 hover:bg-[#dce7fc]/50 hover:border-[#7F6EFA] hover:text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#7F6EFA] hover:bg-[#6A5CD6]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 