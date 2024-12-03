import { NavigationStep } from "./navigationStep"

type MessageProps = {
    message: string
}

export const HeaderMessage = ({message}: MessageProps) => {
    return (
        <>
            <nav className="nav">
                <NavigationStep />
            </nav>
            <h1>{message}</h1>
        </>
    )
}
