import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export function EventCards(props) {
	return (
		// 		<div className="card">
		// 			<div className="card-header">{props.eventDate}</div>
		// 			<div className="card-body">
		// 				<div className="row">
		// 					<div className="col-md-4">{props.eventTime}</div>
		// 					<div className="col-md-8">
		// 						<Link to="/albumview1">
		// 							<h5 className="card-title">{props.eventTitle}</h5>
		// 						</Link>
		// 						<Link to="/albumview2">
		// 							<p className="card-text">{props.meetup}</p>
		// 						</Link>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	);
		// }

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
