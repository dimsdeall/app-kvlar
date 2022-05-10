import axios from "axios";
import { Endpoint } from "../../../Utils";

export const getUser = (payload) => async (dispatch) => {
  const session = JSON.parse(localStorage.getItem("session_user"));
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
          type: "MY_USER",
          payload: res.data.result,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserList = (payload) => async (dispatch) => {
  const session = JSON.parse(localStorage.getItem("session_user"));
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
          type: "USER_LIST",
          payload: res.data.result,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
