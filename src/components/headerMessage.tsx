import { NavigationStep } from "./navigationStep"

type HeaderMessageProps = {
    message?: string,
    activePage?: number
}

export const HeaderMessage = ({message = '', activePage = 1}: HeaderMessageProps) => {
    return (
        <>
            <nav className="nav">
                <NavigationStep activePage={activePage}/>
            </nav>
            {message && <h1>{message}</h1>}
        </>
    )
}
