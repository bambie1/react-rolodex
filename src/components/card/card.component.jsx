import React from "react";
import "./card-styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.rapper.id}?set=set2&size=180x180`}
      alt="rapper"
    />
    <h2> {props.rapper.name}</h2>
    <p>{props.rapper.email}</p>
  </div>
);
