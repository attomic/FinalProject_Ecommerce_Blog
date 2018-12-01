import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { EventCards } from "../component/eventcards.jsx";
import Moment from "react-moment";
import banner from "../../img/banner.png";

import "../../styles/home.css";
import "../../styles/topnav-centered.css";

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
			<div className="col-8 float-right">
				<div id="page-content-wrapper">
					<div className="container-fluid">
						<h1>Led Zeppelin History – Aug 28</h1>
						<p>
							This week in 1973, Led Zeppelin manager Peter Grant
							began enforcing a 90/10 concert gate proceeds split
							in favor of the band (traditionally, gate revenues
							had been split 50-50 between band and promoter). The
							concert industry howled, but Grant informed them
							that 10% of Led Zeppelin’s business was better than
							50% of nothing. The concert promoters caved in, and
							the other big bands of the day were quick to follow
							suit.
						</p>
						<p>
							Grant, a 6’-3” 320-pound ex-professional wrestler,
							was the kind of manager every artist wants –
							immensely loyal, undaunted in his efforts on behalf
							of his clients, and fully prepared to eradicate
							problems by whatever means necessary. He was known
							as being one of the shrewdest and most ruthless
							managers in rock history.
						</p>
						<p>
							Unpopular as his strategies may have been with
							booking agents and promoters, Grant was the
							prin­cipal architect of the shift in power from
							businessmen to artists during the 70s. His tactics
							are widely credited today with improving pay and
							conditions for musicians in dealings with concert
							promoters.
						</p>
						<a
							href="#menu-toggle"
							className="btn btn-secondary"
							id="menu-toggle">
							{"Read more>>"}
						</a>
					</div>
				</div>
			</div>

			// <div>
			// 	<Context.Consumer>
			// 		{({ store }) => {
			// 			return store.albums.map(album => {
			// 				if (album) {
			// 					return (
			// 						<EventCards
			// 							// eventDate={parseMoment(
			// 							// 	event.meta_keys.day,
			// 							// 	"date"
			// 							// )}
			// 							// eventTime={parseMoment(
			// 							// 	event.meta_keys.time,
			// 							// 	"time"
			// 							// )}
			// 							albumTitle={album.post_title}
			// 							// albumContent={album.post_content}
			// 							albumDesc={
			// 								album.meta_keys.description[0]
			// 							}
			// 							albumImage={album.image}
			// 							key={album.ID}
			// 						/>
			// 					);
			// 				} else {
			// 					return <h5>Loading...</h5>;
			// 				}
			// 			});
			// 		}}
			// 	</Context.Consumer>
			// </div>
			//	<div />
		);
	}
}
