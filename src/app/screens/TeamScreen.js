import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function TeamScreen() {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const goBackHandler = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      <h1 onClick={goBackHandler} style={{ cursor: "pointer" }}>
        Back
      </h1>
      <p>Team {teamId}</p>
    </div>
  );
}

export default TeamScreen;
