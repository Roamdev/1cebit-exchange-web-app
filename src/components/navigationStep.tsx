import Link from 'next/link'

type NavigationStepProps = {
    isActive?: number
}

export const NavigationStep = ({isActive=1}: NavigationStepProps) => {
    return (
        <>
            <Link href='/' className="nav--link nav--link__active">1</Link>
            <div className="dash-block" />
            <Link href='/' className={`nav--link ${isActive > 1 ? 'nav--link__active' : ''}`}>2</Link>
            <div className="dash-block" />
            <Link href='/' className={`nav--link ${isActive > 2 ? 'nav--link__active' : ''}`}>3</Link>
            <div className="dash-block" />
            <Link href='/' className={`nav--link ${isActive > 3 ? 'nav--link__active' : ''}`}>4</Link>
        </>
    )
}
