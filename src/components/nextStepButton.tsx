'use client'
import { useRouter } from 'next/navigation'

import styles from './NextStepButton.module.css'

type NextStepButtonProps = {
    buttonText: string;
    path: string;
}

export const NextStepButton = ({ buttonText, path }: NextStepButtonProps) => {
    const router = useRouter()

    return (
        <button
            className={styles.button}
            onClick={() => router.push(path)}
        >
            {buttonText}
        </button>
    );
}
