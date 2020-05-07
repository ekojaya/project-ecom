import { createStore } from "redux";
import AllReducers from "./reducers/AllReducers";

const token = localStorage.getItem("token");
const initialStates = {
  auth: {
    loggedIn: false,
    user: {},
  },
  token: token,
};
const store = createStore(
  AllReducers,
  initialStates,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
