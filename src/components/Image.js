import React, { Component } from 'react';
import { connect } from "react-redux";

class Image extends Component {
	render() {
		return (
			<div className="container" >
				<div className="row" >
					<div className="col">
						< img src={this.props.image.url} alt="teste"> </img>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	image: state.image
})

export default connect(mapStateToProps)(Image);