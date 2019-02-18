import React, { Component } from 'react';
import { connect } from "react-redux";
import * as provider from "../providers/FeedProvider"
import { populateImages } from "../actions/ImagesList.action";

class ImagesList extends Component {
  componentDidMount() {
    this.getImagesPerCategory(this.props.selectedCategory)
  }

  componentDidUpdate() {
    if (this.props.imagesCategory && this.props.selectedCategory !== this.props.imagesCategory) {
      this.getImagesPerCategory(this.props.selectedCategory)
    }
  }

  onPopulateImages(data) {
    this.props.populateImages(data)
  }

  getImagesPerCategory(ca) {
    provider.getFeed(this.props.token, ca)
      .then(r => {
        this.onPopulateImages(r)
      })
      .catch(error => {
        console.error(error)
      })
  }

  mountList(list = []) {
    if (list.length) {
      return (
        list.map(item => {
          return (
            <div key={`div-col-${item.id}`} className="col">
              <img key={`img-${item.id}`} src={item.url} alt=""></img>
            </div>
          )
        })
      )
    }
    return
  }

  render() {
    return (
      <div className="row">
        {this.props.images.list ? this.mountList(this.props.images.list) : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  images: state.images,
  imagesCategory: state.images.imagesCategory,
  selectedCategory: state.category.selectedCategory,
  token: state.user.token
})

export default connect(mapStateToProps, { populateImages })(ImagesList);