import Link from 'next/link'

import styles from './NavigationStep.module.css'

type NavigationStepProps = {
    activePage: number
}

export const NavigationStep = ({activePage=1}: NavigationStepProps) => {
    return (
        <>
            <Link href='/' className={`${styles.navLink} ${styles.navLinkActive}`}>1</Link>
            <Link href='/' className={`${styles.navLink} ${activePage > 1 ? styles.navLinkActive : ''}`}>2</Link>
            <Link href='/' className={`${styles.navLink} ${activePage > 2 ? styles.navLinkActive : ''}`}>3</Link>
            <Link href='/' className={`${styles.navLink} ${activePage > 3 ? styles.navLinkActive : ''}`}>4</Link>
        </>
    )
}
