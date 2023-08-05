import React from "react";
import "../Ui/Card";

function Card(props) {
  //To add multiple classes to an element
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
