import React from "react";
import "./ShoeCard.css";

const ShoeCard = props => (
  <div className="card" id="btn btn-primary"
  onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>

    {/* {<span onClick={() => props.removeShoe(props.id)} className="remove">
      
    </span>} */}
  </div>
);

export default ShoeCard;