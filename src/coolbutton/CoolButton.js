import "bulma/css/bulma.css";
import React from "react";

const CoolButton = (props) => {
  let classes = props.className ? `button ${props.className}` : "button";
  for (let p in props) {
    if (props[p] === true) {
      classes += " " + p.slice(0, 2) + "-" + p.slice(2).toLowerCase();
    }
  }
  return <button className={classes}>{props.children}</button>;
};

export default CoolButton;
