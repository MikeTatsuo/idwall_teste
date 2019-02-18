import React, { Component } from 'react';
import { connect } from "react-redux";

class ImagesList extends Component {
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
  images: {
    list: state.images.list
  }
})

export default connect(mapStateToProps)(ImagesList);