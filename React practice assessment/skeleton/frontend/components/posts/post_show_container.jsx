import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';

const msp = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.postId]
});

const mdp = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id))
});

export default connect(msp, mdp)(PostShow);