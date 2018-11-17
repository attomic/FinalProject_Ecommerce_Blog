import React from "react";
import { Link } from "react-router-dom";
import { EventCards } from "../component/eventcards.jsx";
import Moment from "react-moment";
import { Context } from "../store/appContext.jsx";

import "../../styles/event.css";

export class Albumview2 extends React.Component {
	render() {
		let parseMoment = (data, format) => {
			if (format == "date") {
				return <Moment format="MM/DD/YYYY">{data}</Moment>;
			}
			if (format == "time") {
				let timeArr = data.split(":");
				let theTime = String(timeArr[0]) + ":" + String(timeArr[1]);
				return theTime;
			}
		};

		return (
			<div>
				<div className="sticky-top jumbotron jumbotron-fluid bg-dark text-white">
					<div className="row">
						<div className="col-md-4">
							{" "}
							<img src="https://consciousdiscipline.com/wp-content/uploads/2017/05/600x350.png" />
						</div>
						<div className="col-md-8 text-center">
							<h1>ALBUMVIEW 2</h1>
							<p>Mini project for 4geeks Academy class.</p>
							<p>Using: Bootstrap, React and React-router</p>
							<div className="container text-center sticky" />
						</div>
					</div>
				</div>
				<Context.Consumer>
					{({ store }) => {
						return store.events.map(event => {
							if (event) {
								return (
									<EventCards
										eventDate={parseMoment(
											event.meta_keys.day,
											"date"
										)}
										eventTime={parseMoment(
											event.meta_keys.time,
											"time"
										)}
										eventTitle={event.post_title}
										meetup={event.meta_keys._meetup}
										key={event.ID}
									/>
								);
							} else {
								return <h5>Loading...</h5>;
							}
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
