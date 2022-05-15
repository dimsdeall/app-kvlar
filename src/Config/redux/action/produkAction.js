import axios from "axios";
import { Endpoint } from "../../../Utils";

export const getProduk = (payload) => (dispatch) => {
  const session = JSON.parse(localStorage.getItem("session_user"));

  return new Promise((resolve, reject) => {
    axios
      .get(Endpoint + payload.url, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${session.data.jwt}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "PRODUK_LIST",
            payload: res.data.result,
          });
          return resolve(res.data);
        }
        return reject(res.data);
      })
      .catch((err) => {
        console.log(err);
        return reject(err);
      });
  });
};
