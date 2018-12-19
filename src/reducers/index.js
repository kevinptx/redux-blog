import { combineReducers } from "redux";
import blogs from "./blogs";
import nextId from "./nextId";
import filter from "./filter";
// import "materialize-css/dist/css/materialize.min.css";

const rootReducer = combineReducers({
  blogs,
  nextId,
  filter
});

export default rootReducer;
