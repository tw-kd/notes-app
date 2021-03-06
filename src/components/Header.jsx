import React from "react";
import Logo from "../assets/logo.png";

const Header = ({ user, setUser }) => {
	const { displayName, photoURL } = user;

	return (
		<header className="bg-white shadow-lg">
			<div className="container mx-auto flex items-center h-20 justify-between">
				<img src={Logo} alt="Logo" className="w-48" />
				<div
					className="flex items-center mr-6"
					onClick={() => setUser(null)}
				>
					<img
						src={photoURL}
						alt="Profile"
						className="w-12 rounded-full"
					/>
					<span
						className="ml-2 text-gray-700 font-semibold hidden sm:inline-flex"
						tabIndex={0}
					>
						Hello, {displayName}!
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
