import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render () {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => {
            return <PostIndexItem post={post} />;
          })}
      </ul>
        <CreatePostFormContainer />
      </div>
    );
  }
}

export default PostIndex;
