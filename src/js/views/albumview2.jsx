import React from "react";
import { Link } from "react-router-dom";
import { EventCards } from "../component/eventcards.jsx";
import Moment from "react-moment";
import { Context } from "../store/appContext.jsx";
import PaypalButton from "../component/paypalButton.jsx";

import "../../styles/albumview2.css";

export class Albumview2 extends React.Component {
	render() {
		return (
			<div>
				<div className="col-10 float-right">
					<div id="page-content-wrapper">
						<div className="row">
							<div className="col-5 d-inline pr-1">
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
													store.albums[0].post_title
												}
												// albumContent={album.post_content}
												albumDesc={
													store.albums[0].meta_keys
														.description[0]
												}
												albumImage={
													store.albums[0].image
												}
												albumStock={
													store.albums[0].meta_keys
														.availability[0]
												}
												albumPrice={
													store.albums[0].meta_keys
														.price[0]
												}
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
											<th scope="col"> Play </th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Black Dog</td>
											<td>
												John Paul Jones / Jimmy Page /
												Robert Plant
											</td>
											<td>4:57</td>
											<td>
												<button
													type="button"
													className="btn btn-danger btn-sm mt-2"
													onClick={() =>
														window.open(
															"https://youtu.be/XIiu0JI3I5g"
														)
													}>
													▶️ Listen
												</button>
											</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Rock and Roll</td>
											<td>
												John Bonham / John Paul Jones /
												Jimmy Page / Robert Plant
											</td>
											<td>3:40</td>
											<td>
												<button
													type="button"
													className="btn btn-danger btn-sm mt-4"
													onClick={() =>
														window.open(
															"https://youtu.be/SRQ7-eSGBWc"
														)
													}>
													▶️ Listen
												</button>
											</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>The Battle of Evermore</td>
											<td>Jimmy Page / Robert Plant</td>
											<td>5:52</td>
											<td>
												<button
													type="button"
													className="btn btn-danger btn-sm mt-4"
													onClick={() =>
														window.open(
															"https://youtu.be/88b0OYxdtyM"
														)
													}>
													▶️ Listen
												</button>
											</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>Stairway to Heavan</td>
											<td>Jimmy Page / Robert Plantt</td>
											<td>8:02</td>
											<td>
												<button
													type="button"
													className="btn btn-danger btn-sm mt-4"
													onClick={() =>
														window.open(
															"https://youtu.be/iXQUu5Dti4g"
														)
													}>
													▶️ Listen
												</button>
											</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>Misty Mountain Hop</td>
											<td>
												John Paul Jones / Jimmy Page /
												Robert Plant
											</td>
											<td>4:38</td>
											<td>
												<button
													type="button"
													className="btn btn-danger btn-sm mt-4"
													onClick={() =>
														window.open(
															"https://youtu.be/n6fBQRaygeo"
														)
													}>
													▶️ Listen
												</button>
											</td>
										</tr>
										<tr>
											<th scope="row">6</th>
											<td>Four Sticks</td>
											<td>Jimmy Page / Robert Plant</td>
											<td>4:45</td>
											<td>
												<button
													type="button"
													className="btn btn-danger btn-sm mt-3"
													onClick={() =>
														window.open(
															"https://youtu.be/iJp27QMR2KU"
														)
													}>
													▶️ Listen
												</button>
											</td>
										</tr>
										<tr>
											<th scope="row">7</th>
											<td>Going to California</td>
											<td>Jimmy Page / Robert Plant</td>
											<td>3:31</td>
											<td>
												<button
													type="button"
													className="btn btn-danger btn-sm mt-3"
													onClick={() =>
														window.open(
															"https://youtu.be/PDIz4talyQk"
														)
													}>
													▶️ Listen
												</button>
											</td>
										</tr>
										<tr>
											<th scope="row">8</th>
											<td>When the Levee Breaks</td>
											<td>
												John Bonham / John Paul Jones /
												Memphis Minnie / Jimmy Page /
												Robert Plant
											</td>
											<td>7:08</td>
											<td>
												<button
													type="button"
													className="btn btn-danger btn-sm mt-4"
													onClick={() =>
														window.open(
															"https://youtu.be/FFDYuO53BUk"
														)
													}>
													▶️ Listen
												</button>
											</td>
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
