import { faBookOpen, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import React from "react";

function ButtomBar() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  return (
    <div
      className="fixed-bottom border-top pt-2"
      style={{
        maxWidth: "900px",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "Menu" 
      }}
    >
      <div className="d-flex justify-content-around">
        <div
          className={`d-flex flex-column justify-content-center align-content-center ${
            pathname === "/home" ? "text-info" : "opacity-50"
          }`}
          onClick={() => navigate("/home")}
        >
          <FontAwesomeIcon icon={faBookOpen} size="lg" />
          <div>Report</div>
        </div>
        <div
          className={`d-flex flex-column justify-content-center align-content-center ${
            pathname === "/account" ? "text-info" : "opacity-50"
          }`}
          onClick={() => navigate("/account")}
        >
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
          <div>Account</div>
        </div>
      </div>
    </div>
  );
}

export default ButtomBar;
