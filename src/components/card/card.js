import "./card.css";
import "./flip-transition.css";

function Card({onClick}){
    return(
<div className="card" onClick={onClick}>
      <div className="card-back">Login</div>
      <div className="card-front">Logout</div>
</div>

    )
}

export default Card;