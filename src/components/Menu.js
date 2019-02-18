import React, { Component } from "react";
import { CATEGORY } from "../Constants";
import { connect } from "react-redux";

class Menu extends Component {
 
  menuItem() {
    let items = []
    //let category = !this.props.selectedCategory && "husky";
    for (let cat in CATEGORY) {
      items.push(
        (<li key={`li-${cat}`}>
          <a key={`a-${cat}`} className={this.props.selectedCategory === cat.toLowerCase() ? "active" : ""} href="#">{cat}</a>
        </li>)
      )
    }
    return items
  }

  render() {
    return (
      <div className="FeedMenu" >
        <ul >
          {this.menuItem()}
        </ul>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  selectedCategory: state.selectedCategory
})

export default connect(mapStatetoProps)(Menu);