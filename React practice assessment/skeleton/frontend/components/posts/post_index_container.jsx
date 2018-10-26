import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';

const msp = state => ({
  posts: Object.values(state.posts)
});

const mdp = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(msp, mdp)(PostIndex);