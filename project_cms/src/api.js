import Axios from "axios";

const token = localStorage.getItem("token");
const url = "http://127.0.0.1:8000/api/";
// const url = "http://127.0.0.1:8000/api/"; 1
const headers = {
  Authorization: `Bearer ${token}`,
};

const Auth = {
  login: (data) => Axios.post(url + "auth/login", data),
  register: (data) => Axios.post(url + "auth/register", data),
  me: () =>
    Axios.get(url + "auth/me", {
      headers: headers,
    }),
};
// export
export default {
  Auth,
};
