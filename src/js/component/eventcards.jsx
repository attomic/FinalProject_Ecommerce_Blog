import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export function EventCards(props) {
	return (
		<div className="card" style={{ width: "400px" }}>
			<img className="card-img-top" src={props.albumImage} />
			<div className="card-body">
				<h4 className="card-title">{props.albumTitle}</h4>
				<p className="card-text">{props.albumDesc}</p>
				<Link to="/albumview1">
					<button className="btn btn-primary">Buy Now! </button>
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
