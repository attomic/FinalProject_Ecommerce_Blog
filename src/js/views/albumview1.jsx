import React from "react";
import { Link } from "react-router-dom";

import "../../styles/event.css";
import { EventCards } from "../component/eventcards.jsx";

export class Albumview1 extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div className="jumbotron jumbotron-fluid sticky-top bg-dark text-white sticky">
						<div className="container text-center sticky">
							<h1>ALBUM PAGE 1</h1>
							<p>Mini project for 4geeks Academy class.</p>
							<p>Using: Bootstrap, React and React-router</p>
						</div>
					</div>
					<img src="http://thebrownchurch.org/wp-content/uploads/2013/05/Background_Brown-800x500.jpg" />
				</div>
			</div>
		);
	}
}
