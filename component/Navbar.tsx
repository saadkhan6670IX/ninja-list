import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return ( <nav>
        <Link href={"/"} className="logo">
<Image src="/logo.png" width={128} height={77}/>
        </Link>
       <Link href={"/"}><a>Home</a></Link>
       <Link href={"/about"}><a>About</a></Link> 
       <Link href={"/ninjas"}><a>Ninjas</a></Link> 
    </nav> );
}
 
export default Navbar;