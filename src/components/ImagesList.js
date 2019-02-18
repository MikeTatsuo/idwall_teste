import React, { Component } from 'react';
import { connect } from "react-redux";
import * as provider from "../providers/FeedProvider"
import { populateImages } from "../actions/ImagesList.action";
import { extractImage, showInPage } from "../actions/Image.action";

class ImagesList extends Component {
  componentDidMount() {
    this.getImagesPerCategory(this.props.selectedCategory)

    /* $('#imageModal').on('hidden.bs.modal', function (e) {
      this.onShowInPage()
    }) */
  }

  componentDidUpdate() {
    if (this.props.imagesCategory && this.props.selectedCategory !== this.props.imagesCategory) {
      this.getImagesPerCategory(this.props.selectedCategory)
    }
  }

  onPopulateImages(data) {
    this.props.populateImages(data)
  }

  onExtractImage(id){
    let data = {
      images: this.props.images,
      image: {
        id: id
      }
    }
    this.props.extractImage(data)
  }

  onShowInPage(){
    this.props.showInPage(this.props.image)
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
            <div key={`div-col-${item.id}`} className={`col-lg-4 col-md-6 col-sm-12 ${this.props.image.id === item.id ? 'invisible' : ''}`}>
              <img className="btn" data-toggle="modal" data-target="#imageModal" key={`img-${item.id}`} src={item.url} alt="" onClick={() => this.onExtractImage(item.id)}></img>
            </div>
          )
        })
      )
    }
    return
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.images.list ? this.mountList(this.props.images.list) : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  images: state.images,
  imagesCategory: state.images.imagesCategory,
  selectedCategory: state.category.selectedCategory,
  token: state.user.token,
  image: state.image
})

const mapActionsToProps = {
  populateImages, 
  extractImage,
  showInPage
}

export default connect(mapStateToProps, mapActionsToProps)(ImagesList);