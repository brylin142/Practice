import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then(payload => dispatch(receivePost(payload)))
);

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post).then(payload => dispatch(receivePost(payload)))
);

export const deletePost = id => dispatch => (
  PostApiUtil.deletePost(id).then(post => dispatch(removePost(post)))
);

const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = post => ({
  type: REMOVE_POST,
  postId: post.id
});