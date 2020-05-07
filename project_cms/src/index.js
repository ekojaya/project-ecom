import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/index";
import jwt, { decode } from "jsonwebtoken";
// import axios from "axios";
import api from "./api";

const token = localStorage.getItem("token");
const jwt_secret =
  "Jq4hL2ZJ2l3c7Fd36o5IapXlXZKG9eLNNX2UcAbstUmz9bCBC0ictXXszApxUjcp";

// if (token) {
//   jwt.verify(token, jwt_secret, (err, decoded) => {
//     if (err) {
//       localStorage.removeItem("token");
//       token = null;
//     } else {
//       if (decoded.iss !== "http://127.0.0.1:8000/api/auth/login") {
//         localStorage.removeItem("token");
//         // token = null;
//       }
//     }
//     // console.log(decoded); // bar);
//   });
// }

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
if (token) {
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  api.Auth.me().then((res) => {
    store.dispatch({ type: "SET_LOGIN", payload: res.data });
    render();
  });
} else {
  render();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
