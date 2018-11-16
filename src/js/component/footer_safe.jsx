import React, { Component } from "react";

import "../../styles/footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer className="page-footer bg-dark text-center text-white font-small black fixed-bottom">
				<div className="footer-copyright text-center">
					<div>
						<img
							className="mx-auto d-block"
							src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-white.png"
						/>
					</div>{" "}
					© 2018 Copyright:
					<a href="https://www.4geeksacademy.co//">
						{" "}
						www.4geeksacademy.co
					</a>
				</div>
			</footer>
		);
	}
}
