import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-dark bg-dark sticky-top">
					<Link className="navbar-brand" to="/">
						<img src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-white.png" />
					</Link>
				</nav>
			</header>
		);
	}
}
