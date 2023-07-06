import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@/public/assets/icons/facebook.svg";
import TwitterIcon from "@/public/assets/icons/twitter.svg";
import InstagramIcon from "@/public/assets/icons/instagram.svg";

const Footer = () => {
	return (
		<footer className="w-full bg-neutral-800/10 backdrop-blur-sm text-gray-300 py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/3 lg:w-1/4 mb-8">
						<h4 className="text-lg font-semibold mb-4 text-orange-400">About</h4>
						<p className="leading-loose">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida,
							nunc vel efficitur tincidunt.
						</p>
					</div>
					<div className="w-full md:w-1/3 lg:w-1/4 mb-8">
						<h4 className="text-lg font-semibold mb-4 text-orange-400">Categories</h4>
						<ul className="list-none">
							<li>
								<Link href="/" className="text-gray-300 hover:text-orange-500">
									Technology
								</Link>
							</li>
							<li>
								<Link href="/" className="text-gray-300 hover:text-orange-500">
									Travel
								</Link>
							</li>
							<li>
								<Link href="/" className="text-gray-300 hover:text-orange-500">
									Food
								</Link>
							</li>
							<li>
								<Link href="/" className="text-gray-300 hover:text-orange-500">
									Fashion
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/3 lg:w-1/4 mb-8">
						<h4 className="text-lg font-semibold mb-4 text-orange-400">Subscribe</h4>
						<form>
							<input
								type="email"
								className="w-full py-2 px-4 bg-slate-50 rounded-full text-slate-700 font-medium"
								placeholder="Your email address"
							/>
							<button
								type="submit"
								className="mt-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
				<hr className="my-8 border-gray-600" />
				<div className="flex justify-between items-center">
					<p className="text-sm">&copy; 2023 Blog Website. All rights reserved.</p>
					<div className="flex">
						<Link href="/" className="text-gray-300 hover:text-orange-500 mx-2">
							<Image src={FacebookIcon} width={35} height={35} alt="Facebook Icon" />
						</Link>
						<Link href="/" className="text-gray-300 hover:text-orange-500 mx-2">
							<Image src={TwitterIcon} width={35} height={35} alt="Twitter Icon" />
						</Link>
						<Link href="/" className="text-gray-300 hover:text-orange-500 mx-2">
							<Image src={InstagramIcon} width={35} height={35} alt="Instagram Icon" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
