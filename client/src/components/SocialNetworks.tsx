import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import Share from "../assets/images/share.svg";
import WhatsApp from "../assets/images/whatsapp.svg";
import "../assets/styles/SocialNetwork.css";

export default function SocialNetworks() {
  return (
    <article className="socialNetworks">
      <img src={Share} alt="Share icon" className="social" />
      <a href="https://www.facebook.com/">
        <img src={Facebook} alt="Facebook logo" className="social" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={Instagram} alt="Instagram logo" className="ig" />
      </a>
      <a href="https://www.whatsapp.com/">
        <img src={WhatsApp} alt="WhatsApp logo" className="social" />
      </a>
    </article>
  );
}
