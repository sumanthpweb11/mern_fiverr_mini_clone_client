import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ cardProps }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={cardProps.img} alt="" />
        <span className="desc">{cardProps.desc}</span>
        <span className="title">{cardProps.title}</span>
      </div>
    </Link>
  );
}
export default CatCard;
