import styled from "styled-components";

import { Outlet } from "react-router-dom";

import Header from "../components/Header";

function MainScreen() {
  return (
    <MainScreenContainer>
      <Header />
      <Outlet />
    </MainScreenContainer>
  );
}

export default MainScreen;

const MainScreenContainer = styled.main`
  display: flex;
  flex-direction: column;
`;
