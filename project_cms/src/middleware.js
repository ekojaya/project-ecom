import api from "./api";
import { LOGIN } from "./constants/actionTypes";

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === LOGIN) {
    Window.localStorage.setItem("token", action.payload.token);
    api.setToken(action.payload.token);
  } else {
    return "error";
  }

  next(action);
};
export { localStorageMiddleware };
