import Link from "next/link"

export default function Header () {
    return(
        <div className="header">
            <ul className="header-buttons">

                <Link href={"/"}>
                <li className="home">Home</li></Link>
                <Link href={"/portfolio"}>
                <li className="portfolio">Portfolio</li></Link>
                <Link href={"/about-us"}>
                <li className="about">About</li></Link>
                <Link href={"/contact-us"}>
                <li className="contact">Contact Us</li></Link>

            </ul>
        </div>
    )
}