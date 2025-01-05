import styles from './InputBlock.module.css'

type InputBlockProps = {
    message?: string
}

export const InputBlock = ({message = ''}:InputBlockProps) => {
    return (
        <div className={styles.inputContainer}>
            {message && <span className={styles.inputTitle}>{message}</span>}
            <input className={styles.inputItem}type="text" />
        </div>
    )
}
