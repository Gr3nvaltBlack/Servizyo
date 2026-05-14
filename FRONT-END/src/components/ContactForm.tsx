import "../style/components.css"
import { ButtonStyled } from "../style/styledelement";


const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <h3>Envoyez-nous un message</h3>
            
            <div className="contact-form-client">
                <label htmlFor="">Vous êtes</label>
                <div className="contact-form-client-element">
                    <div>Employeur</div>
                    <div>Prestataire</div>
                </div>
            </div>

            <div className="contact-form-info-client">
               <div>
                    <label htmlFor="">Prénom & Nom</label>
                    <input type="text" placeholder="Votre nom complet"/>
               </div>
               <div>
                    <label htmlFor="">Téléphone WhatsApp</label>
                    <input type="text" placeholder="+509 XXXX XXXX"/>
               </div>
            </div>

            <div className="contact-form-element">
                <label htmlFor="">Votre zone</label>
                <select name="your-city" id="">
                    <option value="Petion-Ville">Petion-Ville</option>
                    <option value="Delmas">Delmas</option>
                    <option value="Kenskoff">Kenskoff</option>
                    <option value="Tabarre">Tabarre</option>
                </select>
            </div>

            <div className="contact-form-element">
                <label htmlFor="">Type de service recherché</label>
                <select name="type-of-service-sought" id="">
                    <option value="Petion-Ville">Petion-Ville</option>
                    <option value="Delmas">Delmas</option>
                    <option value="Kenskoff">Kenskoff</option>
                    <option value="Tabarre">Tabarre</option>
                </select>
            </div>

            <div className="contact-form-element">
                <label htmlFor="">Votre message</label>
                <textarea name="" id="" placeholder="Decrivez votre besoin en quelques mots..."></textarea>
            </div>
            <div className="contact-form-element">
                <ButtonStyled>Envoyer le message</ButtonStyled>
                <p> Ou contactez-nous directement sur WhatsApp pour une réponse immédiate</p>
            </div>
        </div>
    );
};

export default ContactForm;