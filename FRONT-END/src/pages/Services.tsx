import { ButtonStyled } from "../style/styledelement";

const Services = () => {
    return (
        <div className="services-container">

            <div id="transparent-pricing">
                <div className="transparent-pricing-content">
                    <h1>Des tarifs clairs, zéro négociation</h1>
                    <p>
                        Nos prix sont fixes et affichés publiquement.
                        Conformes au Code du Travail haïtien, 40% au-dessus du salaire minimum légal.
                    </p>
                </div>
            </div>


            <section id="domestic-workers">
                <h2>Abonnements mensuels — Femmes de ménage & Gouvernantes</h2>
                <div className="domestic-workers-information">

                    <div className="domestic-workers-card">
                        <div className="workers-card-header">
                            <div className="workers-card-header-text">
                                <span>Niveau 1</span>
                                <h3>Domestique de base</h3>
                                <p>Ménage & entretien courant</p>
                            </div>
                            <div className="workers-card-header-text-second">
                                <span>
                                    <h3>24 000</h3>
                                    <p> gdes/mois</p>
                                </span>
                                <p>Tout inclus · Aucun frais caché</p>
                            </div>
                        </div>
                        <div className="workers-card-body">
                            <ul>
                                <li>Balayage & lavage des sols</li>
                                <li>Dépoussiérage</li>
                                <li>Lessive (main ou machine)</li>
                                <li>Repassage basique</li>
                                <li>Vaisselle</li>
                            </ul>
                        </div>
                            <ButtonStyled>S'abonner</ButtonStyled>
                    </div>

                    <div className="domestic-workers-card">
                        <div className="workers-card-header">
                            <div className="workers-card-header-text">
                                <span>Niveau 2</span>
                                <h3>Travailleuse domestique complète</h3>
                                <p>Ménage approfondi & cuisine</p>
                            </div>
                            <div className="workers-card-header-text-second">
                                <span>
                                    <h3>29 000</h3>
                                    <p> gdes/mois</p>
                                </span>
                                <p>Tout inclus · Aucun frais caché</p>
                            </div>
                        </div>
                        <div className="workers-card-body">
                            <ul>
                                <li>Tout le Niveau 1</li>
                                <li>Cuisine quotidienne</li>
                                <li>Courses & approvisionnement</li>
                                <li>Entretien approfondi</li>
                                <li>Lessive & repassage soigné</li>
                            </ul>
                        </div>
                            <ButtonStyled>S'abonner</ButtonStyled>
                    </div>

                    <div className="domestic-workers-card">
                        <div className="workers-card-header">
                            <div className="workers-card-header-text">
                                <span>Niveau 3</span>
                                <h3>Gouvernante</h3>
                                <p>Gestion complète du foyer</p>
                            </div>
                            <div className="workers-card-header-text-second">
                                <span>
                                    <h3>37 000</h3>
                                    <p> gdes/mois</p>
                                </span>
                                <p>Tout inclus · Aucun frais caché</p>
                            </div>
                        </div>
                        <div className="workers-card-body">
                            <ul>
                                <li>Tout le Niveau 1 & 2</li>
                                <li>Gestion des stocks</li>
                                <li>Organisation du foyer</li>
                                <li>Supervision du personnel</li>
                                <li>Cuisine élaborée</li>
                                <li>Accueil des visiteurs</li>
                            </ul>
                        </div>
                            <ButtonStyled>S'abonner</ButtonStyled>
                    </div>

                    <div className="domestic-workers-card">
                        <div className="workers-card-header">
                            <div className="workers-card-header-text">
                                <span>Niveau 4</span>
                                <h3> Gouvernante + Nanny</h3>
                                <p>Soin spécialisé des enfants</p>
                            </div>
                            <div className="workers-card-header-text-second">
                                <span>
                                    <h3>47 000</h3>
                                    <p> gdes/mois</p>
                                </span>
                                <p>Tout inclus · Aucun frais caché</p>
                            </div>
                        </div>
                        <div className="workers-card-body">
                            <ul>
                                <li>Tout le Niveau 3</li>
                                <li>Soin des nourrissons</li>
                                <li>Aide aux devoirs</li>
                                <li>Activités éducatives</li>
                                <li>Accompagnement médical</li>
                            </ul>
                        </div>
                            <ButtonStyled>S'abonner</ButtonStyled>
                    </div>

                </div>
            </section>


            <section id="man-workers">
                <h2>Abonnements mensuels — Extérieur & Sécurité</h2>
                
                <div className="man-workers-information">
                    
                    <div className="man-workers-card">
                        <div className="workers-card-header">
                            <div className="workers-card-header-text">
                                <span>Cour Niveau 1</span>
                                <h3>Homme de cour standard</h3>
                                <p>Entretien extérieur complet</p>
                            </div>
                            <div className="workers-card-header-text-second">
                                <span>
                                    <h3>24 000</h3>
                                    <p> gdes/mois</p>
                                </span>
                                <p>Tout inclus · Aucun frais caché</p>
                            </div>
                        </div>

                        <div className="workers-card-body">
                            <ul>
                                <li>Nettoyage de la cour</li>
                                <li>Arrosage des plantes</li>
                                <li>Ouverture/fermeture portails</li>
                                <li>Lavage des véhicules</li>
                                <li>Évacuation des ordures</li>
                            </ul>
                        </div>
                            <ButtonStyled>S'abonner</ButtonStyled>
                    </div>


                    <div className="man-workers-card">
                        <div className="workers-card-header">
                            <div className="workers-card-header-text">
                                <span>Cour Niveau 2</span>
                                <h3>Homme de cour + Gardien</h3>
                                <p>Extérieur + sécurité</p>
                            </div>
                            <div className="workers-card-header-text-second">
                                <span>
                                    <h3>31 000</h3>
                                    <p> gdes/mois</p>
                                </span>
                                <p>Tout inclus · Aucun frais caché</p>
                            </div>
                        </div>

                        <div className="workers-card-body">
                            <ul>
                                <li>Tout le Cour Niveau 1</li>
                                <li>Surveillance de la propriété</li>
                                <li>Contrôle des entrées/sorties</li>
                                <li>Présence nocturne si requis</li>
                                <li>Gestion sécurité périmètre</li>
                            </ul>
                        </div>
                            <ButtonStyled>S'abonner</ButtonStyled>
                    </div>



                    <div className="man-workers-card">
                        <div className="workers-card-header">
                            <div className="workers-card-header-text">
                                <span>Cour Niveau 3</span>
                                <h3>Homme de cour + Gardien + Chauffeur</h3>
                                <p>Service complet</p>
                            </div>
                            <div className="workers-card-header-text-second">
                                <span>
                                    <h3>41 000</h3>
                                    <p> gdes/mois</p>
                                </span>
                                <p>Tout inclus · Aucun frais caché</p>
                            </div>
                        </div>

                        <div className="workers-card-body">
                            <ul>
                                <li>Tout le Cour Niveau 2</li>
                                <li>Conduite véhicule familial</li>
                                <li>Courses & commissions</li>
                                <li>Entretien basique véhicule</li>
                                <li>Permis de conduire vérifié</li>
                            </ul>
                        </div>
                            <ButtonStyled>S'abonner</ButtonStyled>
                    </div>
                </div>
            </section>


            <section id="guarantee">
                <h2>Ce qui est toujours inclus dans chaque abonnement</h2>
                <div className="guarantee-information">
                    <div className="guarantee-card">
                        <h3>Contrat officiel</h3>
                        <p>
                            Contrat de service conforme au Code du Travail haïtien.
                            Deux exemplaires signés.
                        </p>
                    </div>
                    <div className="guarantee-card">
                        <h3>Remplacement garanti</h3>
                        <p>
                            Si la prestataire est absente,
                            une remplaçante de même niveau arrive dans les 24 à 48h.
                        </p>
                    </div>
                    <div className="guarantee-card">
                        <h3>Support dédié</h3>
                        <p>
                            Un numéro WhatsApp dédié, répondu en moins de 2 heures, 7 jours sur 7.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;