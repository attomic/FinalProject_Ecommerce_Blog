import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/app.css";

export class Navbar extends React.Component {
	render() {
		return (
			<header>
				<div>
					<nav>
						<ul className="mb-0">
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Contact</NavLink>
							</li>
							<li>
								<NavLink to="/albumview1">
									Led Zeppelin II
								</NavLink>
							</li>
							<li>
								<NavLink to="/albumview2">
									Led Zeppelin IV
								</NavLink>
							</li>
							<li className="ml-auto">
								<button
									type="button"
									className="btn btn-warning"
									data-toggle="modal"
									data-target=".bd-example-modal-sm">
									Login
								</button>

								<div
									className="modal fade bd-example-modal-sm"
									tabIndex="-1"
									role="dialog"
									aria-labelledby="mySmallModalLabel"
									aria-hidden="true">
									<div className="modal-dialog modal-sm">
										<div className="modal-content">...</div>
									</div>
								</div>
								<button type="button" className="btn btn-dark">
									<i className="fas fa-shopping-cart text-white" />
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
