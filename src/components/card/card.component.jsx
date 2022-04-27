import React from "react";

import "./card.styles.css";


export const Card = (props) => (
<div className="card-container">
    <img alt="users" 
        src={`http://localhost:5000/${props.user.id}.jpg`}
    />
    <h1>{props.user.name}</h1>
</div>);




