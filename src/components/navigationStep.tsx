import Link from 'next/link'
import { clsx } from 'clsx'

import styles from './NavigationStep.module.css'

type NavigationStepProps = {
    countPage: number
}

export const NavigationStep = ({countPage=1}: NavigationStepProps) => {
    return (
        <>
            <Link href='/' className={clsx(styles.navLink, styles.navLinkActive)}>1</Link>
            <Link href='/' className={clsx(styles.navLink, countPage > 1 ? styles.navLinkActive : '')}>2</Link>
            <Link href='/' className={clsx(styles.navLink, countPage > 2 ? styles.navLinkActive : '')}>3</Link>
            <Link href='/' className={clsx(styles.navLink, countPage > 3 ? styles.navLinkActive : '')}>4</Link>
        </>
    )
}
