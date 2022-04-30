import { faSignIn, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../Components";
import { loginSession } from "../../Config/redux/action/sessionLogin";

function LoginPage() {
  const { ResponseLogin, BtnLogin } = useSelector((state) => state.sessionReducer);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch({ type: 'BTN_LOGIN_DISABLE', payload: true })

    dispatch(
      loginSession({
        Username,
        Password,
      }),
      dispatch
    );

    // setTimeout(() => {
    //   setBtnLogin(false);
    // }, 3000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-0 m-0 vh-100 bg-info">
      <div className="vw-100">
        <div className="d-flex flex-column mx-3 border shadow rounded px-2 pt-2 pb-5 bg-white">
          <div className="h2 fw-bold align-self-center">Kvlar Report</div>

          {ResponseLogin !== "" ? (
            <div className="text-danger my-2 align-self-center">{ResponseLogin}</div>
          ) : (
            <></>
          )}

          <Input
            judul={"Username"}
            placeholder={"Username"}
            type={"text"}
            maxLength={30}
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            judul={"Password"}
            placeholder={"password"}
            maxLength={30}
            type={"password"}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex justify-content-center pt-2">
            <button
              className="btn btn-primary d-flex justify-content-around"
              onClick={() => onLogin()}
              disabled={BtnLogin}
              style={{
                width: "150px",
              }}
            >
              {BtnLogin ? (
                <>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    size="lg"
                    className="align-self-center spinner"
                  />
                </>
              ) : (
                <>
                  <div className="align-self-center me-4">Login</div>
                  <FontAwesomeIcon
                    icon={faSignIn}
                    size="lg"
                    className="align-self-center"
                  />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
