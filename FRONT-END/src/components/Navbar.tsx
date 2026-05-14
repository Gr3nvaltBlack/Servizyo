import "../style/components.css"
import { NavLink } from "react-router-dom";
import { ButtonStyled } from "../style/styledelement";


const NavBar = () => {
    return (
        <nav id="navigation-container">

            <div id="navigation-information">
                <img src="../../public/Servizyo_2.png" alt="Servizyo-icon" className="servizyo-icon"/>

                    <ul className="navigation-theme">
                        <li>
                            <NavLink to={"/"}>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={""}>Nos Prestataires</NavLink>
                        </li>
                        <li>
                            <NavLink to={""}>Comment ça marche</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
            </div>

            <div className="navigation-button">
                <ButtonStyled>Je suis prestataire</ButtonStyled>
                <ButtonStyled>Trouver une aide</ButtonStyled>
            </div>
        </nav>
    );
}

export default NavBar;