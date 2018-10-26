import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render () {
    return (
      <div>
        <p>{ this.props.post.title }</p>
        <p>{ this.props.post.body }</p>
        <Link to='/'>Post Index</Link>
      </div>
    );
  }
}

export default PostShow;
