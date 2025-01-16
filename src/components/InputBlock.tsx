import styles from './InputBlock.module.css';

type InputBlockProps = {
  message?: string;
};

export const InputBlock = ({ message = '' }: InputBlockProps) => {
  return (
    <div className={styles.container}>
      {message && <span className={styles.title}>{message}</span>}
      <input className={styles.item}type="text" />
  </div>
  );
};
