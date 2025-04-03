export default function CGV() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Conditions Générales de Vente</h1>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre NeoCode et ses clients dans le cadre de la fourniture de services de modernisation d'applications et de transformation digitale.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services proposés</h2>
          <p>
            NeoCode propose les services suivants :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Modernisation d'applications métier existantes</li>
            <li>Transformation de fichiers Excel en applications web</li>
            <li>Développement d'applications sur mesure</li>
            <li>Conseil en transformation digitale</li>
            <li>Formation et accompagnement des utilisateurs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Devis et commande</h2>
          <p>
            Toute prestation fait l'objet d'un devis détaillé, gratuit et personnalisé. Le devis est valable 30 jours à compter de sa date d'émission. La commande devient définitive après acceptation écrite du devis par le client et versement de l'acompte prévu.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Prix et modalités de paiement</h2>
          <p>
            Les prix sont indiqués en euros hors taxes. Les modalités de paiement sont les suivantes :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>30% à la commande</li>
            <li>40% au démarrage du développement</li>
            <li>30% à la livraison</li>
          </ul>
          <p className="mt-4">
            Le paiement s'effectue par virement bancaire. Les factures sont payables à 30 jours date de facture.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Délais et livraison</h2>
          <p>
            Les délais de livraison sont donnés à titre indicatif. NeoCode s'engage à informer régulièrement le client de l'avancement du projet et à respecter au mieux les délais annoncés. Un prototype est livré dans la semaine suivant le début du projet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Propriété intellectuelle</h2>
          <p>
            Le client devient propriétaire des développements spécifiques réalisés pour son compte après paiement intégral des prestations. Les éléments réutilisables et le code source générique restent la propriété de NeoCode.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Garantie et maintenance</h2>
          <p>
            NeoCode garantit le bon fonctionnement des développements pendant une durée de 3 mois après la livraison. Cette garantie couvre la correction des anomalies constatées. Des contrats de maintenance peuvent être proposés pour assurer le suivi et l'évolution des applications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Responsabilité</h2>
          <p>
            NeoCode s'engage à mettre en œuvre tous les moyens nécessaires à la bonne exécution des prestations. Sa responsabilité ne pourra être engagée qu'en cas de faute prouvée et est limitée au montant des prestations concernées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Confidentialité</h2>
          <p>
            NeoCode s'engage à maintenir la confidentialité des informations et documents fournis par le client dans le cadre de l'exécution des prestations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux de Paris seront seuls compétents.
          </p>
          <p className="mt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </section>
      </div>
    </div>
  );
} 