type InputBlockProps = {
    message?: string
}
export const InputBlock = ({message = ''}:InputBlockProps) => {
    return (
        <div className="input-block">
            {message && <span className="input-title">{message}</span>}
            <input type="text" />
        </div>
    )
}
