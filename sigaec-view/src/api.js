import axios from "axios";

export default axios.create({
  baseURL: "https://1d92fc4d-d759-40d0-9b59-369a1c08a054.mock.pstmn.io/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
