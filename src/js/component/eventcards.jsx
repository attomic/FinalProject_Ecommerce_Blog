import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export function EventCards(props) {
	return (
		<div className="card">
			<div className="card-header">{props.eventDate}</div>
			<div className="card-body">
				<div className="row">
					<div className="col-md-4">{props.eventTime}</div>
					<div className="col-md-8">
						<Link to="/event">
							<h5 className="card-title">{props.eventTitle}</h5>
						</Link>
						<Link to="/meetup">
							<p className="card-text">{props.meetup}</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

EventCards.propTypes = {
	eventDate: PropTypes.object,
	eventTime: PropTypes.string,
	eventTitle: PropTypes.string,
	meetup: PropTypes.string
};
