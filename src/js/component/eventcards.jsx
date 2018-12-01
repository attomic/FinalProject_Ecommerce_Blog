import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import "../../styles/eventcards.css";

export function EventCards(props) {
	return (
		<div className="card">
			<img className="card-img-top" src={props.albumImage} />
			<div className="card-body">
				<h4 className="card-title">{props.albumTitle}</h4>
				<p className="card-text">{props.albumDesc}</p>
				<Link to="/albumview1">
					<button className="btn btn-dark">Buy Now! </button>
				</Link>
			</div>
		</div>
	);
}

EventCards.propTypes = {
	eventDate: PropTypes.object,
	eventTime: PropTypes.string,
	albumTitle: PropTypes.string,
	albumDesc: PropTypes.string,
	albumImage: PropTypes.string,
	meetup: PropTypes.string
};
