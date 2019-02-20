import React, { Component } from 'react';
import { Header } from '../components/Header';
import Menu from "../components/Menu";
import ImagesList from '../components/ImagesList';
import Image from "../components/Image"
import { connect } from "react-redux";

class FeedPage extends Component {
	render() {
		return (
			<section>
					<div className="row">
						<div className="col s12">
							<Header />
							<Menu />
							{this.props.image.show ? <Image /> : <ImagesList />}
						</div>
					</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	image: state.image
})

export default connect(mapStateToProps)(FeedPage)