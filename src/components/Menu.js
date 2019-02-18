import React, { Component } from "react";
import { CATEGORY } from "../Categories";
import { selectCategory } from "../actions/Category.action";
import { connect } from "react-redux";

class Menu extends Component {
  componentDidMount() {
    this.onSelectCategory("husky")
  }

  onSelectCategory(categ) {
    this.props.selectCategory({
      selectedCategory: categ
    })
  }

  menuItem() {
    let items = []
    for (let cat in CATEGORY) {
      items.push(
        (<li className="nav-item" key={`li-${cat}`}>
          <a key={`a-${cat}`} className={`nav-link ${this.props.selectedCategory === cat.toLowerCase() ? 'active' : ''}`} href="#" onClick={() => { this.onSelectCategory(cat.toLowerCase()) }}>{cat}</a>
        </li>)
      )
    }
    return items
  }

  render() {
    return (
      <ul className="nav nav-tabs justify-content-center">
        {this.menuItem()}
      </ul>
    );
  }
}

const mapStatetoProps = (state) => ({
  selectedCategory: state.category.selectedCategory
})

export default connect(mapStatetoProps, { selectCategory })(Menu);