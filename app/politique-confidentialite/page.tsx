export default function PolitiqueConfidentialite() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Collecte des données personnelles</h2>
          <p>
            Nous collectons les informations suivantes lorsque vous utilisez notre site :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Nom et prénom (lors du formulaire de contact)</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (si fourni)</li>
            <li>Données de connexion et de navigation</li>
            <li>Cookies techniques et de performance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées pour :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Répondre à vos demandes de contact</li>
            <li>Améliorer notre site et nos services</li>
            <li>Personnaliser votre expérience utilisateur</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Protection des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre ordinateur qui nous aident à :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Mémoriser vos préférences</li>
            <li>Comprendre comment vous utilisez notre site</li>
            <li>Améliorer nos services</li>
          </ul>
          <p className="mt-4">
            Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Pour plus d'informations, consultez aboutcookies.org.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
          <p>
            Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Par email : welcome@neo-code.com</li>
            <li>Par téléphone : 06 22 50 11 72</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur le site.
          </p>
          <p className="mt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </section>
      </div>
    </div>
  );
} 