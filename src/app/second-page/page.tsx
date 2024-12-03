'use client'
import { useRouter } from 'next/navigation'
import { HeaderMessage } from '@/components/headerMessage'

export default function Page() {
    const router = useRouter()

    return (
        <div className="body">
                <HeaderMessage message="Choosen what you give" />
            <main className="main">
                <div className="cost-panel">
                    <span className="cost-title">Введите сумму:</span>
                    <input type="number" className="cost-input" />
                </div>
                <button 
                    className="next-step-button"
                    onClick={() => router.push('/third-page')}
                >
                    Далее
                </button>
            </main>
        </div>
    )
}
