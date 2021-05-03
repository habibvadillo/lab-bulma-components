import "bulma/css/bulma.css";
import React from "react";

const Message = (props) => {
  let articleClasses = props.isInfo ? `message is-info` : `message`;
  return (
    <article className={articleClasses}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
};

export default Message;
