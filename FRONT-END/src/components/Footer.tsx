import { NavLink } from "react-router-dom";
import "../style/components.css"

const Footer = () => {
    return (
        <div id="footer-container">

            <div className="footer-container-information">

                <div className="footer-servizyo-information">
                    <img src="../../public/Servizyo_2.png" alt="Servizyo-icon" id="servizyo-icon"/>
                    <p>
                        La première agence de personnel domestique certifiée en Haïti.
                        Employeur officiel, conforme au Code du Travail haïtien.
                    </p>
                </div>

                <div id="footer-all-link">
                    <div className="footer-link-to-information">
                        <h3>Services</h3>
                        <ul>
                            <li>
                                <NavLink to={""}>Travailleuse domestique</NavLink>
                            </li>
                            <li>
                                <NavLink to={""}>Homme de cour</NavLink>
                            </li>
                            <li>
                                <NavLink to={""}>Gouvernante</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link-to-information">
                        <h3>Entreprise</h3>
                        <ul>
                            <li>
                                <NavLink to={""}>À propos</NavLink>
                            </li>
                            <li>
                                <NavLink to={""}>Notre mission</NavLink>
                            </li>
                            <li>
                                <NavLink to={""}>Zones de service</NavLink>
                            </li>
                            <li>
                                <NavLink to={""}>FAQ</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link-to-information">
                        <h3>Contact</h3>
                        <ul>
                            <li>
                                <NavLink to={""}>WhatsApp : +509 XXXX</NavLink>
                            </li>
                            <li>
                                <NavLink to={""}>info@servizyo.ht</NavLink>
                            </li>
                            <li>
                                <NavLink to={""}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>                  
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