import React from "react";
import "./card-list.component-style.css";
import {Card} from "../card/card.component"

export const CardList = (props) => (
  <div className="card-list">
    {props.rappers.map((rapper) => (
      <Card key={rapper.id} rapper={rapper} />
    ))}
  </div>
);
