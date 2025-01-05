import { NavigationStep } from "./NavigationStep"

import styles from "./HeaderMessage.module.css"

type HeaderMessageProps = {
    message?: string,
    countPage?: number
}

export const HeaderMessage = ({message = '', countPage = 1}: HeaderMessageProps) => {
    return (
        <>
            <nav className={styles.nav}>
                <NavigationStep countPage={countPage}/>
            </nav>
            {message && <h1>{message}</h1>}
        </>
    )
}
