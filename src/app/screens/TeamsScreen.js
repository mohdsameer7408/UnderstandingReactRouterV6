import styled from "styled-components";
import { Link } from "react-router-dom";

function TeamsScreen() {
  return (
    <TeamsContainer>
      {Array(10)
        .fill()
        .map((_, index) => (
          <Link to={`./${index + 1}`} key={index}>
            Team {index + 1}
          </Link>
        ))}
    </TeamsContainer>
  );
}

export default TeamsScreen;

const TeamsContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
