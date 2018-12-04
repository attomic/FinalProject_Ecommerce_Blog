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
										<tr
											onClick={() =>
												window.open(
													"https://youtu.be/HQmmM_qwG4k"
												)
											}>
											<th scope="row">1</th>
											<td>Whole Lotta Love</td>
											<td>
												John Bonham / Willie Dixon /
												John Paul Jones / Jimmy Page /
												Robert Plant
											</td>
											<td>5:35</td>
										</tr>

										<tr
											onClick={() =>
												window.open(
													"https://youtu.be/WnMiXsRtsfc"
												)
											}>
											<th scope="row">2</th>
											<td>
												What Is and What Should Never Be
											</td>
											<td>Jimmy Page / Robert Plant</td>
											<td>4:45</td>
										</tr>
										<tr
											onClick={() =>
												window.open(
													"https://youtu.be/je4jmKLTC48"
												)
											}>
											<th scope="row">3</th>
											<td>Thank You</td>
											<td>Jimmy Page / Robert Plant</td>
											<td>4:49</td>
										</tr>
										<tr
											onClick={() =>
												window.open(
													"https://youtu.be/0hdQi2_HzAc"
												)
											}>
											<th scope="row">4</th>
											<td>Heartbreaker</td>
											<td>
												John Bonham / John Paul Jones /
												Jimmy Page / Robert Plant
											</td>
											<td>4:14</td>
										</tr>
										<tr
											onClick={() =>
												window.open(
													"https://youtu.be/fSM9zc3SsuM"
												)
											}>
											<th scope="row">5</th>
											<td>Living Loving Maid</td>
											<td>Jimmy Page / Robert Plant</td>
											<td>2:39</td>
										</tr>
										<tr
											onClick={() =>
												window.open(
													"https://youtu.be/_h9MxNn8P7w"
												)
											}>
											<th scope="row">6</th>
											<td>Ramble On</td>
											<td>Jimmy Page / Robert Plant</td>
											<td>4:24</td>
										</tr>
										<tr
											onClick={() =>
												window.open(
													"https://youtu.be/AwIPiw4_Ba8"
												)
											}>
											<th scope="row">7</th>
											<td>Moby Dick</td>
											<td>
												John Bonham / John Paul Jones /
												Jimmy Page
											</td>
											<td>4:20</td>
										</tr>
										<tr
											onClick={() =>
												window.open(
													"https://youtu.be/u3l0N_ZNtwY"
												)
											}>
											<th scope="row">8</th>
											<td>La la</td>
											<td>
												John Bonham / John Paul Jones /
												Jimmy Page
											</td>
											<td>4:10</td>
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
