import React from "react";
import { useParams } from "react-router-dom";

function TeamScreen() {
  const { teamId } = useParams();
  console.log(teamId);

  return <div>Team {teamId}</div>;
}

export default TeamScreen;
