'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '../components/ui/page-header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    message: '',
    type: 'dirigeant', // dirigeant ou dsi
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null as string | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nom,
          email: formData.email,
          message: `
            Nom: ${formData.nom}
            Entreprise: ${formData.entreprise}
            Email: ${formData.email}
            Téléphone: ${formData.telephone}
            Type: ${formData.type}
            
            Message:
            ${formData.message}
          `,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          nom: '',
          entreprise: '',
          email: '',
          telephone: '',
          message: '',
          type: 'dirigeant',
        });
      } else {
        throw new Error(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Une erreur est survenue',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Discutons de votre projet"
        description="Nous sommes là pour vous accompagner dans votre transformation digitale"
      />

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {status.success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg">
              Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
            </div>
          )}

          {status.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
              {status.error}
            </div>
          )}

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    required
                    value={formData.entreprise}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Vous êtes *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="dirigeant">Dirigeant</option>
                  <option value="dsi">DSI</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Décrivez votre projet et vos besoins..."
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  * Champs obligatoires
                </p>
                <button
                  type="submit"
                  disabled={status.loading}
                  className={`bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors ${
                    status.loading
                      ? 'opacity-75 cursor-not-allowed'
                      : 'hover:bg-blue-700'
                  }`}
                >
                  {status.loading ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Vous préférez échanger directement ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33622501172"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <span className="text-xl">📞</span>
                06 22 50 11 72
              </a>
              <a
                href="mailto:welcome@neo-code.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <span className="text-xl">✉️</span>
                welcome@neo-code.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 