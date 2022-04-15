import React from "react";
import blockquoteStyles from "../styling/blockquote.module.scss";

function Blockquote(props) {
  return (
    <section className={blockquoteStyles.quotewrapper}>
      <div className={blockquoteStyles.anfoverflow}>
        <p className={blockquoteStyles.anfuehrung}>&bdquo;</p>
      </div>
      <blockquote
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></blockquote>
    </section>
  );
}

export default Blockquote;
