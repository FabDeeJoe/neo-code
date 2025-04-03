export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
          <p>
            Le site neocode.dev est édité par :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>NeoCode</li>
            <li>Siège social : Paris, France</li>
            <li>Téléphone : 06 22 50 11 72</li>
            <li>Email : welcome@neo-code.com</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
          <p>
            Ce site est hébergé par :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Vercel Inc.</li>
            <li>340 S Lemon Ave #4133</li>
            <li>Walnut, CA 91789</li>
            <li>États-Unis</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Protection des données personnelles</h2>
          <p>
            Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, vous pouvez nous contacter par email à welcome@neo-code.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre politique de confidentialité.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens hypertextes vers d'autres sites. NeoCode n'est pas responsable du contenu de ces sites externes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
} 