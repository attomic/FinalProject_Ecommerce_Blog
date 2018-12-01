import React from "react";
import ReactDOM from "react-dom";
import "../../styles/topnav-centered.css";

export class About extends React.Component {
	render() {
		return (
			<div className="col-8 float-right">
				<div id="page-content-wrapper">
					<div className="container-fluid">
						<h1>About Us</h1>
						<p>
							This is the website for our final project. The
							authors are Diana Delisle, Pat Suarez and Sergio
							Herrera. Our instructor is Jonathan Ferragut,
							Entrepreneur/Teacher/Code Monkey. :-)
						</p>
						<p>
							The purpose of the website is for a blog +
							e-commerce for Led Zeppelins top two albums.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
