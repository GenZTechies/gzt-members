import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Logo from "../assets/logo/word-mark.png";

export default function NotFoundPage() {
	return (
		<>
			<Helmet>
				<title>404 - Page Not Found</title>
			</Helmet>

			<main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
				<img className="mx-auto h-40 w-auto" src={Logo} alt="gzt-logo-icon-text" />

				<h2 className="max-w-5xl mt-20 text-center text-2xl lg:text-4xl font-bold">404 : Page Not Found</h2>

				<Link to="/" className="mt-10 text-center text-lg lg:text-xl font-bold bg-gray-300 rounded p-3 text-black">
					Go to Homepage
				</Link>
			</main>
		</>
	);
}
