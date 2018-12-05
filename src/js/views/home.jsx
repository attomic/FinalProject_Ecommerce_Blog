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
			<div className="col-10 float-right">
				<div id="page-content-wrapper">
					<div className="container-fluid">
						<div className="jumbotron" />
						<br />
						<h1>
							Most Influential Led Zeppelin Albums Of All Time
						</h1>
						<h2>Led Zeppelin II</h2>
						<p>
							Led Zeppelin II is the second album by the English
							rock band Led Zeppelin, released on 22 October 1969
							in the United States and on 31 October 1969 in the
							United Kingdom by Atlantic Records. Recording
							sessions for the album took place at several
							locations in both the United Kingdom and North
							America from January to August 1969. The album&#39;s
							production was credited to the band&#39;s lead
							guitarist and songwriter Jimmy Page, and it also
							served as Led Zeppelin&#39;s first album to use
							Eddie Kramer as engineer. Led Zeppelin II exhibited
							the band&#39;s evolving musical style of
							blues-derived material and their guitar iff-based
							sound. It has been described as the band&#39;s
							heaviest album.
						</p>
						<p>
							Led Zeppelin II was a commercial success, and was
							the band&#39;s first album to reach number one on
							charts in the UK and the US. In 1970, the
							album&#39;s cover designer David Juniper was
							nominated for a Grammy Award for Best Recording
							Package. On 15 November 1999, the album was
							certified 12× Platinum by the Recording Industry
							Association of America (RIAA) for sales passing 12
							million copies. Since its release, various writers
							and music critics have regularly cited Led Zeppelin
							II as one of the greatest and most influential
							albums of all time.
						</p>

						<Link className="btn btn-secondary" to="/albumview1">
							Album Tracklisting Here
						</Link>
						<p>&nbsp;</p>

						<h2>Led Zeppelin IV</h2>
						<p>
							The untitled fourth studio album by the English rock
							band Led Zeppelin, commonly known as Led Zeppelin
							IV, was released on 8 November 1971 by Atlantic
							Records. It was produced by guitarist Jimmy Page and
							recorded between December 1970 and February 1971,
							mostly in the country house Headley Grange. The
							album contains one of the band&#39;s best known
							songs, &#39;Stairway to Heaven&#39;.
						</p>
						<p>
							The informal setting at Headley Grange inspired the
							band, and allowed them to try different arrangements
							of material and create songs in a variety of styles.
							After the band&#39;s previous album Led Zeppelin III
							received lukewam reviews from critics, they decided
							their fourth album would officially be untitled, and
							would be represented instead by four symbols chosen
							by each band member, without featuring the name or
							any other details on the cover.
						</p>
						<p>
							The album was a commercial and critical success and
							is Led Zeppelin&#39;s best-selling, shipping over 37
							million copies worldwide. It is one of the
							best-selling albums in the US, while critics have
							regularly placed it on lists of the greatest albums
							of all time.
						</p>
						<Link className="btn btn-secondary" to="/albumview2">
							Album Tracklisting Here
						</Link>
					</div>
				</div>
				<br />
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
