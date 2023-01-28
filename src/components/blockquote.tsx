import React from "react";
import styles from "../styles/blockquote.module.scss";

type BlockquoteProps = {
  content: string;
};

const Blockquote = ({ content }: BlockquoteProps) => {
  return (
    <blockquote
      className={styles.blockquote}
      dangerouslySetInnerHTML={{ __html: content }}
    ></blockquote>
  );
};

export default Blockquote;
