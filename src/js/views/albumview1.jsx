import React from "react";
import { Link } from "react-router-dom";
import { EventCards } from "../component/eventcards.jsx";
import Moment from "react-moment";
import { Context } from "../store/appContext.jsx";
import PaypalButton from "../component/paypalButton.jsx";

import "../../styles/albumview1.css";

export class Albumview1 extends React.Component {
	render() {
		return (
			<div>
				<div className="col-8 float-right">
					<div id="page-content-wrapper">
						<div className="row">
							<div className="col-6 d-inline pr-1">
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
												albumTitle={
													store.albums[1].post_title
												}
												// albumContent={album.post_content}
												albumDesc={
													store.albums[1].meta_keys
														.description[0]
												}
												albumImage={
													store.albums[1].image
												}
												albumStock={
													store.albums[1].meta_keys
														.availability[0]
												}
												albumPrice={
													store.albums[1].meta_keys
														.price[0]
												}
												// key={store.album.ID}
											/>
										);
									}}
								</Context.Consumer>
							</div>
							<div className="col-6 d-inline">
								<table className="table pl-0 responsive">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Title</th>
											<th scope="col">Writer(s)</th>
											<th scope="col">Length</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Whole Lotta Love</td>
											<td>John Bonham Willie Dixon</td>
											<td>5:38</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>
												What Is and What Should Never Be
											</td>
											<td>PagePlant</td>
											<td>4:33</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Thank You</td>
											<td>PagePlant</td>
											<td>4:21</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Heartbreaker</td>
											<td>Bonham Jones Page Plant</td>
											<td>4:21</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Living Loving Maid</td>
											<td>Page Plant</td>
											<td>3:08</td>
										</tr>
										<tr>
											<th scope="row">6</th>
											<td>Ramble On</td>
											<td>Page Plant</td>
											<td>4:43</td>
										</tr>
										<tr>
											<th scope="row">7</th>
											<td>Moby Dick</td>
											<td>Bonham Jones Page</td>
											<td>1:37</td>
										</tr>
										<tr>
											<th scope="row">8</th>
											<td>La la</td>
											<td>Page Jones</td>
											<td>4:07</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
