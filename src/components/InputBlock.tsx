import styles from './InputBlock.module.css';

type InputBlockProps = {
  message?: string;
};

export const InputBlock = ({ message = '' }: InputBlockProps) => {
  return (
    <div className={styles.container}>
      <input className={styles.item}type="text" placeholder={message} />
  </div>
  );
};
