import "../style/pages.css"


const Time_Line_Employeur =  [
            { number: "1", tag: "Employeur", class: "emp", title: "Vous décrivez votre besoin", describe: "Via le formulaire en ligne ou directement sur WhatsApp. Vous précisez le type de service (ménage, cour, gouvernante), la fréquence souhaitée, votre zone géographique et votre budget.", card: "Durée estimée : 5 minutes" },
            { number: "2", tag: "Employeur", class: "emp", title: "Nous vous proposons un profil", describe: "Sous 24 à 48h, notre équipe identifie la prestataire disponible la plus adaptée à votre besoin dans votre zone. Vous recevez sa fiche certifiée avec photo, compétences, niveau et notes." },
            { number: "3", tag: "Sèvizyo", class: "both", title: "Signature du contrat de service", describe: "Vous signez un contrat de service avec Sèvizyo — pas avec la prestataire. Vous êtes un client abonné, nous sommes votre prestataire. Vous versez un dépôt de garantie d'un mois.", card: "Deux documents : contrat de service (vous) + contrat de travail (prestataire, signé avec nous)" },
            { number: "4", tag: "Employeur", class: "emp", title: "Elle commence le travail", describe: "Le jour J, la prestataire arrive chez vous, ponctuelle et professionnelle. Une période d'essai de 7 jours vous permet de valider que le profil correspond à votre besoin." },
            { number: "5", tag: "Sèvizyo", class: "both", title: "Suivi & support continu", describe: "Vous payez votre abonnement mensuel via MonCash. Un problème ? Une absence ? WhatsApp dédié : remplacement sous 24-48h. Vous notez la prestataire chaque mois." },
          ]

const Time_Line_Provider = [
            { number: "1", tag: "Prestataire", class: "prest", title: "Elle soumet sa candidature", describe: "Via le formulaire en ligne ou en personne dans nos bureaux. Elle fournit sa CIN, une photo, ses compétences, sa zone de disponibilité et les contacts de références." },
            { number: "2", tag: "Sèvizyo", class: "both", title: "Vérification & validation", describe: "Notre équipe vérifie son CIN, contacte ses références et évalue ses compétences. Elle reçoit un niveau (1 à 4) et des badges selon ses compétences validées. Sa fiche est créée.", card: "Délai de vérification : 2 à 5 jours ouvrés" },
            { number: "3", tag: "Prestataire", class: "prest", title: "Signature du contrat de travail", describe: "Elle signe un contrat de travail officiel avec Sèvizyo. Son employeur légal, c'est nous — pas le particulier chez qui elle travaille. Son salaire, ses droits et sa protection sont garantis contractuellement." },
            { number: "4", tag: "Prestataire", class: "prest", title: "Salaire garanti le 7 du mois", describe: "Peu importe si l'employeur paie en retard, son salaire est versé sur MonCash le 7 du mois. Elle peut signaler tout problème à notre équipe à tout moment. Elle monte de niveau au fur et à mesure." },
          ]



const Functioning = () => {
    return (
        <div className="functioning-container">
            <div className="functioning-servizyo"></div>
            
            <section className="functioning-client">
                <h2>Votre parcours en 5 étapes</h2>
                <div className="functioning-client-content">
                   { Time_Line_Employeur.map((item, index, array) => (
                        <div className="time-line-item" key={item.number}>
                            <div className="time-line-left">
                                <span className={"time-line-number" + item.class}>{item.number}</span>
                                {index < array.length - 1 && <div className="time--line"/>}
                            </div>
                            <div className="time-line-content">
                                <div className={"time-line" + item.class}>{item.tag}</div>
                                <div className={"time-line" + item.class}>{item.title}</div>
                                <div className={"time-line" + item.class}>{item.describe}</div>
                            </div>
                        </div>
                   ))}
                </div>
            </section>
            
            <section className="functioning-client">
                <h2>Le parcours d'une candidate</h2>
                <div className="functioning-client-content"></div>
            </section>
            
            <div className="functioning-contact"></div>
        </div>
    );
};

export default Functioning;