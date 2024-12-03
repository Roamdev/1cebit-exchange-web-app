'use client'
import { useRouter } from 'next/navigation'


type NextStepButtonProps = {
    buttonText: string;
    path: string;
}

export const NextStepButton = ({ buttonText, path }: NextStepButtonProps) => {
    const router = useRouter()

    return (
        <button 
            className="next-step-button"
            onClick={() => router.push(path)}
        >
            {buttonText}
        </button>
    );
}
