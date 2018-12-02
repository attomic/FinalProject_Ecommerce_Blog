import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import PaypalButton from "../component/paypalbutton.jsx";

import { Link } from "react-router-dom";

export function EventCards(props) {
	return (
		<div className="card" style={{ width: "400px" }}>
			<img className="card-img-top" src={props.albumImage} />
			<div className="card-body">
				<h4 className="card-title">{props.albumTitle}</h4>
				<p className="card-text">{props.albumDesc}</p>
				<PaypalButton total="10" />
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

// <PaypalButton total="10" />
