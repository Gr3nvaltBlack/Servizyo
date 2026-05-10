import "../style/components.css"

const Footer = () => {
    return (
        <div className="footer-container">

            <div className="footer-container-information">
                <div className="footer-servizyo-information">
                    <img src="../../public/Servizyo_2.png" alt="Servizyo-icon" id="servizyo-icon"/>
                    <p>
                        La première agence de personnel domestique certifiée en Haïti.
                        Employeur officiel, conforme au Code du Travail haïtien.
                    </p>
                </div>

                <div className="footer-link-to-information">
                    <h3>Services</h3>
                </div>
                <div className="footer-link-to-information">
                    <h3>Entreprise</h3>
                </div>
                <div className="footer-link-to-information">
                    <h3>Contact</h3>
                </div>
            </div>
            <div className="footer-container-second-part">
                <p>© 2026 Servizyo S.A.R.L. — Tous droits réservés</p>
                <p>NIF : XXXXXXX · Agréée MAST</p>
            </div>

        </div>
    );
}

export default Footer;