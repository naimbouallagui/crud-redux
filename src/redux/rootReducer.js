import { combineReducers } from "redux"
import deleteReducer from "./delete/delete.reducer"
import postReducer from "./post/post.reducer"
import updateReducer from "./update/update.reducer"


const rootReducer = combineReducers({
  posts: postReducer,
  delete: deleteReducer,
  update: updateReducer,
 
})

export default rootReducer
