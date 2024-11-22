interface NextStepButtonProps {
    button_text: string;
}

export default function NextStepButton({ button_text }: NextStepButtonProps) {
    return (
        <button>{button_text}</button>
    );
}