import React, { Component } from "react";
import { connect } from "react-redux";

class ImageModal extends Component {
	render() {
		return (
			<div className="modal" id="imageModal">
				<div className="modal-content center-align">
					<img className="responsive-img" src={this.props.image.url} alt={this.props.image.category}></img>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	image: state.image
})

export default connect(mapStateToProps)(ImageModal);
