import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutScreen from "./app/screens/AboutScreen";
import HomeScreen from "./app/screens/HomeScreen";
import MainScreen from "./app/screens/MainScreen";
import NewTeamScreen from "./app/screens/NewTeamScreen";
import TeamScreen from "./app/screens/TeamScreen";
import TeamsScreen from "./app/screens/TeamsScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />}>
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/teams" element={<TeamsScreen />} />
          <Route path="/teams/:teamId" element={<TeamScreen />} />
          <Route path="/teams/new" element={<NewTeamScreen />} />
          <Route index element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
