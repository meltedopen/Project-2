import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class PostListFavorites extends Component {
  render() {
    const { likedBy } = this.props;
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={likedBy.photoURL} />
      </List.Item>
    );
  }
}

export default PostListFavorites;
