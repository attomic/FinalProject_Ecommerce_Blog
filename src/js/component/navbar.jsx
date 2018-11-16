import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/app.css";

export class Navbar extends React.Component {
	render() {
		return (
			<header>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
