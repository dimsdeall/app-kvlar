import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function LoadingPage() {
  return (
    <div className="d-flex justify-content-center align-items-center p-0 m-0 vh-100 bg-info">
      <div className="vw-100 text-center d-flex flex-column">
        <FontAwesomeIcon icon={faCircleNotch} size="4x" className="spinner text-white" />
        <div className="mt-2 fs-4 text-white fw-bold">Loading</div>
      </div>
    </div>
  );
}

export default LoadingPage;
