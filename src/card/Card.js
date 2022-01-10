import "./Card.css";
import ImgCard from "../imgCard/ImgCard.js";
import Titre_p from "../titre_p/Titre_p.js";
import Createur from "../createur/Createur.js";

function Card() {
    return (
    <div className="contourCard">
        <ImgCard />
        <Titre_p />
        <hr className="hr" />
        <Createur />
    </div>
    )
}

export default Card