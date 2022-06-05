import { combineReducers } from "redux";

import posts from './posts'
import auth from "./auth";
import adminPostsItems from './adminPostsItems'
import postReducer from "./post";

export default combineReducers({
    posts,
    auth,
    adminPostsItems,
    postReducer
})