import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { EventCards } from "../component/eventcards.jsx";
import Moment from "react-moment";
import banner from "../../img/banner.png";

import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		// let parseMoment = (data, format) => {
		// 	if (format == "date") {
		// 		return <Moment format="MM/DD/YYYY">{data}</Moment>;
		// 	}
		// 	if (format == "time") {
		// 		let timeArr = data.split(":");
		// 		let theTime = String(timeArr[0]) + ":" + String(timeArr[1]);
		// 		return theTime;
		// 	}
		// };

		return (
			<div>
				<img
					className="banner img-fluid w-100 h-20 ml-0"
					src={banner}
				/>
				<Context.Consumer>
					{({ store }) => {
						return store.albums.map(album => {
							if (album) {
								return (
									<EventCards
										// eventDate={parseMoment(
										// 	event.meta_keys.day,
										// 	"date"
										// )}
										// eventTime={parseMoment(
										// 	event.meta_keys.time,
										// 	"time"
										// )}
										albumTitle={album.post_title}
										// albumContent={album.post_content}
										albumDesc={
											album.meta_keys.description[0]
										}
										albumImage={album.image}
										key={album.ID}
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
