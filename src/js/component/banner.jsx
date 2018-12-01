import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/app.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import banner from "../../img/banner.png";
import last1 from "../../img/last1.jpg";

import "../../styles/back-banner.css";

export class Banner extends React.Component {
	render() {
		return (
			//<img className="banner img-fluid w-100 h-20 ml-0" src={banner} />
			<div className="back-banner">
				<img
					className="last1 img-fluid w-50 h-10 ml-0 mx-auto d-block"
					src={banner}
				/>
			</div>
		);
	}
}
