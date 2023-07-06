import Link from "next/link";
import React from "react";

const NotFound = () => {
	return (
		<section className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-6xl text-white mb-8">404</h1>
			<h2 className="text-2xl text-gray-400 mb-4">Oops! Page not found</h2>
			<p className="text-gray-500 text-center mb-8">
				The page you are looking for might have been removed or temporarily
				unavailable.
			</p>
			<Link
				href="/"
				className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full ease-in-out"
			>
				Go back to Home
			</Link>

			<div className="mt-16">
				<div className="flex justify-center items-center">
					<div className="bg-orange-200 rounded-full h-6 w-6 animate-bounce mr-1"></div>
					<div
						className="bg-orange-300 rounded-full h-6 w-6 animate-bounce mr-1"
						style={{ animationDelay: "0.1s" }}
					></div>
					<div
						className="bg-orange-400 rounded-full h-6 w-6 animate-bounce"
						style={{ animationDelay: "0.2s" }}
					></div>
				</div>
				<p className="text-white mt-4">Searching for the missing page...</p>
			</div>
		</section>
	);
};

export default NotFound;
