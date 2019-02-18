import React, { Component } from 'react';

import Header from '../components/Header';
import Menu from "../components/Menu";
import ImagesList from '../components/ImagesList';

import { connect } from "react-redux";

import { populateImages, getImagesPerCategory } from "../actions/ImagesList.action";
import { selectCategory } from "../actions/Category.action";

import * as provider from "../providers/FeedProvider";



class FeedPage extends Component {
	
	componentDidMount() {
		this.getImagesPerCategory()
	}

	onPopulateImages(data) {
		this.props.populateImages(data)
	}

	onSelectCategory(c){
		this.props.selectCategory({
			selectedCategory: c
		})
	}

	getImagesPerCategory() {
		provider.getFeed(this.props.token, this.props.selectedCategory)
			.then(r => {				
				this.onPopulateImages(r)
				this.onSelectCategory(r.category)
			})
			.catch(error => {
				console.error(error)
			})
	}

	render() {
		return (
			<div className="Feed" >
				<Header />
				<Menu />
				<ImagesList />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	token: ownProps.token,
	images: state.images,
	lastId: state.lastId
})

const mapActionsToProps = { populateImages, selectCategory }

export default connect(mapStateToProps, mapActionsToProps)(FeedPage);