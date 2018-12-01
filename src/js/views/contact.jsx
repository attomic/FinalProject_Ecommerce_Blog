import React from "react";
import ReactDOM from "react-dom";

import "../../styles/topnav-centered.css";

export class Contact extends React.Component {
	render() {
		return (
			<div className="col-8 float-right">
				<div id="page-content-wrapper">
					<div className="container-fluid">
						<h1 className="t1">Contact us</h1>

						<p>
							Need a hand? Or a high five? Here is how to reach us
						</p>
						<div className="clearfix">
							<img
								className=" mb-1"
								src="https://img.icons8.com/small/16/5A5656/phone-not-being-used.png"
							/>
							<span className="pl-2">1 800 234 596</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
