type NextStepButtonProps = {
    buttonText: string;
}

export const NextStepButton = ({ buttonText }: NextStepButtonProps) => {
    return (
        <button>{buttonText}</button>
    );
}
