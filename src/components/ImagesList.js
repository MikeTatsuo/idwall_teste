import React, { Component } from 'react';
import { connect } from "react-redux";
import * as provider from "../providers/FeedProvider"
import { populateImages } from "../actions/ImagesList.action";
import { extractImage, showInPage } from "../actions/Image.action";
import ImageModal from "./ImageModal";
import M from 'materialize-css';
import '../style.css';
import { Redirect } from "react-router-dom";

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

  onExtractImage(id) {
    let data = {
      images: this.props.images,
      image: {
        id: id
      }
    }
    this.props.extractImage(data)

    const instance = M.Modal.init(document.querySelector('.modal'), {
      onCloseEnd: () => this.onShowInPage()
    });
    instance.open();
  }

  onShowInPage() {
    this.props.showInPage(this.props.image)
  }

  getImagesPerCategory(ca) {
    if (this.props.token) {
      provider.getFeed(this.props.token, ca)
        .then(r => {
          this.onPopulateImages(r)
        })
        .catch(error => {
          M.toast({ html: error })
        })
    }
  }

  mountList(list = []) {
    if (list.length) {
      return (
        list.map(item => {
          return (
            <div className="col s12 m6 l4 dogs_div hoverable" key={`div-col-${item.id}`}>
              <img className={`dogs_img modal-trigger ${this.props.image.id === item.id ? 'hide' : ''}`} data-target="imageModal" key={`img-${item.id}`} src={item.url} alt="" onClick={() => this.onExtractImage(item.id)} />
            </div>
          )
        })
      )
    }
    return
  }

  render() {
    return (
      <div>
        <div className="row dogs_row">
          {this.props.images.list ? this.mountList(this.props.images.list) : ""}
        </div>
        <Redirect to={{
          pathname: "/feed",
          search: this.props.image.category ? `?category=${this.props.image.category}&id=${this.props.image.id}` : '',
          state: { referrer: "currentLocation" }
        }} />
        <ImageModal />
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