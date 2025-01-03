import Link from 'next/link'

type NavigationStepProps = {
    activePage: number
}

export const NavigationStep = ({activePage=1}: NavigationStepProps) => {
    return (
        <>
            <Link href='/' className="nav--link nav--link__active">1</Link>
            <Link href='/' className={`nav--link ${activePage > 1 ? 'nav--link__active' : ''}`}>2</Link>
            <Link href='/' className={`nav--link ${activePage > 2 ? 'nav--link__active' : ''}`}>3</Link>
            <Link href='/' className={`nav--link ${activePage > 3 ? 'nav--link__active' : ''}`}>4</Link>
        </>
    )
}
