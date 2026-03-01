import Link from "next/link"
import Image from "next/image"
import logo from  "../../public/icons/logo.png"
const NavBar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className="logo">
            <Image src={logo} alt="logo" width={24} height={24}/>
            <p>DevEvents</p>
            </Link>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/">Events</Link>
                <Link href="/">Create Events</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar