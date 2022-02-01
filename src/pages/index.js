import * as React from "react";
import { Helmet } from "react-helmet";
import Logo from "../assets/logo/word-mark.png";
import LogoIcon from "../assets/logo/logo-icon-purple.png";

export default function IndexPage() {
	return (
		<>
			<Helmet>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				{/* <!-- Primary Meta Tags --> */}
				<title>GenZtechies Members &mdash; Coming Soon</title>
				<meta name="title" content="GenZtechies Members &mdash; Coming Soon " />
				<meta name="description" content="The Members of the GenZtechies community ❤️🔥" />
				<link rel="icon" href={LogoIcon} />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://members.genztechies.com/" />
				<meta property="og:title" content="GenZtechies Members &mdash; Coming Soon " />
				<meta property="og:description" content="The Members of the GenZtechies community ❤️🔥" />
				{/* <meta property="og:image" content="https://members.genztechies.com/assets/site-preview.png" /> */}

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://members.genztechies.com/" />
				<meta property="twitter:title" content="GenZtechies Members &mdash; Coming Soon " />
				<meta property="twitter:description" content="The Members of the GenZtechies community ❤️🔥" />
				{/* <meta property="twitter:image" content="https://members.genztechies.com/assets/site-preview.png" /> */}

				{/* <!-- Manrope font  --> */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
			</Helmet>

			<main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-200 text-black">
				<img className="mx-auto h-40 w-auto" src={Logo} alt="gzt-logo-icon-text" />

				<h2 className="max-w-5xl mt-20 text-center text-2xl lg:text-4xl font-bold">Gzt-Members Coming Soon...</h2>
			</main>
		</>
	);
}
