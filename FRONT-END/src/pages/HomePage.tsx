const HomePage = () => {
    return (
        <div>
            <div className="hero">
                <h1>Le service de mise en relation vérifié et garanti en Haïti</h1>
                <p>
                    Trouvez une femme de ménage, un homme de cour ou une gouvernante certifiée — 
                    identité vérifiée, contrat officiel, salaire garanti.
                    Vous n'avez à vous occuper de rien.
                </p>

                <div className="hero-button">
                    <button>Trouver un prestataire</button>
                    <button>Voir comment ça marche</button>
                </div>
                    <hr />
                <div className="hero-moyenne">
                    <div>
                        <span>200+</span>
                        <span>Prestataires certifiées</span>
                    </div>
                    <div>
                        <span>500+</span>
                        <span>Familles satifaites</span>
                    </div>
                    <div>
                        <span>7</span>
                        <span>Zone couvertes</span>
                    </div>
                    <div>
                        <span>4.8★</span>
                        <span>Note moyenne</span>
                    </div>
                </div>
            </div>

            
            <section className="ours-services">
                <div className="information">
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <hr />

                <div className="the-services">
                    <h2>
                        Tout le personnel dont vous avez besoin,
                        au bon niveau de compétences
                    </h2>
                    <p>
                        Chaque prestataire a une fiche certifiée avec ses compétences validées.
                        Plus son niveau est élevé, plus son tarif est juste.
                    </p>
                </div>

                <div className="service-card">
                    
                </div>
            </section>


            <section className="simple-process"></section>

            <section className="testimonials">
                <h2>Ce qu'ils en disent</h2>
                <div className="testimonials-cards"></div>
            </section>

            <div className="to-get-started"></div>
        </div>
    )
}

export default HomePage;