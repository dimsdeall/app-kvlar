import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { AccountPage, HomePage, LoadingPage, LoginPage } from "../../Pages";

import { retrieveUserSession } from "../redux/action/sessionLogin";

const Routers = () => {
  const { login } = useSelector((state) => state.sessionReducer);
  const { PageLoading } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveUserSession(), dispatch);
  }, [dispatch]);

  if (PageLoading) {
    return <LoadingPage />;
  }

  return login ? (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="*" element={<Navigate to="/home" />} />

    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routers;
