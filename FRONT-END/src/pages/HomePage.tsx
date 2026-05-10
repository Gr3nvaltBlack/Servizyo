import "../style/pages.css"
import { ButtonStyled } from "../style/styledelement";

const HomePage = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-half-left">
                    <div className="hero-title">
                        <h1>Le service de mise en relation vérifié et garanti en Haïti</h1>
                        <p>
                            Trouvez une femme de ménage, un homme de cour ou une gouvernante certifiée — 
                            identité vérifiée, contrat officiel, salaire garanti.
                            Vous n'avez à vous occuper de rien.
                        </p>
                    </div>

                    <div className="hero-button">
                        <ButtonStyled>Trouver un prestataire</ButtonStyled>
                        <ButtonStyled>Voir comment ça marche</ButtonStyled>
                    </div>
                </div>

                        <hr id="hero-line"/>

                <div className="hero-moyenne">
                    <div className="all-moyenne">
                        <span className="span-moyenne">200+</span>
                        <span>Prestataires certifiées</span>
                    </div>
                    <div className="all-moyenne">
                        <span className="span-moyenne">500+</span>
                        <span>Familles satifaites</span>
                    </div>
                    <div className="all-moyenne">
                        <span className="span-moyenne">7</span>
                        <span>Zone couvertes</span>
                    </div>
                    <div className="all-moyenne">
                        <span className="span-moyenne">4.8★</span>
                        <span>Note moyenne</span>
                    </div>
                </div>

            </div>

            
            <section id="ours-services">
                <div id="information">
                    <div className="information-service">
                        <span className="information-service-icon">✅</span>
                        <span className="information-service-text">Identités vérifiées</span>
                    </div>
                    <div className="information-service">
                        <span className="information-service-icon">📄</span>
                        <span className="information-service-text">Contrats officiels</span>
                    </div>
                    <div className="information-service">
                        <span className="information-service-icon">💳</span>
                        <span className="information-service-text">Paiement En ligne</span>
                    </div>
                    <div className="information-service">
                        <span className="information-service-icon">🔄️</span>
                        <span className="information-service-text">Remplacement 48h</span>
                    </div>
                    <div className="information-service">
                        <span className="information-service-icon">⚖️</span>
                        <span className="information-service-text">Conforme Code du Travail</span>
                    </div>
                    <div className="information-service">
                        <span className="information-service-icon">📞</span>
                        <span className="information-service-text">Support WhatsApp 7j/7</span>
                    </div>
                </div>


                <div id="the-services">
                    <div className="the-services-text">
                        <h2>
                            Tout le personnel dont vous avez besoin,
                            au bon niveau de compétences
                        </h2>
                        <p>
                            Chaque prestataire a une fiche certifiée avec ses compétences validées.
                            Plus son niveau est élevé, plus son tarif est juste.
                        </p>
                    </div>

                    <div id="service-card">
                        <div className="card-of-service-provider">
                            <h3>Travailleuse domestique</h3>
                            <p>
                                Ménage, cuisine, lessive, repassage, soin des enfants.
                                Niveaux 1 à 4 selon les compétences.
                            </p>
                            <p className="card-of-service-provider-price">Dès 24 000 g/mois →</p>
                        </div>
                        <div className="card-of-service-provider">
                            <h3>Homme de cour</h3>
                            <p>
                                Cour, portail, jardinage, lavage véhicules, gardiennage, conduite.
                                Niveaux 1 à 3.
                            </p>
                            <p className="card-of-service-provider-price">Dès 24 000 g/mois →</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="simple-process">
                <div className="simple-process-card">
                    <span className="simple-process-card-number more-flex">1</span>
                    <h4>Vous décrivez votre besoin</h4>
                    <p>Via le site ou WhatsApp. Type de service, zone, fréquence.</p>
                </div>
                <div className="simple-process-card">
                    <span className="simple-process-card-number more-flex">2</span>
                    <h4>On vous propose un profil</h4>
                    <p>Prestataire vérifiée, certifiée, disponible dans votre zone.</p>
                </div>
                <div className="simple-process-card">
                    <span className="simple-process-card-number more-flex">3</span>
                    <h4>Contrat signé & paiement</h4>
                    <p>Abonnement mensuel. Un seul interlocuteur : nous.</p>
                </div>
                <div className="simple-process-card">
                    <span className="simple-process-card-number" id="except-mode">4</span>
                    <h4>Elle arrive chez vous</h4>
                    <p>Ponctuelle, professionnelle, et remplaçable en 48h si besoin.</p>
                </div>
            </section>

            {/* <section className="testimonials">
                <h2>Ce qu'ils en disent</h2>
                <div className="testimonials-cards"></div>
            </section> */}

            <div id="to-get-started">
                <div className="to-get-started-text">
                    <h2>
                        Prêt à avoir une prestataire vérifiée chez vous ?
                    </h2>
                    <p>Première mission ponctuelle à moitié prix pour les nouveaux clients.</p>
                </div>

                <div className="to-get-started-button">
                    <ButtonStyled>Commencer maintenant</ButtonStyled>
                    <ButtonStyled>Parler à un conseiller</ButtonStyled>
                </div>
            </div>
        </div>
    );
}

export default HomePage;