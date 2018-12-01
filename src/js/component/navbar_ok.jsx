import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/app.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";

import "../../styles/topnav-centered.css";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<div className="topnav-centered d-block pt-5">
					<nav className="navbar navbar-expand-lg navbar-dark primary-color pt-0 pb-0 ">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#basicExampleNav"
							aria-controls="basicExampleNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>

						<div
							className="collapse navbar-collapse pb-0"
							id="basicExampleNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<NavLink className="nav-link" to="/">
										Home
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/about">
										About
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/contact">
										Contact
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link"
										to="/albumview1">
										Led Zeppelin II
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										className="nav-link"
										to="/albumview2">
										Led Zeppelin IV
									</NavLink>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
