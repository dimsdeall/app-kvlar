import React from "react";
import { useDispatch } from "react-redux";
import { BottomBar } from "../../Components";
import { LogoutSession } from "../../Config/redux/action/sessionLogin";

function AccountPage() {
  const session = JSON.parse(localStorage.getItem("session_user"));
  const dispatch = useDispatch();

  return (
    <div>
      <div className="d-flex mt-5">
        <div className="me-2">Login as : </div>
        <div className="fw-bold">{session.data.nama}</div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-danger"
          onClick={() => dispatch(LogoutSession({}, dispatch))}
        >
          Log out
        </button>
      </div>
      <BottomBar />
    </div>
  );
}

export default AccountPage;
