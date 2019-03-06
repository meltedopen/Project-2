import React, { Component } from 'react';
import PostListItem from './PostListItem';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Post List</h1>
        {posts.map(posts => (
          <PostListItem key={posts.id} event={posts} />
        ))}
      </div>
    );
  }
}

export default PostList;
