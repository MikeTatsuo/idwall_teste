import React, { Component } from 'react';
import Header from './header';

class FeedHeader extends Component {
  render() {
    return (
      <div className="HeaderFeed">
        
        <Header />

        <ul>
            <li>
                <a href="#">Menu 1</a>
            </li>

            <li>
                <a href="#">Menu 2</a>
            </li>

            <li>
                <a href="#">Menu 3</a>
            </li>

            <li>
                <a href="#">Menu 4</a>
            </li>
        </ul>

      </div>
    );
  }
}

export default FeedHeader;