import React, { Component } from "react";

import "../../styles/footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer className="page-footer text-center text-white font-small fixed-bottom">
				<div className="footer-copyright text-center text-muted">
					© COPYRIGHT 2018. Led Zeppelin History Blog. ALL RIGHTS
					RESERVED.
				</div>
			</footer>
		);
	}
}
