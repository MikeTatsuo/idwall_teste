import React, { Component } from 'react';

import Header from '../components/Header';
import Menu from "../components/Menu";
import ImagesList from '../components/ImagesList';

//import { connect } from "react-redux";

//import { populateImages, getImagesPerCategory } from "../actions/ImagesList.action";
//import { selectCategory } from "../actions/Category.action";

//import * as provider from "../providers/FeedProvider";



class FeedPage extends Component {	

	render() {
		//console.log(this.props)
		return (
			<div className="Feed" >
				<Header />
				<Menu />
				<ImagesList /> 
			</div>
		);
	}
}

//const mapStateToProps = (state) => ({
	//token: state.user.token,
	//images: state.images,
	//selectedCategory: state.category.selectedCategory
//})

//const mapActionsToProps = { populateImages, selectCategory }

//export default connect(mapStateToProps)(FeedPage);
export default FeedPage;