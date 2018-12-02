import React from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export function EventCards(props) {
	return (
		<div>
		<div classNameName="card w-50">
			<img classNameName="card-img-top img-fluid w-100" src={props.albumImage} />
			<div classNameName="card-body">
				<h4 classNameName="card-title">{props.albumTitle}</h4>
				<p classNameName="card-text">{props.albumDesc}</p>
				<p classNameName="card-text">{props.albumStock}</p>
				<p classNameName="card-text">{props.albumPrice}</p> <Link to="/albumview1">
					<button className="btn btn-secondary ">Buy Now! </button>
				</Link>
			</div>
		</div>
	
        <br/>
	</div>	
	);
}

EventCards.propTypes = {
	eventDate: PropTypes.object,
	eventTime: PropTypes.string,
	albumTitle: PropTypes.string,
	albumPrice: PropTypes.string,
	albumStock: PropTypes.string,
	albumDesc: PropTypes.string,
	albumImage: PropTypes.string,
	meetup: PropTypes.string
};
