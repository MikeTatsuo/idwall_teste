import React, { Component } from 'react';
import { connect } from "react-redux";

class Image extends Component {
	render() {
		return (
			<div className="container">
				<img className="responsive-img" src={this.props.image.url} alt="teste" />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	image: state.image
})

export default connect(mapStateToProps)(Image);