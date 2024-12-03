import Link from 'next/link'


export const NavigationStep = () => {
    return (
        <>
            <Link href="/" className="nav--link nav--link__active">1</Link>
            <div className="dash-block"></div>
            <Link href="" className="nav--link">2</Link>
            <div className="dash-block"></div>
            <Link href="" className="nav--link">3</Link>
            <div className="dash-block"></div>
            <Link href="" className="nav--link">4</Link>
        </>
    )
}
