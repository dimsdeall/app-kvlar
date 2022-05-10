import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BottomBar } from "../../Components";
import { LogoutSession } from "../../Config/redux/action/sessionLogin";
import { getUser, getUserList } from "../../Config/redux/action/userAction";

function AccountPage() {
  const { UserList, MyUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUserList({
        url: "/user/all",
      }),
      dispatch
    );

    dispatch(
      getUser({
        url: "/user",
      }),
      dispatch
    );
  }, []);

  console.log(UserList);

  return (
    <div className="d-flex flex-column">
      <div className="bg-info m-2 px-2 py-1 rounded shadow">
        <div className="d-flex flex-column text-white ">
          <div className="d-flex justify-content-between">
            <div className="fw-bold fs-4">Data User</div>
            <div
              className="d-flex flex-column align-self-center fw-bold text-white mt-1"
              onClick={() => dispatch(LogoutSession({}, dispatch))}
            >
              <FontAwesomeIcon icon={faPowerOff} className="" size="sm" />
              <div style={{ fontSize: "10px" }}>Logout</div>
            </div>
          </div>
          {MyUser !== null ? (
            <div className="row">
              <div className="col-3 fw-bold">Nama</div>
              <div className="col-9">: {MyUser.nama}</div>
              <div className="col-3 fw-bold">Username</div>
              <div className="col-9">: {MyUser.username}</div>
            </div>
          ) : (
            <div>Memuat ...</div>
          )}
        </div>
      </div>
      <div className="bg-success m-2 px-2 py-1 rounded shadow">
        <div className="d-flex flex-column text-white ">
          <div className="fw-bold fs-4">List User Terdaftar</div>
          <div className="table-responsive">
            <table className="table table-sm text-white">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Username</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {UserList.length > 0 ? (
                  UserList.map((val, key) => {
                    let role = val.type === 1 ? "Admin" : "User";
                    return (
                      <tr key={key}>
                        <td>{val.nama}</td>
                        <td>{val.username}</td>
                        <td>{role}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td align="center" colSpan={2}>
                      Tidak ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default AccountPage;
