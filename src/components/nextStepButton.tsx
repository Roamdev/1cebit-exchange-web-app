type NextStepButtonProps = {
    buttonText: string;
}

export const NextStepButton = ({ buttonText }: NextStepButtonProps) => {
    return (
        <button className="next-step-button">{buttonText}</button>
    );
}
