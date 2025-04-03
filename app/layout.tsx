import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NeoCode - Modernisation des Outils Métiers',
  description: 'Transformez vos outils métiers obsolètes en applications modernes et intuitives en combinant expertise humaine et intelligence artificielle.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
