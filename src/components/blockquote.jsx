import React from "react";
import styles from "../styling/blockquote.module.scss";

function Blockquote(props) {
  return (
    <blockquote
      className={styles.blockquote}
      dangerouslySetInnerHTML={{ __html: props.content }}
    ></blockquote>
  );
}

export default Blockquote;
