import ContactForm from "../components/ContactForm";
import "../style/pages.css"

const Contact = () => {
    return (
        <div >
            <div id="contact-we-are-here">
                <div className="contact-we-are-here-content">
                    <h1>Parlons de votre besoin</h1>
                    <p>
                        Une question, une demande de devis ou juste envie de comprendre comment ça marche —
                        notre équipe répond sous 2 heures.
                    </p>
                </div>
            </div>

            <div id="contact-information">
                <div className="contact-information-part" id="part-left">
                    
                    <div className="contact-information-text">
                        <h2>Toujours à votre écoute</h2>
                        <p>
                            Que vous soyez employeur ou prestataire, nous avons un canal dédié pour vous.
                            Pas de robot, de vraies personnes.
                        </p>
                    </div>

                    <div className="contact-information-link">
                        
                        <div className="contact-information-link-content">
                            <span className="contact-icon">💬</span>
                            <span>
                                <label>WhatsApp Employeurs</label>
                                <p>+509 XXXX XXXX</p>
                                <p>Réponse en moins de 2 heures</p>
                            </span>
                        </div>

                        <div className="contact-information-link-content">
                            <span className="contact-icon">💬</span>
                            <span>
                                <label>WhatsApp Prestataires</label>
                                <p>+509 XXXX XXXX</p>
                                <p>Dédié aux candidatures & questions</p>
                            </span>
                        </div>

                        <div className="contact-information-link-content">
                            <span className="contact-icon">✉️</span>
                            <span>
                                <label>Email</label>
                                <p>info@servizyo.ht</p>
                            </span>
                        </div>

                        <div className="contact-information-link-content">
                            <span className="contact-icon">📍</span>
                            <span>
                                <label>Bureau</label>
                                <p>Pétion-Ville, Haïti</p>
                                <p>Lun-Ven : 8h00 - 17h00</p>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="contact-information-part" id="part-right">
                    <ContactForm/>
                </div>

            </div>
        </div>
    );
};

export default Contact;