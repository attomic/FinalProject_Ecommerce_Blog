import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/app.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
// import SideNav, {
// 	Toggle,
// 	Nav,
// 	NavItem,
// 	NavIcon,
// 	NavText
// } from "@trendmicro/react-sidenav";

import "../../styles/topnav-centered.css";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Navbar extends React.Component {
	render() {
		return (
			<div id="wrapper bg-dark ">
				<div className="row">
					<div className="col-4">
						<div className="sidebar-wrapper bg-dark col-2">
							<ul className="sidebar-nav pt-0 ">
								<div className="clearfix">
									<li className="nav-item">
										<NavLink className="nav-link" to="/">
											<i
												className="fa fa-home pr-2"
												aria-hidden="true"
											/>
											Home
										</NavLink>
									</li>

									<li className="nav-item">
										<div className="clearfix">
											<NavLink
												className="nav-link"
												to="/about">
												<i
													className="fa fa-envelope pr-2"
													aria-hidden="true"
												/>
												About
											</NavLink>
										</div>
									</li>

									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/contact">
											<i
												className="fa fa-info-circle pr-2"
												aria-hidden="true"
											/>
											Contact
										</NavLink>
									</li>

									<li className="nav-item">
										<Dropdown>
											<DropdownToggle nav caret>
												<i
													className="fa fa-music pr-2"
													aria-hidden="true"
												/>
												Albums
											</DropdownToggle>
											<DropdownMenu
												className="dropdown-default bg-dark"
												center>
												<DropdownItem className="nav-item ">
													<NavLink
														className="nav-link"
														to="/albumview1">
														<span className="pl-4">
															Led Zeppelin II
														</span>
													</NavLink>
												</DropdownItem>
												<DropdownItem className="nav-item">
													<NavLink
														className="nav-link"
														to="/albumview2">
														<span className="pl-4">
															Led Zeppelin IV
														</span>
													</NavLink>
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</li>
								</div>
							</ul>
						</div>
					</div>

					<div className="col-8">
						<div className="login float-right">
							<img
								className="pl-4 m-2"
								src="https://img.icons8.com/carbon-copy/40/000000/shopping-cart.png "
							/>
							<img
								className="p-2 mr-4"
								src="https://img.icons8.com/cotton/32/000000/gender-neutral-user.png "
							/>
						</div>

						<div className="hr pt-5">
							<hr />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
