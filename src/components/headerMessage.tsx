import { NavigationStep } from "./navigationStep"

type HeaderMessageProps = {
    message?: string,
    isActive?: number
}

export const HeaderMessage = ({message = '', isActive = 1}: HeaderMessageProps) => {
    return (
        <>
            <nav className="nav">
                <NavigationStep isActive={isActive}/>
            </nav>
            {message && <h1>{message}</h1>}
        </>
    )
}
