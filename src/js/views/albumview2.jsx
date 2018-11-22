import React from "react";
import { Link } from "react-router-dom";
import { EventCards } from "../component/eventcards.jsx";
import Moment from "react-moment";
import { Context } from "../store/appContext.jsx";

import "../../styles/albumview2.css";

export class Albumview2 extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store }) => {
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
								albumTitle={store.albums[0].post_title}
								// albumContent={album.post_content}
								albumDesc={
									store.albums[0].meta_keys.description[0]
								}
								albumImage={store.albums[0].image}
								// key={store.album.ID}
							/>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
