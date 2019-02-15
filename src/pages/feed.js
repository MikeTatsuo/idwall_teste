import React, {
    Component
} from 'react';
import FeedHeader from '../components/header/feed-header';
import FeedList from '../components/feed-list';

class Feed extends Component {
    render() {
        return (
            <div className="Feed" >

                <FeedHeader />

                <FeedList />
            </div>
        );
    }
}

export default Feed;