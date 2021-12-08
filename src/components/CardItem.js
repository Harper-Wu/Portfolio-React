import React from "react";
import { Link } from "react-router-dom";

export default function CardItem(props) {
  return (
    <div className="cards-item">
      <a className="cards-item-link" href={props.path} target="_blank">
        <figure className="cards-item-pic-wrap" proj-category={props.label}>
          <img src={props.src} alt="" className="cards-item-img" />
        </figure>
        <div className="cards-item-info">
          <h3 className="cards-item-title">{props.title}</h3>
          <h5 className="cards-item-text">{props.text}</h5>
        </div>
      </a>
    </div>
  );
}
