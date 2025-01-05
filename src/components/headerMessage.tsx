import { NavigationStep } from "./NavigationStep"

import styles from "./HeaderMessage.module.css"

type HeaderMessageProps = {
    message?: string,
    activePage?: number
}

export const HeaderMessage = ({message = '', activePage = 1}: HeaderMessageProps) => {
    return (
        <>
            <nav className={styles.nav}>
                <NavigationStep activePage={activePage}/>
            </nav>
            {message && <h1>{message}</h1>}
        </>
    )
}
