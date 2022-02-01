import * as React from "react";
import { Helmet } from "react-helmet";
import Logo from "../assets/logo/word-mark.png";
import LogoIcon from "../assets/logo/logo-icon-purple.png";
import genztechiesMembers from "../all_members";

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

				<div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 m-auto py-5 gap-8">
					{genztechiesMembers.map((member, index) => (
						<div
							key={index}
							className="bg-contain w-56 h-56 lg:w-64 lg:h-64 mx-auto my-4 rounded-full"
							style={{
								backgroundImage: `url(${member.image_url})`,
							}}
						>
							<h2 className="text-center text-white text-2xl font-semibold bg-green-600 rounded relative top-full p-1">{member.full_name}</h2>
						</div>
					))}
				</div>
			</main>
		</>
	);
}
