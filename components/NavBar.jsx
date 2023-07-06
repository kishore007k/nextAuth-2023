import Image from "next/image";
import Logo from "@/public/assets/images/logo.svg";
import Link from "next/link";

const NavBar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-neutral-800/10 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-2 flex items-center justify-between">
				<Link href="/" className="text-xl font-bold">
					<Image src={Logo} width={40} height={40} alt="Logo" />
				</Link>
				<ul className="flex space-x-4">
					<li>
						<Link href="/" className=" hover:text-orange-500">
							Home
						</Link>
					</li>
					<li>
						<Link href="/about" className=" hover:text-orange-500">
							About
						</Link>
					</li>
					<li>
						<Link href="/services" className=" hover:text-orange-500">
							Services
						</Link>
					</li>
					<li>
						<Link href="/contact" className=" hover:text-orange-500">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
