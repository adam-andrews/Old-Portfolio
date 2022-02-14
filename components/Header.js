import React from 'react';

function Header() {
	return (
		<navbar className="flex justify-center sm:justify-end">
			<div className="flex mx-20 justify-evenly max-w-2xl font-medium items-center">
				<h1 className="px-4">Home</h1>
				<h1 className="px-4">About us</h1>
				<button className="rounded-md px-4 py-1 border border-white">
					<h1>Contact</h1>
				</button>
			</div>
		</navbar>
	);
}

export default Header;
