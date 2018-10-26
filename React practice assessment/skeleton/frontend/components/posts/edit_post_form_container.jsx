import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';


class EditPostForm extends React.Component {
  componentDidMount() {
    fetchPost(this.props.match.params.postId);
  }

  render() {
    const { action, formType, post } = this.props;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post} />
    );
  }
}

const msp = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.postId]
});

const mdp = dispatch => ({
  action: post => dispatch(updatePost(post))
});

export default connect(msp, mdp)(EditPostForm);