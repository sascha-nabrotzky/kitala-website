import styles from "../styles/blockquote.module.css";

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
