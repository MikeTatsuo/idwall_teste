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
						{this.props.show ? <Image /> : <ImagesList />}
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	show: state.image.show
})

export default connect(mapStateToProps)(FeedPage)