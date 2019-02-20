import React, { Component } from "react";
import { CATEGORY } from "../Categories";
import { selectCategory } from "../actions/Category.action";
import { leavePage } from "../actions/Image.action";
import { connect } from "react-redux";
import "../style.css";

class Menu extends Component {
  componentDidMount() {
    this.onSelectCategory("husky")
  }

  onSelectCategory(categ) {
    if (this.props.image.show) {
      this.onLeavePage()
    }
    this.props.selectCategory({
      selectedCategory: categ
    })
  }

  onLeavePage() {
    this.props.leavePage()    
  }

  menuItem() {
    let items = []
    for (let cat in CATEGORY) {
      items.push(
        (<li className="tab" key={`li-${cat}`}>
          <div key={`a-${cat}`} className={`${this.props.selectedCategory === cat.toLowerCase() ? 'active' : ''}`} href="" onClick={() => { this.onSelectCategory(cat.toLowerCase()) }}>{cat}</div>
        </li>)
      )
    }
    return items
  }

  render() {
    return (
      <ul className="tabs tabs-fixed-width z-depth-1">
        {this.menuItem()}
      </ul>
    );
  }
}

const mapStatetoProps = (state) => ({
  selectedCategory: state.category.selectedCategory,
  image: state.image
})

export default connect(mapStatetoProps, { selectCategory, leavePage })(Menu);