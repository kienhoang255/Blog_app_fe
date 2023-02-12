import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPost);
    yield put(actions.getPosts.getPostSuccess(posts.data));
  } catch (err) {
    yield put(actions.getPosts.getPostFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const updatePost = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(updatePost.data));
  } catch (err) {
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* deletePostSaga(action) {
  try {
    const deletePost = yield call(api.deletePost, action.payload);
    yield put(actions.deletePost.deletePostSuccess(deletePost.data));
  } catch (err) {
    yield put(actions.deletePost.deletePostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
  yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}

export default mySaga;
