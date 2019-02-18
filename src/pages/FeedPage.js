import React, { Component } from 'react';
import { Header } from '../components/Header';
import Menu from "../components/Menu";
import ImagesList from '../components/ImagesList';
import Image from "../components/Image"
import Modal from "../components/Modal";
import { connect } from "react-redux";

class FeedPage extends Component {
	render() {
		return (
			<div>
				<header>
					<Header />
				</header>
				<nav>
					<Menu />
				</nav>
				<section>
					{this.props.show ? <Image /> : <ImagesList />}
					<Modal />
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	show: state.image.show
})

export default connect(mapStateToProps)(FeedPage)