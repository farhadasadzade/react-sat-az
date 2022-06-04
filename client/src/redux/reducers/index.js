import { combineReducers } from "redux";

import posts from './posts'
import auth from "./auth";
import adminPostsItems from './adminPostsItems'

export default combineReducers({
    posts,
    auth,
    adminPostsItems
})